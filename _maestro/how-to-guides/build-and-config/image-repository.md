---
layout: post
template: one-col
title: Connecting to Docker image repositories
categories: how-to-guides/build-and-config
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

You can use private repositories to pull Docker images into Maestro, but they must first be connected to your account. (If you are hosting an image in Google Container Registry or Google Artifact Registry, please see the [section below](#connecting-to-google-image-registries).)

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click _External Services_ in the **Settings** panel
4. Click the  _Docker Image Repos_ tab 
5. Click on _ADD A PROVIDER_ or click on __+__ if you already have one and want to add a second one.
6. Fill in the details for your repository and click *Save*
 
Once your repository is connected, you can use the same URL format as above to pull images into Maestro.

## Connecting to Google image registries

Google Container Registry (GCR) has been deprecated and its authentication service is currently unreliable. We strongly recommend [transitioning to Google Artifact Registry](https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr) (GAR). 

To connect a GAR account to your Cloud 66 account:

1. Create a service account in Google Cloud
2. Grant the service account `Artifact Registry Reader` permission
3. Open the service account from the Google console, go to the "keys" tab and create a key. This will download a JSON file to your local machine.
4. Generate your Docker password by running the following command against the JSON file you just downloaded: `cat JSON_FILE | base64`
5. Take note of your Docker username: `_json_key_base64`
6. Take note of your Docker URL. It will be in the format `https://LOCATION-docker.pkg.dev`
7. Use the above username / password / URL combination to add the registry credentials to your Cloud 66 account (see [section above](#connecting-to-private-repositories))

If you would prefer to continue using GCR, you can follow [these instructions](https://cloud.google.com/container-registry/docs/pushing-and-pulling). At the time of writing the JSON authentication method was buggy and so we cannot recommend it.