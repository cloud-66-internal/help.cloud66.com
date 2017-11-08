---
menuheaders: [ "The Problem", "Note", "Possible Resolutions" ]
layout: post
template: one-col
title: Out of memory errors during deployment
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---








## The Problem

When you are deploying your stack (particularly in a non-development environment) asset pipeline compilation takes place during the deployment process.

If your server does not have sufficient memory available to perform the asset pipeline compilation you may receive one of the following errors:

- "Cannot allocate memory"
- "Killed"
- "Out of memory"

These are more likely to occur on servers with low memory availability. It is possible that your initial deployment succeeds, and subsequent deployments fail, and this is due to the fact that after your initial deployment you have additional memory usage of your web server. You can also use a [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) to specify a value in MB for *reserved_server_memory* - this may help with Passenger-based stacks by preventing Cloud 66 from allowing passenger to allocate additional processes.









## Note

Irregular vendor issues in memory allocation (like greedy neighbours on the same physical instance) could also cause this issue, though that very vendor/infrastructure specific.









## Possible Resolutions

1.  Compile the assets on your own box and disable asset pipeline compilation on the stack going forward.
2.  Configure your code not to use asset pipeline pre-compilation and use live compilation (on-demand). [More information on Asset Pipeline compilation](http://help.cloud66.com/building-your-stack/asset-pipeline-compilation).
3.  Resize your box to a bigger box either via a new stack, or [vertical scaling]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %}) if available.
4.  [Setup swap files on your server](https://www.digitalocean.com/community/articles/how-to-add-swap-on-ubuntu-12-04). This is automatically done for 512MB and 1GB DigitalOcean servers.
5.  Manually reduce memory usage on your server before deployments (ie. manually stop your webserver).
6.  Reduce memory usage on your server by limiting Passenger memory usage (using a [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) to specify a value for reserved_server_memory).

