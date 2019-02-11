
You can use Cloud 66 to provision and deploy your code to servers in any Amazon Web Services (AWS) region.

## Classic and VPC platforms
You can choose to create servers in both the [Classic and VPC platforms](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html). To use a VPC, your account must conform with the [default VPC guidelines](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html#launching-into).

Certain instances types, such as the T2, require the use of VPC.

## Reserved instances
[AWS reserved instances](http://aws.amazon.com/ec2/purchasing-options/reserved-instances/) enable users of EC2 or RDS to reserve instances for one to three years, which has pricing benefits when compared to on-demand instances.

It’s very simple to use Cloud 66 with AWS reserved instances: start by reserving an instance with your size/region requirements. Now, simply use Cloud 66 to deploy to a server of that size in the same region, and we’ll use your reserved instance.

## Generate AWS access keys

You need to provide your AWS access keys in order for Cloud 66 to access your account. To generate these, access the your account menu by clicking **Account name** in the top right corner of your AWS account, and select *Security Credentials*. 

On the next screen, some users will be asked to choose between *Security Credentials* and *IAM users*. We support both methods.

IAM stands for *Identity and Access Management*, and allows you to set permissions for specific users. This may be useful in certain cases, but may be confusing for less advanced users. We will guide you through generating access keys based on both of these methods:

## Security credentials

After selecting the **Security Credentials** option, select the *Access Keys* option from the menu. Now click *Create new access key*, and either download the key file or click *Show access key* and take note of your access key ID and secret access key. These are the credentials needed for Cloud 66 to access your account.

### IAM
After selecting the **IAM option**, click *Create new users* in the top left corner. Enter a descriptive username in the field provided, such as `cloud66`, and click *Create. Now*. Next click *Show user security credentials* and take note of your access key ID and secrete access key. Alternatively, you can download these credentials.

Back in the **Users view**, we now need to attach a user policy for this user. Click the username, and then select *Attach user policy*. Your next option will depend on whether or not you are using VPC or EC2. In the former case, you would select *Amazon VPC full access*, and in the latter, select *Amazon EC2 full access*. To add a SSL Certificate to your applications, you need to add *Amazon IAM full access*.

You can also set more fine-grained permissions with the following JSON template for your IAM policy (you can adjust the resource name to limit access):

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ResourceLevelActions",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:RevokeSecurityGroupIngress",
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
		"elasticloadbalancing:SetLoadBalancerListenerSSLCertificate",
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

### Add AWS keys to a stack
Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to Add your cloud platform. From this menu, select *Amazon Web Services* and provide your credentials.

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

### External links

- [AWS regions](http://aws.amazon.com/about-aws/globalinfrastructure/)
- [AWS pricing](http://aws.amazon.com/ec2/pricing/)

