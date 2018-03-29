---
layout: post
template: one-col
title:  "About Rack Custom Webserver Health"
legacy: false
categories: tutorials
lead: Checking health during deployment
tags: ['web-server']
permalink: /:collection/:path
---

<h2 id="health_check">Health Check During Deployment</h2>

For customers who are using custom web servers (not Passenger) to serve their code (such as Puma, Unicorn, Thin etc); Because each of these web servers involves a separate process (that in turn can be spawning child processes) our default deployment strategy is to provide the routing in Nginx to the upstream process. However, that could mean that although your deployment is successful, your app is not actually serving anything! 

Now there is a stack-level option to perform additional health check on your separate custom web processes during deployment. If we detect that your application is not "healthy" we will fail the deployment. Although this adds a bit of time during the deploy process, it comes with the additional cover that you know for a fact that your application is serving something! We use two metrics to ensure your application is healthy, firstly that Bluepill is indeed reporting that your application is healthy. Secondly that your application process ids change in some way on redeployment.

To enable this option, click on "Settings & Information" and check the "Web Health" checkbox.
This does not apply to Docker or Passenger based stacks as they have other health check mechanisms available already.


<h2 id="alerts">New Status Alerts</h2>

Additionally, there are three alerts that can be enabled at stack level that will notify whenever the web server is detected as "Started", "Stopped" or "Unmonitored"

Started alerts are self explanatory and will fire whenever your web application goes from any other state to "Started". Stopped alerts indicate that your web application has gone to a "Stopped" state. This usually means that it has failed for some reason. From this state, Bluepill will automatically try and restart the application. Unmonitored alerts indicate that Bluepill is no longer controlling your web process, and this typically happens when Bluepill needs to reload your application (for environment variable changes for example) or when your application itself dissappears completely (in the case of Out Of Memory killer for example).


To stop potential infinite alerting if your application is flipping between states due to errors, we will send a maximum of 3 "Stopped" or "Unmonitored" alerts until such a time as a "Started" state is achieved.