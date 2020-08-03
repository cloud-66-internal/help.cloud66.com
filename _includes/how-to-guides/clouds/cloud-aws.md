You can use Cloud 66 to provision and deploy your code to servers in any Amazon Web Services (AWS) region. Cloud 66 supports both VPC and (for AWS accounts created before 2014) EC2-Classic. We also support reserved instances. To use a VPC, your account must conform with the [default VPC guidelines](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html#launching-into).

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

{% if include.product == 'rails' %}
## Bring Your Own Images (BYOI)

We support BYOI with this cloud provider, which allows you to spin up new servers for your applications that are based on your custom server images. Read our [BYOI guide](/{{page.collection}}/how-to-guides/clouds/bring-your-own-images.html) for more details.
{% endif %}

## Granting Cloud 66 access to AWS

You need to configure AWS so that Cloud 66 to access your account. To to this:

1. Log into the web interface for your AWS account
2. Click on the name of your account in the top right corner of your AWS account, and select *My Security Credentials*.

On the next screen, some users will be asked to choose between *Security Credentials* and *IAM users*. We support both methods but we recommend that experienced users select IAM for better security.

IAM stands for *Identity and Access Management.* It allows you to set permissions for specific users. We will guide you through generating access keys based on both of these methods:

## Option A: Using root credentials

After selecting the **Security Credentials** option: 

1. Select the *Access Keys* option from the menu. 
2. Click *Create new access key*
3. Either download the key file or click *Show access key* and take note of your access key ID and secret access key. These are the credentials needed for Cloud 66 to access your account.

## Option B: Identity Access Management (IAM)

### Step 1: Create a user

After selecting the **IAM option** follow [this guide in AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) to set up a new IAM user for Cloud 66. We recommend naming the user `cloud66` for clarity.

Be sure to copy or save the **Access Key ID** and **Secret Access Key** for this user - you will need these credentials to connect your Cloud 66 account.

### Step 2: Set up access policies

You'll need to assign access policies for the `cloud66` user so that it will have the access it requires to provision and manage your servers. 

You can see them here: [recommended minimum policies](https://help.cloud66.com/c66_aws_iam_policy.json).

There are two method for assigning policies: using the **AWS CLI** or the **web console**:

<div class="Tabs Tabs--enclosed">
<nav>
<ul class="TabMini js_tabs">
<li class="TabMini-item active">
<a href="#CLI" class="TabMini-link">
AWS CLI
</a>
</li>
<li class="TabMini-item">
<a href="#WEB" class="TabMini-link">
Web console
</a>
</li>
</ul>
</nav>

<section id="CLI" class="Tabs-content js_tab_content">

<h3>Using the AWS CLI</h3>
<p>If you have the AWS CLI tool installed, you can set up your access policies by running this command:</p>

<p><pre class="language-shell line-numbers u-whiteSpaceNoWrap"><code>curl https://help.cloud66.com/c66_aws_iam_policy.json > c66_aws_iam_policy.json && aws iam put-user-policy --user-name cloud66 --policy-name ExamplePolicy --policy-document file://c66_aws_iam_policy.json</code></pre> 
</p>

<p>This downloads our JSON template to your machine and then submits it via the CLI. Note that this assumes you have named your user <code>cloud66</code> as recommended. You can find more info <a href="https://docs.aws.amazon.com/cli/latest/reference/iam/put-user-policy.html" target="_blank">in the AWS docs</a> if you need it.</p>

</section>


<section id="WEB" class="Tabs-content js_tab_content is-hidden">

<h3>Using the web console</h3>

<p>You can add policies via the <a href="https://console.aws.amazon.com/iam/" target="_blank">IAM management console</a>.</p> 
<ol style="font-size:14px">
<li>Click on <em>Access management</em> → <em>Users</em></li>
<li>Click on your <code>cloud66</code> user</li>
<li>Click the <em>Add inline policy</em> button</li>
<li>In another browser tab Open our <a href="https://help.cloud66.com/c66_aws_iam_policy.json">JSON template</a> copy the whole page to your clipboard</li>
<li>Back in the IAM console, click the JSON tab and paste in the template you just copied</li>
<li>Click <em>Review Policy</em></li>
<li>Give your policy a name  </li>
<li>Click <em>Create Policy</em></li>
</ol>

<p>If you need more detail please read <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html#add-policies-console" target="_blank">the AWS docs</a> on this subject.</p>

</section>
</div>

## Using IAM instance profiles with your servers

#### Beta only
<div class="notice"><p>
This feature is currently only available to users in our Beta Programme. If you'd like to join the programme please <a href="/{{page.collection}}/resources/cloud-66-beta-program.html">follow our quick guide</a> to add yourself to the programme.</p></div>

Instance profiles are a way to set specific roles on new servers that you spin up with AWS. You can read more about [creating your own instance profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) in the AWS docs. 

You can use your instance profiles via Cloud 66 by [calling them in the manifest file](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html#which-component) of your application. You can set a different profile for each component of an application (e.g. MySQL or Redis). We will then use that profile whenever we provision a server for that component.

## Reserved instances

[AWS reserved instances](http://aws.amazon.com/ec2/purchasing-options/reserved-instances/) enable users to reserve instances for one to three years, which has pricing benefits when compared to on-demand instances.

To use Cloud 66 with AWS reserved instances: 

1. Reserve an instance with your size/region requirements. 
2. Use Cloud 66 to deploy to a server of that size in the same region, and we’ll use your reserved instance.

## Using EC2-Classic

If your AWS account was created before 2014 you can choose to create servers on the EC2-Classic platform. Cloud 66 does support EC2-Classic, however we strongly recommend using VPC instead. Several instance types, such as the T2, require the use of VPC.

Please be sure to read the documentation for [EC2-Classic](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-classic-platform.html) before deploying to that platform.

## ELB Websocket support

AWS Classic Load Balancers do not support [websockets](/{{page.collection}}/how-to-guides/deployment/websocket-support.html) natively. We recommend switching to one of Amazon's newer load balancers - either Application Load Balancer or Network Load Balancer depending on your specific use-case.

### External links

- [AWS regions](http://aws.amazon.com/about-aws/globalinfrastructure/)
- [AWS pricing](http://aws.amazon.com/ec2/pricing/)

