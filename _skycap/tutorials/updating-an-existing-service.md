---
layout: post
template: one-col
title: Updating an existing service
categories: tutorials
order: 1
lead: "Updating the code of an existing service"
legacy: false
tags: ["docker"]
permalink: /:collection/:path
---

## Overview

As your application evolves you will need to change its services and other components from time to time. This guide walks you through that process.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting_started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using_formations.html) guide.

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides.</p></div>

## Updating your application code

In this example, you have decided to deploy a beta version of the Hello World application, and so you want to switch to using the “beta” branch of your application code. To do this:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application you need to change. 

2. Click on the edit icon in the top left-hand corner of the application detail panel to open the Service Editor

3. Change the Git Branch field from `master` to `beta` and click *Go*

4. Once Skycap has confirmed access to the new code location, click *Save changes*

<img src="/assets/skycap/tutorial-editing-service-1.gif"/>

#### Warning
<div class="notice notice-warning"><p>The changes you make here will not reflect in either your Formations or your Maestro deployments until you take a new Snapshot of the updated application.</p></div>

## Deploying your updated application

In order to see your beta version running, you first need to take a new Snapshot of your application. This will build your new code into a image so that you can deploy it to your cluster.

To do this: 

1. Click the *Snapshot* button and select *Snapshot all*
2. Wait for the build to finish converting your code into images (or retagging existing images)
3. Click on *Formations* in the right-hand panel
4. Click on the “Hello World” Formation
5. Click on the *Render Formation* button

<img src="/assets/skycap/tutorial-editing-service-2.gif"/>

You can now use the Cloud 66 Toolbelt to redeploy your application to Minikube following the same steps as in our [Getting Started with Formations](/skycap/quickstarts/using_formations.html#deploying-it-all-to-your-cluster) guide.

You’ll notice that the `cx` command looks nearly identical to the one we used in our Formations guide, except that the UID of the `snapshot` is different. This is because we are using our new snapshot with the new application code that we created in the previous step.

If you’ve followed all the steps successfully then the web page that loads when you run `minikube service` command will have the word “(beta)” in the title.

## What’s next?

* Learn how to [add new services or components](/skycap/tutorials/adding-a-new-service.html) to a service.
* Learn how to [roll back to an older version of your application](/skycap/tutorials/rolling-back-using-snapshots.html) using Snapshots.
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils
* Learn how to use your [Habitus build flow](/skycap/tutorials/using-habitus-with-skycap.html) within Skycap.
* Learn how to use [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 


