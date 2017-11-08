---
menuheaders: [ "Troubleshooting a container that won't start", "Troubleshooting a container that has started" ]
layout: post
template: one-col
title: Docker container troubleshooting
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---



## Troubleshooting a container that won't start

When you deploy your Docker stack with Cloud 66, the containers created from your image may have issues starting, and this guide will walk you through how to troubleshoot this. You should ensure that your [containers run in development](http://blog.cloud66.com/running-docker-in-development/) before deploying with Cloud 66, as this will avoid the most common issues.

Use [LiveLogs](https://help.cloud66.com/article/154-live-logs) from your stack page on Cloud 66 to check the logs from your containers. The `<service>_start_errors.log` logs should provide enough information to help you figure out why the container can’t start.


## Troubleshooting a container that has started

If your container has started, but isn't outputting the expected results, you can follow these steps to troubleshoot.

1. Use [LiveLogs](http://help.cloud66.com/managing-your-stack/live-logs) to check the log output from your containers.

2. Use the [toolbelt to exec into the given container](http://help.cloud66.com/toolbelt/toolbelt-container-management#container-exec) to troubleshoot:

```
cx containers exec -s <stack> <container_id> /bin/bash
```
This command executes your command within the context of a running container. Once you're inside the container, you'll be able to verify why the server isn't running as expected.

