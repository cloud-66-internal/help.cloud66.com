---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/networking-ports/networking-ports_this-is-used-to-expose-your-service-to-the-v1.md" ]
layout: post
template: one-col
title: Networking Ports
categories: getting-started
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}
{% assign product = "node" %}

{% include _inlines/GettingStarted/common/networking-ports/networking-ports_this-is-used-to-expose-your-service-to-the-v1.md  product = product %}
