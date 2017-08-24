<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### Note

This only applies to Rails stacks not Docker ones



A number of cloud vendors allow you to increase and/or decrease the size of an existing server via their dashboard, allowing you to change the memory and CPU for existing servers. Vertical scaling works the same way for all server types.

Follow these steps to scale your server vertically:

1. Shut down the server through your cloud dashboard
2. Change the server size and start it up
3. Wait 10 minutes for Cloud 66 to identify the change, and then redeploy the stack

Note that if you have a load balancer and are using AWS as your cloud vendor, this is slightly more complex. AWS load balancers use a unique identifier
for each server, which is updated when you change the size of the server.

Scaling vertically on AWS with the instructions above will therefore only work with backend servers but not app servers, as these are served via the
load balancer. For application servers, we recommend that you scale up a new server (with your desired size) and delete the old one.
