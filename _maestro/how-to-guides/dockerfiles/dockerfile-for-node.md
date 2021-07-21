---
layout: post
template: one-col
title: Writing a custom Dockerfile for Node
categories: how-to-guides/dockerfiles
order: 2
lead: "Writing a custom Dockerfile for a Node application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview

If we detect that your application uses Node we will suggest a default Dockerfile for you to use (see below). This file should work for most Node applications, but if your app has some special cases you may need to modify it or write your own from scratch. This doc will walk you through the basics of doing so.

Before following this guide, we recommend getting acquainted with [the basics of the Docker platform](https://docs.docker.com/get-started/overview/). Because you're using Maestro, most of the Docker tasks and processes described will be completely automated, but it is useful to understand why a Dockerfile is necessary and what it does.

## Default Node Dockerfile

This is the Dockerfile we will suggest for Node apps that do not already have one:

```docker
FROM node:latest
ENV APP_HOME /app
RUN mkdir -pv $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
# ADD CUSTOM REGISTRY HERE IF REQUIRED
# ENV CUSTOM_REGISTRY https://registry.npmjs.org/ 
# RUN npm config set strict-ssl false
# RUN npm config set registry $CUSTOM_REGISTRY
RUN npm install
```

A few notable things that this Dockerfile does:

- It creates a home directory in the image for your app and sets it as an environment variable (`$APP_HOME`)
- It sets the environment to `production`
- It sets the log level to `warn`

The file is obviously customisable as needed. For example, you can add a custom registry using the `ENV CUSTOM_REGISTRY` instruction (currently commented out).

## Writing your own Dockerfile

We generally recommend against writing your own Dockerfile from scratch, but the basics are not difficult to master. Before starting you should have a firm understanding of basic [Docker commands](https://docs.docker.com/engine/reference/builder/) (`RUN`, `ENV`, `ADD`, `WORKDIR`).

The order of the commands is extremely important. If you try to run a component before one of its dependencies, the build will fail.

The simplest possible Dockerfile for a Node application looks something like this:

```docker
FROM node:latest  # Tells the image to use the latest version of Node
RUN mkdir /app  # Creates a directory called "app"
WORKDIR /app  # Sets that directory as your working directory
ADD . /app  # Copies your code to the image
RUN npm install --production # Installs all your packages
```

This image is probably missing components that your application relies on, but you can add these as needed using the same set of instructions.