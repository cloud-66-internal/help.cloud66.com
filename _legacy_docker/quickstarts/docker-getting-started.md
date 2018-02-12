---
layout: post
template: one-col
title: Docker Getting Started (Building Images)
categories: quickstarts
lead: ""
legacy: true
order: 1
tags: ["getting-started"]
permalink: /:collection/:path
---


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

![Build a new docker stack from an empty dashboard](/images/guides/docker_onboarding/build_a_docker_stack.png)
    
 If you have existing stacks from the sidebar  
 _New Stack ► Docker (All Frameworks)_.

![Build a new docker stack from the dashboard](/images/guides/docker_onboarding/docker_guide_new_stack.png)

### Adding Docker Services

Give the project a name, then you can add services. You can add as many services as required by clicking the green _Add Another Service_ link at the bottom of the page.

![Build a new docker stack from the dashboard](/images/guides/docker_onboarding/docker_guide_add_services.png)


### Advanced Features

All of the information that defines how services are built is accessible from the _services.yml_ file.

There is an advanced mode that allows you to edit this configuration file directly. This is useful for [accessing advanced features](/building-your-stack/docker-service-configuration). For example configuring [multi-tenancy stacks](/building-your-stack/multi-tenancy-for-stacks).

 [**Next: Deploying your Docker Stack →**] (docker-getting-started-deployment)

