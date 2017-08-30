---
menuheaders: [ "Contents", "Overview", "Ports inside and outside containers", "Mapping ports from inside to the outside world", "Note", "Non-HTTP ports (TCP and UDP)", "Multiple ports" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_overview-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_ports-inside-and-outside-containers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_mapping-ports-from-inside-to-the-outside-wo-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_note-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_non-http-ports-tcp-and-udp-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/container-ports/container-ports_multiple-ports-v1.md" ]
layout: post
template: one-col
title: Container Port Mapping
categories: Deployment
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/container-ports/container-ports_overview-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/container-ports/container-ports_ports-inside-and-outside-containers-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/container-ports/container-ports_mapping-ports-from-inside-to-the-outside-wo-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/container-ports/container-ports_note-v1.md  product = product %}
<a name="6"></a>{% include _inlines/Deployment/common/container-ports/container-ports_non-http-ports-tcp-and-udp-v1.md  product = product %}
<a name="7"></a>{% include _inlines/Deployment/common/container-ports/container-ports_multiple-ports-v1.md  product = product %}