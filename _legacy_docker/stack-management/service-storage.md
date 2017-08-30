---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/service-storage/service-storage_given-the-ephemeral-nature-of-containers-i-v1.md" ]
layout: post
template: one-col
title: Service Storage
categories: stack-management
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}
{% assign product = "legacy_docker" %}

{% include _inlines/StackManagement/common/service-storage/service-storage_given-the-ephemeral-nature-of-containers-i-v1.md  product = product %}
