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

Maestro is a full container management service. Once your images are ready we'll take care of deploying and managing your containers and infrastructure (servers, load balancers, etc).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **Container Images to deploy** &mdash; These can be images you've built with [Skycap](https://www.cloud66.com/containers/skycap) or your own pre-built images that are hosted in an image repository.
* **A Cloud Account or Your Own Servers** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html %}

<div class="notice"><p>If you don't have images or code ready, you can use this <a href="https://github.com/cloud66-samples/helloworld.git">simple web server application</a> we've supplied on Github. (You can also use this project with our next tutorial on Clusters.)
</p></div>


## Build your containers

This guide assumes that you already have container images that you want to deploy. If you need to learn how to build images or pull existing images from a repo please read <a href="/skycap/quickstarts/getting_started.html">Getting started with Skycap</a>. 

However we suggest you use a different sample application for Maestro than you did for Skycap (see the blue box above for details).

## Set up your deployment

To get started with your deployment&mdash; open to your applications overview page and click *Set up a Deployment*.

<img src="/assets/maestro/maestro_setup_deployment.png" alt="Start a new Maestro Deployment">

Next, click on *Deploy with Maestro* in the Deployment Setup panel that appears:

<img src="/assets/maestro/maestro-deployment-modal.png" style="width:60%" alt="Deploy with Maestro">

Then choose any of the standard [application environments](/maestro/how-to-guides/deployment/application-environments.html).

<img src="/assets/maestro/maestro_deployment_setup.png" alt="Select an environment for your new Maestro Deployment" style="width:60%">


## Configure your services

Our sample application is composed of a single Python service called *simple-web*. This is a web app so we need to configure the service to handle web traffic.

At the moment we can see that **0 services** are connected to the Internet. To change this we click on the plug icon to open the network setting panel.

{screencap here}

### Container Network Configuration

The *simple-web* service will run inside a container, so we need to configure the container to respond to web traffic. 

A standard web server listens on port 80 for HTTP traffic, so we're going to use that as our *Public internet port*

The simple-app listens to port 3000 so we should map the container port 3000 to the public Internet ports 80 and 443.

To accomplish this we enter the following information:

* **Container Port**:  3000
* **Public Internet Port**: http:80, https:443

<img alt="Configuring docker container and public ports" src="/assets/maestro/maestro_configure_container_ports_animated.gif">

Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. <a href="/{{page.collection}}/tutorials/container-ports.html">Learn more about advanced Container Port Mapping</a>

### Adding Data Sources

The Rails application also needs a database. This is a production app so we'll deploy the database to a separate MySQL server.

<img class="ContentImage" src="/assets/maestro/maestro_add_data_source.png" alt="Add a new database server to your stack">

### Add another server

Click the *Add Another Server* button and a new data source server will appear above.

Next click the *Add Data Source* link.


<img src="/assets/maestro/maestro_select_data_sources.png" alt="Adding data sources to your stack">

### Adding Data Sources

Select the data source you need to install on this server. In this case *select MySQL*.

PostgreSQL, MongoDB, Redis, Elasticsearch, RabbitMQ, GlusterFQ, InfluxDB are all supported as data sources.

Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.

## Choosing a Cloud

<img src="/assets/maestro/maestro_cloud_region.png" alt="Choose a cloud and region">

Now we need to choose a cloud provider for the deployment. We'll use *DigitalOcean* and deploy the application to the *London, UK* region.
        
You can also deploy to your own servers. First you need to <a href="/maestro/how-to-guides/deployment/registered-servers.html">add them as registered servers</a>.

## Configuring Server Size

The server size can be set by clicking on the cog at the top right of each server.

<img style="margin-top: 1.6em" width="250" src="/assets/maestro/maestro_configure_servers.png" alt="Configure Server Size">

<img src="/assets/maestro/maestro_server_size_modal.png" alt="Configure Server Size">

In production environments we suggest using a server with at least 1GB of memory and 4 cores. <a href="/{{page.collection}}/references/non-recommended-server-sizes.html">Learn more about choosing the right size for your servers</a>.

## Deployment

Now everything is ready to go, just hit the *Deploy Stack* button.

If this is your first deployment you'll be prompted to enter your cloud key credentials, once you've added these the deployment will begin.

During the build and deployment process you can view the log to see what's happening behind the scenes.

<img src="/assets/maestro/maestro_deployment.gif" alt="Deploying your application">


## Advanced Features

Information that defines how your application is deployed is accessible from *manifest.yml*. You can edit this file directly if you need to access advanced deployment features. For example advanced configuration of Cross-Origin Resource Sharing or Amazon Virtual Private Cloud and more.

* **<a href="/maestro/how-to-guides/deployment/building-a-manifest-file.html">Manifest.yml documentation</a>** &mdash; including advanced configuration examples.
    
* **<a href="/maestro/tutorials/container-ports.html">Container Port Mapping</a>** &mdash; learn more about advanced port mapping, including Non-HTTP ports (TCP and UDP)

(A quick thanks to [Baohua Yang](https://github.com/yeasy) for the simple_web app we've used in this guide)