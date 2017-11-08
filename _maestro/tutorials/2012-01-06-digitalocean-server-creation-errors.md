---
menuheaders: [ "Background", "HTTP Error 401 or HTTP Error 403", "Note", "HTTP Error 404 *or* Size is not available in this region", "1. Your DigitalOcean account has reached the default 5-server limit", "2. DigitalOcean have limited new server creation", "3. DigitalOcean has experienced an internal error", "Note", "Timeout Errors", "Note", "HAProxy Load Balancer Errors" ]
layout: post
template: one-col
title: DigitalOcean server creation errors
categories: Tutorials
lead: ""
legacy: false
permalink: /:collection/:path
---


## Background
During a Cloud 66 deployment, if you've connected up your DigitalOcean API credentials and are deploying to your DigitalOcean cloud, we will use the DigitalOcean API to create your specified servers.
This process may occasionally fail however due to one of the following reasons:


## HTTP Error 401 or HTTP Error 403

This error indicates that your credentials are no-longer correct for your API account. When you initially enter your DigitalOcean API credentials into Cloud 66 we validate that those credentials are correct. However, it is possible that your credentials have been altered on the DigitalOcean side (either by the user, a memeber of their team or in some cases by DigitalOcean themselves)

The resolution for this error is to update your DigitalOcean Cloud API credentials via the Cloud 66 UI.

### Note

At the time of writing, viewing your API credentials via the DigitalOcean UI will cause a new set of credentials to be generated.


## HTTP Error 404 *or* Size is not available in this region

This error indicates that the action we've attempted to perform is not currently possible. The reasons for this error are varied - below are the most common causes.


### 1. Your DigitalOcean account has reached the default 5-server limit

By default, DigitalOcean accounts are limited to a maximum of five servers only. This limit can easily be increased, but this can only be done by contacting DigitalOcean support directly.


### 2. DigitalOcean have limited new server creation

DigitalOcean may have suspended the creation of your particular server size in your chosen datacenter. This happens periodically as a way for DigitalOcean to manage their growth and prevent over-subscription of particular sizes in particular regions. 
User's should be able to validate whether or not their server can be created by attempting to create the corresponding server manually via the DigitalOcean UI. 

If the chosen size/datacenter remains unavailable for an extended period of time, it is suggested that an alternative size or datacenter is used.


### 3. DigitalOcean has experienced an internal error

As DigitalOcean are still a relatively new company, their rapid growth inevitably causes some growing pains. This is sometimes evident in errors during server creation.

The resolution for this case is simply to re-attempt to deploy a new stack to the same size/datacenter via Cloud 66.



### Note

Please contact Cloud 66 support if you continually receive DigitalOcean deployment errors via Cloud 66 but you are able to create the server of the same datacenter/size manually via the DigitalOcean UI.


## Timeout Errors

Occasionally - again normally simply due to growing pains, DigitalOcean has a backlog of servers that are queued for creation. This could result in a new server creation taking longer than 20 minutes (the default Cloud 66 timeout for server creation on DigitalOcean).
This will result in a timeout error. 

Please check your DigitalOcean account to see if your server is still pending creation. Please contact DigitalOcean support if your server appears to be stuck in the creation step.
Once the DigitalOcean backlog of queued server actions has cleared, your server creation should be possible again, and you can re-attempt to deploy via Cloud 66.



### Note

Remember to manually remove any old servers via the DigitalOcean UI that were abandoned due to previously failed deployments


## HAProxy Load Balancer Errors

When Cloud 66 deploys a load balancer to DigitalOcean, we will be creating a new server, and provisioning it with HA Proxy. The new server will be created as the smallest possible server, in the same region as your web-servers. 
As the new server creation is subject to the same errors as above, in the case of load balancers, you can simply remove your load balancer and attempt to re-create it once the underlying root cause of your error has been dealt with appropriately.

