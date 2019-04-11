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

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting_started.html) if you're not sure how to do this.

#### Note
<div class="notice"><p>This tutorial uses the <a href="https://github.com/cloud66/maestro-demo.git">simple visit counter application</a> we've supplied on Github as a working example.</p></div>

## Mapping ports

When we set up our *demo-app* service we [configured our ports](/maestro/quickstarts/getting_started.html#configure-your-services) so that our internal port `5000` was mapped to the public port `80`. 

Now imagine that your app has evolved to offer secure web (SSL / TLS) access as well as standard web access. TLS traffic typically flows over port `443`, so we need to add this to the port mapping for our application.

There are two ways to do this:

* Using the standard *edit service* interface
* Directly modifying the `service.yml` for your application (this is only recommended for advanced users)

### Editing via the UI

To edit your ports using the standard Maestro user interface:

1. Open the Application Overview from your Dashboard
2. Click on the *Edit service* icon on the right-hand side of the *App Services* panel
3. On the **Edit Services** page, click the green *Save changes* button (you don't need to make any changes first)
4. On the **Edit port settings** page click the small planet icon to the left of the yellow *Configure service networking* panel
5. In the configuration pop-up, add the following to the *Public Internet Port* field, separated from the existing entry by a comma: `https:443`
6. Click *Done* and then *Save changes*

Note that the comma in Step 5 is vitally important. The end result should look like this: `http:80,https:443`

<img alt="Mapping container ports in Maestro" src="/assets/maestro/maestro-mapping-ports.gif">

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

<p>You can test whether this has been properly applied by clicking on the name of the service you just modified (<em>demo-app</em>) in the <strong>App Services</strong> panel on the Application Overview.</p>

<p>If you've followed the steps above correctly, the <strong>Services Config</strong> panel will list both <em>HTTP</em> and <em>HTTPS</em>.</p>

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

Maestro uses a YAML file called `service.yml` to define each service inside your application(s). You can edit this file directly using the Dashboard.

To edit your `service.yml`:

1. Open the Application Overview from your Dashboard
2. Click on *Configuration Files* in the right-hand panel
3. Edit the YAML directly in the editor
4. When you are done, add a commit message and click *Commit*

If you followed our Getting Started guide, your `service.yml` should initially look a lot like this:
{% highlight yaml %}
version: 2
services:
  demo-app:
    git_url: https://github.com/cloud66/maestro-demo
    git_branch: master
    ports:
    - container: 5000
      http: 80
    dockerfile_path: Dockerfile
databases:
- redis
{% endhighlight %}

To add https access, you would modify the *ports* sub-section under the *demo-app* section of *services*, adding `https: 443` on a new line. 

The end result should look like this:
{% highlight yaml %}
version: 2
services:
  demo-app:
    git_url: https://github.com/cloud66/maestro-demo
    git_branch: master
    ports:
    - container: 5000
      http: 80
      https: 443
    dockerfile_path: Dockerfile
databases:
- redis
{% endhighlight %}

In order for these new settings to apply to your service, you will need to redeploy your application. To do this, click the *Build / Deploy* button on the Application Overview. 

## What's next

* Learn how to configure for more [advanced service networking](/maestro/how-to-guides/deployment/service-networking.html) use cases (such as non-HTTP traffic)
* Learn how to [add a rule to the firewall](/maestro/tutorials/firewall-rule.html) to allow traffic to (or from) a non-standard port.
