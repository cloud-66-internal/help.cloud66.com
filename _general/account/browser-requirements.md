---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/browser-requirements/browser-requirements_browser-versions-are-frequently-update-v1.md" ]
layout: post
template: one-col
title: Browser Requirements
categories: Account
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}
{% assign product = "General" %}

{% include _inlines/Account/General/browser-requirements/browser-requirements_browser-versions-are-frequently-update-v1.md  product = product %}
