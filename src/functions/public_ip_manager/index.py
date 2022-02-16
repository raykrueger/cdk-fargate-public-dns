import os
import boto3

assumed_role = os.environ.get("DNS_ASSUMED_ROLE")
hosted_zone = os.environ.get("DNS_HOSTED_ZONE")
domain_name = os.environ.get("DNS_DOMAIN")

if not domain_name:
    raise Exception("DNS_DOMAIN environment variable must be set")
if not hosted_zone:
    raise Exception("DNS_HOSTED_ZONE environment variable must be set")


def find_eni_id(event):
    attachments = event["detail"]["attachments"]
    for attachment in attachments:
        if attachment["type"] == "eni" and attachment["status"] == "ATTACHED":
            for detail in attachment["details"]:
                if detail["name"] == "networkInterfaceId":
                    return detail["value"]

    raise Exception("Unable to locate attached ENI")


def update_dns(public_ip, hosted_zone, domain_name, assumed_role=None):

    r53 = boto3.client("route53")

    if assumed_role:
        sts = boto3.client("sts")
        sts_response = sts.assume_role(
            RoleArn=assumed_role, RoleSessionName="valheim-r53-updater"
        )

        credentials = sts_response["Credentials"]

        r53 = boto3.client(
            "route53",
            aws_access_key_id=credentials["AccessKeyId"],
            aws_secret_access_key=credentials["SecretAccessKey"],
            aws_session_token=credentials["SessionToken"],
        )

    r53.change_resource_record_sets(
        HostedZoneId=hosted_zone,
        ChangeBatch={
            "Changes": [
                {
                    "Action": "UPSERT",
                    "ResourceRecordSet": {
                        "Name": domain_name,
                        "Type": "A",
                        "TTL": 300,
                        "ResourceRecords": [{"Value": public_ip}],
                    },
                }
            ]
        },
    )


def handler(event, context):

    eni_id = find_eni_id(event)

    ec2 = boto3.resource("ec2")
    eni = ec2.NetworkInterface(eni_id)
    public_id = eni.association_attribute["PublicIp"]

    update_dns(public_id, hosted_zone, domain_name, assumed_role)

    return True
