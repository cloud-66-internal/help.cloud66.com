---
menuheaders: [ "Upload", "Usage", "Parameters", "Example" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/upload/upload_upload.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/upload/upload_usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/upload/upload_parameters.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/upload/upload_example.md" ]
layout: post
template: one-col
title: Toolbelt upload command
categories: Toolbelt
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Toolbelt/common/upload/upload_upload.md  product = product %}
<a name="2"></a>{% include _inlines/Toolbelt/common/upload/upload_usage.md  product = product %}
<a name="3"></a>{% include _inlines/Toolbelt/common/upload/upload_parameters.md  product = product %}
<a name="4"></a>{% include _inlines/Toolbelt/common/upload/upload_example.md  product = product %}