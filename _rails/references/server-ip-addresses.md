---
layout: post
template: one-col
title: Server IP addresses and hostnames
categories: references
order: 10
lead: "How server IP addresses and hostnames are allocated and managed in Cloud 66 for Rails"
legacy: false
tags: ["security"]
permalink: /:collection/:path
---

## Cloud 66 Agent

### Important

Some cloud providers assign a new IP address to restarted servers


Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the `WEB_ADDRESS_INT` and `WEB_ADDRESS_EXT` environment variables (among others) when necessary.

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB_ADDRESS environment variable, which by default is set to `{{WEB_ADDRESS_INT}}` but can be modified by the user.


## New IP addresses

If the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address subsequently change, we are notified by the agent, which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, ActiveProtect is reconfigured and DNS records are updated accordingly. Furthermore, if required, the load balancer is updated to serve the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the stack.


## Cloud 66 hostnames

Every server fired up with Cloud 66 has a unique animal-themed name. This should help you find and identify your server quickly in your stack. All servers are accessible by their Cloud 66 DNS name: `[server_name].[stack_name].[environment].c66.me`. For example, the DNS could look like `tiger.myapp.test.c66.me`.

Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like `[stack_name].[environment].c66.me`. For example, the DNS could look like: `myapp.test.c66.me`. Production stacks don't have the environment in their names, for example `myapp.c66.me`.


## Finding your Cloud 66 hostname

To find your Cloud 66 hostname, start by visiting your stack detail page. From there, click into the web server group for the server you would like the hostname for (eg. _Rails server_). Next, click the name of your server. This page displays your server _Primary address_ (hostname) as well as the _Secondary address_ (IP address).

