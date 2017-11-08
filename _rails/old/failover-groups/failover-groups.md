---
menuheaders: [ "What is a failover group? ", "Add a failover group", "Notes", "Environment variables" ]
layout: post
template: one-col
title: Failover Groups
categories: failover-groups
lead: ""
legacy: false
permalink: /:collection/:path
---


### What is a failover group? 
A failover group is a managed quick response DNS address that automatically follows your stack web endpoints. You can connect it to up to 2 stacks at any time - a _primary_ and _backup_ stack. Should you need to switch traffic between your stacks, simply flip the switch and your traffic will flow to the _backup_ stack within 5 minutes.

There are two major use cases for this:

- **Application resilience**  
 By building and nominating a secondary backup on a different cloud provider or data center you can use a failover group to switch your visitors from the _Primary_ to the _Backup_ stack with ease.
- **Cloning stacks**  
 If you need to clone or rebuild your stack, you can use a failover group to switch your traffic to the new stack without interruptions to your service.

Failover groups follows the web head of your stack. In other words, it points to your web server when you don't have a load balancer, and if you have one, at your load balancer. Failover groups will also automatically update to point at a newly added load balancer. Similarly, it also gets automatically updated when you rename your stack or web servers.

A great way to test this is to use the `dig` command in your terminal, for example `dig 414-262-781.cloud66.net`, which allows you to see where the DNS is pointing.


## Add a failover group
To view your failover groups, click the _Failover Groups_ link on your _Dashboard_ page. To add a new failover group, click the _+_ button:

You are then be able to select a _Primary_ and a _Backup_ stack for your failover group. Once you have a failover group, add a CNAME record in your DNS provider dashboard that points at the address provided.


## Notes
- You don't need to select any stacks for your failover group. This allows you to reserve the address provided for future use. This is particularly useful when you want to keep address the same.
- Having a _backup_ stack is not mandatory.
- You can only delete a failover group when it isn't pointing at any stacks.
- Once you delete a failover group, the DNS record for it is permanently deleted and you won't be able to get the same address back.


## Environment variables

There is an environment variable called `FAILOVER_STATUS` with three different values: `online`, `offline` and `none` which means the traffic goes to this stack, does not go to this stack or this stack is not part of any failover groups, respectively.

You may have some jobs configured on both like sending an email, but you need them to be run only on the online one you can use this environment variable to prevent duplication.

