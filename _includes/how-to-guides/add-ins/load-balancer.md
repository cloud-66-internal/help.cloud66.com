A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your application.

You can add either native load balancers (for cloud vendors) or an HAProxy load balancer for Registered Servers.

## Add a load balancer

To add a load balancer to your application: 

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Load Balancer**
4. A panel will slide out from the left with options. Select what you need and then click *Add Load Balancer* to continue.

You can now watch the logs, as usual to see the progress of the process. Depending on which cloud provider you use, this load balancer will be set up differently:

- **Amazon AWS**: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- **DigitalOcean**: [HAProxy](http://haproxy.1wt.eu/)
- **Google Cloud Engine**: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- **Linode**: [NodeBalancer](https://www.linode.com/nodebalancers/)
- **Microsoft Azure**: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- **Rackspace**: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- **CloudA**: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. <strong>All your existing web servers</strong> will automatically be added to the load balancer.

When you have a load balancer on your application, your deployments can take place in serial to reduce downtime, or in [parallel](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html). Deploying in serial involves removing each server from the load balancer, deploying to it and then re-adding it to the load balancer in sequence.

## Adding multiple load balancers

One potential drawback of having a load balancer is that it is a single point of failure. To improve the high availability of an application, you can add more than one load balancer to it.

#### Please note
<div class="notice notice-warning"><p>This feature is not currently supported by Digital Ocean (pending the release of DigitalOcean native load balancers) or for any other providers that have HAproxy as their only load balancer option.</p></div>

To add a second load balancer to your application:

* First add a standard load balancer to your application. You can follow the instructions above to do so. 
* Once this is in place, click the **+** on the **Add-ins** panel
* Click *Install Now* under **Load Balancer** 
* Follow the rest of the flow to add your second load balancer

This new load balancer is essentially a clone of your first one. Whenever changes are applied to your first load balancer, they will also be applied to any clones. Both load balancers are “live” and can distribute traffic to your application, but actually switching between load balancers requires an update to your DNS (see below).

### Switching between load balancers

To switch traffic between load balancers, you should update the public DNS record for your application to point at the CNAME of your target load balancer. You can find the CNAME for any load balancer by clicking on its name in the Add-ins panel at the bottom of the Application Overview.

We recommend keeping your TTL for these records set to 300 (5 minutes) to reduce any downtime to a minimum.

