
## Introduction

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

Cloud 66 for Rails supports and integrates *native* cloud load balancers - in other words those provisioned directly by the cloud providers. It is still possible to set up a load balancer manually, but this is not integrated into the  workflow of the dashboard as described below.

## Load balancers by cloud provider

Depending on which cloud provider you use, this load balancer will be set up differently:

- Amazon AWS: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- DigitalOcean: [HAProxy](http://haproxy.1wt.eu/)
- Google Cloud Engine: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- Linode: [NodeBalancer](https://www.linode.com/nodebalancers/)
- Microsoft Azure: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- Rackspace: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- CloudA: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. **All your existing web servers** will automatically be added to the load balancer.

## Adding a load balancer

To add a load balancer to your application: 

* Open your application detail page. 
* to the add-ins page by clicking _Install_ add-ins in the right sidebar. 
* On the next page, clicking _Load balancer_ will display a brief summary of what will happen next. 
* Click _Install_ load balancer to add a load balancer.

#### Note
<div class="notice notice-warning"><p>
This feature is only available if you have deployed using a cloud vendor, and for non-development applications.
</p></div>