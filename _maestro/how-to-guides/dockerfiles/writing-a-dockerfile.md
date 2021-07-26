---
layout: post
template: one-col
title: Writing a Dockerfile
categories: how-to-guides/dockerfiles
order: 1
lead: "Writing a Dockerfile for use with Maestro"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Writing a Dockerfile for your app 

A Dockerfile is a text document that contains all the [instructions](https://docs.docker.com/engine/reference/builder/) required to build your app's source code into a [Docker image](https://docs.docker.com/get-started/overview/). Maestro uses the Docker [image format](/maestro/the-basics/concepts-and-terminology.html#containers--containerization), and thus all code must be built into images before it can be used.

The "build" process uses the set of instructions in the Dockerfile to build up a container image (in much the same way as a shell file executes a series of Linux tasks). Because Maestro handles the entire [container lifecycle](/maestro/the-basics/concepts-and-terminology.html#container-lifecycle-management) on your behalf, a Dockerfile is an absolute requirement.

If you don't have a Dockerfile in your repo, we will analyze your code and suggest a Dockerfile for your app. If that file is unsuitable, use one of the guides below to write your own.

## How-To Guides by framework

Click on the link for your app's language or framework for a detailed guide on writing your own Dockerfile:

* [Writing a custom Dockerfile for Ruby](/maestro/how-to-guides/dockerfiles/dockerfile-for-ruby.html)
* [Writing a custom Dockerfile for Node](/maestro/how-to-guides/dockerfiles/dockerfile-for-node.html)
* [Writing a custom Dockerfile for PHP](/maestro/how-to-guides/dockerfiles/dockerfile-for-php.html)

## Important Dockerfile principles

When images are built from Dockerfiles, each line of instructions is laid down as a **layer** in the image, and each line that comes after it is a separate layer built "on top" of it. These layers are **immutable** - once they have been laid down they do not change. This has some important consequences:

- If you `COPY` or `ADD` files to an early layer,  you can remove or delete those files from a later layer, but they will still exist in the previous layer. This can lead to sensitive information like API keys or other secrets being unintentionally left in a layer despite being hashed or removed in a later layer.
- If you add a file system to an earlier layer and then add things to that file system, you will invalidate the cache for that layer (see below for more details). This also applies to changing any commands in a Dockerfile - any change to a line will invalidate the cache for that layer (and those "above" it).
- A corollary to the principle above is to try to put the least volatile and most time consuming tasks as early as possible in the Dockerfile.

## Caching & build speed

When they are built, Docker images are **cached by layer**. If, when the image is rebuilt, any of the layers have changed, all of the layers above are also rebuilt from scratch. 

This is why our default Dockerfiles tend to add the source code to the image as late as possible (i.e. in the "highest" possible layer) - because that layer is likely to change the most often. This means that only the last few layers need to be rebuilt each time you deploy. This can save a lot of time over hundreds (or thousands) of build cycles.

## Putting a Dockerfile in a sub-directory

If for some reason you need to put a Dockerfile in a sub-directory - for example you have multiple services in a single repo - you can specify this in your app's [service configuration](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) (i.e. the `service.yml` file).

For example, this `service.yml` configures two services ("buyer" & "seller"), each with their own Dockerfiles:

```yaml
services:
 seller:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: seller
 buyer:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: buyer
```

This tells Maestro to look for Dockerfiles in the following places:

`./seller/Dockerfile` 

`./buyer/Dockerfile`

The directory is specified under `build_root` and the `dockerfile_path` is relative to that directory.


## More help

- [Mapping container ports](/maestro/tutorials/container-ports.html)
- Customizing [service configurations](/maestro/how-to-guides/build-and-config/docker-service-configuration.html)
- Configuring [service networking](/maestro/how-to-guides/build-and-config/service-networking.html)
