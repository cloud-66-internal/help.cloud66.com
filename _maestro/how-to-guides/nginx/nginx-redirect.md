---
layout: post
template: one-col
title: Configuring redirects in Nginx
categories: how-to-guides/nginx
order: 4
lead: "How to configure redirects for your application using Nginx"
tags: ["customization"]
legacy: false

permalink: /:collection/:path
---

## Overview

Maestro uses Nginx as both a webserver and a reverse proxy. You can configure the Nginx service to redirect traffic based on custom rules. 

The first use case (HTTPS -> HTTP) can be achieved more easily and reliably using the [redirects](/maestro/tutorials/setting-up-redirect.html) feature in the Maestro Dashboard. 

The second use case (cross-domain redirects) requires manual setup. See below for step by step instructions.

## Redirect from HTTP to HTTPS

If you only want to serve HTTPS traffic through your application, you may also want to redirect HTTP users to HTTPS.

Simply add this code to the _server_ section of your Nginx configuration using [CustomConfig](/{{page.collection}}/tutorials/custom-config.html).

```
return 301 https://$host$request_uri;
```

## Redirect between domains with HTTP and HTTPS

If you have two separate domains (eg. A and B) for your app and need to redirect traffic from domain A to B. The setup for this has two parts:

1. Create DNS records for domain A, pointing at domain B.
2. Create Nginx rules, so that visitors to domain A will be redirected to domain B. 

The method differs slightly between HTTP and HTTPS traffic, due to certificate complexities.

### For HTTP

Add a permanent redirect for visitors from domain A to domain B:

```
server {
    server_name             _;
    listen                  80;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
```


### For HTTPS

The above method will not work for HTTPS traffic, because visitors from domain A will be expecting SSL certificates for that domain, not those of domain B.

As such, users from domain A must first be presented with the SSL certificate for that domain, and then be redirected to domain B and presented with certificates for domain B.

```
{% raw %}{% if allow_ssl == true %}
server {
    server_name          *.domaina.com;
    listen               443;
    ssl                  on;
    ssl_certificate_key /etc/ssl/localcerts/domaina.key;
    ssl_certificate /etc/ssl/localcerts/domaina.crt;
    rewrite ^ https://domainb.com$request_uri? permanent;
}{% endraw %}
```

This will create a permanent redirect from domain A to B over SSL. Remember to add your key and certificate files to the location specified on your server.

