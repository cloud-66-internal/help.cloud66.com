---
menuheaders: [ "About Network Settings", "What is ActiveProtect&trade;?", "Firewall", "Add a firewall rule", "Microsoft Azure notice", "Configure network traffic", "Allowing traffic", "Denying traffic", "Using network redirects", "Maintenance mode", "Redirect HTTP to HTTPS", "WWW or non-WWW in your URL" ]
layout: post
template: one-col
title: Stack network settings
categories: stack-management
lead: ""
legacy: false

permalink: /:collection/:path
---









## About Network Settings

The _Network Settings_ page contains all things network-related, in four tabs:

- **ActiveProtect&trade;:** Protects against denial of service and brute-force attacks
- **Firewall:** Restricts access to your servers
- **Traffic:** Allows or denies access from different source IP addresses
- **Redirects:** Sets server-level redirects for web traffic






## What is ActiveProtect&trade;?

All stacks deployed with Cloud 66 are automatically protected against [denial of service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. The _ActiveProtect_ page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.






## Firewall

The _Firewall_ tab allows you to configure and apply firewall rules per server for your stack. You can open your firewall temporarily in cases when you need temporary access to your servers by clicking the icon at the top right of the page. This will automatically fill with your current IP address, and allow you to choose the duration of the opening and the server port you wish to access. Doing this avoids the dangers of leaving firewall ports open permanently unnecessarily.

By default, Cloud 66 gateway servers (eg. 54.84.166.97) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](https://help.cloud66.works/rails/tutorials/1950-09-26-implementing-faye.html). Editing and removing the default firewall rules is disabled to secure accessibility to the servers at all times.






### Add a firewall rule

To add your own rules, click _Add a new firewall rule_. You can input single IP addresses or ranges, and the dropdown allows you to choose servers by name (eg. _Rails servers_).









### Microsoft Azure notice

If you want to open a custom port to you server in Microsoft Azure, you must add an endpoint for that VM in your Azure management portal after adding the rule in your Cloud 66 dashboard.









## Configure network traffic

By default, all traffic is allowed to visit your web servers on ports 80, 443, 8080 and 8443. The _Traffic_ tab allows you to control this, and has two sections: _allowed_ traffic sources and _denied_ traffic sources.

For each of these fields, you can enter a single IP address, a comma-separated list, or range. For example:





```
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
```










### Allowing traffic

Repeated visits within a short time period on the ports mentioned above (more than 1,500 hits per minute from a single IP address) are blocked by ActiveProtect. By allowing traffic for a specific IP address or range, this limit is ignored. You can also choose not to block traffic coming from Cloudflare edge servers.






### Denying traffic

You can block specific IPs and/or ranges from visiting the ports mentioned above.






## Using network redirects

The _Redirects_ tab helps you perform simple but frequently used network redirects. These include redirecting traffic from _HTTP_ to _HTTPS_ or adding or removing the _www_ prefix from your domain name.






### Maintenance mode

When you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

During such times, you can set your stack into _maintenance mode_, which puts up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

To supply your own maintenance page, simply place your file in the following path of your repository:

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab





```
/.cloud66/maintenance.html
```










### Redirect HTTP to HTTPS

You can easily [add your SSL certificates](https://help.cloud66.works/{{ include.product }}/addins/ssl/) to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab 






### WWW or non-WWW in your URL

Some sites serve traffic on `www.domain.com`, while others use the bare `domain.com`. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to `www.domain.com` to `domain.com`, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab

