---
menuheaders: [ "Contents", "What are reserved tags?", "Reserved tags" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/reserved-tags/reserved-tags_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/reserved-tags/reserved-tags_what-are-reserved-tags.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/reserved-tags/reserved-tags_reserved-tags.md" ]
layout: post
template: one-col
title: Cloud 66 reserved tags
categories: Deployment
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/reserved-tags/reserved-tags_what-are-reserved-tags.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/reserved-tags/reserved-tags_reserved-tags.md  product = product %}