---
layout: post
template: one-col
title: Building your Docker service (V1)
categories: how-to-guides/deployment
order: 10
lead: "How to build a Docker service in Maestro (Version 1 only)"
legacy: true
tags: ["build"]
permalink: /:collection/:path
---

<div class="notice notice-danger">
<p>PLEASE NOTE:<br/> This guide only applies to Version 1 of Maestro, also know as <em>CSv1</em>. If you are new to Maestro then you should use <a href="/skycap/quickstarts/getting_started.html">Skycap</a> to handle this function.</p></div>

## Pull code from Git

For BuildGrid to pull code from your Git repository and build your image, you will need to provide a `git_url` and `git_branch`. Simply place a Dockerfile in your repository to define how the image should be built. These images are built continuously from your source code and are stored in a private Docker image repository, available to be used locally or pushed to production servers.

You can pass environment variables into your Dockerfile during this build process with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the application.

## Provide a Docker image

If you prefer to build your own images, simply provide the location of this image (whether public or private) with the `image` directive in your service configuration.


## Configuration

There are a number of directives you can set in your service configuration to customize your service network settings:

- [build_command](#build_command)
- [build_root](#build_root)
- [command](#command)
- [deploy_command](#deploy_command)
- [git_url](#git_url)
- [git_branch](#git-branch)
- [image](#image)


### Build command

Specifies the command you would like to run during application build (runs on your Docker host).

```

services:
    <service_name>:
        build_command: bundle exec rake db:schema:load

```

### Build root

Specifies the directory of your repository in which you wish to run your Docker build. You can also specify a [Dockerfile path](/legacy_docker/how-to-guides/deployment/building-your-service.html#dockerfile_path), which will be the Dockerfile used when building your service which is a relative value to this one.

```

services:
    <service_name>:
        build_root: my_app_subfolder

```

This will default to the _root folder_ of your repository if not specified.

* * *


### Command

Specifies the command used to start your container(s) (runs on your Docker host).

```

services:
    <service_name>:
        command: bundle exec rails s

```

* * *


### Deploy command

Specifies the command you would like to run during application deploy (runs once per service, on your Docker host).

```

services:
    <service_name>:
        deploy_command: bundle exec rake db:migrate

```

* * *


### Dockerfile path

Specifies a relative path for your Dockerfile (from your _build_root_) to be used for building this service. For example, if you have a subfolder in the root of your repository called _docker_ where your Dockerfile lives, you can specify this as follows:

```

services:
    <service_name>:
        dockerfile_path: docker/Dockerfile

```

This will default to the value of _build_root_/Dockerfile if not specified.

* * *


### Git URL

The Git repository URL your Docker image will be built with. The Git URL you use to [allow us access to your repository](/{{page.collection}}/how-to-guides/common-tools/access-your-code.html) will differ for public and private repositories.

```

services:
    <service_name>:
        git_url: git@github.com:pkallberg/node-js-app.git

```

* * *


### Git branch

The Git repository branch your Docker image will be based on, for example `master`.

```

services:
    <service_name>:
        git_branch: master

```

* * *


### Image

The source of your Docker image, which can come from a private repository that the credentials are provided. For [Docker Hub](https://registry.hub.docker.com/) images, use the following URL format:

```

services:
    <service_name>:
        image: <namespace>/<image_name>:/<tag>

```

If you are pulling a public image from Docker Hub, use the following format:

```

services:
    <service_name>:
        image: <namespace>/<image_name>:/<tag>

```

If you are using [Quay.io](https://quay.io/) for your image repository, you will use the following URL format:

```

services:
    <service_name>:
        image: quay.io/<namespace>/<image_name>:/<tag>

```


### Using Habitus for builds

[Habitus is a build workflow tool for Docker](http://www.habitus.io). It allows you to create a build workflow consisting of multiple steps for your Maestro application on BuildGrid. Cloud 66 BuildGrid fully supports Habitus. To enable Habitus on BuildGrid builds, you need to do the following:

1.  Add a `build.yml` to your repository
2.  Set `use_habitus` attribute to `true` in your `service.yml`
3.  Set the `use_habitus_step` to the step you would like to use for your service in your `service.yml`

Check out the [Habitus website](http://www.habitus.io) for more information about generating a `build.yml`.

A Habitus build usually has multiple steps and each step can generate a Docker image. Using `use_habitus_step` attribute you can specify which step's results you would like to use as the image for the container. 

