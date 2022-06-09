---
layout: post
template: one-col
title: Configuring your DNS
categories: tutorials
order: 9
lead: "How to configure your DNS with Cloud 66 for Rails"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Cloud 66 hostnames

Cloud 66 creates unique [DNS hostnames](/rails/references/server-ip-addresses.html#cloud-66-hostnames) for each server you deploy with us. These use animal names to make them more easily recognizable. For example:

```shell
puma.railsdemo.development.c66.me
walrus.myapp.production.c66.me
```

This allows you to change the servers (and therefore IP addresses) for your application without needing to change any public DNS entries.

You will need to manage the DNS records of your domain name to ensure that it's pointing to Cloud 66.

Where possible, you should avoid using a DNS A-record (which points directly at an IP address). Instead, you should use CNAME records to point your domain at a hostname (either your server hostname or a failover group address). 

However, this may not be possible with your DNS provider. While CNAME records do not require hard-coded IP addresses, they are not available to root domains (eg. example.com). In other words, you would not be able to set a CNAME record pointing example.com to a Cloud 66 hostname.

To use wildcard subdomains with Cloud 66 hostnames, simply create a CNAME record pointing `*. .com` to your Cloud 66 hostname. 

<div class="notice notice-warning"><p>You cannot call your app via the Cloud 66 host address over HTTPS. If you have a <a href="/{{page.collection}}/references/network-configuration.html#redirect-http-to-https">redirect from HTTP to HTTPS</a> turned on, you will need to turn it off first.</p></div>

### Failover hostnames

In addition to unique hostnames per server, Cloud 66 also offers [Failover Groups](/rails/tutorials/failover-groups.html) - managed, quick-response DNS addresses that automatically follow the web endpoints of applications.

Each Failover Group has a unique hostname with a 9 digit prefix (subdomain). For example `958-797-516.cloud66.net`. For maximum reliability, you should point your DNS at a Failover Group address.

## Best practices for DNS

You will need to update the DNS records for your domain to point at Cloud 66. Where possible, you should avoid using a DNS A-record (which points directly at an IP address). Instead, you should use `CNAME` records to point your domain at a Cloud 66 hostname (either your server or failover group hostname). 

However, this may not be possible with your DNS provider. While CNAME records do not require hard-coded IP addresses, they are often not available to root domains (e.g. `example.com`). In other words, you may not be able to set a CNAME record pointing example.com to a Cloud 66 hostname. See **option 2** below for a solution to this issue.

To use wildcard subdomains with Cloud 66 hostnames, simply create a CNAME record pointing `*. .com` to your Cloud 66 hostname. 


## Configuring your DNS

There are three approaches to configuring your DNS - in the following recommended order:

### 1. Use an Alias or Aname

Some DNS hosts provide a CNAME-like functionality at the zone apex (root domain) using a custom record type.

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the [Cloud 66 hostname](#cloud-66-hostnames) for your application.


### 2. Use an A record with a load balancer

This involves using an `A` record to point your root domain at your load balancer and then redirecting traffic to www in Nginx.

1.  Create a CNAME record for `www` pointing at the [Cloud 66 hostname](#cloud-66-hostnames) of your load balancer.
2.  Create an `A` record for your root domain (e.g. `example.com`) pointing at your load balancer IP address.
3.  ​Use [network redirects](/rails/tutorials/service-network-configuration.html) to permanently redirect all traffic from `example.com` to `www.example.com`.

### 3. Subdomain redirection


#### Important
<div class="notice notice-warning"><p>
This method will not work if you are serving content with SSL, and only works for HTTP traffic (i.e. not TCP or UDP). </p></div>

This method creates a 301 permanent redirect to a specified subdomain for all root domain traffic.

1. Create a DNS forward of `example.com` to `www.example.com`.
2. Create a CNAME record with value `www` to the [Cloud 66 hostname](#cloud-66-hostnames).


## What’s next?

* Learn how to set up a [Failover Group](/rails/tutorials/failover-groups.html)
* Learn how to [configure network access](/rails/tutorials/service-network-configuration.html) to your application
* Learn how to [add a load balancer](/rails/tutorials/load-balancing.html) to your application

