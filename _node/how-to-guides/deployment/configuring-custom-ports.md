---
layout: post
template: one-col
title: Configuring custom ports
categories: how-to-guides/deployment
lead: "How to configure custom ports for a Cloud 66 Node application"
order: 10
legacy: false
tags: ["websocket"]
permalink: /:collection/:path:output_ext
---

## Overview

Node for Cloud 66 is designed to be a simple, hands-off solution for deploying Node applications. As such the complexity around exposing and using ports is largely automated and not editable.

By default your Cloud 66 application will be set to listen on port `3000`, so please ensure your application code is configured accordingly.

If you need to use non-standard ports for your application or any of its components, you have two options:

1. Migrate your Node application to [Cloud 66 Maestro](https://www.cloud66.com/containers/maestro/) which is designed for exactly this use case (we'll give you 4 weeks free to test it out)
2. Modify your application's code to force it to use different ports

We strongly recommend Option 1 for any application that requires a non-standard set up. 

## Changing ports in your application code

When you deploy an application using Node for Cloud 66, we analyse your application code and set up your infrastructure according to what we find in your code.  

Given the almost infinite number of ways to write software, we can't recommend any particular method for achieving this. [Here is a simple example](https://expressjs.com/en/starter/hello-world.html) from the Express documentation.