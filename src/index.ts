import * as path from 'path';
import { Duration } from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export interface Route53DomainProps {
  readonly assumedRole?: string;
  readonly hostzedZone: string;
  readonly domainName: string;
}

export interface PublicIPSupportProps {
  readonly cluster: ecs.ICluster;
  readonly service: ecs.IService;
  readonly logRetention?: RetentionDays;
  readonly dnsConfig: Route53DomainProps;
}

export class PublicIPSupport extends Construct {

  constructor(scope: Construct, id: string, props: PublicIPSupportProps) {
    super(scope, id);

    const cluster = props.cluster;
    const service = props.service;
    const dnsConfig = props.dnsConfig;
    const logRetention = props.logRetention || RetentionDays.THREE_DAYS;

    const func = new lambda.Function(this, 'PublicIPManager', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'functions/public_ip_manager')),
      timeout: Duration.seconds(10),
      logRetention,
      initialPolicy: [
        new PolicyStatement({
          actions: ['ec2:DescribeNetworkInterfaces'],
          resources: ['*'],
        }),
      ],
    });

    if (dnsConfig) {
      func.addEnvironment('DNS_HOSTED_ZONE', dnsConfig.hostzedZone);
      func.addEnvironment('DNS_DOMAIN', dnsConfig.domainName);

      /**
       * If we are assuming a role, we just need those permissions.
       * If we are not assuming a role, we need permissions for route53
       */
      if (dnsConfig.assumedRole) {
        func.addEnvironment('DNS_ASSUMED_ROLE', dnsConfig.assumedRole);
        func.addToRolePolicy(
          new PolicyStatement({
            actions: ['sts:AssumeRole'],
            resources: [dnsConfig.assumedRole],
          }),
        );
      } else {
        func.addToRolePolicy(
          new PolicyStatement({
            actions: ['route53:ChangeResourceRecordSets', 'route53:ListResourceRecordSets'],
            resources: [`arn:aws:route53:::hostedzone/${dnsConfig.hostzedZone}`],
          }),
        );
      }
    }

    new events.Rule(this, 'ServiceRule', {
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Task State Change'],
        detail: {
          clusterArn: [cluster.clusterArn],
          group: [`service:${service.serviceName}`],
          lastStatus: ['RUNNING'],
          desiredStatus: ['RUNNING'],
        },
      },
      targets: [new targets.LambdaFunction(func)],
    });

  }
}