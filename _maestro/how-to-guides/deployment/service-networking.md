---
layout: post
template: one-col
title: Configure Service Networking
categories: how-to-guides/deployment
order: 10
lead: "Advanced service network configuration and port mapping"
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---

## Overview

This guide covers more complex and advanced cases of service networking. If you've never configured a Maestro service before, consider following [our tutorial](/maestro/tutorials/container-ports.html) on port mapping first.

If you need an introduction to the concept of Service Networking, you can find one [here](/maestro/the-basics/concepts-and-terminology.html#service-networking).

## Non-HTTP ports (TCP and UDP)

If your application does not use HTTP traffic you can map ports by specifying the protocol (TCP or UDP).

Let's imagine we have a service that listens on port 5454 on UDP and we would like to make it available to the outside world on port 111. 

To achieve this via the *edit service* interface: 
1. Open the application overview page from your Dashboard
2. Click on the *Edit service* icon on the right-hand side of the *App Services* panel
3. On the **Edit Services** page, click the green *Save changes* button (you don't need to make any changes first)
4. On the **Edit port settings** page click the small planet icon to the left of the yellow *Configure service networking* panel
5. Set the *Container Port* to `5454`
6. Set the *Public Internet Port* to `udp:111`
7. Save your changes and deploy your application

If you'd prefer to make these changes directly in the `service.yml` the result would look similar to this:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 5454
            udp: 111
{% endhighlight %}

In the example below, our service listens to TCP port 8787 and we want to make it available on port 9000 to the outside world:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
{% endhighlight %}

Note that you don't need to set the protocol for the container port - that is defined by the service itself. By specifying the protocol of the *Public Internet Port* you're ensuring that requests that reach the container are using the same networking protocol as the service itself.

## Mapping multiple ports

Some services listen to multiple ports. An example is InfluxDB which listens to different ports for queries and admin controls. You can map these relationships using an array in the `service.yml`. For example:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
          - container: 8788
            tcp: 9001
{% endhighlight %}

## Examples of default ports

Some example of default ports used by popular programming frameworks or application servers:

  <table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th>Application</th> 
     <th>Default Port</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr>
     <td>Rack (webrick)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Rack (unicorn, thin, puma)</td>
     <td>9292</td>
    </tr> 
    <tr>
     <td>Node (Express)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Java (Play)</td>
     <td>9000</td>
    </tr> 
    <tr>
     <td>RethinkDB</td>
     <td>8080</td>
    </tr> 
    <tr>
     <td>InfluxDB</td>
     <td>8083, 8086, 8090, 8099</td>
    </tr> 
        <tr>
     <td>Python (Django)</td>
     <td>8000</td>
    </tr> 
   </tbody> 
  </table> 
