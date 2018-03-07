---
layout: post
title: Getting started with Maestro Clusters
categories: quickstarts
legacy: false
tags: ["getting started", "cluster", "maestro cluster"]
lead: Create a Maestro cluster for shared server application deployments"
permalink: /:collection/:path
---

<p class="lead">
    A Maestro cluster is a special type of Cloud 66 Maestro deployment that includes Kubernetes infrastructure components and no application specific components. You can use a cluster to deploy multiple CSv2 stacks onto the same set of servers.
</p>

<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you start, please check you have the following:</p>

<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.</p>
    </li>
    <li>
        <p><strong>Optional: Container Images to deploy</strong> &mdash; After you've created your cluster we will walk you through deploying these to your cluster through a new Maestro CSv2 deployment. These can be images you've built with Skycap or your own pre-built images that are hosted in an image repository</p>
    </li>
    <li>
        <p><strong>A Cloud Account or Your Own Servers</strong> &mdash; See below.</p>
    </li>
</ul>

{% include general/cloud_provider_or_own_server_tabs.html %}

<h2 id="creating-a-maestro-cluster">
    <a href="#creating-a-maestro-cluster" class="headerlink" title="Creating a Maestro cluste r"></a>
    Creating a Maestro cluster
</h2>

<p>To get started with your cluster &mdash; firstly switch to the <em>clusters dashboard</em> in main navigation bar at the top of the page</p>

<p><img class="ContentImage" src="/assets/maestro/maestro_cluster_top_nav.png" alt="Switch to the cluster dashboard"></p>

<p>Then, you need to click <em>new cluster</em>

<p><img class="ContentImage" src="/assets/maestro/maestro_cluster_new.png" alt="Create a new cluster"></p>

<p>Now you're going to be creating your first Maestro cluster. The first step involves <em>giving your cluster a name</em>. Lets call our cluster <em>awesome-cluster</em></p>

<p>We're also going to have to select our deployment target now. We can choose from our pre-added cloud providers or <a href='/maestro/tutorials/registered-servers.html#register-a-server'>registered servers</a> (or click <em>add cloud</em> to add a new cloud provider now). In our example we're choosing to deploy to Digital Ocean</p>

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

<h2 id="configuration">
    <a href="#configuration" class="headerlink" title="Configuration"></a>
    Configuring the Cluster
</h2>

<p>As we have a cluster that has multiple servers, we can easily switch our master node from a <em>shared master</em> to a <em>dedicated master</em>. To do this we simply click the <em>shared master</em> dropdown link and select "Yes! Switch to Dedicated Master"</p>

<p>
    <img src="/assets/maestro/maestro_cluster_switch_dedicated.png" alt="Switch master to dedicated">
</p>

<p>We can also easily add additional server nodes to this cluster or remove existing server nodes from this cluster. Note that the master server can not currently be removed.</p>


<h2 id="deploying-to-cluster">
    <a href="#deploying-to-cluster" class="headerlink" title="Deploying applications to the cluster"></a>
    Deploying applications to the cluster
</h2>

<p>If you now create a new Maestro application (<a href='/maestro/quickstarts/getting_started.html'>Maestro quickstarts guide</a>) at the point where you can select your Cloud provider, you will now see additional items at the bottom of the list containing your available clusters. Select your cluster, and deploy your application!</p>

<p>
    <img src="/assets/maestro/maestro_cluster_deploy_application.png" alt="Deploy application to cluster">
</p>
