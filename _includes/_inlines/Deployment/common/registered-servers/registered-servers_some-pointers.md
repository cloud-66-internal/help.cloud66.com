<!-- usedin: [ _legacy_docker/deployment/registered-servers.md, _maestro/Deployment/registered-servers.md, _node/deployment/registered-servers.md, _rails/deployment/registered-servers.md, _skycap/deployment/registered-servers.md] -->


## Some pointers

- Once a server is registered and used, it **cannot be reused** until a fresh copy of Ubuntu is installed again - this is to prevent possible conflicts with old files. When a stack with Registered Servers is deleted, the Registered Servers will appear in the **Orphaned Servers** list on your Registered Servers page. This list is here to allow operators to see which servers need to be destroyed/reset. Once a server is destroyed/reset it can be manually removed from the Orphaned Servers list.
- If your server is in a cloud with native security groups (such as AWS Security Groups) then you must manually configure them such that your registered servers are able to talk to each other and Cloud 66. Open at least TCP port 80, 443 and 22 to the outside world. Cloud 66 install a firewall on each box that is blocking port 22. All servers must be allowed to communicate inside the security group on TCP port 6783. Port 6783 is needed to create the overlay network (Weave) for Docker stacks.  
- If your servers in a stack are in different regions, then they will not be able to use their internal IPs to communicate with each other, so you will have to change your app to use the external IP environment variables. Keep in mind that this may incur additional traffic costs.
- Existing BYOS users will now be able to scale up and add a load balancer via registered servers.
- Cross-cloud stacks are now possible, but not recommended due to substantial latency and other potential issues.
- Detecting server's private IPs are very difficult as there might be more than one, so we cannot decide which one should be used -hence all the connections are going to be via Public IPs
