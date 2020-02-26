---
layout: post
template: one-col
title:  "Using the Jobs Add-in"
categories: how-to-guides/add-ins
order: 5
lead: Run a scheduled or on-demand tasks on a server host or against a docker service
tags: ['Add in']
legacy: false
permalink: /:collection/:path:output_ext
---

{% include how-to-guides/add-ins/add-ins-jobs.md %}

## Support for whenever gem

We also support the [whenever gem](https://github.com/javan/whenever) for managing CRON jobs. However, we recommend using our native Jobs Add-in (see above) instead. The Add-in had many benefits, including allowing you to monitor and manage CRONs via the web interface.

If you'd prefet to use the gem, simply add `whenever` to your Gemfile we will automatically use the config/schedule.rb in your source code to build the CRON jobs on the relevant servers.

