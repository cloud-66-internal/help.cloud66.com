---
layout: post
template: one-col
title:  "ActiveProtect&trade;"
categories: references
order: 10
lead: "What is ActiveProtect&trade;?"
tags: ['tags']
legacy: false
permalink: /:collection/:path
---

## What is ActiveProtect&trade;?

All applications deployed with Cloud 66 are automatically protected against [denial of service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. 

## ActiveProtect&trade; interface

The **ActiveProtect** page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

To reach the page:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *ActiveProtect* in the **Application** panel on the right of the screen


## SSH soft blocking

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.