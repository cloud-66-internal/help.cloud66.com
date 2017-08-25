---
menuheaders: [ "CPU usage", "Memory usage", "Disk IO usage", "Network usage" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_we-use-cadvisorhttps.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_cpu-usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_memory-usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_disk-io-usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-monitoring/service-monitoring_network-usage.md" ]
layout: post
template: one-col
title: Service Monitoring
categories: stack-management
lead: ""
legacy: true

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_we-use-cadvisorhttps.md  product = product %}
<a name="2"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_cpu-usage.md  product = product %}
<a name="3"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_memory-usage.md  product = product %}
<a name="4"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_disk-io-usage.md  product = product %}
<a name="5"></a>{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_network-usage.md  product = product %}