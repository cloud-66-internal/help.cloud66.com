---
layout: post
template: one-col
title: Customizing service configurations 
categories: how-to-guides/build-and-config
order: 2
lead: "How to specify custom service configurations for your application"
legacy: false
tags: ["customization", "service.yml"]
permalink: /:collection/:path:output_ext
---

## Overview

Service configuration allows you to be more explicit about your Maestro services and control settings that are not usually available through the user interface or Cloud 66 Toolbelt. These are defined in the `service.yml` file. 

These settings describe the composition of your services. Here are some common examples of service configurations you can define:

- Defining build and deploy commands
- Specifying a central logging folder
- Setting port definitions for your containers
- Mounting volumes into your containers
- Setting dependencies between your containers

For a full list of available options, see the [table](#service-configuration-options) at the end of this document.

## Editing service.yml

There are three ways to directly edit your `service.yml` file:

1. While you're **building** an application, by clicking on the *Advanced* tab. 
2. For **existing** apps, by visiting your **Application Overview**, clicking *Configuration* in the right-hand panel and then clicking the *Configuration Files* tab.
3. By editing your apps **services** or **images** and clicking the *YAML* tab (note that this only edits the portion of the file related to that component)

## Service configuration examples

### Getting Started service.yml

If you followed our Getting Started guide, your `service.yml` should initially look a lot like this:

```yaml
version: 2
services:
  demo-app:
    git_url: <https://github.com/cloud66/maestro-demo>
    git_branch: master
    ports:
    - container: 5000
      http: 80
    dockerfile_path: Dockerfile
databases:
- redis

```

To edit this file: 

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click on *Configuration* in the right-hand panel
3. Click on the the *Configuration Files* tab

To add https access, you would modify the *ports* sub-section under the *demo-app* section of *services*, adding `https: 443` on a new line.

The end result should look like this:

```yaml
version: 2
services:
  demo-app:
    git_url: <https://github.com/cloud66/maestro-demo>
    git_branch: master
    ports:
    - container: 5000
      http: 80
      https: 443
    dockerfile_path: Dockerfile
databases:
- redis
```

Now add a commit message for the update and click *Commit*. To test if these changes have worked, open your Application Overview and click on the *Services* tab. The **Network** column of the **Services** panel should now list the new ports.

In order for these new settings to apply to your service, you will need to redeploy your application. To do this, click the *Build / Deploy* button on the Application Overview.

### Single service with MySQL database

In this example, we'll be configuring a service called *web*, which is pulled from a Git repository and requires a MySQL database.

```yaml
services:
 web:
  log_folder: "/usr/src/app/log"
  ports:
   - container: 3000
      http: 80
      https: 443
   git_url: https://github.com/cloud66-samples/pilot
   git_branch: master
   dockerfile_path: Dockerfile
databases:
- mysql
```

As you can see above, the *web* service is pulled from a sample project on GitHub called Pilot. It specifies both a path for the Dockerfile and a logging folder. Finally, the container is set to listen on port 3000 and uses external ports 80 and 443.

### Multiple services and databases

In this example, we'll be running three services - one called *seller*, one called *buyer* and one called *dashboard* as well as a Redis database. You can define as many services as you need. 

```yaml
services:
 seller:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: seller
  command: seller --redis redis:6379
 buyer:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: buyer
  command: buyer --redis redis:6379
 dashboard:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  ports:
  - container: 5000
     http: 80
  dockerfile_path: "./Dockerfile"
  build_root: dashboard
  command: "/go/src/dashboard/dashboard --redis redis:6379"
 redis:
  image: redis
  ports:
  - 6379
```

### Using Habitus for builds

[Habitus is a build workflow tool for Docker-based applications](http://www.habitus.io/). It allows you to create a build workflow consisting of multiple steps for your Maestro application. Maestro fully supports Habitus. To enable Habitus on your Maestro application, you need to do the following:

1. Add a `build.yml` to your repository
2. Set `use_habitus` attribute to `true` in your `service.yml`
3. Set the `use_habitus_step` to the step you would like to use for your service in your `service.yml`

You can edit your `service.yml` directly from the Dashboard by clicking *Edit service* and then clicking the *Advanced* tab.

A Habitus build usually has multiple steps and each step can generate a Docker image. Using `use_habitus_step` attribute you can specify which step's results you would like to use as the image for the container.

Check out the [Habitus website](http://www.habitus.io/) for more information about generating a `build.yml`.

## Adding a DaemonSet

A DaemonSet ensures that a (single) copy of a specific Pod is added to every Node. This is useful for running background processes (aka daemons) but has many other uses. For more detail pleased read our [explanatory doc](/maestro/the-basics/concepts-and-terminology.html#daemonsets) on the subject.

To create a DaemonSet we simply set the `type` of any service to `daemon_set`. For example:

```yaml
service:
 web:
  image: training/webapp
  type: daemon_set
  ports:
  - container: 5000
     http: 80
```

This will use the image called "webapp" to spawn a single Pod called "web" on every Node in your Cluster.

## Database configurations

The first time you deploy an application, you can specify any required databases in the service configuration. These databases will be deployed and configured automatically, and their addresses and access credentials will be made available to the containers across the application with environment variables.

Once your application has been deployed, you can still add databases, but you need to do so using our database [Add-Ins](/maestro/how-to-guides/add-ins/) feature. 

As databases are fairly static components that rarely change without a migration, they aren't run in containers. This avoids the complexity and overhead of running databases in a container and allows Cloud 66 to perform replication and backups as normal. 

The allowed database values are: `postgresql`, `mysql`, `redis`, `mongodb`, `elasticsearch` , `rabbitmq` and `glusterfs`. For example:

```yaml
services:
 <service_name>:
  databases:
  - mysql
  - elasticsearch
```

## Environment variables

Any [environment variable](/maestro/how-to-guides/build-and-config/env-vars-advanced.html) defined in your application will be made available within your service container.

The syntax for defining environment variables in a service definition is:

```yaml
services:
 service_name:
  env_vars:
  VAR1: _env(VALUE_OF_VARIABLE)
```

You can also reference environment variable in other applications or services. For more info please read our [detailed guide](/maestro/how-to-guides/build-and-config/env-vars-advanced.html#syntax-examples) to the sharing env vars between apps and services.

## Setting a Service Account name

Kubernetes relies on its "[Service Accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)" feature to manage the identity of processes running inside Pods.

By default all services belong to a service account named `default`. Normally this provides sufficient access for your application. However, should you require elevated access (e.g. to allow for log collection or metrics gathering), you can set a custom Service Account for any service using the `service_account_name`. For example:

```yaml
services:
 web:
  ports:
  - container: 3000
    http: 80
 service_account_name: public-front-end
```

This will make the service named "web" run under the "public-front-end" Service Account in Kubernetes.

Bear in mind that this service account will first need to be created on your cluster (with associated access bindings) before it will function correctly. Please read the [Kubernetes guide to configuring Service Accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) for more detail.

## Service configuration options

Below is a table of the available configurations for a given service with a brief description. For more detailed information about an option, click the link provided.

{% include maestro-html-includes/service-config-options-table.html product = page.collection %}


## More help

* Learn how to call environment variables in a service defintion 
* [Using environment variables in a Dockerfile](/maestro/how-to-guides/build-and-config/env-vars-advanced.html#using-environment-variables-in-a-dockerfile)