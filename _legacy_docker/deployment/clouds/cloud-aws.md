---
menuheaders: [ "About using Amazon Web Services cloud", "Reserved instances", "Classic and VPC platforms", "Generate AWS access keys", "Security credentials", "IAM", "Add AWS keys to a stack", "Notice", "External links" ]
layout: post
template: one-col
title: Amazon Web Services cloud
categories: Deployment
lead: ""
legacy: true

permalink: /:collection/:path
---









## About using Amazon Web Services cloud

You can use Cloud 66 to provision and deploy your code to servers in any Amazon Web Services (AWS) region. 






### Reserved instances

[AWS reserved instances](http://aws.amazon.com/ec2/purchasing-options/reserved-instances/) enable users of EC2 or RDS to reserve instances for one to three years, which has pricing benefits when compared to on-demand instances.

It's very simple to use Cloud 66 with AWS reserved instances: start by reserving an instance with your size/region requirements. Now, simply use Cloud 66 to deploy to a server of that size in the same region, and we'll use your reserved instance.






### Classic and VPC platforms

You can choose to create servers in both the [Classic and VPC platforms](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html). To use a VPC, your account must conform with the [default VPC guidelines](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html#launching-into). 

Certain instances types, such as the T2, require the use of VPC. 






## Generate AWS access keys

You need to provide your AWS access keys in order for Cloud 66 to access your account. To generate these, access the your account menu by clicking _Account name_ in the top right corner of your AWS account, and select _Security Credentials_. On the next screen, some users will be asked to choose between _Security Credentials_ and using _IAM users_, and this selection is at your discretion. 

_IAM_ stands for _Identity and Access Management_, and allows you to set permissions for specific users. This may be useful in certain cases, but may be confusing for non-advanced users. We will now guide you through generating access keys based on both of these methods:






### Security credentials

After selecting the _Security Credentials_ option, select the _Access Keys_ option from the menu. Now click _Create new access key_, and either download the key file or click _Show access key_ and take note of your _access key ID_ and _secret access key_. These are the credentials needed for Cloud 66 to access your account.






### IAM

After selecting the _IAM_ option, click _Create new users_ in the top left corner. Enter a descriptive username in the field provided, such as _cloud66_, and click _Create_. Now, click _Show user security credentials_ and take note of your _access key ID_ and _secrete access key_. Alternatively, you can download these credentials. 

Back in the _Users_ view, we now need to attach a user policy for this user. Click the username, and then select _Attach user policy_. Although you could grant _Administrator access_ to the account, you may wish to grant more fine-grained controls. In that case, your selection will depend on whether or not you are using VPC or EC2. In the former case, you would select _Amazon VPC full access_, and in the latter, select _Amazon EC2 full access_. Also to add SSL Certificate to your stacks, you need to add _Amazon IAM full access_.  

You can also set more fine-grained permissions with the following JSON template for your IAM policy (you can adjust the resource name to limit access):





```

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ResourceLevelActions",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteVolume",
                "ec2:RebootInstances",
                "ec2:RunInstances",
                "ec2:StartInstances",
                "ec2:StopInstances",
                "ec2:TerminateInstances"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Sid": "NonResourceLevelActions",
            "Action": [
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeInstanceAttribute",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeInstances",
                "ec2:DescribeKeyPairs",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeRegions",
                "ec2:DescribeReservedInstances",
                "ec2:DescribeReservedInstancesListings",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVolumeAttribute",
                "ec2:DescribeVolumeStatus",
                "ec2:DescribeVolumes",
                "ec2:DescribeVpcs",
                "ec2:CreateKeyPair",
                "ec2:CreateSecurityGroup",
                "ec2:CreateSubnet",
                "ec2:CreateVolume",
                "ec2:DeleteKeyPair",
                "ec2:ModifyInstanceAttribute",
                "ec2:CreateTags",
                "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
                "elasticloadbalancing:ConfigureHealthCheck",
                "elasticloadbalancing:CreateLBCookieStickinessPolicy",
                "elasticloadbalancing:CreateLoadBalancer",
                "elasticloadbalancing:CreateLoadBalancerListeners",
                "elasticloadbalancing:CreateLoadBalancerPolicy",
                "elasticloadbalancing:DeleteLoadBalancer",
                "elasticloadbalancing:DeleteLoadBalancerListeners",
                "elasticloadbalancing:DeleteLoadBalancerPolicy",
                "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeTags",
                "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer",
                "elasticloadbalancing:ModifyLoadBalancerAttributes",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "iam:ListServerCertificates",
                "iam:GetServerCertificate",
                "iam:UpdateServerCertificate",
                "iam:UploadServerCertificate",
                "iam:DeleteServerCertificate"

            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}

```










## Add AWS keys to a stack

Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Amazon Web Services_ and provide your credentials.









### Notice

Should you wish to delete your stack on Cloud 66, your servers **will not** be deleted on your cloud provider unless [physical server deletion](/managing-your-stack/server-deletion) is turned on.









## External links

*   [AWS regions](http://aws.amazon.com/about-aws/globalinfrastructure/)
*   [AWS pricing](http://aws.amazon.com/ec2/pricing/)

