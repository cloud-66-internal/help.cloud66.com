---
menuheaders: [ "Contents", "What is BuildGrid?", "How to use BuildGrid?", "Envoironment variables in BuildGrid", "Build and Publish" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_what-is-buildgrid-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_how-to-use-buildgrid-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_envoironment-variables-in-buildgrid-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_build-and-publish-v1.md" ]
layout: post
template: one-col
title: Build Grid
categories: Deployment
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/build-grid/build-grid_what-is-buildgrid-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/build-grid/build-grid_how-to-use-buildgrid-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/build-grid/build-grid_envoironment-variables-in-buildgrid-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/build-grid/build-grid_build-and-publish-v1.md  product = product %}