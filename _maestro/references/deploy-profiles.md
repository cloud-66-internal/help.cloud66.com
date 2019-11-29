---
layout: post
template: one-col
title: Deployment profiles
order: 20
categories: references
lead: "Create custom profiles that deploy only selective components of your application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## What are deployment profiles?

Deployment profiles enable you to customise the deployment process depending on the situation. For example, you may only want to deploy your front-end servers, and leave your  databases undisturbed. Rather than manually setting this up each time you need it, you can save it as a profile.

Cloud 66 has divided the deployment process into two separate operations, Build and Publish. The build operation builds the code into a docker image, the publish operation pushes the image to your servers. 

## Option for deployments

### Build / Publish Services

Under this section, you can see all your services are listed. You can choose one or both of the following operations for each service.

- **Build**:     Builds the code into a docker image.
- **Publish**:   Push the built image to servers.


### Deployment strategy

- **Parallel Deployment**: Deploy all the services together.
- **Serial Deployment**:   Deploy services sequentially.


### Upgrades

- **Apply Docker upgrades**: Apply the Docker version and Weave version specified in the manifest file.
- **Apply Security Upgrades**: Install the latest Ubuntu security packages immediately (they are applied once a day by default).

