---
layout: post
template: one-col
title:  "Managing required restarts"
categories: how-to-guides/deployment
order: 40
lead: "How to handle required restarts"
tags: ['maintenance']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

When Ubuntu issues critical security patches, we update your servers immediately whenever we can. If doing so would disrupt your services, we need you to trigger the restart manually (so that we don't disrupt your application(s)). 

If you'd like to understand more about why these restarts are required, please read our [reference guide on the subject](/maestro/references/server-restart-notifications.html).

## Restarting servers

### Preparing to restart

Doing so after-hours is recommended to minimize disruption.

In order to minimize downtime, you can restart one server at a time if you have a [load balancer](/maestro/tutorials/load-balancing.html) in place, or you can use [failover groups](/maestro/tutorials/failover-groups.html) to achieve the same thing.

You can also use the [maintenance page](/maestro/how-to-guides/deployment/service-network-configuration.html) to temporarily notify your users that you are performing maintenance.

### Restarting via SSH

To restart your server, it is recommended that you [SSH](/maestro/how-to-guides/common-tools/ssh.html) to your server and run either of the following terminal commands:

<pre class="terminal">
sudo reboot 
</pre>

<pre class="terminal">
sudo shutdown -r now
</pre>

### Important
<div class="notice">
<p>Depending on your cloud provider, if you shut your server down via their dashboard, you may have new IP addresses assigned to your server. That can take a little while to propagate to Cloud 66 and your DNS provider, meaning you may have some unnecessary downtime should you choose this restart method.</p>
</div>