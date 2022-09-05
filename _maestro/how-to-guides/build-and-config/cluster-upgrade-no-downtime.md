---
layout: post
template: one-col
title:  "How to upgrade clusters without downtime"
categories: how-to-guides/build-and-config
order: 30
lead: How to upgrade Kubernetes clusters without downtime
permalink: /:collection/:path:output_ext
---

## Overview 

It’s possible to upgrade both major and minor versions of Kubernetes running on your cluster without any downtime if you follow the instructions below. 

<div class="notice notice-warning"><p markdown="1">
Never step up more than one major version level at a time - instead run this process multiple times.
</p></div>

## Preparing for the upgrade

This upgrade method revolves around scaling up new servers and swapping them out with the current servers (which are then decommissioned). As such it’s important to prepare thoroughly to avoid any possible downtime. 

### Check your current version

First, confirm which version of Kubernetes your application is currently running. One easy way to do this is via the Cloud 66 Dashboard:

1. Log into your Dashboard and click on your app
2. Click on ⚙️ *Settings & Information* in the right-hand column 
3. Next to **Application Type**, click the *View information* link
4. Scroll down to the **Kubernetes Server** panel and check the version displayed

You can also do this in the Manifest (see below) but confirming with your current live servers is the safest.

### Update your Manifest

The version of Kubernetes used by **new servers** in your cluster is set via your manifest file. For example your app’s manifest might look as follows:

```yaml
docker:
  configuration:
    kubernetes_version: 1.20.15
  servers:
...
```

To set the next major version up you would change it to:

```yaml
docker:
  configuration:
    kubernetes_version: 1.21.14
  servers:
...
```

<div class="notice"><p markdown="1">
💡 Note that you can find Kubernetes version information here: [https://kubernetes.io/releases/patch-releases/](https://kubernetes.io/releases/patch-releases/)
</p></div>

### Assess your current server capacity

Take careful note of the type, capacity and number of cluster servers - both nodes and masters. You will need to replicate this setup to fully upgrade your cluster.

## Upgrading your cluster

1. Ensure your Manifest is updated to the NEXT major version of Kubernetes (**don’t** jump more than one major version)
2. Scale up sufficient new Kubernetes servers via your Dashboard (click the *Servers* tab and then the *+ Scale up Kubernetes* button) 
3. Redeploy your app and test it carefully to ensure it’s working as expected
4. Remove the older servers one by one, while monitoring your application for stability 

You can then repeat the steps above for each major version required.

## Upgrading with downtime

If you can afford to be tolerant of some downtime, you can upgrade multiple versions in one step which is much faster, and more fault tolerant. To do this:

1. Add your desired version to your manifest
2. Log into your Dashboard, and click on your app 
3. Click Deploy, then choose Deploy with Options 
4. In the drawer that slides out, click the Options tab and then select:
- Apply Docker/Kubernetes Upgrades (if Required)
- Use My Own Versions from My Manifest
- Clean Installation - Repair/Rebuild this Cluster

This will essentially recreate your entire cluster at the version you want.