---
menuheaders: [ "What is the server restart notification?", "Is this important? Do I need immediate action?", "How do I actually restart my servers?", "Important", "How does Cloud 66 determine my server needs a restart?", "I've restarted, but I still see the notification", "Additional information" ]
layout: post
template: one-col
title: Server restart notifications
categories: stack-management
lead: ""
legacy: true

permalink: /:collection/:path
---



## What is the server restart notification?

When Cloud 66 provisions your server we will automatically install and configure the unattended-upgrades package. This package is responsible for automatically applying security patches that are released by the Ubuntu package maintainers. Sometimes a package will be updated that impacts an already running process on your box, and the only way to update the already running process is to restart it. 

However, there is no generic way that the package manager can restart all affected processes, so it instead marks your system with a “restart required” flag, requesting user action to reboot the server (such that all affected processes are restarted). Unattended-upgrades could be configured to perform the restart automatically, but in any normal environment this is obviously not desirable! 

For affected servers, when you connect to your server you will see a notification in your console provided by your operating system of the form: *** System restart required ***. Cloud 66 brings the server notifications forward in your dashboard so that you can see via the UI when a package upgrade has resulted in a server restart request.


## Is this important? Do I need immediate action?

Unfortunately there is no generic way to answer that question. The answer is that it very much depends on what has been updated and how critical your systems are, and what the potential attach vectors for your server are. For instance, in general it is more important to update your servers that are exposed to the outside world (ie. any servers that have external ports opened such as web or api servers) than an internal backend server not accessible from anywhere except internal systems. 

For this reason, Cloud 66 will promote restart notifications for any server with ports exposed to "anywhere" externally, although all restart notifications are visible on the server detail page. If the restart has not taken place for a long time then eventually it will be promoted up in your stack details page too. However, the urgency is very much application dependant.


## How do I actually restart my servers?

In order to minimise down-time, you can restart one server at a time (assuming you have a {% if include.product == "rails" %}[load balancer](https://help.cloud66.works/{{ include.product }}/addins/load-balancer.html) {%else%}[load balancing](https://help.cloud66.works/{{ include.product }}/addins/load-balancing.html){%endif%} in place). Selecting an out-of-hours time is recommended to minimise disruption. You can also use the [maintenance page]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) to temporarily notify your users that you are performing maintenance.

To restart your server, it is recommended that you [SSH to your server](https://help.cloud66.works/{{ include.product }}/stack-management/ssh-to-server.html) and run either of the following terminal commands:

```
sudo reboot 
```

```
sudo shutdown -r now
```





### Important

Depending on your cloud provider, if you instead choose to shut your server down, then start it again via the cloud provider dashboard, you may have new IP addresses assigned to your server. That can take a little while to propagate to Cloud 66 and your DNS provider, meaning you may have some unnecessary downtime should you choose this restart method.



## How does Cloud 66 determine my server needs a restart?

The unattended-upgrades package signals to the operating system that a restart is required by creating a file _/var/run/reboot-required_. Cloud 66 will check periodically if this file is present and bring that forward into the UI. 


## I've restarted, but I still see the notification

Due to the periodic checking of your server (as stated above) it can take up to 12 hours for your notifications to be cleared. Deploying your stack will cause an immediate refresh of your restart notification state (after deployment completes). You can also manually check your restart required status on your server by running the command:

```
sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"
```




## Additional information

Visit the [Ubuntu documentation on automatic security updates](https://help.ubuntu.com/community/AutomaticSecurityUpdates) for additional information about Ubuntu unattended-upgrades.

