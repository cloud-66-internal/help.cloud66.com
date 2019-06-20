---
layout: post
template: one-col
title: Docker Getting Started (Building Images)
categories: quickstarts
lead: ""
legacy: true
sitemap: false
order: 1
tags: ["getting-started"]
permalink: /:collection/:path:output_ext
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>


## Overview & Prerequisites

The process of building a Docker stack is split into two distinct parts. First you **build images** for your services, then once you're ready you  **setup a deployment**.

Your project can be composed of services that use pre-built images or source code you want to build into images. You can mix and match these as required.

* **Pre-built Docker Images** - Can be hosted in an image repo like Dockerhub or in your own private repository.

* **Build from Source** - Your code should be hosted in a git repo and contain a [**Dockerfile**](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images) located in the root directory. We provide basic Dockerfile templates for building common web frameworks that you can use to get started.

* * *


## Building Images

Lets create a new Docker project.
If you're new to Cloud 66 from the dashboard click  
 _Build a Docker Stack_.

![Build a new docker stack from an empty dashboard](/assets/legacy_docker/build_a_docker_stack.png)
    
 If you have existing stacks from the sidebar  
 _New Stack ► Docker (All Frameworks)_.

![Build a new docker stack from the dashboard](/assets/legacy_docker/docker_guide_new_stack.png)

### Adding Docker Services

Give the project a name, then you can add services. You can add as many services as required by clicking the green _Add Another Service_ link at the bottom of the page.

![Build a new docker stack from the dashboard](/assets/legacy_docker/docker_guide_add_services.png)

### Service provider drop-down

![Build a new docker stack from the dashboard](/assets/legacy_docker/build_new_docker.png)

- **I'm using a GitHub Repo** — This is the easiest way to add services from GitHub repos. You will need to link your GitHub account with Cloud 66 before you can take advantage of this. You can do this by clicking the Lets link with GitHub now link that will appear if you haven't signed up to Cloud 66 with GitHub.

- **I'm using a manual Git Repo** — Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can also choose this if you don't want to link Cloud 66 to your GitHub account. You will need to add and approve the Cloud 66 public key if your repo is private. You'll be prompted to do this if required.

- **It's a Docker Image** — Use this to add pre-built images to a project. You can use a service like DockerHub or your own private image repo. If you're using a private repository you'll be prompted to add the necessary login credentials.

Once you've finished adding services click Start Build.

<h3>Build Process (BuildGrid)</h3>

BuildGrid is the Cloud 66 image building service that is used to build Docker images for your services directly from your git code repository.

During the build process you can view the status of each individual image build and drill down into the logs if you need to troubleshoot any part of the process.

![BuildGrid Queue](/assets/legacy_docker/buildgrid_queue.png)

### Advanced Features

All of the information that defines how services are built is accessible from the _services.yml_ file.

There is an advanced mode that allows you to edit this configuration file directly. This is useful for [accessing advanced features](/{{page.collection}}/tutorials/docker-service-configuration.html). For example configuring [multi-tenancy stacks](/{{page.collection}}/how-to-guides/deployment/multi-tenancy.html).

 **Next: [Deploying your Docker Stack](/legacy_docker/quickstarts/docker-getting-started-deployments.html) →**

