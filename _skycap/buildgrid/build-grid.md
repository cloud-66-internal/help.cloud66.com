---
menuheaders: [ "Contents", "What is BuildGrid?", "How to use BuildGrid?", "Envoironment variables in BuildGrid", "Build and Publish" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_what-is-buildgrid.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_how-to-use-buildgrid.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_envoironment-variables-in-buildgrid.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/build-grid/build-grid_build-and-publish.md" ]
layout: post
template: one-col
title: Build Grid
categories: buildgrid
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/build-grid/build-grid_what-is-buildgrid.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/build-grid/build-grid_how-to-use-buildgrid.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/build-grid/build-grid_envoironment-variables-in-buildgrid.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/build-grid/build-grid_build-and-publish.md  product = product %}