---
layout: post
title: Getting started with Maestro Clusters
categories: quickstarts
order: 3
legacy: false
tags: ["getting started", "cluster", "maestro cluster"]
lead: A step by step tutorial that guides you through deploying a Kubernetes cluster. Maestro Clusters let you to deploy multiple applications to the same set of servers.
permalink: /:collection/:path:output_ext
---

A Maestro Cluster is a "blank" instance of Kubernetes infrastructure - i.e. with no application specific components installed. You can use a Cluster to deploy multiple applications to the same set of servers.

#### Note
<div class="notice"><p>Clusters are only compatible with applications built using Maestro <a href="/maestro/the-basics/about-maestro.html">Version 2</a>.</p></div>


## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **Application code and/or pre-built images** &mdash; Application code should be hosted in a (secure) publicly accessible git repository and pre-built images should be hosted in image publicly accessible repositories.
* **A Cloud account linked to Cloud 66 or your own servers set up** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html %}

## Creating a Maestro Cluster

To get started with your cluster &mdash; firstly switch to the <em>Clusters dashboard</em> in main navigation bar at the top of the page.

Then, click the green *new cluster* button.

<img alt="Creating a Maestro Cluster" src="/assets/maestro/maestro-gsw-clusters-1.gif">

Next, give your cluster a name that will make it easy to identify. Then, choose the deployment target for your cluster. You can choose one of your existing cloud providers, or click <em>Add Clouds</em> to add a new cloud provider.

You can also use your own server - although you will need to [register it](/maestro/how-to-guides/deployment/registered-servers.html#register-a-server) first. In our example we're choosing to deploy to Digital Ocean.

<p><img class="ContentImage" src="/assets/maestro/maestro_cluster_new_form_top.png" alt="Choose name and target cloud"></p>

Depending on which cloud or registered server you selected above, we can now choose options for our new cluster, such as region and capacity. In this example we'll choose *3* servers with 2GB of RAM each in the Amsterdam 3 Region.

<img class="ContentImage" src="/assets/maestro/maestro_cluster_new_form_bottom.png" alt="Choose server specifics">

#### Note
<div class="notice"><p>The first server in your cluster will always be your Kubernetes master node. You can decide later if you would like this server to share application workloads or only run Kubernetes management tasks.</p></div>


## Deployment

Once you're happy with your choices; hit the *Create Cluster* button to start building your new Maestro cluster!

You can watch the progess of the build on your dashboard, or you can close the window and get on with other work. We will alert you via email when your cluster is up and running.

<img src="/assets/maestro/maestro_cluster_deploy_start.png" alt="Deploying your application">

During the build and deployment process you can view the log to see what's happening behind the scenes. You can also drill down to specific servers to see what is going on there during deployment.

<img src="/assets/maestro/maestro_cluster_deploy_middle.png" alt="Seeing your deployment logs">

When your deployment is complete you'll have your first Maestro cluster up and running!

<img src="/assets/maestro/maestro_cluster_deploy_end.png" alt="Fully created Maestro cluster">

## Configuring the Cluster

As we have a cluster that has multiple servers, we can easily switch our master node from a **shared master** to a **dedicated master**. To do this we simply click the *shared master* dropdown link and select *Yes! Switch to Dedicated Master*

<img src="/assets/maestro/maestro_cluster_switch_dedicated.png" alt="Switch master to dedicated" style="width:30%">

We can also easily add additional server nodes to this cluster or remove existing server nodes from this cluster.
(Note that the master server cannot be removed without deleting the entire cluster.)

## Deploying applications to the cluster

If you now create a new Maestro application (see [Getting Started with Maestro for help with this(/maestro/quickstarts/getting_started.html)) at the point where you can select your Cloud provider, you will now see additional items clusters. Select your cluster, and deploy your application!

<img src="/assets/maestro/maestro_cluster_deploy_application.png" alt="Deploy application to cluster">

## What's next?

* Learn how to add a [load balancer](/maestro/tutorials/load-balancing.html) to your application.
* Learn about using [failover groups](/maestro/tutorials/failover-groups.html) to make your application highly available
* Learn how to [deploy your service(s) in parallel](/maestro/how-to-guides/deployment/parallel-deployment.html) to speed up the deployment process.
* Your deployment configuration is stored in a *manifest.yml* file. Learn how to [edit your manifest file](/maestro/how-to-guides/deployment/building-a-manifest-file.html) to access advanced deployment features.
