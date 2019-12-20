---
layout: post
template: one-col
title: Choosing a deployment strategy
categories: how-to-guides/deployment
order: 30
lead: "How to choose and set a deployment strategy for your application - serial or parallel."
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Maestro supports two deployment strategies:

1. Parallel (default)
2. Fast

When you deploy in **parallel**, all the deployment tasks for the servers in your application will run in parallel. You will redeploy the entire application - including all code, pre-built images and configurations.

**Fast** Deployments *only* push changes to code and/or images.

## Fast Deployments

Fast Deployments are designed to quickly push out changes to the code of your application (for instance via a continuous deployment pipeline). When you enable Fast Deployment for an application, we will:

- Build your code into images AND/OR
- Apply updated images to services
- Run the `deploy_command` (ie. for DB Migrations)

If you have made any other changes to your application apart from changing the code, a fast deploy will not capture those changes. It is not intended to handle structural or configuration changes.

### Enabling Fast Deployments

The easiest way to trigger a Fast Deployment is using the *Deploy with Options* option under the green *Build/Deploy* button on the application dashboard. 

You can also trigger a Fast Deployment using Cloud 66 Toolbelt using the following command:

```
cx stacks redeploy --deploy-strategy fast
```
If you're planning to use this strategy regularly, you should consider creating a [deployment profile](/maestro/references/deploy-profiles.html) to make triggering Fast Deployments quicker. You can do this via the *Deploy with Options* menu by clicking the *Save these deployment options?* link. 

Remember you can also trigger deployment profiles using Toolbelt:

```
cx stacks redeploy --deployment-profile my-fast-deploy
```

