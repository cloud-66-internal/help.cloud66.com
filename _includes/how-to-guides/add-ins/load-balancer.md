A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your application.

You can add either native load balancers (for cloud vendors) or an HAProxy load balancer for Registered Servers.

{% if include.product == 'rails' %}
### Warning: check your config.hosts
<div class="notice notice-warning"><p>If you have set your <code>config.hosts</code> in Rails to only allow traffic from your own domain(s), your load balancer <em>can</em> be seen as a different host and be blocked by your application, which can bring down your entire application. You will need to add your load balancer's hostname to your allowed list, or disable the config.hosts feature (which we recommend against)</p></div>
{% endif %}

## Add a load balancer

To add a load balancer to your application: 

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Load Balancer**
4. A panel will slide out from the left with options. Select what you need and then click *Add Load Balancer* to continue.

You can now watch the logs, as usual to see the progress of the process. Depending on which cloud provider you use, this load balancer will be set up differently:

- **Amazon AWS**: [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/)
- **DigitalOcean**: HAProxy
- **Google Cloud Engine**: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- **Linode**: [NodeBalancer](https://www.linode.com/nodebalancers/)
- **Microsoft Azure**: [TrafficManager](https://docs.microsoft.com/en-us/azure/traffic-manager/)
- **Rackspace**: [Rackspace Load Balancing](https://www.rackspace.com/)

### Automatic endpoint test

When a new load balancer is set up it will begin to ping your web endpoints to check their health. By default load balancers ping the root path of your application (`/`) and if they receive a `200` response code, they will consider a server healthy.

If your application does not have a valid endpoint or route set for `/` then you can specify a custom path under the `httpchk` option in your [manifest file](/{{page.collection}}/references/manifest-loadbalancer-settings.html) to ensure your application responds appropriately. We will configure the load balancer to ping that path rather than the root.

If your servers respond positively to the ping test, the load balancer will begin to distribute the load between them. If any of these ping tests fail, the load balancer will not distribute traffic to those servers that failed.

{% if include.product == 'rails' %}
### Parallel deployments

When you have a load balancer on your application, your deployments can take place in serial to reduce downtime, or in [parallel](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html). Deploying in serial involves removing each server from the load balancer, deploying to it and then re-adding it to the load balancer in sequence.{% endif %}

## Adding multiple load balancers

One potential drawback of having a load balancer is that it is a single point of failure. To improve the high availability of an application, you can add more than one load balancer to it.

To add a second load balancer to your application:

* First add a standard load balancer to your application. You can follow the instructions above to do so. 
* Once this is in place, click the **+** on the **Add-ins** panel
* Click *Install Now* under **Load Balancer** 
* Follow the rest of the flow to add your second load balancer

This new load balancer is essentially a clone of your first one. Whenever changes are applied to your first load balancer, they will also be applied to any clones. Both load balancers are “live” and can distribute traffic to your application, but actually switching between load balancers requires an update to your DNS (see below).

### Switching between load balancers

To switch traffic between load balancers, you should update the public DNS record for your application to point at the CNAME of your target load balancer. You can find the CNAME for any load balancer by clicking on its name in the Add-ins panel at the bottom of the Application Overview.

We recommend keeping your TTL for these records set to 300 (5 minutes) to reduce any downtime to a minimum.

