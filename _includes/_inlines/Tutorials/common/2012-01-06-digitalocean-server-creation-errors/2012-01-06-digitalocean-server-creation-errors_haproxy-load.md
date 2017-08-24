<!-- usedin: [ _legacy_docker/Tutorials] - post: -->


## HAProxy Load Balancer Errors

When Cloud 66 deploys a load balancer to DigitalOcean, we will be creating a new server, and provisioning it with HA Proxy. The new server will be created as the smallest possible server, in the same region as your web-servers. 
As the new server creation is subject to the same errors as above, in the case of load balancers, you can simply remove your load balancer and attempt to re-create it once the underlying root cause of your error has been dealt with appropriately.
