---
layout: post
template: one-col
title:  "Configuring for high availability"
order: 10
categories: how-to-guides/build-and-config
lead: How to configure your Maestro application for high availability with multi-master architecture
tags: ['server', 'operations']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

In order to achieve high availability for your application, you need multiple redundancy for both master and worker nodes. This means at least **three master nodes** and enough worker nodes to comfortably run your entire application at no more than 75% utilisation. If you’re not sure of how Kubernetes defines nodes, please [read our guide](/maestro/the-basics/concepts-and-terminology.html#nodes-masters--workers) on the subject before getting started.

#### Note on Kubernetes version support
<div class="notice notice-warning"><p>
Applications running Kubernetes v1.12 or lower do not support the multi-master feature on Cloud 66. If you have deployed an application via Cloud 66 before March 2019, you will need to <strong>redeploy your application "with upgrades" and choose to perform a Kubernetes upgrade (note that this will incur significant downtime as your cluster will be recreated).</strong> All applications deployed after <strong>March 2019</strong> on version v1.13 and above automatically support multi-master clusters.
</p></div>



## Adding nodes to an application

To add nodes to an existing application:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on the *Servers* tab in the main panel 
3. Click on the green **+** at the top right of the **Kubernetes Cluster** panel
4. Choose whether the new node(s) will be Master(s) or a Worker(s)
5. Choose how many new nodes to add
6. Choose the server size for the new node(s)
7. Click *Add Server* to provision your new node(s)

#### Note
<div class="notice"><p>
You can simultaneously add multiple nodes to a cluster this way, and that each of these will provision a new server with your cloud provider.
</p></div>