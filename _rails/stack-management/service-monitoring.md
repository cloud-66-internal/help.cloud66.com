---
menuheaders: [ "CPU usage", "Memory usage", "Disk IO usage", "Network usage" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_we-use-cadvisorhttps-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_cpu-usage-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_memory-usage-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_disk-io-usage-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_network-usage-v1.md" ]
layout: post
template: one-col
title: Service Monitoring
categories: stack-management
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_we-use-cadvisorhttps-v1.md  product = product %}
<a name="2"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_cpu-usage-v1.md  product = product %}
<a name="3"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_memory-usage-v1.md  product = product %}
<a name="4"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_disk-io-usage-v1.md  product = product %}
<a name="5"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_network-usage-v1.md  product = product %}