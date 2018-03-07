

## What is load balancing?
A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

<div class="notice">
	<h3>Note</h3>
	<p>This feature is only available if you have deployed using a cloud vendor, and for non-development stacks.</p>
</div>

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


The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. <strong>All your existing web servers</strong> will automatically be added to the load balancer.

When you have a load balancer on your stack, your deployments can take place in serial to reduce downtime, or in [parallel](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html). Deploying in serial involves removing each server from the load balancer, deploying to it and then re-adding it to the load balancer in sequence.
