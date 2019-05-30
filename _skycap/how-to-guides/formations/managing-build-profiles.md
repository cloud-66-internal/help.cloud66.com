---
layout: post
template: one-col
title: Managing build profiles
categories: how-to-guides/formations
order: 6
lead: "How to create, use and edit build profiles"
legacy: false
tags: ["build,services"]
permalink: /:collection/:path:output_ext
---

## What are build profiles?

Build Profiles allow you to customise how the services inside your application are built when Snapshots are triggered. This is useful for more complex applications with many different components. 

## Why create build profiles?

While you’re developing an application, you’ll want to rebuild it frequently to test on your local environment. By excluding stable components from the build process, you won’t have to build them every time you make a new Snapshot. For applications that have many services, this can save a lot of time.

#### Note
<div class="notice"><p>Build Profiles are also available in Maestro where they can be used to control deployment and update strategies. See the Maestro documentation for more details.</p></div>

## Using build profiles

Whenever you take a Snapshot, you can choose to use one of your build profiles. The simplest way to do this:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click the green *Snapshot* button at the top right of the screen
3. Click the name of the profile you want to use

A new Snapshot will now be built, excluding (or including) the services specified in that profile.

## Managing build profiles

To quickest way to edit a build profile is to:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click the green *Snapshot* button at the top right of the screen
3. Click the name of the *Manage profiles* link under “Snapshot profiles”
4. Click on the edit icon next to the profile you’d like to edit

You can also reach this screen by clicking on Snapshots (to view the timeline) and then on the *Profiles* tab.

You can also use this page to:

* Delete any build profile
* Run any build profile (this is equivalent to clicking the green Snapshot button and choosing the profile)

