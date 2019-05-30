---
layout: post
template: one-col
title: Configuring Service storage
categories: how-to-guides/deployment
order: 20
lead: "How to add persistent storage to your application"
legacy: false
tags: ["operations", "storage"]
permalink: /:collection/:path:output_ext
---

## Overview

Given the ephemeral nature of containers, it’s important to consider storage solutions to avoid data loss. We suggest mounting volumes from your container to the host.

## Adding storage volumes

The `volumes` directive of the `service.yml` allows you to mount custom host folders inside your container. This is useful if you need to run a database service for instance, as data written to the local filesystem of your container will not be persisted between container instances. 

The **volumes** option is expressed as a comma separated list with the following form: `HOST_FOLDER:CONTAINER_FOLDER`. 

You can optionally add `ro` or `rw` to specify that the container can read/write to the host folder (the default is read/write).

#### Note 
<div class="notice notice-warning"><p>Paths must be absolute.</p></div>

```
services:
    <service_name>:
        volumes: ["/tmp:/tmp_host", "/readonly/folder:/mnted_readony:ro"]
```