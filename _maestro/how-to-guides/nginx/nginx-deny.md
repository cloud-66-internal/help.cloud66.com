---
layout: post
template: one-col
title: Enabling IP access control via Nginx
categories: how-to-guides/nginx
order: 3
lead: "How to restrict access to your application by IP address using Nginx"
legacy: false
tags: ["nginx"]
permalink: /:collection/:path:output_ext
---

## Overview

In addition to protecting your application (or parts of it) using [HTTP basic authentication](/maestro/how-to-guides/nginx/nginx-auth.html), you can use [CustomConfig](/maestro/tutorials/custom-config.html) to block (or allow) access to your application based on IP addresses.

#### Read this first
<div class="notice notice-warning"><p>You can do this more quickly and reliably using Maestro's built-in <a href="/maestro/tutorials/IP-filtering.html">IP filtering</a> feature. This guide is only for users who prefer to configure Nginx directly. 
</p></div>

## Set up IP access control manually

To accomplish this:

1.  Create a file in the root of your repository called blockips.conf. This file will contain the IPs you wish to allow/deny.

2.  To deny a single IP address, you can use the following syntax:
```shell
deny 1.2.3.4;
```
You can also deny an entire subnet as follows:
```shell
deny 91.212.45.0/24;
```
Should you wish to only allow access to your IP address, do this:
```shell
allow 1.2.3.4/24; deny all; 
```
There are lots of resources about this syntax on the Internet in case you need more guidance.

3.  Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](/maestro/how-to-guides/nginx/nginx-modules.html).
	
	You will want to add the following code within the http section of your configuration, for example on line 22.
```shell
{% raw %}include {{ deploy_to }}/current/blockips.conf;{% endraw %}
```
This will read the file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.
