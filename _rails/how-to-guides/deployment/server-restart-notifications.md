---
layout: post
template: one-col
title:  "Managing required restarts"
categories: how-to-guides/deployment
order: 80
lead: Cloud 66 server restart notifications
tags: ['server','notifications']
legacy: false
permalink: /:collection/:path
---

When Cloud 66 provisions your server we will automatically install and configure the unattended-upgrades package. This package is responsible for automatically applying security patches that are released by the Ubuntu package maintainers. Sometimes a package will be updated that impacts an already running process on your box, and the only way to update the already running process is to restart it. 

However, there is no generic way that the package manager can restart all affected processes, so it instead marks your system with a “restart required” flag, requesting user action to reboot the server (such that all affected processes are restarted). Unattended-upgrades could be configured to perform the restart automatically, but in any normal environment this is obviously not desirable! 

For affected servers, when you connect to your server you will see a notification in your console provided by your operating system of the form: *** System restart required ***. Cloud 66 brings the server notifications forward in your dashboard so that you can see via the UI when a package upgrade has resulted in a server restart request.

## Is this important? Do I need immediate action?
Unfortunately there is no generic way to answer that question. The answer is that it very much depends on what has been updated and how critical your systems are, and what the potential attach vectors for your server are. For instance, in general it is more important to update your servers that are exposed to the outside world (i.e. any servers that have external ports opened such as web or api servers) than an internal backend server not accessible from anywhere except internal systems. 

For this reason, Cloud 66 will promote restart notifications for any server with ports exposed to "anywhere" externally, although all restart notifications are visible on the server detail page. If the restart has not taken place for a long time then eventually it will be promoted and appear in your Application Overview page too. However, the urgency is very much application dependant.

## How do I actually restart my servers?
In order to minimise down-time, you can restart one server at a time (assuming you have a [load balancer](/rails/tutorials/load-balancing.html) in place). Selecting an out-of-hours time is recommended to minimise disruption. You can also use the [maintenance page](/rails/tutorials/service-network-configuration.html) to temporarily notify your users that you are performing maintenance.

To restart your server, it is recommended that you <a href="/rails/how-to-guides/common-tools/ssh.html">SSH to your server</a> and run either of the following terminal commands:

<pre class="terminal">
sudo reboot 
</pre>

<pre class="terminal">
sudo shutdown -r now
</pre>


#### Important
<div class="notice">
<p>Depending on your cloud provider, if you instead choose to shut your server down, then start it again via the cloud provider dashboard, you may have new IP addresses assigned to your server. That can take a little while to propagate to Cloud 66 and your DNS provider, meaning you may have some unnecessary downtime should you choose this restart method.</p>
</div>

## How does Cloud 66 determine my server needs a restart?
The unattended-upgrades package signals to the operating system that a restart is required by creating a file <i>/var/run/reboot-required</i>. Cloud 66 will check periodically if this file is present and bring that forward into the UI. 

## I've restarted, but I still see the notification
Due to the periodic checking of your server (as stated above) it can take up to 12 hours for your notifications to be cleared. Deploying your application will cause an immediate refresh of your restart notification state (after deployment completes). You can also manually check your restart required status on your server by running the command:

<pre class="terminal">
sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"
</pre>

## Additional information
Visit the <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">Ubuntu documentation on automatic security updates</a> for additional information about Ubuntu unattended-upgrades.