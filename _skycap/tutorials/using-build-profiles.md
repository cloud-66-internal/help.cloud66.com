---
layout: post
template: one-col
title: Using build profiles
categories: tutorials
order: 6
lead: "How to create and use build profiles in Skycap"
legacy: false
tags: ["builds,customization"]
permalink: /:collection/:path
---

Build Profiles allow you to customise how the services inside your application are built when Snapshots are triggered. This is useful for more complex applications with many different components.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting_started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using_formations.html) guide.

* **At least two services defined in your application** &mdash; You can add a sidecar service to your application by following [this guide] (/skycap/tutorials…).

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides and our other tutorials.</p></div>

## Create a build profile

In this example (from the [Hello World + Auther](/skycap/tutorials/adding-and-enforcing-sidecar-containers.html) application) we’re assuming that the Auther sidecar is stable and rarely needs to be rebuilt. 

To create a build profile:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click on *Snapshots* in the right-hand panel
3. Click on then *Profiles* tab at the top of the Timeline panel
4. Click the *New Profile* button
5. Give your build profile a name (e.g `no sidecar`)
6. Deselect the service(s) you wish to exclude from this build profile and hit Save Profile.

Now whenever you create a new Snapshot for this application, you will be able to use this build profile to build only the images you want to change. Simply click on the green *Snapshot* button and select the build profile in question.

## What’s next?

* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils
* Learn how to use [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 

