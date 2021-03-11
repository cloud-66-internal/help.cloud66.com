
The _Network Settings_ page contains all things network-related, in four tabs:

- **ActiveProtect&trade;**: Protects against denial of service and brute-force attacks
- **Firewall**: Restricts access to your servers
- **Traffic**: Allows or denies access from different source IP addresses
- **Redirects**: Sets server-level redirects for web traffic

## What is ActiveProtect&trade;?
All stacks deployed with Cloud 66 are automatically protected against [denial of service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. The *ActiveProtect* page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.

## Firewall
The *Firewall* tab allows you to configure and apply firewall rules per server for your application. You can open your firewall temporarily in cases when you need temporary access to your servers by clicking the icon at the top right of the page. This will automatically fill with your current IP address, and allow you to choose the duration of the opening and the server port you wish to access. Doing this avoids the dangers of leaving firewall ports open permanently unnecessarily.

By default, Cloud 66 gateway servers (e.g. `54.84.166.97`) are the only servers allowed SSH (port 22) access to application servers. The default firewall rules include database and web ports appropriate for the application deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](/rails/how-to-guides/deployment/implementing-faye.html). Editing and removing the default firewall rules is disabled to secure accessibility to the servers at all times.

### Add a firewall rule
To add your own rules, click *Add a new firewall rule*. You can input single IP addresses or ranges, and the drop-down allows you to choose servers by name (e.g. *Rails servers*).

#### Microsoft Azure notice
<div class="notice notice-warning">
    <p>If you want to open a custom port to you server in Microsoft Azure, you must add an endpoint for that VM in your Azure management portal after adding the rule in your Cloud 66 dashboard.</p>
</div>

## Configuring traffic rules

By default, all traffic is allowed to visit your web servers on ports `80`, `443`, `8080` and `8443`. The *Traffic* tab allows you to set rules for this access. Cloud 66 supports 3 kinds of traffic rules:

1. "Don't block" rules prevent trusted IPs from being rate limited
2. "Allow access" rules whitelist access from specific IPs (or ranges)
3. "Deny access" rules blacklist access from specific IPs (or ranges)

For each of these fields, you can enter a single IP address, a comma-separated list, or range. For example:

```html
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
```

### "Don't block access from" rules

To help prevent denial of service (DOS) attack, ActiveProtect automatically blocks any IP address that makes more than 1,500 requests per minute to your server(s). 

You can use this field to define IP addresses and ranges for which this limit will be ignored. You can also choose not to block any traffic coming from Cloudflare's edge servers.

### Allowed web sources

You can alow ("white list") specific IP addresses and ranges to access your application. All other IP addresses will be blocked.

### "Deny access from" rules

You can block ("black list") specific IP addresses and/or ranges from visiting the ports mentioned above.

## Using network redirects

The *Redirects* tab helps you perform simple but frequently used network redirects. These include redirecting traffic from *HTTP* to *HTTPS* or adding or removing the *www* prefix from your domain name.

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
You can easily <a href="/{{page.collection}}/how-to-guides/add-ins/ssl.html">add your SSL certificates</a> to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

You can find it in *Application Overview* &rarr; *Network settings* &rarr; *Redirects* tab 

### WWW or non-WWW in your URL
Some sites serve traffic on <code>www.domain.com</code>, while others use the bare <code>domain.com</code>. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to <code>www.domain.com</code> to <code>domain.com</code>, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.

You can find it in *Application Overview* &rarr; *Network settings* &rarr; *Redirects* tab
