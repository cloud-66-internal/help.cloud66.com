---
layout: post
template: one-col
title: What are Parallel deployments?
categories: how-to-guides/deployment
lead: ""
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---



## What is parallel deployment?

When you deploy in parallel, all the deployment tasks for the servers in your stack will run in parallel as opposed to running in serial. In other words, the tasks will run against each server simultaneously instead of running on one server at a time. For large stacks, this can have significant time benefits.

Deploying in serial involves removing each server from your load balancer, deploying to it, and re-adding it to the load balancer. When you deploy in parallel, your servers won't be removed from the load balancer, because you could end up with no servers serving the load balancer if this were the case.

### Note

To run database migrations during deployment, it is advisable to deploy in serial.

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations]({% if include.product == "skycap" %}/maestro/databases/database-management.html{% else %}/{{ include.product }}/databases/database-management.html{% endif %}) for more information.

## Configure parallel deployment

To activate parallel deployments, access your [Stack settings](/{{ include.product }}/toolbelt/settings.html) via [Toolbelt](/{{ include.product }}/toolbelt/introduction.html) and set `deploy.parallel` to `true`. 

```

$ cx settings set -s my_stack deploy.parallel true

```
Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your stack set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

Parallel deployments are activated by default for [Rack-based stacks with a custom web server](/rails/deployment/custom-web-servers.html) (eg. Unicorn as it supports zero downtime restarts), but not for stacks based on Passenger.

