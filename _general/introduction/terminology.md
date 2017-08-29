---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/terminology/terminology_--deploy.md" ]
layout: post
template: one-col
title: Terminology
categories: Introduction
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}
{% assign product = "General" %}

{% include _inlines/Introduction/General/terminology/terminology_--deploy.md  product = product %}
