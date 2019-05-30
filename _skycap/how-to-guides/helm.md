---
layout: post
template: one-col
title: Using Helm with Skycap
categories: how-to-guides
order: 8
lead: "How to integrate Helm package manager into Skycap"
legacy: false
tags: ["customization,helm"]
permalink: /:collection/:path:output_ext
---


## Overview

[Helm](https://helm.sh/) is a popular package manager for Kubernetes. It helps teams to manage the deployment and maintenance of third-party components, like databases and file processors, that support an application. 

You can integrate your Helm configuration into your Skycap pipeline to get the best of both worlds. In this case Skycap manages the Helm configuration files in the same way as [Stencils](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil), giving you a way to manage, track and automate a unified container deployment pipeline. 

#### Note
<div class="notice"><p>
If you’re not already using Helm, and familiar with all its complexities, we strongly recommend that you spend time learning and configuring it before trying to integrate it with Skycap.</p></div>


## What you'll need

In order to get the most out of this guide, you should have:

* **An existing application set up in Skycap** &mdash; Follow our [Getting Started guide](/skycap/quickstarts/getting_started.html) if you're not sure how to do this. 
* **At least one Formation set up in Skycap** &mdash; We have another guide to [get you started with Formations] (/skycap/quickstarts/getting_started.html)
* **Helm installed on your cluster** &mdash; Helm has [a guide to get you started](https://docs.helm.sh/using_helm/#quickstart).
* **A firm grasp on both Stencils and Helm configuration files** &mdash; Each of these are relatively complex subjects, so learning them separately is highly recommended before you attempt to integrate them.

## Adding Helm releases to a Formation

Helm releases can be added to any Skycap Formation using the [Dashboard](https://app.cloud66.com/). Skycap fetches charts directly from a Helm repository and provides a pipeline to deploy (“release”) them alongside the rest of your application.

To add a release:

1. Open the **application overview** page
2. Click on *Formations* in the **Application** panel on the right
3. Click the name of the Formation to which you wish to add the release
4. Click on the *Helm Releases* tab
5. Click on *Add Release* (or on the green **+**)
6. Give your release a name
7. Choose the Helm repository you wish to use (we’ve connected the default Stable repo, but you can add your own options)
8. Select the *Helm Chart & Version* you’d like to release
9. Click *Create Release* 

Skycap will now fetch the configuration files for the chart and prepare the chart for use in your next Snapshot.

Once Skycap has successfully fetched the chart, you will see it listed under the *Helm Releases* tab, and we can move on to the next stage.

## Configuring a Helm release

Once a Helm chart is included in a Formation, you have access to most of the same functionality as you do with Stencils:

* Placeholders
* Tagging
* ConfigStore
* HashiCorp Vault

To make use use any of these features, you need to edit the `values.yaml` file for a Helm release. To do this:

1. Visit the *Helm Releases* tab / page
2. Click on the `values.yaml` link next to the release you want to customize
3. Edit the file as required
4. Add a commit message and click *Save Values*


### Using Placeholders with Helm 

Skycap treats `values.yaml` as just another Stencil, so all (valid) [Stencil Placeholders](/skycap/references/stencil_placeholders.html) will work in a Helm configuration file.

Just as with a Stencil you add Placeholders using the following format: `${...}` So, for example, you could edit the configuration of a Helm release for Redis and use the following placeholder to force Redis to use another port defined as an environment variable:

```
master:
  ## Redis port
  port: ${env("REDIS_PORT"}

```

This makes it simple to share and (re)use environment variables and other configuration values between your main application and your Helm releases. This is particularly powerful when combined with [ConfigStore](/skycap/how-to-guides/config-store.html) (see below).

### Tagging Helm releases

Tags in Skycap give you a way to quickly associate and group different configuration templates using easily readable names. Any Stencil, including `values.yaml` can be tagged with one or more words. These tags can then we used to construct deployments. 

A good example might be tagging a Helm chart with *LTS* to signify that it is the “long term support” version of that component. This allows you to filter deployments to only include these charts and to not include the beta versions you may be testing at the same time.

To tag any `values.yaml` file, click on the link for the file (on the **Helm Releases** page) and scroll down to the *Tags* field. Add your tags as required and then commit and save as usual. 

### Using ConfigStore with Helm 

[ConfigStore](/skycap/how-to-guides/config-store.html) is a centralised repo for configuration values that can be shared across and between your applications. 

Since ConfigStore also uses Stencil Placeholders to pull config values, they work almost identically to our example above. So, if we wanted to tell our Redis release to use the custom port, and that port was defined in CustomConfig, the Placeholder would be something like:


```
master:
  ## Redis port
  port: ${configstore("REDIS_PORT"}

```

The big difference here is that `REDIS_PORT` is not set as an environment variable in the operating system, but is instead fetched directly from the ConfigStore repo via an API call.

### Using Vault with Helm 

Skycap also integrates with [HashiCorp Vault](/skycap/how-to-guides/vault.html). You can pull values directly from a Vault connected to your Skycap account using Placeholders, in much the same way as ConfigStore above. 

The syntax is: `vault("/path_root/path_to_key","key_name")`

## Deploying a Helm release

When you’re ready to deploy your application, including any Helm releases:

1. Click on the Snapshot button and choose *Snapshot all*
2. When the snapshot is complete, visit the Formation you wish to deploy
3. Click on *Render Formation* and wait for the Formation to render completely.

You will now be able to either download all the configuration files and apply them manually, or copy and paste the commands provided by the page and apply them to your cluster via the terminal. 

#### Note
<div class="notice"><p>
There will always be at least two different commands that need to be run: the <code>render</code> command for the Stencils and <code>n</code> number of <code>helm</code> commands - one for each different Helm release in your application.</p></div>




