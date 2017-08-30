<!-- usedin: [ _legacy_docker/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _maestro/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _node/tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _rails/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md] -->


## HAProxy Load Balancer Errors

When Cloud 66 deploys a load balancer to DigitalOcean, we will be creating a new server, and provisioning it with HA Proxy. The new server will be created as the smallest possible server, in the same region as your web-servers. 
As the new server creation is subject to the same errors as above, in the case of load balancers, you can simply remove your load balancer and attempt to re-create it once the underlying root cause of your error has been dealt with appropriately.
