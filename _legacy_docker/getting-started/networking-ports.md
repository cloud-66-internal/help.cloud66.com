---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/networking-ports/networking-ports_this-is-used-to-expose-your-service-to-the.md" ]
layout: post
template: one-col
title: Networking Ports
categories: getting-started
lead: ""
legacy: true

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}
{% assign product = "legacy_docker" %}

{% include _inlines/GettingStarted/common/networking-ports/networking-ports_this-is-used-to-expose-your-service-to-the.md  product = product %}
