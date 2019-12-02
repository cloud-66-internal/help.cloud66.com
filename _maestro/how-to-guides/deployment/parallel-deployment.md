---
layout: post
template: one-col
title: Choosing a deployment strategy
categories: how-to-guides/deployment
order: 30
lead: "How to choose and set a deployment strategy for your application - serial or parallel."
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Maestro supports two deployment strategies:

1. Serial
2. Parallel  

Deploying in serial involves removing each server from your load balancer, deploying to it, and re-adding it to the load balancer. 

When you deploy in parallel, all the deployment tasks for the servers in your application will run in parallel as opposed to running in serial. In other words, the tasks will run against each server simultaneously instead of running on one server at a time. For large applications, this can have significant time benefits. When you deploy in parallel, your servers won't be removed from the load balancer, because you could end up with no servers serving the load balancer if this were the case.


#### Note
<div class="notice"><p>To run database migrations during deployment, it is advisable to deploy in serial.</p></div>

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations](/maestro/how-to-guides/databases/database-customization.html) for more information.

## Configure parallel deployment

To activate parallel deployments, access your [Application settings](/maestro/references/toolbelt.html#settings-variables) via [Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html) and set `deploy.parallel` to `true`. 

```
$ cx settings set -s my_app_name deploy.parallel true
```
Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your application set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

## Coping with load balancer configuration lag

Load balancers - particularly native cloud load balancers - can be prone to configuration lags. In other words, they can sometimes report that they have removed a server whereas, in reality, some traffic is still being routed to that server for a few seconds or minutes. 

This can also work in the opposite direction - the load balancer may report that it has added a server but it does not actually begin routing traffic to a server for a short period.

For many lag-tolerant applications this short delay does not matter, but some applications are more sensitive and can suffer adverse affects from this configuration lag.

If your application is "lag-sensitive" we recommend adding short delays to your [load balancer configurations](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html#aws-load-balancer). You can do this using the **`wait_after_adding_servers`** and **`wait_after_removing_servers`** options under the load balancers section of your application's [manifest file](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html#aws-load-balancer). 

Bear in mind that adding these delays can slow down the deployment process significantly. For **serial deployments** the additional delay will be: 

*(wait time per server)x(number of servers) = (extra deployment time).* 

#### Note
<div class="notice notice-warning"><p>If you use this option in your manifest, subsequent deployments will use the value set. To remove this delay, set the value to <kbd>0</kbd> in your manifest, and then redeploy. Simply deleting this value from your manifest will not result in removing the setting once it has been applied.
</p></div>

