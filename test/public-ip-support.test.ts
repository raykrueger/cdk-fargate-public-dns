import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, FargateService, TaskDefinition, Compatibility, ContainerImage } from 'aws-cdk-lib/aws-ecs';
import { PublicIPSupport } from '../src';

function buildStack(props?: { assumedRole?: string }): cdk.Stack {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'Test');

  const cluster = new Cluster(stack, 'TestCluster');

  const taskDefinition = new TaskDefinition(stack, 'TestTaskDef', {
    cpu: '1024',
    memoryMiB: '2048',
    compatibility: Compatibility.EC2_AND_FARGATE,
  });
  taskDefinition.addContainer('main', {
    image: ContainerImage.fromRegistry('nginx'),
    cpu: 1,
    memoryLimitMiB: 1024,
  });

  const service = new FargateService(stack, 'TestService', {
    cluster,
    taskDefinition,
  });

  new PublicIPSupport(stack, 'PublicIPSupport', {
    cluster,
    service,
    dnsConfig: {
      domainName: 'www.example.com',
      hostzedZone: 'ZONEID',
      assumedRole: props?.assumedRole,
    },
  });

  return stack;
}

describe('PublicIPSupport', () => {

  test('Print it out', () => {
    console.log(JSON.stringify(Template.fromStack(buildStack({ assumedRole: 'FINDTHISROLE' })).toJSON(), null, 2));
  });

  test('Function with assumed role', () => {
    const stack = buildStack({ assumedRole: 'THE ROLE' });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Runtime: 'python3.9',
      Environment: {
        Variables: {
          DNS_HOSTED_ZONE: 'ZONEID',
          DNS_DOMAIN: 'www.example.com',
          DNS_ASSUMED_ROLE: 'THE ROLE',
        },
      },
    });
  });

  test('Function with no assumed role', () => {
    const stack = buildStack();
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Runtime: 'python3.9',
      Environment: {
        Variables: {
          DNS_HOSTED_ZONE: 'ZONEID',
          DNS_DOMAIN: 'www.example.com',
          DNS_ASSUMED_ROLE: Match.absent(),
        },
      },
    });
  });

  test('Has assumed role permissions with no assumed role', () => {
    const template = Template.fromStack(buildStack({ assumedRole: 'ThisAssumedRole' }));
    template.hasResourceProperties('AWS::IAM::Policy', {
      Roles: [
        { Ref: Match.stringLikeRegexp('PublicIPSupportPublicIPManagerServiceRole.*') },
      ],
      PolicyDocument: {
        Statement: [
          {
            Action: 'ec2:DescribeNetworkInterfaces',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: 'ThisAssumedRole',
          },
        ],
      },
    });
  });

  test('Has route53 permissions with no assumed role', () => {
    const template = Template.fromStack(buildStack());
    template.hasResourceProperties('AWS::IAM::Policy', {
      Roles: [
        { Ref: Match.stringLikeRegexp('PublicIPSupportPublicIPManagerServiceRole.*') },
      ],
      PolicyDocument: {
        Statement: [
          {
            Action: 'ec2:DescribeNetworkInterfaces',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'route53:ChangeResourceRecordSets',
              'route53:ListResourceRecordSets',
            ],
            Effect: 'Allow',
            Resource: 'arn:aws:route53:::hostedzone/ZONEID',
          },
        ],
      },
    });
  });

});