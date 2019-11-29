---
layout: post
template: one-col
title:  "Understanding Rack status alerts"
legacy: false
categories: how-to-guides/rack-servers
order: 5
lead: Checking health during deployment
tags: ['web-server']
permalink: /:collection/:path:output_ext
---

There are three alerts that can be enabled at application level that will notify whether the web server is:

* Started
* Stopped
* Unmonitored

**Started** alerts fire whenever your web application goes from any other state to "Started". 

**Stopped** alerts indicate that your web application has entered a "stopped" state. This usually means that it has failed for some reason. From this state, Bluepill will automatically try to restart the application. 

**Unmonitored** alerts indicate that Bluepill is no longer controlling your web process. This typically happens when Bluepill needs to reload your application (for example when an environment variable changes) or when your application itself dissappears completely (in the case of Out Of Memory killer for example).

## Alert limits

To stop potential infinite alerting if your application is flipping between states due to errors, we will send a maximum of 3 "Stopped" or "Unmonitored" alerts until such a time as a "Started" state is achieved.