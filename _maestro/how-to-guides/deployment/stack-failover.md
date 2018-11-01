---
layout: post
template: one-col
title: Using failover groups
categories: how-to-guides/deployment
lead: "How to set up and use a failover group"
legacy: false
tags: ["high-availability"]

permalink: /:collection/:path
---

## Setup the failover group

As with any migration, you will need to deal with moving your code, data and traffic. 


### 1. Code

Clone your existing application to a different cloud vendor or data center, and set it into [maintenance mode](/maestro/how-to-guides/deployment/service-network-configuration.html) to prevent it from serving content. We highly recommend that you build a stack with similar server specifications to your main stack to avoid issues during a switch. 


### 2. Data

Enable database replication between your stacks - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 


### 3. Traffic

Use [Failover Groups](/maestro/tutorials/failover-groups.html) to make it easy for you to switch between stacks. By pointing your domain at the Failover address, you will be able to switch your traffic between stacks at the click of a button.


## How to use the failover stack

If and when your main stack fails, you will need to switch to the failover stack.

1.  Set your main stack into [maintenance mode](/maestro/how-to-guides/deployment/service-network-configuration.html), to prevent new data being written to it.
2.  Turn off the database replication
3.  Make your [database slave a master](/maestro/references/toolbelt.html#slave-promotion-to-standalone-master) - this will allow data to be written to the database.
4.  Turn off [maintenance mode](/maestro/how-to-guides/deployment/service-network-configuration.html) on your failover stack.
5.  Use your [Failover group](/maestro/tutorials/failover-groups.html) menu to switch your traffic to the failover stack. The TTL on the Failover address is 5 minutes, so you should see your users on the new stack momentarily.