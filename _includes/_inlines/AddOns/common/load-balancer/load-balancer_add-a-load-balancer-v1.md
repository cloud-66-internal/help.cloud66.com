<!-- usedin: [ _legacy_docker/AddOns/load-balancer-v1.md, _maestro/AddOns/load-balancer-v1.md, _node/addons/load-balancer-v1.md, _rails/AddOns/load-balancer-v1.md] -->


## Add a load balancer
To add a load balancer, access the add-ins menu of your stack and click _Load balancer_.

Depending on which cloud provider you use, this load balancer will be set up differently:

- **Amazon AWS**: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- **DigitalOcean**: [HAProxy](http://haproxy.1wt.eu/)
- **Google Cloud Engine**: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- **Linode**: [NodeBalancer](https://www.linode.com/nodebalancers/)
- **Microsoft Azure**: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- **Rackspace**: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- **CloudA**: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. **All your existing web servers** will automatically be added to the load balancer.

When you have a load balancer on your stack, your deployments can take place in serial to reduce downtime, or in [parallel](/deployment/parallel-deployments). Deploying in serial involves removing each server from the load balancer, deploying to it and then re-adding it to the load balancer in sequence.
