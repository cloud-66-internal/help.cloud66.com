---
layout: post
title: Getting started with Maestro
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: How to deploy your application using Maestro
permalink: /:collection/:path
---

Maestro is a full container management service. Once your Docker images are ready we'll take care of deploying and managing your containers and infrastructure (servers, load balancers, etc).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **Container Images to deploy** &mdash; These can be images you've built with [Skycap](https://www.cloud66.com/containers/skycap) or your own pre-built images that are hosted in an image repository.
* **A Cloud Account or Your Own Servers** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html %}

<div class="notice"><p>If you don't have images or code ready, you can use this <a href="https://github.com/cloud66/maestro-demo.git">simple visit counter application</a> we've supplied on Github. (You can also use this project with our next tutorial on Clusters.)
</p></div>


## Build your containers

This guide assumes that you already have container images that you want to deploy. If you need to learn how to build images or pull existing images from a repo please read <a href="/skycap/quickstarts/getting_started.html">Getting started with Skycap</a>. 

However we suggest you use a **different sample application** for Maestro than you did for Skycap (see the blue box above for details).

## Set up your deployment

To get started with your deployment: 

1. Open to your applications overview page and click *Set up a Deployment*. 
2. Click on *Deploy with Maestro* in the Deployment Setup panel that appears:
3. Choose any of the standard [application environments](/maestro/how-to-guides/deployment/application-environments.html)

<img alt="Setting up a deployment in Maestro" src="/assets/maestro/maestro-getting-started-1.gif">

## Configure your services

Our sample application is composed of a single Python service that we've named *demo-app*. This is a web app so we need to configure the service to handle web traffic.

At the moment we can see that **0 services** are connected to the Internet. To change this we click on the plug icon to open the network setting panel.

### Container network configuration

The *demo-app* service will run inside a container, so we need to configure that container to respond to web traffic. A standard web server listens on port 80 for HTTP traffic, so we're going to use that as our *Public Internet Port*

The *demo-app* service listens to port 5000 so we need set the *Container Port* to **5000** to the *Public Internet Port* to **80**:

<img alt="Configuring container networking in Maestro" src="/assets/maestro/maestro-getting-started-2.gif">

### Adding a data source

The application also needs a redis data store, so we should add one now:

1. Click on *Add Data Source*
2. Select *Redis* from the list of available source 
3. Click *Done*

<img alt="Adding a data source to an app in Maestro" src="/assets/maestro/maestro-getting-started-3.gif">

Our application is now configured and ready to deploy.

## Choose a cloud provider

Now we need to choose a cloud provider as a target for the deployment. You can do this using the dropdowns in the right-hand column.

For this demo we'll use *DigitalOcean* and deploy the application to the *London, UK* region.
        
<img src="/assets/maestro/maestro_cloud_region.png" alt="Choose a cloud and region">

You can also deploy to your own servers. First you need to <a href="/maestro/how-to-guides/deployment/registered-servers.html">add them as registered servers</a>.

## Configure server size

The server size can be set by clicking on the cog at the top right the server.

<img alt="Selecting a server size in Maestro" src="/assets/maestro/maestro-getting-started-4.gif">

Learn more about [choosing the right size](/{{page.collection}}/references/non-recommended-server-sizes.html) for your servers.

## Deploy your app

Now everything is ready to go, just hit the *Deploy Stack* button.

If this is your first deployment you'll be prompted to enter your access credentials for your cloud hosting provider. Once you've added these the deployment will begin.

During the build and deployment process you can view the log to see what's happening behind the scenes.

<img src="/assets/maestro/maestro_deployment.gif" alt="Deploying your application">

#### Note
<div class="notice notice-warning"><p>The initial deployment process may take 15 minutes or more, because Maestro needs to provision the new server from the ground up. You can close the window and Maestro will send you an email when the deployment is complete.</p></div>

## Test your app

Once deployment is complete, you can test your application by visiting your app's detail page and clicking on the *Visit Site* link in the panel at the top of the Services tab. 

If youre deployment has worked as planned, you will see the following text:

"Hello World! I have been seen X times" 

...(where X is a positive integer). If you refresh the page, that number should increase by one. This dynamic data is coming from the redis data store that we added to the app.

## What's next?

* Containers can also serve non-HTTP traffic. TCP and UDP protocols are also supported. Learn more about Container Port Mapping in our [detailed tutorial](/maestro/tutorials/container-ports.html)

* Your deployment configuration is stored in a *manifest.yml* file. Learn how to [edit your manifest file](/maestro/how-to-guides/deployment/building-a-manifest-file.html) to access advanced deployment features.