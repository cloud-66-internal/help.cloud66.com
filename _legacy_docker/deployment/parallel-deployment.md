---
menuheaders: [ "Contents", "What is parallel deployment?", "Note", "Configure parallel deployment" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/parallel-deployment/parallel-deployment_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/parallel-deployment/parallel-deployment_what-is-parallel-deployment-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/parallel-deployment/parallel-deployment_note-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/parallel-deployment/parallel-deployment_configure-parallel-deployment-v1.md" ]
layout: post
template: one-col
title: Parallel deployments
categories: Deployment
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/parallel-deployment/parallel-deployment_what-is-parallel-deployment-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/parallel-deployment/parallel-deployment_note-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/parallel-deployment/parallel-deployment_configure-parallel-deployment-v1.md  product = product %}