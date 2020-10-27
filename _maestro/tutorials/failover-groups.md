---
layout: post
template: one-col
title: Adding a failover group
categories: tutorials
order: 7
lead: "How to add failover groups to your application"
legacy: false
tags: ["High-availability"]
permalink: /:collection/:path:output_ext
---

## Overview

A failover group is a managed, quick-response DNS address that automatically follows your application's web endpoints. 

You can connect it to up to two instances of an application at any time - a _primary_ and _backup_ instance. Should you need to switch traffic between your instances, you can flip a switch and your traffic will begin flowing to the _backup_ instance within 5 minutes.

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting-started.html) if you're not sure how to do this.

## Creating a failover group

To add your first Failover Group:

1. Click the *Failover Groups* link in the right-hand panel of the main *Dashboard* page. 
2. Click the *Add a failover group* button
3. Select your *Demo-app* as the Primary Application
4. Leave the Backup Application set to "No Secondary application yet"

You'll now be taken to a list of your Failover Groups, and you'll see the Group you just set up. 

Notice that the group has its own unique domain, separate from your application servers. If you click on that domain, you will reach the same *demo-app* that you created in our [Getting Started](/maestro/quickstarts/getting-started.html) guide. 

This is the power of Failover Groups at work - the public CNAME for your application can stay static while the underlying servers change within a matter of minutes.

## Adding a secondary application

In order to properly use a failover group, you need to have a second instance of your application running somewhere. 

The simplest way to do this is to clone the demo application. To do this:

1. Open the **Overview** page for your application
2. Click the *Clone* button below the **Application** panel on the right of the screen
3. Name the clone you're about to create
4. Click "*Create Clone* and follow the process to deploy the Secondary instance of your application

Once your Secondary has been successfully deployed:

1. Navigate back to the **Failover Groups** page
2. Click on the edit icon the the right of your only failover group
3. Set the clone application you created above as your *Backup Application using the dropdown.
4. Click *Update Group*

You'll now see that your failover group has two radio buttons - one for each of your application instances -  and that the button for your Primary instance is green. This means that it is currently receiving traffic while the Secondary is dormant. 

## Switching between instances

To switch between application instances in your failover group: 

* Click on the (grey) radio button of the Secondary instance. 
* A pop-up will open warning you about what is about to happen. 
* Click *Switch Traffic Now* to start the switching process.

After five minutes traffic will begin flowing to the Secondary instance. 

You can test this by visiting the failover address. The count of visits on your Secondary instance will be different from your Primary application. You can double check this by visiting the direct address for your Primary and comparing the visit counts. 

## How failover groups work

A failover group follows the web head of your application. In other words it points at your load balancer or, if you don't have one, your web server.

A failover group will automatically update to point at any newly added load balancer. Similarly, it is automatically updated when you rename your application or change your web servers.

A great way to test this is to use the `dig` command in your terminal, for example `dig 414-262-781.cloud66.net`, which allows you to see where the DNS is pointing.

## Requirements and limitations

- You don't need to select any applications for your failover group. This allows you to reserve the address provided for future use. This is particularly useful when you want to keep address the same.
- Having a _backup_ application is not mandatory.
- You can only delete a failover group when it isn't pointing at any applications.
- Once you delete a failover group, the DNS record for it is permanently deleted and you won't be able to get the same address back.


## Why use failover groups?

There are two major use cases for this:

- **Application resilience**  
 By building and nominating a secondary backup on a different cloud provider or data center you can use a failover group to switch your visitors from the _Primary_ to the _Backup_ instances of your application with ease.
 
- **Cloning applications**  
 If you need to clone or rebuild your application, you can use a failover group to switch your traffic to the backup instance without interruptions to your service.


## Environment variables

There is an environment variable called `FAILOVER_STATUS` with three different values: `online`, `offline` and `none` which means the traffic goes to this application instance, does not go to this application instance or that this application is not part of any failover groups, respectively.

You may have some jobs configured on both like sending an email, but you need them to be run only on the online one you can use this environment variable to prevent duplication.

