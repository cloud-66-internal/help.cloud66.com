{% if include.product == 'maestro' %}
beep
{% endif %}

## Cloud 66 Agent

Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the `WEB_ADDRESS_INT` and `WEB_ADDRESS_EXT` environment variables (among others) when necessary.

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB_ADDRESS environment variable, which by default is set to `{{WEB_ADDRESS_INT}}` but can be modified by the user.

#### Important
<div class="notice notice-warning"><p>
Some cloud providers automatically assign a new IP address to restarted servers.</p></div>

## New IP addresses

If the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address subsequently change, we are notified by the agent, which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, ActiveProtect is reconfigured and DNS records are updated accordingly. 

Furthermore, if required, the load balancer is updated to serve the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the application.


## Cloud 66 hostnames

Every server fired up with Cloud 66 is assigned a unique animal-themed name. This helps you to find and identify your server quickly in your application. 

All servers are accessible via their Cloud 66 DNS name which follows the following pattern: 
`[server_name].[app_name].[environment].c66.me`. 

For example, the name could be `tiger.myapp.test.c66.me`.

Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like `[app_name].[environment].c66.me`. For example, the DNS could look like: `myapp.test.c66.me`. Production applications don't have the environment in their names, for example `myapp.c66.me`.

{% if include.product == 'maestro' %}
If you need more detail on the best way to configure DNS records with Cloud 66 please read our [detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/configure-dns.html).
{% endif %}

{% if include.product != 'maestro' %}
If you need more detail on the best way to configure DNS records with Cloud 66 please read our [detailed how-to guide](/{{page.collection}}/tutorials/configure-dns.html).
{% endif %}

### Browsing your app via Cloud 66 DNS

You can browse your application directly by visiting the Cloud 66 address for the primary web server. To do this:

1. Log into your Dashboard
2. Open your Application Overview
3. Click on the Visit Site link (next to the app's name)

<div class="notice notice-warning"><p>You cannot visit your app via the Cloud 66 host address over HTTPS. If you have a <a href="/{{page.collection}}/references/network-configuration.html#redirect-http-to-https">redirect from HTTP to HTTPS</a> turned on, you will need to turn it off first.</p></div>


## Finding your Cloud 66 hostname

To find the Cloud 66 hostname for any server: 

1. Open your Dashboard and click on the application 
2. Click the _Servers_ tab.
3. Click the name of your server. This page displays your server's _Primary address_ (hostname) as well as the _Secondary address_ (IP address).
