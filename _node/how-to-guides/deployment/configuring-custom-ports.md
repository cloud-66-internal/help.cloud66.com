---
layout: post
template: one-col
title: Configuring custom ports
categories: how-to-guides/deployment
lead: "How to configure custom ports for a Cloud 66 Node application"
order: 10
legacy: false
tags: ["websocket"]
permalink: /:collection/:path:output_ext
---

## Overview

Node for Cloud 66 is designed to be a simple, hands-off solution for deploying Node applications. As such the complexity around exposing and using ports is largely automated and not editable.

If you need more control over the ports used by your application and its components, you have two options:

1. Migrate your Node application to [Cloud 66 Maestro](https://www.cloud66.com/containers/maestro/) which is designed for exactly this use case (we'll give you 4 weeks free to test it out)
2. Edit your application's Dockerfile to expose ports

## Managing ports via your Dockerfile

Node for Cloud 66 creates a Dockerfile for each app deployed. You can access this file via your dashboard:

1. Open your application overview
2. Click on *Configuration* in the right-hand panel
3. Click on the *Configuration Files* tab
4. Click on the *Dockerfile* sub-tab

You can open ports to your application using the [EXPOSE instruction](https://docs.docker.com/engine/reference/builder/#expose) in your Dockerfile. For example:

{% highlight ruby %}
EXPOSE 7080/tcp
EXPOSE 7080/udp
{% endhighlight %}

...will "open" port 7080 to both TCP and UDP traffic. When your app is next "published" (deployed) this port will be enabled. 

Remember you will need to configure both your application and Nginx to route and accept requests on whatever ports you set up this way.