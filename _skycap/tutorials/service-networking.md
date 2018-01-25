---
layout: post
template: one-col
title: What is Service Networking?
categories: tutorials
lead: ""
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---

## Overview

Often times the purpose of a service inside your application is to respond to web queries from the internet. Actions like rendering and serving HTML pages or accepting HTTP POST actions are amongst the most common requirements from web services.

In a Cloud 66 for Docker stack, your services run inside containers. For this service to be available to anyone outside the container, we need to bridge it from inside to outside of the container.

This is not limited to HTTP or web traffic. The same concepts apply if your container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).



### Note

In this article, **outside world** is used for any client of your service that's not inside the container. This includes any other services on your other stacks.



## Ports inside and outside containers

Your code that runs inside of a container listens to a specific port. For example a standard setup for a web server listens to port 80 for HTTP and 443 for HTTPS traffic. A normal Rails application listens to port 3000 or 9292 by default.

Here is an example of default ports used by different programming frameworks or application servers:

  <table class="table table-bordered table-striped"> 
     <thead> 
      <tr> 
       <th> Application </th> 
       <th> Default Port </th> 
      </tr> 
     </thead> 
     <tbody> 
      <tr> 
       <td> Rack (webrick) </td> 
       <td> 3000 </td> 
      </tr> 
      <tr> 
       <td> Rack (unicorn, thin, puma) </td> 
       <td> 9292 </td> 
      </tr> 
      <tr> 
       <td> Node (Express) </td> 
       <td> 3000 </td> 
      </tr> 
      <tr> 
       <td> Java (Play) </td> 
       <td> 9000 </td> 
      </tr> 
      <tr> 
       <td> RethinkDB </td> 
       <td> 8080 </td> 
      </tr> 
      <tr> 
       <td> InfluxDB </td> 
       <td> 8083, 8086, 8090, 8099 </td> 
      </tr> 
     </tbody> 
    </table>
From the outside world (ie Internet) all of these applications (except for the DBs) listen to the normal HTTP (80) and HTTPS (443) ports so the site visitors don't need to enter port number in their browsers.

On a Cloud 66 for Docker stack, you can make the inside and outside ports map using the Container Port Mapping feature. It is a simple to use yet flexible feature that supports common TCP protocols like HTTP and HTTPS as well as custom TCP and UDP traffic.

If you set your outside world port 80 (HTTP) the 443(HTTPS) will be added automatically.


## Networking Ports

This is used to expose your service to the outside world. Outside world includes any server/computer out of the stack. So if you even have two stacks and one needs a service from the other one you need to expose your service/container. 

Without exposing the service/container will be available to other servers of the same stack without being exposed. This is possible if you use their Weave IP addresses. 

Now if you need to expose your service. This is how it should be set:

1.  Under **Container Port** you need to specify the port that your container is listening on (like 3000 for rails apps)

    You can define your exposed service ports on **Public Internet Port** box like bellow:

2.  * If your service is a web service (HTTP) and you want it to be available outside of your stack you need to set it like this:
    
       http:80,https:443
    
    * If you don't have HTTPS
    
       http:80
    
    * For non-standard ports:
    
       http:8080,https:8443
    
    * For other protocols (TCP and UDP):
    
       tcp:5785,udp:478
    
       This means that this container w ill be exposed on port 5785 for TCP connections and 478 for UDP connections

