---
layout: post
template: one-col
title: Map your Container Ports 
categories: tutorials
lead: ""
legacy: true
tags: ["customization", "service.yml"]
permalink: /:collection/:path
---



## Overview

Often times the purpose of a service inside your application is to respond to web queries from the internet. Actions like rendering and serving HTML pages or accepting HTTP POST actions are amongst the most common requirements from web services.

In a Cloud 66 for Docker stack, your services run inside containers. For this service to be available to anyone outside the container, we need to bridge it from inside to outside of the container.

This is not limited to HTTP or web traffic. The same concepts apply if your container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).

## Note

In this article, outside world is used for any client of your service that's not inside the container. This includes any other services on your other stacks.



## Ports inside and outside containers

Your code that runs inside of a container listens to a specific port. For example a standard setup for a web server listens to port 80 for HTTP and 443 for HTTPS traffic. A normal Rails application listens to port 3000 or 9292 by default.

Here is an example of default ports used by different programming frameworks or application servers:

	

		
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
   </tbody> 
  </table> 


From the outside world (ie Internet) all of these applications (except for the DBs) listen to the normal HTTP (80) and HTTPS (443) ports so the site visitors don't need to enter port number in their browsers.

On a Cloud 66 for Docker stack, you can make the inside and outside ports map using the Container Port Mapping feature. It is a simple to use yet flexible feature that supports common TCP protocols like HTTP and HTTPS as well as custom TCP and UDP traffic.


## Mapping ports from inside to the outside world

Let's imagine you have a Rails application, serving traffic on port 3000 by default. To make it available to the outside world you simple need to choose the inside port (3000) and the outside HTTP ports (80) for the service. If you would like t the service to be server on HTTPS as well, choose 443 as the port number for HTTPS for the service in the UI.

If you are using the `service.yml` file to configure your services, you can use the following format to specify the ports: `InsidePort:HTTP_Port:HTTPS_Port`. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80:443"]
{% endhighlight %}

This syntax allows you to tell Cloud 66 that you don't want the service to be available on HTTP (HTTPS only). Here is how:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000::443"]
{% endhighlight %}



### Note

For HTTPS traffic to be available to the outside world you still need to [setup your SSL certificates](/{{page.collection}}/how-to-guides/security/ssl-certificate.html).


Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}


## Non-HTTP ports (TCP and UDP)

If your application does not server HTTP traffic (like a database) you can map the ports by specifying the protocol (TCP or UDP) and the ports it listens to inside the container and the port you would like it to be available publicly.

Let's imagine we have a service that listens on port 5454 on UDP and we would like to make it available to the outside world on port 111. Here is how:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 5454
            udp: 111
{% endhighlight %}

Here is an example for a service that listens to TCP port 8787 and we want to make it available on port 9000 to the outside world:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
{% endhighlight %}


## Multiple ports

Sometimes a service can listen to multiple ports. An example is InfluxDB where it listens to differnet ports for queries and admin controls. All different options to configure ports of a service can be repeated in a YAML array. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
          - container: 8788
            tcp: 9001
{% endhighlight %}

or for HTTP / HTTPS:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80", "3001:8080"]
{% endhighlight %}

See [Service Network Settings](/{{page.collection}}/tutorials/service-networking.html) for more information on all features around Container Port Mapping.

