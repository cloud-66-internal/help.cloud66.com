## Overview

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughput, minimizing response times and avoiding overload on any single server.

Cloud 66 integrates *native* cloud load balancers - in other words those provisioned directly by cloud providers. It is still possible to set up a load balancer manually, but this is not integrated into the workflow of the dashboard as described below.

{% if include.product == 'rails' %}
### Warning: check your config.hosts
<div class="notice notice-warning"><p>If you have set your <code>config.hosts</code> in Rails to only allow traffic from your own domain(s), your load balancer <em>can</em> be seen as a different host and be blocked by your application, which can bring down your entire application. You will need to add your load balancer's hostname to your allowed list, or disable the config.hosts feature (which we recommend against)</p></div>
{% endif %}

## Adding a load balancer

To add a load balancer to your application: 

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Load Balancer**
4. A pop-up window will appear, explaining the process for your cloud provider. Click *Add Load Balancer* to continue.

You can now watch the logs, as usual to see the progress of the process.

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. **All your existing web servers** will automatically be added to the load balancer.

#### Note
<div class="notice"><p>
This feature is only available if you have deployed using a cloud vendor, and for non-development applications.
</p></div>

## Load balancer configuration

Depending on which cloud provider you use, your load balancer will be set up differently:

- Amazon AWS: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- DigitalOcean: [HAProxy](http://haproxy.1wt.eu/)
- Google Cloud Engine: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- Linode: [NodeBalancer](https://www.linode.com/nodebalancers/)
- Microsoft Azure: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- Rackspace: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- CloudA: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. 

## What's next?

* Learn how to [set up your DNS records](/{{page.collection}}/tutorials/configure-dns.html) to work with Cloud 66
* Learn how to add a [Failover Group](/{{page.collection}}/tutorials/failover-groups.html) to your application, to further improve resilience. 
* Learn how to add a [firewall rule](/{{page.collection}}/tutorials/firewall-rule.html) to your application.

