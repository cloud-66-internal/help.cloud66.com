---
layout: post
template: one-col
title: Scaling Elasticsearch clusters
categories: how-to-guides/scaling
lead: "How to scale an Elasticsearch cluster in Maestro"
legacy: false
tags: ["Elasticsearch"]
permalink: /:collection/:path:output_ext
---

#### Note
<div class="notice"><p>This guide assumes that you have used the <a href="/maestro/how-to-guides/add-ins/elasticsearch.html">Maestro Add-in for Elasticsearch</a>. If you have configured the service manually then this will not apply</p></div>

You can scale your [Elasticsearch cluster](/maestro/how-to-guides/add-ins/elasticsearch.html) through the Maestro dashboard:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on the *Servers* tab at the top of the main panel
3. Find your Elasticsearch server(s) and click the green **+** to scale up.

(You can also scale down by clicking the red *Delete server* icon - but take care when doing so!) 

Elasticsearch scaling works by splitting your **indices** into **shards**, and placing them on an Elasticsearch running instance called a **node** on another server. A collection of nodes is called a **cluster**. 

You specify the number of shards for individual indices when creating them, and can dynamically change the number of replicas with the API. 

By moving primary and replica shards to different nodes, Elasticsearch achieves both data redundancy and improved performance.

## Resizing Elasticsearch servers

When Cloud 66 provisions an Elasticsearch server, we configure its resource usage (such as memory) to fit the server size you initially choose. If you later change the size of that server, it can cause issues with Elasticsearch - particularly if you are reducing the capacity of the server. As such **we do not recommend resizing existing servers**. 

Instead of changing the size of the current server we recommend provisioning a new server with the desired capacity and then swapping it out with the existing one.

## General recommendations

- **It is preferable to scale to three or more servers.** This is because that in order to avoid a [split brain](https://en.wikipedia.org/wiki/Split-brain_(computing)), there must be a majority of the master eligible nodes present for the cluster to be active and elect a master node. For two nodes this number is two, so the loss of connectivity between the nodes for whatever reason will render the cluster inoperable until connectivity is restored.

- **Please make sure that all of your indices have replicas!** Elasticsearch distributes the replica shards such that if any one server goes down, a replica shard on another server will be promoted to a primary shard, so there is no loss of data. However, if the server holds the only primary shard and there are no replicas, you will lose data.

- Elasticsearch and its underlying search engine, Lucene, **are extremely RAM hungry applications**. Running them on low RAM servers is highly unadvisable, as illustrated by the next point. 

- Unlike more traditional database stores that will attempt to perform less strenuous operations if server resources are limited, **Elasticsearch assumes you give it enough resources to work with, and will crash if that is not the case**. As such, please stress test with realistic data sets for your application before using Elasticsearch in production. We cannot advise you how much resources your cluster will require, as it is very much dependent on your application.

- Scaling will produce a node that is both master-eligible, and data storing. Dedicated master or data nodes are currently not supported.

