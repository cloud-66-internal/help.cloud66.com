---
menuheaders: [ "Contents", "What is Dockerfile", "How cloud 66 uses the Dockerfile" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/dockerfile/dockerfile_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/dockerfile/dockerfile_what-is-dockerfile.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/dockerfile/dockerfile_how-cloud-66-uses-the-dockerfile.md" ]
layout: post
template: one-col
title: Dockerfile
categories: getting-started
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}


<a name="2"></a>{% include _inlines/GettingStarted/common/dockerfile/dockerfile_what-is-dockerfile.md  product = product %}
<a name="3"></a>{% include _inlines/GettingStarted/common/dockerfile/dockerfile_how-cloud-66-uses-the-dockerfile.md  product = product %}