---
layout: post
template: one-col
title:  "Understanding BuildGrid"
categories: references
order: 10
lead: "How to use BuildGrid to download your Docker images"
tags: ['tags']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

BuildGrid is Maestro’s integrated Docker image builder and repository. Every time you build your images for a Maestro application, we store a copy of those images in BuildGrid. You can access these images using your Dashboard, or by logging into BuildGrid directly. 

## Understanding BuildGrid URLs

Every successful build process in Maestro adds an image to BuildGrid. You can see find URL for an image by clicking on a service name and then on the Image URL. Each image in your BuildGrid repository has the following structure:

`subdomain.buildgrid.net/<namespace>/<app name in maestro>.<git repo name>:<hash of commit>`

For example: 

```bash
registry-z2.buildgrid.net/minstrel/qq-maestro-demo.github-com-cloud66-maestro-demo:d6caxd98d23f932d-2064bdad0fac555
```

## Finding image details via Build & Deployment Timeline

You can see details of older images from your builds using the Build & Deployment Timeline. To do this:

1. Open your Application from your [Cloud 66 Dashboard](https://app.cloud66.com/)
2. Click on Build & Deploy in the right-hand panel
3. Scroll down your timeline until you find the build in question (your builds are all in the left column)
4. Click on the service name

You will now see the full historical log of the build process, including the final URL of the image that resulted.

## Accessing your BuildGrid repository

You can access your repository directly using any Docker-compatible client, but you will need your BuildGrid [username and password](https://app.cloud66.com/buildgrid_settings) (which are different from your Cloud 66 username and password). You can find them under Settings → BuildGrid Settings. 

For example using the standard Docker terminal client you can:

1. Log into BuildGrid by running `docker login <subdomain>.buildgrid.net` and then supplying your username and password when prompted
2. Pull any image from your repo using `docker pull <full image URL>`

#### Note
<div class="notice notice-warning"><p>You cannot push images to BuildGrid - it is designed to be read-only. To update an image in BuildGrid you should update your code via Cloud 66 and a new version of the image will be built and stored accordingly.</p></div>

## Running an image locally

Once you have pulled an image to your local machine, you can run it locally. In order to do so you will need:

- A [Docker client](https://www.docker.com/products/docker-desktop) (including the CLI)
- A Kubernetes client (such as [minikube](https://kubernetes.io/docs/tasks/tools/#minikube))
- The [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) CLI
- A working knowledge of basic Docker and Kubernetes CLI commands

You can then either run the image directly from Docker using the `docker run` command ([more help here](https://docs.docker.com/get-started/part2/#run-your-image-as-a-container)) or you can configure a local Kubernetes instance (see [this guide](https://kubernetes.io/docs/tutorials/hello-minikube/) for more info).