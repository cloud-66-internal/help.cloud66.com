
## Overview

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughput, minimizing response times and avoiding overload on any single server.

Cloud 66 for Rails supports and integrates *native* cloud load balancers - in other words those provisioned directly by the cloud providers. It is still possible to set up a load balancer manually, but this is not integrated into the  workflow of the dashboard as described below.

## Adding a load balancer

To add a load balancer to your application: 

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click the *Explore Add-ins* link in the **Add-Ins** panel (or the green **+** if you have existing add-ins)
3. Find the **Load Balancer** block and click *Install Now*
4. Follow the instructions on the panel that pops up (it will differ depending on your cloud provider) and then click *Add Load Balancer*

Your load balancer will now be configured and **all your existing web servers** will automatically be added to it.

#### Note
<div class="notice notice-warning"><p>
This feature is only available if you have deployed using a cloud vendor, and for non-development applications.
</p></div>

## Load balancers by cloud provider

Depending on which cloud provider you use, this load balancer will be set up differently:

- Amazon AWS: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- DigitalOcean: [HAProxy](http://haproxy.1wt.eu/)
- Google Cloud Engine: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- Linode: [NodeBalancer](https://www.linode.com/nodebalancers/)
- Microsoft Azure: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- Rackspace: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- CloudA: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. 

## What's next?

* Learn how to set up a [Failover Group](/rails/tutorials/failover-groups.html)
* Learn how to [set up your DNS records](/rails/tutorials/configure-dns.html) to work with Cloud 66
* Learn how to [configure network access](/rails/tutorials/service-network-configuration.html) to your application
* Learn how to set up [custom redirects](/rails/how-to-guides/deployment/shells/nginx-redirect.html) through Nginx

