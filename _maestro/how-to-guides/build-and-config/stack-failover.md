---
layout: post
template: one-col
title: Using failover groups
categories: how-to-guides/build-and-config
order: 30
lead: "How to set up and use a failover group"
legacy: false
tags: ["high-availability"]

permalink: /:collection/:path:output_ext
---

## Setup the failover group

As with any migration, you will need to deal with moving your code, data, and traffic. 


### 1. Code

Clone your existing application to a different cloud vendor or data center, and set it into [maintenance mode](/maestro/how-to-guides/build-and-config/service-network-configuration.html) to prevent it from serving content. We highly recommend that you build an application with similar server specifications to your main application to avoid issues during a switch. 


### 2. Data

Enable database replication between your applications - this will set up a master/replica architecture between your applications, whereby the replica is an exact duplicate of the master at all times. 


### 3. Traffic

Use [Failover Groups](/maestro/tutorials/failover-groups.html) to make it easy for you to switch between applications. By pointing your domain at the Failover address, you will be able to switch your traffic between applications at the click of a button.


## How to use the failover application

If and when your main application fails, you will need to switch to the failover application.

1.  Set your main application into [maintenance mode](/maestro/how-to-guides/build-and-config/service-network-configuration.html), to prevent new data being written to it.
2.  Turn off the database replication
3.  Make your [database replica a master](/maestro/references//toolbelt/toolbelt-commands.html#databases-promote-slave) - this will allow data to be written to the database.
4.  Turn off [maintenance mode](/maestro/how-to-guides/build-and-config/service-network-configuration.html) on your failover application.
5.  Use your [Failover group](/maestro/tutorials/failover-groups.html) menu to switch your traffic to the failover application. The TTL on the Failover address is 5 minutes, so you should see your users on the new application momentarily.