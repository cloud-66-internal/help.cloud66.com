---
layout: post
template: one-col
title: Deployment profiles
order: 20
categories: references
lead: "Create custom profiles that deploy only selected components of your application and/or that use alternative deployment strategies"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## What are deployment profiles?

Deployment profiles enable you to customise the deployment process for your application depending on the situation. For example, you may only want to deploy your front-end servers, and leave your databases undisturbed. Rather than manually setting this up each time you need it, you can save these settings as a profile.

## Option for deployment profiles

### Deployment Strategy

- **Parallel Deployment**: Deploy to all your servers simultaneously
- **Serial Deployment**:   Deploy to your servers sequentially.
- **Rolling Deployment**:   Deploy to your servers in two batches 

For more information on how these strategies work, please read our [detailed guide to deployment strategies](/rails/how-to-guides/deployment/parallel-deployment.html).

### Database migration

You can choose whether or not to run database migrations as part of deployments that use this profile. Read our [database management guide](/rails/how-to-guides/databases/database-management.html#control-your-rails-database-migrations) for more info. 

### Upgrades

You can choose to upgrade the components and packages that your servers are using as part of a deployment. 

This is quite likely to result in some downtime. We strongly recommend reading [our guide to the subject](/rails/how-to-guides/deployment/applying-upgrades.html) before doing this.

- **Apply Security Upgrades**: Install the latest Ubuntu security packages immediately (they are applied once a day by default).
- **Apply Ruby/Node upgrades**: Upgrade the version(s) of Ruby and Node to the latest stable version. 

