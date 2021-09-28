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

BuildGrid is Prepress's integrated application builder. Whenever you build your application from source code you make use of a metered resource called **Build Minutes**.

## Calculating Build Minutes

Usage of Build Minutes is calculated by measuring the exact time (to the nearest second) that it takes for **your application(s) to build from code**.

All other actions and functions **do not** consume BuildGrid minutes. This includes:

* Any time in the BuildGrid queue 
* Time waiting for endpoints
* Time spent provisioning cloud resources
* Time spent publishing / deploying your application

## Monthly Build Minutes

Each Prepress account has a quota of Build Minutes included which refreshes each month. The number of Minutes available depends on the kind of account you have:

* Trial accounts (4 weeks): 120 Build Minutes 
* Paid accounts: 120 Build Minutes per month - shared across all your Prepress applications

## Build Minute overages

All **paid** accounts can exceed their monthly quota of Build Minutes. You will be charged for overages based on the following formula:

> (number of build minutes) x  $0\.005

So, for example, 4 extra hours of Build time would cost $1\.20 (240 mins x half a cent per minute = $1.20).

(Community accounts can’t exceed the quota and builds will stop if they exceed the limit) 

#### Rounding up during billing
<div class="notice"><p>
At the end of each billing period we add up all overages and then round up to the nearest dollar.
</p></div>