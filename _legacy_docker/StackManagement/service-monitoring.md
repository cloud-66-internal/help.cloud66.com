---
layout: post
template: one-col
title: Service Monitoring
categories: stack-management
lead: ""
legacy: true

---
{% assign product = "legacy_docker" %}

{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_we-use-cadvisorhttps.md %}

{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_cpu-usage.md %}
{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_memory-usage.md %}
{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_disk-io-usage.md %}
{% include _inlines/StackManagement/common/service-monitoring/service-monitoring_network-usage.md %}
