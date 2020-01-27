---
layout: post
template: one-col
title: Understanding Build Minutes 
categories: references
lead: "A guide to how Build Minutes are defined and measured"
legacy: false
order: 3
tags: ["billing"]
permalink: /:collection/:path:output_ext
---

## What are Build Minutes?

BuildGrid is Maestro’s integrated Docker image builder. Whenever you build images from source code you make use of a metered resource called **Build Minutes**.

## Calculating Build Minutes

Usage of Build Minutes is calculated by measuring the exact time (to the nearest second) that it takes for **your image(s) to build from code**. This includes the time taken to push the images into the image repo.

All other actions and functions do not consume BuildGrid minutes. This includes:

* Time in the BuildGrid queue 
* Time waiting for endpoints
* Time spent provisioning servers
* Time spent publishing / deploying images to servers

## Monthly Build Minutes

Each Maestro account has a quota of Build Minutes included which refreshes each month. The number of Minutes available depends on the kind of account you have:

* Community (free) accounts: 30 Build Minutes / month 
* Trial accounts (14 days): 120 Build Minutes 
* Growth and above: 120 Build Minutes / month

## Build Minute overages

All **paid** accounts can exceed their monthly quota of Build Minutes. You will be charged for overages based on the following formula:

> (number of build minutes) x  $0\.005

So, for example, 4 extra hours of Build time would cost $1\.20 (240 mins x half a cent per minute = $1.20).

(Community accounts can’t exceed the quota and builds will stop if they exceed the limit) 

#### Rounding up during billing
<div class="notice"><p>
At the end of each billing period we add up all overages and then round up to the nearest dollar.
</p></div>