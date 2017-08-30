<!-- usedin: [ _legacy_docker/deployment/deployment-authorisation-v1.md, _skycap/deployment/deployment-authorisation-v1.md] -->


## About Deployment authorization

For docker stacks where you want additional control over deployment authorizations, you can now go to the stack settings page an choose a deployment lockdown strategy. There are currently three deployment strategies available:

 -  **No Deployment Lockdown:**
   This is the default behaviour and means that deployments will go through without any additional approval.
 - **Anyone on your team:**
   This setting implies that deployments will only happen if *at least* two members on your project with deploy permissions agree to deploy your stack. This is commonly known as four-eyes authorization.
 - **Specific team members:**
   This setting implies that only a specific user (or users in this group) will have permissions to approve depoyment requests.

If a deployment lockdown strategy is in place, then the "Deploy" button will be replaced with a "Request Deploy" button. Users with approval rights can then go to the stack's Deployment Timeline on the "Build & Deployment right navigation option". There they can approve or deny deployment requests. Note that the person who raised the request can also cancel that request here.

Once a deployment request is approved, the deployment will take place. The audit log and deployment history pages will list who raised the deployment request and who approved it.




