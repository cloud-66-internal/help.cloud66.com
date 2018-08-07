---
layout: post
title: Getting started with Skycap
order: 1
categories: quickstarts
legacy: false
tags: ["getting started"]
lead: Use Skycap to automatically turn your source code into container (Docker) images
permalink: /:collection/:path
---

Skycap is a Container Deployment Pipeline. You can use Skycap to automatically turn your source code into container (Docker) images, manage your Kubernetes configuration files and deploy your applications to any Kubernetes cluster.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **A Git repository containing your application code** &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.

<div class="notice"><p>If you don't have images or code ready, you can use this <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> we've supplied on Github. (You can also use this project with our next tutorial on Formations.)
</p></div>


## What is a Build Pipeline?

Build pipelines are composed of all the individual ([containerized](/skycap/the-basics/concepts-and-terminology.html#containers-and-containerization)) services that make up your application. Services can include raw source code that needs to be built into Docker images or pre-built images. You can mix and match these as required.

* **Build from Source** &mdash; Your code should be hosted in a git repo. It should contain a *Dockerfile* that describes how to build your image. Cloud 66 provides Dockerfile templates for building common web frameworks. You can use these to help get started.
    
* **Pre-built Container Images** &mdash; These can be hosted in any public image repo like Dockerhub or your own private repo. 


## Lets Get Started

New users should click *start trial* for the Skycap product. If you're already using Cloud 66 just click *New Application &rarr; Skycap (Build containers)* button on the dashboard.

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <h4>New users</h4>
        <img src="/assets/skycap/skycap_blankslate.png" alt="Your first Skycap build pipeline">
    </div>
    <div class="Grid-cell">
        <h4>Existing users</h4>
        <img src="/assets/skycap/skycap_new_dropdown_update.png" alt="Start a new Skycap build pipeline" width="170">
    </div>
</div>

## Adding Services

* **Give your application a Name** &mdash; This will be used to label your application throughout the Cloud 66 dashboard.
          
* **Adding Services** &mdash; You can add as many services as required by clicking the green *+ Add Service* button at the bottom of the page.

<img src="/assets/skycap/skycap_add_services_ani_update.gif" alt="Adding services to a Skycap build pipeline">

## Specifying the source of your images

<img src="/assets/skycap/skycap_service_image.png" alt="Specifying the source of your service" style="float:right; margin-top: 0.25em">

The *Where is your service image?* dropdown provides you with three options to specify the source of your services.

* **Build Image from a GitHub repo** &mdash; This is the easiest way to add services if your code is hosted on GitHub. You'll need to link your GitHub account with Cloud 66 before you can take advantage of this. Just click the *Setup access to your GitHub projects.* link. (This is the option you should pick if you're using our "hello world" app)
    
* **Build image from any Git Repo** &mdash; Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can also use this if you don't want to link Cloud 66 to your GitHub account. You will need to add your Cloud 66 public key if your repo is private. You'll be prompted to do this if it's required.
    
* **It's in a Docker image repository** &mdash; Use this to add pre-built images to a project. You can use a service like DockerHub or your own private image repo. If you're using a private repository you'll be prompted to add the necessary login credentials. 
 
Once you've finished adding your services click the "Create Snapshot" button.

## Snapshots and building images

A snapshot captures all the components of your application including application images, environment variables and configuration items, in preparation for deployment. 

Because this is the first time you are creating a snapshot for this application, Skycap will fetch and build your code into images, as well as fetching any pre-built images. 

All of these components are then stored in a private repository on your Cloud 66 account so that you can roll back easily at any time.

During the build process you can view the status of each individual build. You can also drill down into the logs if you need to troubleshoot any part of the process.

<img src="/assets/skycap/skycap_buildgrid_queue.png" alt="Adding services to a Skycap build pipeline">


## Deploying your application

Once you've built your images, you're ready to deploy your app. There are two ways to do this:

1. Using Maestro - Cloud 66's integrated container management service > [Get started with Maestro](/maestro/quickstarts/getting_started.html).

2. Using your own (existing) Kubernetes cluster > [Get started with Skycap Formations](/skycap/quickstarts/using_formations.html)
 
## What's next?

Now that you have your first application defined, you can learn how to make that application live:

* *Either* [create your first Formation](/skycap/quickstarts/using_formations.html) and use it to [deploy your application](/skycap/quickstarts/using_formations.html#deploying-it-all-to-your-cluster) to a Minikube cluster

* *Or* get started with [Maestro](/maestro/quickstarts/getting_started.html), Cloud 66's full container management service, to deploy and manage your containers and infrastructure.