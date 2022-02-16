# @raykrueger/cdk-fargate-public-dns

This is an [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) V2 construct
library to support updating Route 53 entry with the public ip address of an ECS
Fargate task. This is useful if you are, say, running an individual instance of
a game server on ECS Fargate and do not want the added cost of a Network Load
Balancer.

## Usage

This is the simple usecase. You pass an ECS Service and Cluster defined by your
CDK stack. Within the `dnsConfig` block you pass the Route 53 fully qualified
domain name, and the hosted zone ID.

```javascript
    new PublicIPSupport(stack, 'PublicIPSupport', {
        cluster,
        service,
        dnsConfig: {
            domainName: 'www.example.com',
            hostzedZone: 'Z0000000000000000000X',
        },
    })
```

## Usage in Another Account

If the hosted zone you want to update is in a different AWS acccount, this
Construct can assume a role in that target account in order to perform the Route
53 Domain update. To do that, simply add the `assumedRole` property to the `dnsConfig`.

```javascript
    new PublicIPSupport(stack, 'PublicIPSupport', {
        cluster,
        service,
        dnsConfig: {
            domainName: 'www.example.com',
            hostzedZone: 'Z0000000000000000000X',
            assumedRole: 'arn:aws:iam::<the_other_account_id>:role/<the_role_name_to_assume>'
        },
    })
```

In the target account you will need to define the role that this library can assume. You can create a role in the console to trust another AWS account. Then give it these permissions

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets",
                "route53:ListResourceRecordSets"
            ],
            "Resource": [
                "arn:aws:route53:::hostedzone/Z0000000000000000000X"
            ]
        }
    ]
}
```

## How it Works

This CDK Construct deploys an AWS Lambda and an Amazon EventBridge rule. The
rule is defined to look for the `lastStatus` and `desiredStatus` attributes to
be 'RUNNING' of an `ECS Task State Change` event. It is also specifically tied
to the Service and Cluster passed into the constructor.

## I was here

Note that I built this in my free time. This has nothing to do with my employer.

Enjoy! -Ray