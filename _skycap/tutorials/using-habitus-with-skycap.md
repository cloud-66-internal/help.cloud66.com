---
layout: post
template: one-col
title: Using Habitus with Skycap
categories: tutorials
order: 6
lead: "Using Habitus flows within Skycap"
legacy: false
tags: ["habitus,workflow,build.yml"]
permalink: /:collection/:path
---

Skycap integrates build flows created using [Habitus](http://www.habitus.io/). This allows you to reuse your existing `build.yml` files to build your application images within Skycap.

## What is Habitus?

If you’re not an existing Habitus user, you’ll need to read through its [documentation](http://www.habitus.io/) to fully understand the purpose and power of the tool. 

Essentially Habitus allows you the define a workflow that controls the order and manner in which your code is built into Docker images. This is especially useful if your containers have multiple components or dependencies that need to be built in a specific order.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **A Habitus enabled project repository** &mdash; If you don’t have one, we have [a sample project](https://github.com/cloud66-samples/pilot-db/tree/dev) that you can use for this tutorial.

* **A `service.yml` file on your desktop** &mdash; You can download the file from the repo above, or use your own.

## Using a Habitus build flow with Skycap

Skycap’s default behaviour is to build “simple” applications which have a single `Dockerfile`, so Habitus-enabled projects need to follow a different route:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard), click the green *New Application* button and choose “Skycap”
2. Name your application (e.g. “Habitus example”)
3. Click on *Upload service.yml File* and then select the file in question
4. Click *Next* and then wait for Skycap to ingest all the components in the service.yml (this can take a little while depending on the complexity of the project).

Once the service has been successfully added to Skycap, you can run a full Habitus build by clicking *Create Snapshot*. 

You can track the output of the Habitus build process by clicking on the *View … build logs* link and then clicking the grey *More logs* button.

## What’s next?

* Learn how to [update an existing service](/skycap/tutorials/updating-an-existing-service.html) in Skycap.
* Learn how to [add new services or components](/skycap/tutorials/adding-a-new-service.html) to a service.
* Learn how to [roll back to an older version of your application](/skycap/tutorials/rolling-back-using-snapshots.html) using Snapshots.
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils.
* Learn how to use [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 





