---
layout: post
template: one-col
title: Configuring DNS
categories: how-to-guides/deployment
order: 30
lead: "How to configure your domain to work with Maestro"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Cloud 66 provides [DNS hostnames](/maestro/references/server-ip-addresses.html) for each server you deploy with us. This allows us to assign a new IP address to your application on your behalf if need be, while still maintaining the same hostname.

You will need to manage the DNS records of your domain name to ensure that it's pointing to Cloud 66. For maximum reliability, you should point it at a [failover group address](/maestro/tutorials/failover-groups.html), which allows you to switch traffic between applications quickly and easily.

Where possible, you should avoid using a DNS A-record (which points directly at an IP address). Instead, you should use CNAME records to point your domain at a hostname (either your server hostname or a failover group address). 

However, this may not be possible with your DNS provider. While CNAME records do not require hard-coded IP addresses, they are not available to root domains (eg. example.com). In other words, you would not be able to set a CNAME record pointing example.com to a Cloud 66 hostname.

To use wildcard subdomains with Cloud 66 hostnames, simply create a CNAME record pointing `*. .com` to your Cloud 66 hostname. 

## Configuring your DNS

There are three approaches to configuring your DNS - in the following recommended order:


### 1. Use a modern DNS provider

Some DNS hosts provide a CNAME-like functionality at the zone apex (root domain) using a custom record type.

For example:

- [ALIAS at DNSimple](http://support.dnsimple.com/articles/alias-record)
- [ANAME at DNS Made Easy](http://help.dnsmadeeasy.com/managed-dns/records/aname-records/)
- [ANAME at easyDNS](https://fusion.easydns.com/Knowledgebase/Article/View/190/0/aname-records)
- [ALIAS at AWS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html)

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the Cloud 66 hostname.


### 2. Use an A record

This involves using an A record to point your root domain at your load balancer and then redirecting traffic to www in Nginx.

1.  Create a CNAME record for www pointing at the Cloud 66 hostname on your load balancer.
2.  Create an A record for your root domain (eg. example.com) pointing at your load balancer IP address.
3.  ​Use [network redirects](/maestro//how-to-guides/deployment/service-network-configuration.html) to permanently redirect all traffic from example.com to www.example.com.

### 3. Subdomain redirection

This method creates a 301 permanent redirect to a specified subdomain for all root domain traffic.

1. Create a DNS forward of example.com to www.example.com.
2. Create a CNAME record with value `www` pointed at the Cloud 66 hostname.

### Important
<div class="notice notice-warning"><p>This method will not work if you are serving content with SSL and only works for standard HTTP traffic (i.e. not TCP/UDP or other protocols).</p></div>