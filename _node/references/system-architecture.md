---
layout: post
template: one-col
title:  "Cloud 66 for Node System Architecture"
categories: references
lead: Reserved tags for additional functionality
tags: ['tags']
order: 10
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

Although Cloud 66 for Node is designed to make deploying your Node applications into a simple, abstract process, you may have some more advanced requirements and need some details on the architecture of our platform. 

Essentially Cloud 66 for Node takes your code, builds it into a container and then deploys it to your servers. The platform is built around the following technologies:

- **Docker** - manages the container(s) that host your Node application
- **Nginx** - act as a reverse proxy to distribute traffic to your application container(s)
- **ContainerNet** (based on Weave) - manages the private network between your containers
- **ElasticDNS** - DNS-based service discovery

## Docker

Cloud 66 uses [Docker](https://www.docker.com/) as our container engine. It is the market-leading solution for containerization. Why do we use containers? Because they make deploying applications simpler, more reliable and more easily scalable. As Docker puts it: "containers are a standardized unit of software that allows developers to isolate their app from its environment, solving the 'it works on my machine' headache."

## NGINX - traffic distribution

The external traffic to your server(s) is distributed by a Nginx reverse proxy for each upstream on HTTP and HTTPS. You can define which ports each service listens on (if any) using the `ports` directive below. If you have multiple containers running for your service(s), round-robin will be used to distribute traffic between them (providing load balancing). Should you have multiple services listening on the same external port, the `traffic_matches` directive is used to direct traffic to a specific service based on the host name.

## ContainerNet

ContainerNet is a private and secure network (based on [Weave](http://weave.works/)) between all containers across all the servers and components in your stack, including databases. This network provides an internal IP address to each container, automatically updating with DHCP and DNS and is fully integrated with the [life-cycle management of your services](/{{page.collection}}/tutorials/service-network-configuration.html)

### Encryption

Weave includes a secure, performant authenticated [encryption mechanism](http://blog.weave.works/2015/06/16/weave-net-cryptography-faq/) which we automatically configure on your behalf, so you don’t have to take any custom encryption actions yourself.

## ElasticDNS

ElasticDNS sits on top of ContainerNet to provide simple DNS-based service discovery without having to change your code. This service consists of two parts: a small client and a central service. The client has a DNS server and local cache, and runs in a container on your server(s). It serves DNS queries ending with `.cloud66.local` by making a query to the central service and caching the results for their [TTL duration](http://en.wikipedia.org/wiki/Time_to_live). This means that you can call `api.cloud66.local` to contact a container running your API service for example. ElasticDNS knows your infrastructure and your datasources are also added to the service discovery. For example your MySQL database can be discovered using the DNS name `mysql.cloud66.local`, MongoDB can be found using `mongodb.cloud66.local`.

As ElasticDNS is centrally backed, it also knows about the caller, which is important when you have multiple versions of your application running at any given moment (during deployment for example). Consider the following scenario: you have an app consisting of 2 services: a `web` service (accessible externally) and an `api` (used by the web service internally) service. Every time you deploy your application a new version of both services is rolled out to your servers.

When a deployment happens the load balancer for the externally available services (like `web` in this case) is instructed to switch new traffic to the new containers while still serving the existing traffic with the old containers. So if a visitor to your site is in the middle of a large file upload, it is not going to be interrupted. At this point you have 2 versions of your web and 2 versions of your api service up and running.

ElasticDNS is clever enough to know which version of the app is running in a container. So if an **old** web container asks for `api.cloud66.local` it will get the address to an **old** api container, but if a **new** web container asks for the same thing, it will get the address to a **new** api container.