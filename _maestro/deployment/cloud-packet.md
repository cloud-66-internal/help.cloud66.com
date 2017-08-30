---
menuheaders: [ "Contents", "About using Packet cloud", "Adding your Packet credentials", "Notice" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/cloud-packet/cloud-packet_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/cloud-packet/cloud-packet_about-using-packet-cloud-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/cloud-packet/cloud-packet_adding-your-packet-credentials-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/cloud-packet/cloud-packet_notice-v1.md" ]
layout: post
template: one-col
title: Packet cloud
categories: Deployment
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/cloud-packet/cloud-packet_about-using-packet-cloud-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/cloud-packet/cloud-packet_adding-your-packet-credentials-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/cloud-packet/cloud-packet_notice-v1.md  product = product %}