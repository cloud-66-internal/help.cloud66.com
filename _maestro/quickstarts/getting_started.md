---
layout: post
title: Getting started with Maestro
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: Deploy and manage your containers on any cloud
permalink: /:collection/:path
---

<p class="lead">
    Maestro is a full container management service. Once your images are ready we'll take care of deploying and managing your containers and infrastructure (servers, load balancers, etc).
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
        <p><strong>Container Images to deploy</strong> &mdash; These can be images you've built with Skycap or your own pre-built images that are hosted in an image repository.</p>
    </li>
    <li>
        <p><strong>A Cloud Account or Your Own Servers</strong> &mdash; See below.</p>
    </li>
</ul>

{% include general/cloud_provider_or_own_server_tabs.html %}

<h2 id="get-started">
    <a href="#get-started" class="headerlink" title="Get Started"></a>
    Lets Get Started
</h2>

<p>This guide assumes that you already have container images that you want to deploy. If you need to learn how to build images or pull existing images from a repo please read <a href="/skycap/quickstarts/getting_started.html">Getting started with Skycap</a>.</p>



<h2 id="deployment-setup">
    <a href="#deployment-setup" class="headerlink" title="Get Started"></a>
    Deployment Setup
</h2>
<p>To get started with your deployment&mdash;drill down to your app's overview page and click <em>Setup a Deployment</em>.</p>
<p>
    <img class="ContentImage" src="/assets/maestro/maestro_setup_deployment.png" alt="Start a new Maestro Deployment">
</p>


<p>The first step involves <em>choosing an environment</em> for your application.</p>

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <img class="ContentImage" src="/assets/maestro/maestro_deployment_setup.png" alt="Select an environment for your new Maestro Deployment">
    </div>
    <div class="Grid-cell">
        <p>Please choose from the standard list of environments:</p>
        <ul>
          <li>Development</li>
          <li>QA</li>
          <li>Staging</li>
          <li>Production</li>
         </ul>
    </div>
</div>

<h2 id="configuring-services">
    <a href="#deployment-setup" class="headerlink" title="Configuring Services"></a>
    Configuring Services
</h2>

<p>In the example below the application is composed of a single Rails service. This is a web app so we need to configure the Rails service to handle web traffic.</p>
<p>
    <img class="ContentImage" src="/assets/maestro/maestro_configure_service_networking.png" alt="Click the connector to configure networking">
</p>
<p>At the moment <strong>0 services</strong> are connected to the Internet. We need to change that so <em>click on the plug icon circled in red</em>.</p>

<h2 id="container-network-configuration">
    <a href="#container-network-configuration" class="headerlink" title="Configuring Services"></a>
    Container Network Configuration
</h2>

<p>The Rails service will run inside a container, we need to configure the container to respond to web traffic. A standard web server listens on port 80 for HTTP traffic and 443 for HTTPS traffic.</p>

<p>The Rails app listens to port 3000 so we should map the container port 3000 to the public Internet ports 80 and 443.</p>

<p>To accomplish this we enter the following information:</p>
<ul>
    <li><strong>Container Port</strong>:  3000</li>
    <li><strong>Public Internet Port</strong>: http:80, https:443</li>
</ul>

<div style="overflow: hidden; border: 1px solid #ddd; border-radius: 4px; width: 556px; height: 374px; padding-top: 0.5em; margin-top:2em; margin-bottom: 2em">
    <img alt="Configuring docker container and public ports" src="/assets/maestro/maestro_configure_container_ports_animated.gif">
</div>

<p>Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. <a href="/{{page.collection}}/tutorials/container-ports.html">Learn more about advanced Container Port Mapping</a></p>

<h2 id="adding-data-sources">
    <a href="#adding-data-sources" class="headerlink" title="Adding Data Sources"></a>
    Adding Data Sources
</h2>

<p>The Rails application also needs a database. This is a production app so we'll deploy the database to a separate MySQL server.

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl" style="margin-bottom: 2em;">
    <div class="Grid-cell">
        <img class="ContentImage" src="/assets/maestro/maestro_add_data_source.png" alt="Add a new database server to your stack">
    </div>
    <div class="Grid-cell">
        <h4>Add another server</h4>
        <p class="u-textSmall">Click the <em>Add Another Server</em> button and a new data source server will appear above.</p>
        <p class="u-textSmall">Next click the <em>Add Data Source</em> link.</p>
    </div>
</div>

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <div style="border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
            <img src="/assets/maestro/maestro_select_data_sources.png" alt="Adding data sources to your stack">
        </div>
    </div>
    <div class="Grid-cell">
        <h4>Adding Data Sources</h4>
        <p class="u-textSmall">Select the data source you need to install on this server. In this case <em>select MySQL</em>.</p>
        <p class="u-textSmall">PostgreSQL, MongoDB, Redis, Elasticsearch, RabbitMQ, GlusterFQ, InfluxDB are all supported as data sources.</p>
    </div>
</div>


<p>Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.</p>

<h2 id="cloud">
    <a href="#cloud" class="headerlink" title="Choosing a Cloud"></a>
    Choosing a Cloud
</h2>


<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <img src="/assets/maestro/maestro_cloud_region.png" alt="Choose a cloud and region">
    </div>
    <div class="Grid-cell">
        <p class="u-textSmall">
            Now we need to choose a cloud provider for the deployment. We'll use <em>DigitalOcean</em> and deploy the application to the <em>London, UK</em> region.
        </p>
        <p class="u-textSmall">
            You can also deploy to your own servers. First you need to <a href="/maestro/tutorials/registered-servers.html">add them as registered servers</a>.
        </p>
    </div>
</div>

<h2 id="configuring-servers">
    <a href="#configuring-servers" class="headerlink" title="Configuring Servers"></a>
    Configuring Server Size
</h2>

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <p>The server size can be set by clicking on the cog at the top right of each server.</p>
    </div>
    <div class="Grid-cell">
        <img style="margin-top: 1.6em" width="250" src="/assets/maestro/maestro_configure_servers.png" alt="Configure Server Size">
    </div>
</div>

<div style="overflow: hidden; border: 1px solid #ddd; border-radius: 4px; margin: 2em 0; max-width: 500px">
    <img src="/assets/maestro/maestro_server_size_modal.png" alt="Configure Server Size">
</div>

<p>In production environments we suggest using a server with at least 1GB of memory and 4 cores. <a href="/{{page.collection}}/references/non-recommended-server-sizes.html">Learn more about choosing the right size for your servers</a>.</p>

<h2 id="deployment">
    <a href="#deployment" class="headerlink" title="Deployment"></a>
    Deployment
</h2>

<p>Now everything is ready to go, just hit the <em>Deploy Stack</em> button.</p>

<p>If this is your first deployment you'll be prompted to enter your cloud key credentials, once you've added these the deployment will begin.</p>

<p>During the build and deployment process you can view the log to see what's happening behind the scenes.</p>

<p>
    <img src="/assets/maestro/maestro_deployment.gif" alt="Deploying your application">
</p>

<h2 id="advanced">
    Advanced Features
</h2>

<p>Information that defines how your application is deployed is accessible from <em>manifest.yml</em>. You can edit this file directly if you need to access advanced deployment features. For example advanced configuration of Cross-Origin Resource Sharing or Amazon Virtual Private Cloud and more.</p>

<ul>
    <li>
        <p><strong><a href="/maestro/how-to-guides/deployment/building-a-manifest-file.html">Manifest.yml documentation</a></strong> &mdash; including advanced configuration examples.</p>
    </li>
    <li>
        <p><strong><a href="/maestro/tutorials/container-ports.html">Container Port Mapping</a></strong> &mdash; learn more about advanced port mapping, including Non-HTTP ports (TCP and UDP)</p>
    </li>
</ul>
