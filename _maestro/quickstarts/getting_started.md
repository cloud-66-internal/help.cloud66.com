---
layout: post
title: Getting started with Maestro
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: How to deploy your application using Maestro
permalink: /:collection/:path:output_ext
search_title: Getting started with Maestro
search_description: A step by step tutorial that walks you through deploying a demo application with Maestro. The best place to get started!
product: Maestro  
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


## Choosing application type

New users will be show the product selection wizard. For Maestro, choose "I have a containerized application" and then "I need to build a Kubernetes cluster" (*Try Maestro*).

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <h4>Step 1</h4>
        <img src="/assets/product_choice_1.png" alt="Product choice wizard - step 1">
    </div>
    <div class="Grid-cell">
        <h4>Step 2</h4>
        <img src="/assets/product_choice_2.png" alt="Product choice wizard - step 2">
    </div>
</div>

If you're already using Cloud 66 just click *New Application &rarr; Maestro (Build a new cluster)* button on the dashboard.

<img src="/assets/skycap/skycap_new_dropdown_update.png" alt="Start a new Skycap build pipeline" width="200">

## Adding services

The first step is to give your application a **name**. This will be used to label your application throughout the Cloud 66 dashboard.

Next, you need to add at least one **service**. To your application. If you're using our demo application, you will need to add a single service called `demo-app` by pulling the code from this [public repo](https://github.com/cloud66/maestro-demo.git).

To do this:

1. Copy the *Clone or download* link from Github
2. Paste it into the **Git Repo URL** field
3. Type *master* into the **branch** field
4. Click *Go* to fetch and analyze the code

<img src="/assets/maestro/maestro-adding-services.gif" alt="Adding services to a Maestro application">


## Specifying the source of images

<img src="/assets/skycap/skycap_service_image.png" alt="Specifying the source of your service" style="float:right; margin-top: 0.25em">

The *Where is your service image?* dropdown provides you with three options to specify the source of your services.

* **Build Image from a GitHub repo** &mdash; This is the easiest way to add services if your code is hosted on GitHub. You'll need to link your GitHub account with Cloud 66 before you can take advantage of this. Just click the *Setup access to your GitHub projects.* link. (This is the option you should pick if you're using our "hello world" app)

* **Build image from any Git Repo** &mdash; Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can also use this if you don't want to link Cloud 66 to your GitHub account. You will need to add your Cloud 66 public key if your repo is private. You'll be prompted to do this if it's required.

* **It's in a Docker image repository** &mdash; Use this to add pre-built images to a project. You can use a service like DockerHub or your own private image repo. If you're using a private repository you'll be prompted to add the necessary login credentials.


## Building application images

Before you can deploy your application, you need to build your services into container images. To do this, click the green *Build Application Images* button.

You can now watch the build log as Maestro fetches your application code and builds it into Docker images, ready for deployment.

<img src="/assets/maestro/maestro-build-log.png" alt="Maestro image building log">


## Preparing for deployment

To start the deployment process click the *Set up a Deployment* button from the **Application Overview** page. You will then need to configure various aspects of the application to ensure it's deployed properly. This includes:

* Network configuration
* Data source(s)
* Target server(s)

### Container network configuration

Our sample application is composed of a single Python service that we've named *demo-app*. This is a web app so we need to configure the service to handle web traffic.

At the moment we can see that **0 services** are connected to the Internet. To change this we click on the plug icon to open the network setting panel.

The *demo-app* service will run inside a container, so we need to configure that container to respond to web traffic. A standard web server listens on port 80 for HTTP traffic, so we're going to use that as our *Public Internet Port*

The *demo-app* service listens to port 5000 so we need set the *Container Port* to `5000` to the *Public Internet Port* to `80`:

<img alt="Configuring container networking in Maestro" src="/assets/maestro/maestro-getting-started-2.gif">

### Adding a data source

The application also needs a redis data store, so we should add one now:

1. Click on *Add Data Source*
2. Select *Redis* from the list of available source
3. Click *Done*

<img alt="Adding a data source to an app in Maestro" src="/assets/maestro/maestro-getting-started-3.gif">

Our application is now configured and ready to deploy.

### Choose a cloud provider

Now we need to choose a cloud provider as a target for the deployment. You can do this using the dropdowns in the right-hand column.

For this demo we'll use *DigitalOcean* and deploy the application to the *London, UK* region.

<img src="/assets/maestro/maestro_cloud_region.png" alt="Choose a cloud and region">

You can also deploy to your own servers. First you need to <a href="/maestro/how-to-guides/deployment/registered-servers.html">add them as registered servers</a>.

### Configure server size

The server size can be set by clicking on the cog at the top right the server.

<img alt="Selecting a server size in Maestro" src="/assets/maestro/maestro-getting-started-4.gif">

Learn more about [choosing the right size](/{{page.collection}}/references/non-recommended-server-sizes.html) for your servers.

## Deploy your app

Now everything is ready to go, just hit the *Deploy* button.

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
