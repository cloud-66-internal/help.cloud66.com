---
menuheaders: [ "Status and uptime", "Latest updates" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/cloud66-status/cloud66-status_status-and-uptime-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/cloud66-status/cloud66-status_latest-updates-v1.md" ]
layout: post
template: one-col
title: Cloud66 Status
categories: introduction
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/unknown/General/cloud66-status/cloud66-status_status-and-uptime-v1.md  product = product %}
<a name="2"></a>{% include _inlines/unknown/General/cloud66-status/cloud66-status_latest-updates-v1.md  product = product %}