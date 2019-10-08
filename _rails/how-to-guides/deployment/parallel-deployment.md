---
layout: post
template: one-col
title: Choosing a deployment strategy
categories: how-to-guides/deployment
order: 10
lead: "How to choose and set a deployment strategy for your application - serial, parallel or rolling."
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Your application's deployment strategy dictates how we push changes out to your servers. There are three strategies available:

1. Serial deployment
2. Parallel deployment 
3. Rolling deployment 

We cover how to set the strategy for your application, as well as the [pros and cons](#pros-and-cons-of-each-deployment-strategy) of each strategy below.

#### Note
<div class="notice"><p>
Cloud 66 defaults to the best available deployment strategy for your web server. For webservers that support rolling restarts (Puma, Unicorn, Passenger Enterprise) we will default to parallel deployment. For Passenger Community, we will default to serial. You can override this decision at any point choosing any of the available strategies.</p></div>

## Changing your application's deployment strategy

There are two ways to choose a deployment strategy for an app:

1. Using the Dashboard and selecting "Deploy with options"
2. Setting deployment strategy using Cloud 66 Toolbelt

### Using "Deploy with options"

You can trigger a deployment that uses any of the three strategies by clicking the *Deploy* button on your **Application Overview** page and choosing *Deploy with Options*. This will allow you to choose between the three strategies. 

**This will only apply to the current deployment** - it does not change the default deployment strategy for your app.

#### Note
<div class="notice"><p>
You won't be given the option to choose a deployment strategy unless you have multiple servers.</p></div>

### Using a deployment profile

Deployment profiles allow you to customise how your app will be deployed, including the deployment strategy it should use. 

To **create** a profile:

1. From your app dashboard, click on the green *Build* button and then the *Create New Profile* link.
2. Name the profile
3. Choose a deployment strategy
4. Choose which components will be deployed (optional)
5. Define upgrade settings (optional)
6. Save the profile

To **deploy** using a profile:

1. From your app dashboard, click on the green *Build* button 
2. Click on the name of the profile you'd like to use for this deployment

For more information on deployment profiles, please read [our reference guide](/rails/references/deploy-profiles.html).

### Using the Toolbelt command line

You can use Toolbelt to set the deployment strategy for an application. The command is `cx setting set deploy.strategy <strategy>` and valid values for the `strategy` parameter are:

- `serial`
- `parallel`
- `rolling`

This is a **persistent change** to your app's deployment strategy - the app will use this strategy for all future deployments (until you change this setting).

## How deployment strategies work

All the deployment strategies have a few things in common:

- Database migrations always occur first, regardless of strategy. Given that some of your servers will be running legacy code for a (hopefully short) period, you should follow best practice around migrations. For example, don't delete columns/tables that are currently in use by legacy code.
- By definition all three strategies require at least some of your servers to be unavailable during deployment - the only difference is how many servers, and for how long. If your application has no redundancy, we strongly recommend scaling your application up (even temporarily).

### Serial deployment

In this strategy we deploy to each server one at a time. We take each server off the load balancer and then add it back once the deployment has succeeded. If a server fails to deploy we will halt the process and alert you. 

### Parallel deployment

In this strategy we deploy to all your server simultaneously. Servers are not taken off the load balancer. If your webserver does not support zero-downtime reloads you will most likely have some downtime while your application reloads.

### Rolling deployment

Rolling deployments work as follows:

1. Your servers are split as evenly as possible into two groups
2. The first group will be taken off the load balancer, deployed to in parallel, then added back to load balancer
3. If the first group deploys successfully, the second group will then be taken off the load balancer, deployed to in parallel, then added back
4. If either group deployment fails, it will not be added back to load balancer and deployment will stop.
5. When deploying again, the previously failed group (if present) will always go first

## Pros and cons of each deployment strategy

<table class='table table-bordered table-striped'>
  <tr>
    <th width="15%">Strategy</th>
    <th>Pros</th>
    <th>Cons</th>
  </tr>
  <tr>
    <td>Serial</td>
    <td>The safest option - only one server is ever affected</td>
    <td>The slowest option with a long period of overlap between old and new code being served</td>
  </tr>
  <tr>
    <td>Parallel</td>
    <td>The fastest option with a very brief overlap of old and new code being served</td>
    <td>The riskiest strategy - a bad deploy can impair all your servers. Will result in some downtime for webservers that don't support live reloads</td>
  </tr>
  <tr>
    <td>Rolling</td>
    <td>A balance between safe and fast. Very brief overlap of old and new code being served</td>
    <td>Requires at least 4 webservers and a load balancer. Half your servers will be unavailable during deployment so load on the application needs to be managed carefully</td>
  </tr>
</table>