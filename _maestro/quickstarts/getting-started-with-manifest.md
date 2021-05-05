---
layout: post
template: one-col
title: Getting started with manifest files
categories: quickstarts
order: 2
lead: "Creating your first manifest file"
legacy: false
tags: ["manifest", "customization"]
permalink: /:collection/:path:output_ext
---
{% assign product = 'maestro' %}

## What is a manifest file?

A manifest file - also known as `manifest.yml` - defines the configuration of your application's components. It allows you to completely customise the composition of your application and control settings that are not available through the Cloud 66 user interface or Toolbelt.

Some examples of the settings you can control with a manifest file:

- Installing extra packages
- Specifying the version for any component
- Configuring several components to share a server
- Customizing component-specific configurations

If you're already familiar with the basics of manifest files, refer to [Building a manifest file](/maestro/how-to-guides/build-and-config/building-a-manifest-file.html) for a more detailed guide.

### Manifest file vs service.yml

At first glance, `manifest.yml` may seem very similar to the service definition in `service.yml`. However, they do very different things:

* **[service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html)** defines your Docker containers and other application *services*
* **manifest.yml** defines the infrastructure on which those services run. This includes both the "hardware" (virtual or real servers) and the "software" (such as the version of Docker your application uses).

### Validating YAML

Manifest files are YAML formatted. You can check the validity of your configuration with [YAML Lint](http://www.yamllint.com/). If you'd like to learn more about writing YAML, [this is a useful beginner's guide](https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/).

## Editing manifest files

To access the manifest file for any application:

1. Navigate to the Application Overview for the app in question
2. Click on *Configuration Files* in the right-hand panel
3. Click on the *Manifest* tab at the top of the main panel

You can now edit the text of your manifest file directly.

<img src="/assets/maestro/maestro-gsw-manifest-1.gif" alt="Editing your manifest file after deployment">

#### Warning

<div class="notice notice-warning"><p>Be cautious when editing the manifest file for any application particularly if it is running in a production environment. A single stray character or space can cause the application to fail to deploy or to deploy in a degraded state.</p></div>


## A working example

In this example we are going to deploy another instance of the simple application we used in our [Getting started with Maestro](/maestro/quickstarts/getting-started.html) guide. However, instead of using the generic `manifest.yml` we are going to customise it.

### What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **Application code and/or pre-built images** &mdash; Application code should be hosted in a (secure) publicly accessible git repository and pre-built images should be hosted in image publicly accessible repositories.
* **A Cloud account linked to Cloud 66 or your own servers set up** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html product = product %}

### Customizing your manifest file

To customize the `manifest.yml` for your application:

1. Follow the steps in the [Getting Started with Maestro](/maestro/quickstarts/getting-started.html#build-your-containers) guide but *stop before* the **Deploy your App** step.

2. Click on the *Edit config files* link above the server configuration box. This will open the "Advanced Deploy" page.

3. Click on the *Configure Manifest* tab to access the `manifest.yml` for your app.

<img src="/assets/maestro/maestro-gsw-manifest-2.gif" alt="Editing your manifest file during deployment">

The contents of the file should look very simmilar to this:

```yaml
docker:
  configuration:
    version: 18.03.0-ce
  servers:
  - server:
      same_as: master
redis:
  configuration:
    version: 5.0.5
  servers:
  - server:
      unique_name: master
      size: s-2vcpu-2gb
      region: lon1
      vendor: digitalocean
      key_name: Your_Digital_Ocean_Project_Name
```

Next we are going to customise our application in two ways.

* We are going to set custom nameservers for our application
* We are going to set it to use a different version of Redis

### Setting a custom name server

In order to force our application to use specific nameservers, we insert the following line into our `manifest.yml' under the Docker configuration section:

```yaml
      nameservers: ['8.8.8.8', '8.8.4.4']
```

Be careful to ensure that the indentation of this new line is correct. It should line up with `version` under `Docker`.

### Setting a custom Redis version

In this example, we need to use an older version of Redis. To do that, we simply change the version number under `redis`. We will change to version `4.0.9`.

### Deploying your application

The end result of both changes should look like this:

```yaml
docker:
  configuration:
    version: 18.03.0-ce
    nameservers: ['8.8.8.8', '8.8.4.4']
  servers:
  - server:
      same_as: master
redis:
  configuration:
    version: 4.0.9
  servers:
  - server:
      unique_name: master
      size: s-2vcpu-2gb
      region: lon1
      vendor: digitalocean
      key_name: Your_Digital_Ocean_Project_Name
```

Once you are sure the settings are correct, click the green *Deploy* button to start the process.

Once your application has been deployed, you can check whether the settings have been applied by accessing your server via SSH [using Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html).

* You can see the nameserver by checking the contents of the `/etc/resolvconf/resolv.conf` directory.
* You can check the version of redis by typing `redis-server`

## Editing an existing application

The above example applies to a new application, but it is also possible to edit the manifest file of an existing application.

To do this:

1. From the Cloud 66 Dashboard, open the detail page for your application
2. Click on Configuration Files in the right-hand panel
3. Click on the Manifest tab at the top of the main panel

#### Caution
<div class="notice notice-warning"><p>Editing the manifest file of an existing application may not necessarily result in changes to the deployed instance(s) of that application, even if the application is subsequently redeployed. Read our <a href="/maestro/references/manifest-structure.html#classes-of-manifest-file-settings">in-depth guide</a> to understand the complexities around this. </p></div>


## What's next?

* Understand the [structure of manifest files](/maestro/references/manifest-structure.html).
* Learn more about the power of manifest files with our [detailed how-to guide](/maestro/how-to-guides/build-and-config/building-a-manifest-file.html).
* Learn how to use [CustomConfig](/maestro/tutorials/custom-config.html) - a powerful tool for configuring the components of your application.
