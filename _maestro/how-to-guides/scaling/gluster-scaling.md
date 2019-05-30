---
layout: post
template: one-col
title: Scaling GlusterFS clusters
categories: how-to-guides/scaling
lead: "How to scale GlusterFS clusters within Maestro"
legacy: false
tags: ["GlusterFS"]
permalink: /:collection/:path:output_ext
---

#### Note
<div class="notice"><p>This guide assumes that you have used the <a href="/maestro/how-to-guides/add-ins/glusterfs.html">Maestro Add-in for GlusterFS</a>. If you have configured the service manually then this will not apply</p></div>

You can scale your [GlusterFS clusters](/maestro/how-to-guides/add-ins/glusterfs.html) (up or down) using the Maestro dashboard:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on the *Servers* tab at the top of the main panel
3. Find your GlusterFS server(s) and click the green **+** to scale up.

When you are scaling up, cloud66 will add servers to your cluster based on `replica_count`(i.e if your `replica_count` is 2, the number of servers could be 2,4,6...). 

After Server deployment is finished, Maestro will create new bricks for current volumes and add them to _GlusterFS cluster_.

When you are scaling down, Maestro will remove the server (and all related servers which scaled up with this server) and remove their bricks for current volumes from _GlusterFS Cluster_


## Configure GlusterFS replica_count

You can specify `replica_count` when you configure the [GlusterFS Add-in](/maestro/how-to-guides/add-ins/glusterfs.html). If you are using a manifest to add GlusterFS, you can add replica_count to your `manifest.yml`.


#### Note
<div class="notice notice-warning"><p>You cannot change <code>replica_count</code> after GlusterFS has been added to your application.</p></div>


