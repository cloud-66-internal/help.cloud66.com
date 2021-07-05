The *Network* interface allows you to configure and manage network access to your application including:

- **Firewall**: Controls access to your servers (based on IP addresses and ports)
- **Traffic**: Controls the flow of *web traffic* to your application servers
- **Application Private Network**: an encrypted VPN-like network between your servers
- **Redirects**: Sets server-level redirects for web traffic

## Firewall

The *Firewall* tab allows you to configure and apply firewall rules per server for your application. 

By default, Cloud 66 gateway servers (e.g. `54.84.166.97`) are the only servers allowed SSH (port 22) access to application servers. The default firewall rules include database and web ports appropriate for the application deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](/rails/how-to-guides/deployment/implementing-faye.html). 

Editing and removing the default firewall rules is disabled to secure accessibility to the servers at all times.

### Temporary SSH access

You can open your firewall temporarily in cases when you need access to your servers by clicking the icon at the top right of Firewall Rules panel. 

This will automatically fill with your current IP address, and allow you to choose the duration of the opening and the server port you wish to access. Doing this avoids the dangers of leaving firewall ports open permanently unnecessarily.

### Adding a firewall rule

To add your own rules, click *Add a new firewall rule*. You can input single IP addresses or ranges, and the drop-down allows you to choose servers by name (e.g. *Rails servers*).

#### Microsoft Azure notice
<div class="notice notice-warning"><p>If you want to open a custom port to your server in Microsoft Azure, you must add an endpoint for that VM in your Azure management portal after adding the rule in your Cloud 66 dashboard.</p>
</div>

## Traffic settings

The *Traffic* tab allows you to configure five different sets of rules that govern web traffic flowing to your application:

- **Traffic filters**: Black and white listing traffic based on source IP
- **Web Application Firewall:** an Nginx-based WAF powered by ModSecurity (may require an [application update](/{{page.collection}}/how-to-guides/common-tools/application-updates.html))
- **OWASP rules**: automated rules for the application WAF (may require an [application update](/{{page.collection}}/how-to-guides/common-tools/application-updates.html)) - please read our [separate guide](/{{page.collection}}/how-to-guides/security/web-application-firewalls.html) for details.
- **Surge protection**: prevents DDOS attacks by rate-limiting based on IP addresses
- **CORS**: Rules for Cross-Origin Resource Sharing (CORS)


### Traffic Filters

By default, all web traffic is allowed to visit your servers on your desired ports. For Rails applications this is `80`, `443`, `8080` and `8443`. For Maestro applications these ports are extracted from your exposed service configurations. The *Traffic Filters* tab allows you to set rules for access via these ports. 

You have three (mutually exclusive) options for filtering your traffic:

1. Allow traffic from any source (the default)
2. Only allow traffic from certain sources ("whitelisting")
3. Block traffic from certain sources ("blacklisting")

For the "allow" and "block" rules, you can use any combination of:

- Single IP addresses
- IP ranges (e.g. `23.12.123.54/16`)
- A URL that lists IP addresses (comma separated, in plain text)

### Managing Traffic Filters

To implement or update Traffic Filters for your application:

1. Log in to your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on your application
2. Click on *Network* in the right-hand column
3. Click on the *Traffic* tab at the top of the main panel 
4. Click on the radio button of the rule type you want to implement
5. Add your sources as needed (multiple sources are supported for both *block* and *allow*)
6. Click *Review Changes* 
7. Review the rules that will be applied and then click *Apply Changes* 

### Load Balancer Traffic

You can configure your application to only allow web traffic via your load balancers. This is useful for hardening your other servers against intrusions. However you may still want your own team to be able to query your other servers directly via the web. To allow this, you can specify a set of IP addresses that are exceptions to this rule.

To force all web traffic to flow via your load balancer:

1. Log in to your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on your application
2. Click on *Network* in the right-hand column
3. Click on the *Traffic* tab at the top of the main panel 
4. Scroll down to *Load Balancer Traffic* and check the box to enable it
5. If needed check the "allow direct traffic to servers from these sources" box and then add your sources (multiple sources are supported)
6. Click *Review Changes* 
7. Review the rules that will be applied and then click *Apply Changes* 

### Web Application Firewalls

Please read our [separate guide](/{{page.collection}}/how-to-guides/security/web-application-firewalls.html) for details on WAF.

### OWASP Rules

Please read our [separate guide](/{{page.collection}}/how-to-guides/security/web-application-firewalls.html#using-owasp-rules-with-your-waf) for details on OWASP rules for WAF.

### Application Surge Protection

To help prevent denial of service (DOS) attack, Cloud 66 automatically blocks any IP address that makes more than 1,500 requests per minute to your server(s). We call this Surge Protection. You can see if any IP addresses are currently being block by clicking on [Active Protect](/{{page.collection}}/references/active-protect.html) in the right-hand column. 

You can enable or disable Surge Protection as needed, and you can also add exclusions to prevent your own sources from being blocked. If you use CloudFlare and/or AWS CloudFront we allow you to automatically exclude their entire IP ranges.

To configure Surge Protection for your application:

1. Log in to your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on your application
2. Click on *Network* in the right-hand column
3. Click on the *Traffic* tab at the top of the main panel 
4. Click on the *Surge Protection* sub-tab 
5. Click on the checkbox to enable or disable Surge Protection
6. Check the CloudFlare and AWS CloudFront boxes as needed
7. Add custom exclusions as needed (multiple sources are supported)
8. Click *Review Changes* 
9. Review the rules that will be applied and then click *Apply Changes* 

### CORS

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. This allows, for example, Ajax requests across domains. We strongly recommend [learning about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) before attempting to implement it. 

If you have previously specified CORS settings in your [Manifest file](/{{page.collection}}/references/manifest-web-settings.html#cors-configuration), we will use these settings in the interface described below.

To manage CORS settings for your application via the Dashboard: 

1. Log in to your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on your application
2. Click on *Network* in the right-hand column
3. Click on the *Traffic* tab at the top of the main panel 
4. Click on the *CORS* sub-tab 
5. Click on the radio button to enable (or disable) CORS for your application
6. If you have enabled CORS, you can also configure the **Origin**, **Methods** and **Headers** settings (see the link above for more info on what these mean)
7. You can choose to share credentials by checking the box
8. Once you are finished, click *Review Changes* 
9. Review the rules that will be applied and then click *Apply Changes* 

As mentioned above, you can also managed these settings via your [Manifest file](/{{page.collection}}/references/manifest-web-settings.html#cors-configuration).

## Using network redirects

The *Redirects* tab helps you perform simple but frequently used network redirects. These include redirecting traffic from *HTTP* to *HTTPS* or adding or removing the *www* prefix from your domain.

{% if include.product == 'rails' %}
### Maintenance mode
When you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

During such times, you can set your application into *maintenance mode*, which puts up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your application while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your application.

You can find it in *Application Overview* &rarr; *Network settings* &rarr; *Redirects* tab 

### Use a custom maintenance page

To supply your own maintenance page, simply place your file in the following path of your repository:

```shell
/.cloud66/maintenance.html
```

{% endif %}

### Redirect HTTP to HTTPS

You use the Cloud 66 [SSL Add-in](/{{page.collection}}/how-to-guides/add-ins/ssl.html) to add a certificate to your application and serve your traffic securely via HTTPS. To ensure that all your visitors use HTTPS, you should redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

You can find it in *Application Overview* &rarr; *Network* &rarr; *Redirects* tab 

### WWW or non-WWW in your URL

Some sites serve traffic on <code>www.domain.com</code>, while others use the bare <code>domain.com</code>. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to <code>www.domain.com</code> to <code>domain.com</code>, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.

You can find it in *Application Overview* &rarr; *Network* &rarr; *Redirects* tab
