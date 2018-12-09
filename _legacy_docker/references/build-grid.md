---
layout: post
template: one-col
title: What is Build Grid?
categories: references
lead: ""
legacy: true
tags: ["build"]
permalink: /:collection/:path
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>

## What is BuildGrid?

BuildGrid is a *Cloud 66 for Docker* feature. It is a hosted Docker image building service to build Docker images directly from your git code repository.


## How to use BuildGrid?

To use BuildGrid include the Git repository URL and Git branch of your source code in your `service.yml`:

{% highlight yaml %}
services:
  my_service:
    git_url: git@github.com:pkallberg/node-js-app.git
    git_branch: master
{% endhighlight %}

This is all you need to trigger automatic building of `my_service` Docker image on BuildGrid. With this `service.yml` BuildGrid will clone your code repository before deployment and will look for a `Dockerfile` in your code. It will then run a `docker bulld` command to build the image and then pushes the built image into a private Docker repository that’s available to all Cloud 66 Stacks.

The built image is then pulled from this repository on all the applicable servers and managed.

Find more information on [BuildGrid configuration in service.yml](/legacy_docker/how-to-guides/deployment/building-your-service.html).


## Envoironment variables in BuildGrid

You can pass environment variables into your Dockerfile during your build process 
<span style="background-color: #FFFF00">(if using BuildGrid)</span>
 with the $VARIABLE syntax, which will be populated with environment variable(s) set on the stack. For example let's say you have an environment variable called `MY_FOLDER` with the value `/path/to/myfolder`. If you run the following command in your dockerfile:

```
RUN COPY FILE_FROM_REPO $MY_FOLDER
```

Cloud 66 will change this line to:

```
RUN COPY FILE_FROM_REPO /path/to/myfolder
```

and then it starts building from the finalized dockerfile.


## Build and Publish

Cloud 66 for Docker Deployments consist of 2 steps: Build and Publish. Build step involves BuildGrid to build the required Docker images from your code. Publish is a step that rolls out the built images (or the ones pre-built by you) onto your servers.

You can choose to run each of these steps separately through the BuildGrid UI or command line.

Find more information about [Build and Publish configurations](/legacy_docker/references/deploy-profiles.html).

