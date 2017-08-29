---
menuheaders: [ "Open your website", "Usage", "Parameters", "Example" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/open/open_open-your-website.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/open/open_usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/open/open_parameters.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/open/open_example.md" ]
layout: post
template: one-col
title: Toolbelt open command
categories: Toolbelt
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Toolbelt/common/open/open_open-your-website.md  product = product %}
<a name="2"></a>{% include _inlines/Toolbelt/common/open/open_usage.md  product = product %}
<a name="3"></a>{% include _inlines/Toolbelt/common/open/open_parameters.md  product = product %}
<a name="4"></a>{% include _inlines/Toolbelt/common/open/open_example.md  product = product %}