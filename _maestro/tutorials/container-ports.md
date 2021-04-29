---
layout: post
template: one-col
title: Mapping Container Ports 
categories: tutorials
order: 1
lead: "How to map your containers to internal and external ports"
legacy: false
tags: ["customization", "service.yml"]
permalink: /:collection/:path:output_ext
---

## Overview

In Maestro, your services run inside containers. For a service to be available to anything outside its own container, including public internet access, we need a bridge between the container's internal port and an "outside" port.

This guide explains how to set up and modify this port mapping in Maestro.

This is not limited to HTTP or web traffic. The same concepts apply if your container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).

Port mapping is a small (but important) part of a core system that underpins container management - *service networking*. If you need an introduction to the concept of Service Networking, you can find one [here](/maestro/the-basics/concepts-and-terminology.html#service-networking).

#### Note
<div class="notice notice-warning"><p>In this document, "outside" is used for any client of your service that's not inside the container. This includes your other services on different nodes.</p></div>

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting-started.html) if you're not sure how to do this.

#### Note
<div class="notice"><p>This tutorial uses the <a href="https://github.com/cloud66/maestro-demo.git">simple visit counter application</a> we've supplied on Github as a working example.</p></div>

## Mapping ports

When we set up our *demo-app* service we [configured our ports](/maestro/quickstarts/getting-started.html#configure-your-services) so that our internal port `5000` was mapped to the public port `80`. 

Now imagine that your app has evolved to offer secure web (SSL / TLS) access as well as standard web access. TLS traffic typically flows over port `443`, so we need to add this to the port mapping for our application.

There are two ways to do this:

* Using the standard *edit service* interface
* Directly modifying the `service.yml` for your application (this is only recommended for advanced users)

You can also read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help.

### Editing via the UI

To edit your ports using the standard Maestro user interface:

1. Open the Application Overview from your Dashboard
2. Click on the *Services* tab
3. Click on the *Edit service* icon next to the service you wish to configure. This will open a panel on the left-hand side of your screen.
4. Edit the ports as needed and then click *Save Service*


<img alt="Mapping container ports in Maestro" src="/assets/maestro/maestro-mapping-ports-new.gif">

### Testing your changes

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

        <section id="V2-First" class="Tabs-content js_tab_content">

<p>You can test whether this has been properly applied by looking at that the Network column of the <em>Services</em> panel.
</p>

<p>If you've followed the steps above correctly, the <strong>Network</strong> column will list both port <em>80</em> and port <em>443</em>.</p>

        </section>


        <section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<p>
You can test whether this has been properly applied to your service by clicking on the respective &#9432; icon in the <strong>App Services</strong> panel on the Application Overview.</p>

<p>If you've followed the steps above correctly, the <strong>Services Config</strong> panel will list both <em>HTTP</em> and <em>HTTPS</em>.</p>

		</section>
</div>

In order for these new settings to apply to your service, you will need to redeploy your application. To do this, click the *Build / Deploy* button on the Application Overview. 

#### Note

<div class="notice notice-warning"><p>If you actually need HTTPS traffic to be available to the outside world (not just as a demo) you will also need to <a href="/maestro/how-to-guides/security/ssl-certificate.html">set up SSL certificates</a> for your application.</p></div>

### Editing config files directly

Maestro uses a YAML file called `service.yml` to define each service inside your application(s). You can edit the content of this file directly using the Dashboard in two ways:

1. Via the *Services UI*, using the left-hand panel we described [above](#editing-via-the-ui) - but click the *YAML* tab instead of *Network & Storage*
2. Via the [Configuration Files interface](/maestro/how-to-guides/build-and-config/docker-service-configuration.html#getting-started-serviceyml) 

Note that with method 1 you are only editing the section of `service.yml` **specific to your context**. So in this case you would be editing the `ports` section of your  `service.yml`. To edit the file as a whole, you'll need to use method 2.

## What's next

* Learn how to configure for more [advanced service networking](/maestro/how-to-guides/build-and-config/service-networking.html) use cases (such as non-HTTP traffic)
* Learn how to [add a rule to the firewall](/maestro/tutorials/firewall-rule.html) to allow traffic to (or from) a non-standard port.
