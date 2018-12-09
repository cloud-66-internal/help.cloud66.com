---
layout: post
template: one-col
title: Scaling your GlusterFS cluster
categories: how-to-guides/databases
lead: ""
legacy: true
tags: ["GlusterFS"]
permalink: /:collection/:path
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>


You can scale up/down your GlusterFS cluster through cloud66 dashboard.
When you are scaling up, cloud66 will add servers to your cluster based on replica_count(i.e if your replica_count is 2, the number of servers could be 2,4,6,....). After Server deployment finished, cloud66 will create new bricks for current volumes and add them to _GlusterFS cluster_.
When you are scaling down, cloud66 will remove the server (and all related servers which scaled up with this server) and remove their bricks for current volumes from _GlusterFS Cluster_


## Configure a GlusterFS replica_count

You can specify replica_count when you are adding GlusterFS by addins. If you are using manifest to add GlusterFS, you can add replica_count in configuration.



### Note

You can not change replica_count after GlusterFS added to your stack.


