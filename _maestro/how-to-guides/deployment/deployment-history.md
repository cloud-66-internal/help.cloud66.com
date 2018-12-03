---
layout: post
template: one-col
title: Using Deployment Timeline
categories: how-to-guides/deployment
order: 20
lead: "How to use the deployment timeline to track and roll back deployments"
legacy: false
tags: ["operations"]
permalink: /:collection/:path
---

## Overview

The **Build & Deployment Timeline** is a useful tool for tracking the version history of any application.

This timeline includes information about: 

* Who deployed
* When they deployed
* What code revision was deployed 
* How the deployment was triggered (web, [API](http://developers.cloud66.com) or [redeployment hook](/maestro/how-to-guides/deployment/redeployment-hook.html). 

## Accessing the timeline

The timeline is available for any Maestro application that has been deployed at least once.

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Build & Deploy*  in the **Application** panel on the right of the screen.
3. Scroll through the history (it's in descending date order)

The **left-hand side** of the timeline lists every time you took a *Snapshot* of your code (i.e. built it from source), the **right-hand side** list each time you *Published* your application (i.e. deployed the code to servers)

You can also use this interface to see any activity (such as builds) currently in progress for the application, as well as build and deployment *Profiles* for the app.

## Rolling back using the timeline

You can use the timeline to revert back to a previous version of your application. To do this:

1. Find the point in the timeline to which you'd like to revert. 
2. Click on either *Rebuild* or *Republish* depending on what you need to achieve. You will need to click again to confirm the action.
3. Wait for the action to complete

Reverting to a previous *Snapshot* will only affect your code. You might still need to restore a [database backup](/maestro/how-to-guides/add-ins/database-backup.html). If you wish, you can [switch off your database migrations](/maestro/how-to-guides/databases/database-customization.html), roll back your database and then roll back your code.

## Deployment status

On the timeline, a <font color="green">green</font> deployment box indicates that it has been successful, whereas a <font color="red">red</font> one indicates failure.

