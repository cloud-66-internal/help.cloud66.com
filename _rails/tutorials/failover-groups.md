---
layout: post
template: one-col
title: Adding a failover group
categories: tutorials
order: 7
lead: "How to add a failover group to your application"
legacy: false
tags: ["High-availability"]
permalink: /:collection/:path
---

## Overview

A Failover Group is a managed quick response DNS address that automatically follows your application's web endpoints. 

You can connect up to two instances of an application at any time - a _primary_ and a _backup_. Should you need to switch traffic between your instances, simply flip the switch and your traffic will flow to the _backup_ application within 5 minutes.


## Adding a failover group

To view your failover groups, click the _Failover Groups_ link on your _Dashboard_ page. To add a new failover group, click the _+_ button:

You are then be able to select a _Primary_ and a _Backup_ application for your failover group. Once you have a failover group, add a CNAME record in your DNS provider dashboard that points at the address provided.


## Requirements and limits

- You don't need to select any applications for your failover group. This allows you to reserve the address provided for future use. This is particularly useful when you want to keep addresses the same.
- Having a _backup_ application is not mandatory.
- You can only delete a failover group when it isn't pointing at any applications.
- Once you delete a failover group, the DNS record for it is permanently deleted and you won't be able to get the same address back.


## Environment variables

There is an environment variable called `FAILOVER_STATUS` with three different values:

* `online` - traffic is flowing to this application
* `offline` - traffic is not flowing to this application
* `none` - this application is not part of any Failover Group

This variable allows you to configure notifications and other jobs on both applications that will only run for the app that is currently online.

## What's next?

* Understand more about the details of [how Failover Groups work](/rails/references/understanding-failover-groups.html)
* Learn how to [add a load balancer](/rails/tutorials/load-balancing.html) to your application
* Learn how to [set up your DNS records](/rails/tutorials/configure-dns.html) to work with Cloud 66