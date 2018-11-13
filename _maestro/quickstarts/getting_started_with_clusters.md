---
layout: post
title: Getting started with Maestro Clusters
categories: quickstarts
order: 3
legacy: false
tags: ["getting started", "cluster", "maestro cluster"]
lead: Create a Maestro cluster for shared server application deployments"
permalink: /:collection/:path
---

A Maestro cluster is a "blank" Kubernetes infrastructure, with no application specific components. You can use a cluster to deploy multiple applications to the same set of servers. 

#### Note
<div class="notice"><p>Clusters are only compatible with applications built using Maestro <a href="/maestro/the-basics/about-maestro.html">Version 2</a>.</p></div>


## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **Container Images to deploy** &mdash; These can be images you've built with [Skycap](https://www.cloud66.com/containers/skycap) or your own pre-built images that are hosted in an image repository.
* **A Cloud Account or Your Own Servers** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html %}

## Creating a Maestro cluster

To get started with your cluster &mdash; firstly switch to the <em>Clusters dashboard</em> in main navigation bar at the top of the page.

Then, click the green *new cluster* button in the right-hand panel.

<img alt="Creating a Maestro Cluster" src="/assets/maestro/maestro-gsw-clusters-1.gif">

Now you're going to be creating your first Maestro cluster. The first step involves <em>giving your cluster a name</em>. Lets call our cluster <em>awesome-cluster</em>

<p>We're also going to have to select our deployment target now. We can choose from our pre-added cloud providers or <a href='/maestro/how-to-guides/deployment/registered-servers.html#register-a-server'>registered servers</a> (or click <em>add cloud</em> to add a new cloud provider now). In our example we're choosing to deploy to Digital Ocean</p>

<p><img class="ContentImage" src="/assets/maestro/maestro_cluster_new_form_top.png" alt="Choose name and target cloud"></p>

<p>Based on our cloud/registered server selection above, we can now choose the specific information for our new cluster. In this example we'll choose the Amsterdam 3 Region, small servers, and a count of 3. This means that our cluster that we create will be comprised of three servers</p>

<p>Note: the first server in your cluster will always be your kubenetes master node. You can decide at a later date if you would like this server to share application workloads or only run kubernetes management tasks</p>

<p><img class="ContentImage" src="/assets/maestro/maestro_cluster_new_form_bottom.png" alt="Choose server specifics"></p> 

<h2 id="deployment">
    <a href="#deployment" class="headerlink" title="Deployment"></a>
    Deployment
</h2>

<p>Once you're happy with your choices; hit the <em>Create Cluster</em> button to start building your new Maestro cluster!</p>

<p>
    <img src="/assets/maestro/maestro_cluster_deploy_start.png" alt="Deploying your application">
</p>

<p>During the build and deployment process you can view the log to see what's happening behind the scenes. You can also drill down to specific servers to see what is going on there during deployment</p>

<p>
    <img src="/assets/maestro/maestro_cluster_deploy_middle.png" alt="Seeing your deployment logs">
</p>

<p>When your deployment is complete you'll have your first Maestro cluster up and running!</p>

<p>
    <img src="/assets/maestro/maestro_cluster_deploy_end.png" alt="Fully created Maestro cluster">
</p>

## Configuring the Cluster

<p>As we have a cluster that has multiple servers, we can easily switch our master node from a <em>shared master</em> to a <em>dedicated master</em>. To do this we simply click the <em>shared master</em> dropdown link and select "Yes! Switch to Dedicated Master"</p>

<p>
    <img src="/assets/maestro/maestro_cluster_switch_dedicated.png" alt="Switch master to dedicated">
</p>

<p>We can also easily add additional server nodes to this cluster or remove existing server nodes from this cluster. Note that the master server can not currently be removed.</p>


## Deploying applications to the cluster

If you now create a new Maestro application (see [Getting Started with Maestro for help with this(/maestro/quickstarts/getting_started.html)) at the point where you can select your Cloud provider, you will now see additional items clusters. Select your cluster, and deploy your application!

<img src="/assets/maestro/maestro_cluster_deploy_application.png" alt="Deploy application to cluster">
