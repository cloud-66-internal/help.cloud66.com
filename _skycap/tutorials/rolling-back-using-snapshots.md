---
layout: post
template: one-col
title: Rolling back using Snapshots
categories: tutorials
order: 5
lead: "Using Skycap as an infrastructure time machine"
legacy: false
tags: ["formations,versioning"]
permalink: /:collection/:path
---

## Overview

One of the most significant benefits of using Skycap is that it acts as an “infrastructure time machine”. You can roll backwards to any application state for which a [Snapshot](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-snapshot) was taken. 

A Snapshot includes both the container images and the configuration files and variables associated with those images, all saved in a private repository within Cloud 66.

## How to roll back to an older snapshot

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application you wish to roll back.
2. Click on *Snapshots* in the right-hand panel
3. Find the Snapshot you wish to rebuild in the timeline and click *Rebuild* (you will be asked to confirm before the rebuild starts)
3. Wait for the rebuild to be completed (you can view a live log of the build process by clicking the *view APPNAME build logs* link)
4. When the rebuild is complete, you can redeploy application by following [this guide](/skycap/quickstarts/using_formations.html#deploying-it-all-to-your-cluster).

#### Note:
<div class="notice"><p>Each time you roll back you actually create a new Snapshot that copies the contents of an older Snapshot. We suggest taking note of the UIDs (or timestamps) of “stable” Snapshots to make this process easier to manage.</p></div>

#### Warning:
<div class="notice notice-warning"><p>Rolling back to a previous Snapshot will revert the <em>entire application</em> to that state. If you have made significant changes to either your images or your configurations in a newer Snapshot, those changes will not exist in this new (rebuilt) Snapshot. You can, however, download the Formations files for any Snapshot (see below for how to do this).</p></div>

## Downloading older Formations

You can also download any or all of the Stencils (configuration files) for any Snapshot without rebuilding your application to that state. This can be used to:

* Deploy an older Snapshot without having to rebuild
* Compare two sets of configuration files (Stencils)

To do this:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click on *Snapshots* in the right-hand panel
Find the Snapshot you need and click on *Formations*
3. Click on the name of the Formation which you’d like to examine

You can now look through all the Stencils in this Formation, and/or download them as a single YML file. You can also deploy them to your cluster using the recommended `cx` command. If you’re not sure how to do that, [follow this guide](/skycap/quickstarts/using_formations.html#deploying-it-all-to-your-cluster). 

#### Warning:
<div class="notice notice-warning"><p>Be cautious when using older Formations to deploy changes to your cluster(s). Remember that Skycap stores copies of all your images at that point in time. Always check that you are not accidentally deploying older code that may break your application.</p></div>

## Checking the build information for Snapshots

Each Snapshot also preserves all the metadata for each build. To see this information for a Service within any Snapshot:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click on *Snapshots* in the right-hand panel
3. Click on the name of any Service under a Snapshot in the timeline

The page that opens gives you all the details about that Service, at the point in time when it was built. Note that each build has a unique ID (UID). You can see this in the green bar at the top of the panel.

### See more detailed logs

The default view for a Service has a summary view of the build logs. To see more detail, simply click on the *More logs* button at the top right of the panel.

## What’s next?

* Learn how to [update an existing service](/skycap/tutorials/updating-an-existing-service.html) in Skycap.
* Learn how to [add new services or components](/skycap/tutorials/adding-a-new-service.html) to a service.
* Learn how to use [Habitus](/skycap/tutorials/using-habitus-with-skycap.html) with Skycap
