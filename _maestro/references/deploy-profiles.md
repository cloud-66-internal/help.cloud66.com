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

Deploy profiles enable you to deploy without having to set the settings each time you need to deploy. Cloud 66 has divided the deploy process into two separate operations, Build and Publish. The build operation builds the code into a docker image, publish is when the built image is pushed to servers. With deploy profiles, you can save different profiles to have different operations on different services, including the way they need to be deployed.


## Option for deployments


### Build / Publish Services

Under this section, you can see all your services are listed. You can choose one or both of the following operations for each service.

- **Build**:     Builds the code into a docker image.
- **Publish**:   Push the built image to servers.


### Deployment Method

- **Parallel Deployment**: Deploy all the services together.
- **Serial Deployment**:   Deploy services sequentially.


### Upgrades

- **Apply Docker upgrades**: Apply the Docker version and Weave version specified in the manifest file.
- **Apply Security Upgrades**: Install the latest Ubuntu security packages immediately (they are applied once a day by default).

