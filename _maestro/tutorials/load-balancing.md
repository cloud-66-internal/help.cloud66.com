---
layout: post
template: one-col
title: Adding a Load Balancer
categories: tutorials
order: 8
lead: "How to add a load balancer to your application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path
---

## Overview

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your application.

## Adding a load balancer

<div class="notice notice-warning"><p>This feature is only available if you have deployed using a cloud vendor, and for <em>non-development</em> applications.</p></div>

To add a load balancer to your application: 

1. Open the **application overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Load Balancer**
4. A pop-up window will appear, explaining the process for your cloud provider. Click *Add Load Balancer* to continue.

You can now watch the logs, as usual to see the progress of the process.

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. **All your existing web servers** will automatically be added to the load balancer.

## Balancing load per service TBC

A load balancer to balance your services and they don’t have to be present on each server! Essentially Nginx will direct the requests to the service on its own machine first, if the service doesn’t exist there, then it will send it through Weave network to a server that has the service.


## Load balancer configuration

Depending on which cloud provider you use, your load balancer will be set up differently:

- Amazon AWS: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- DigitalOcean: [HAProxy](http://haproxy.1wt.eu/)
- Google Cloud Engine: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- Linode: [NodeBalancer](https://www.linode.com/nodebalancers/)
- Microsoft Azure: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- Rackspace: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- CloudA: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

## What's next?

* Learn how to add a [Failover Group](/maestro/tutorials/failover-groups.html) to your application, to further improve resilience. 
* Learn how to add a [firewall rule](/maestro/tutorials/firewall-rule.html) to your application
* Learn how to [set up a redirect](/maestro/tutorials/setting-up-redirect.html)

