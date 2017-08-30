---
menuheaders: [ "CPU usage", "Memory usage", "Disk usage" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/server-monitoring/server-monitoring_although-cloud-66-detects-server-connecti-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/server-monitoring/server-monitoring_cpu-usage-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/server-monitoring/server-monitoring_memory-usage-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/server-monitoring/server-monitoring_disk-usage-v1.md" ]
layout: post
template: one-col
title: Server monitoring
categories: stack-management
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/StackManagement/common/server-monitoring/server-monitoring_although-cloud-66-detects-server-connecti-v1.md  product = product %}
<a name="2"></a>{% include _inlines/StackManagement/common/server-monitoring/server-monitoring_cpu-usage-v1.md  product = product %}
<a name="3"></a>{% include _inlines/StackManagement/common/server-monitoring/server-monitoring_memory-usage-v1.md  product = product %}
<a name="4"></a>{% include _inlines/StackManagement/common/server-monitoring/server-monitoring_disk-usage-v1.md  product = product %}