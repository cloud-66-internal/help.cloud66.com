<!-- post: -->


## Edit stack properties

You can access your _Stack information_ page from the right sidebar of your stack page. This page shows you general information about your stack, the different servers it consists of and information about your application.

It also allows you to edit your stack name, and you can edit your Docker service configuration under the _Service configurations_ menu on the stack details page. For Rack-based stacks, you can edit your Git repository and branch by clicking the _Edit_ button next to each field on the _Stack information_ page. Editing your stack name has an important implication.


### Important

Internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.

Unless you use Failover groups, you will have to update your DNS to point at the new address to keep your application accessible. By using Failover groups, this will be updated automatically for you.

