---
layout: post
template: one-col
title:  "Understanding server restart notifications"
categories: references
order: 5
lead: Understanding server restart notifications in Maestro
tags: ['server','notifications']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

When Maestro provisions a server, it automatically installs and configures the **unattended-upgrades** package. This package is responsible for automatically applying security patches that are released by the Ubuntu package maintainers. Sometimes a package will be updated that impacts an already running process on your server, and the only way to update the already running process is to restart it. 

However, there is no generic way that the package manager can restart all affected processes, so it instead marks your system with a “restart required” flag, requesting user action to reboot the server (such that all affected processes are restarted). Unattended-upgrades could be configured to perform the restart automatically, but in any production environment, this is obviously not desirable! 

For affected servers, you will see a notification in your console when you connect to your server in the format: *** System restart required ***. Maestro also displays these notifications in your dashboard.

If you need help restarting your servers safely, refer to [our guide on the subject](/maestro/how-to-guides/deployment/managing-required-restarts.html).

## Do I need to take immediate action?

Unfortunately, there is no generic way to answer that question. It very much depends on what has been updated and how critical your systems are. 

For instance, in general, it is more important to update your servers that are exposed to the outside world (ie. any servers that have external ports opened such as web or api servers) than an internal backend server not accessible from anywhere except internal systems. 

For this reason, Cloud 66 will prioritize restart notifications for any server with ports exposed to "anywhere" externally, although all restart notifications are visible on the server detail page. 

If the restart has not taken place for a long time then eventually the notification will surface on the application details page too. However, the urgency is very much application dependent.

## Restart criteria

The unattended-upgrades package signals to the operating system that a restart is required by creating a file `/var/run/reboot-required`. Maestro checks periodically if this file is present and notifies you if it is. 

## I've restarted, but I still see the notification

It can take up to 12 hours for your notifications to be cleared. Deploying your application will cause an immediate refresh of your restart notification state (after deployment completes). You can also manually check your restart required status on your server by running the command:

<pre class="terminal">
sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"
</pre>

## Additional information

Visit the <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">Ubuntu documentation on automatic security updates</a> for additional information about Ubuntu unattended-upgrades.

## How do a restart my servers?

If you need help restarting your servers safely, refer to [our guide on the subject](/maestro/how-to-guides/deployment/managing-required-restarts.html).