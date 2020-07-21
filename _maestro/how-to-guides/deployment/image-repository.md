---
layout: post
template: one-col
title: Connecting to Docker image repositories
categories: how-to-guides/deployment
order: 40
lead: "How to connect to public and private Docker image repositories via Maestro"
tags: ["customization", "docker"]
legacy: false
permalink: /:collection/:path:output_ext
---

### Connecting to public repositories

For public [Docker Hub](https://registry.hub.docker.com/) images, use the following URL format:

```shell
<namespace>/<image_name>:<tag>
```

If you are using [Quay.io](https://quay.io/) for your image repository, you will use the following URL format:

```shell
quay.io/<namespace>/<image_name>:<tag>
```

## Connecting to private repositories

You can use private repositories to pull Docker images into Maestro, but they must first be connected to your account.

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click _External Services_ in the **Settings** panel
4. Click the  _Docker Image Repos_ tab 
5. Click on _ADD A PROVIDER_ or click on __+__ if you already have one and want to add a second one.
6. Fill in the details for your repository and click *Save*
 
Once your repository is connected, you can use the same URL format as above to pull images into Maestro.
