<!-- usedin: [ _legacy_docker/deployment/cloud-aws.md, _maestro/Deployment/cloud-aws.md, _node/deployment/cloud-aws.md, _rails/deployment/cloud-aws.md, _skycap/deployment/cloud-aws.md] -->


### IAM

After selecting the _IAM_ option, click _Create new users_ in the top left corner. Enter a descriptive username in the field provided, such as _cloud66_, and click _Create_. Now, click _Show user security credentials_ and take note of your _access key ID_ and _secrete access key_. Alternatively, you can download these credentials. 

Back in the _Users_ view, we now need to attach a user policy for this user. Click the username, and then select _Attach user policy_. Although you could grant _Administrator access_ to the account, you may wish to grant more fine-grained controls. In that case, your selection will depend on whether or not you are using VPC or EC2. In the former case, you would select _Amazon VPC full access_, and in the latter, select _Amazon EC2 full access_. Also to add SSL Certificate to your stacks, you need to add _Amazon IAM full access_.  

You can also set more fine-grained permissions with the following JSON template for your IAM policy (you can adjust the resource name to limit access):



{%include _inlines/Deployment/common/cloud-aws/code_cloud-aws_iam-ersion.md %}




