---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-resources/service-resources_by-default-docker-services-will-use-as-m.md" ]
layout: post
template: one-col
title: Service Resources
categories: stack-management
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}
{% assign product = "maestro" %}

{% include _inlines/StackManagement/common/service-resources/service-resources_by-default-docker-services-will-use-as-m.md  product = product %}
