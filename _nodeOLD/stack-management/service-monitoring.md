---
layout: post
template: one-col
title: Service Monitoring
categories: stack-management
lead: ""
legacy: false

permalink: /:collection/:path
---


### CPU usage
Contrary to other CPU usage metrics, the cAdvisor does not collect percentages - instead it collects nanoseconds that each container uses. We are using collected information by cAdvisor to calculate the percentage of CPU usage.


### Memory usage
The memory usage chart will show memory usage of a container, which includes all memory regardless of when it was accessed.


### Disk IO usage
The disk IO chart shows the number of bytes transferred to/from each disk.


### Network usage
The network chart shows the number of bytes transferred/received to/from each container.

