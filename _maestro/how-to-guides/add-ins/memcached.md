---
layout: post
template: one-col
title:  "Using the Memcached Add-in (V1)"
categories: how-to-guides/add-ins
lead: How to add Memcached to your application via Maestro
tags: ['Add in']
legacy: false
permalink: /:collection/:path
---

<div class="notice notice-danger"><p>PLEASE NOTE:<br/> This Add-in is only available for Version 1 of Maestro, also know as <em>CSv1</em>. Maestro version 2 applications should implement <a href="https://community.cloud66.com/t/how-do-i-add-memcached-to-my-application/54" title="An example of how to install Memcached as a Service">Memcached as a service</a></p></div>


[Memcached](http://memcached.org/) is an open source, high-performance, distributed memory object caching system, and it's easy to add to your application as an add-in.

## Add Memcached
To add Memcached to your application, access the add-ins menu, click _Memcached_ and confirm the installation. This will install Memcache on your servers for use with your application - you just need to ensure that your app is configured accordingly.

## Customize Memcached

To customize Memcached, use the below syntax in your [manifest file](/maestro/how-to-guides/deployment/building-a-manifest-file.html) and redeploy the application with `Apply security upgrades` option.

<pre class="terminal">
production:
    memcached:
        shared&#95;group: db
        configuration:
            memory: 1024
            port: 11215
            listen&#95;ip: 127.0.0.1
</pre>

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}
<div class="notice notice-danger">
	<h3>Note</h3>
	<p>For docker applications this will be added to the host not as a container.</p>
</div>
{%endif%}

## Check Memcached

You can find the details about Memcached under your `Settings & Information`, `Information` tab. Since having Memcached as a separate server will not improve performance, Cloud66 will install it on each web server, not as a standalone server.