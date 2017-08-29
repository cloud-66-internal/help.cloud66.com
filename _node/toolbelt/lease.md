---
menuheaders: [ "Temporary lease", "Usage", "Parameters", "Example" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/lease/lease_temporary-lease.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/lease/lease_usage.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/lease/lease_parameters.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Toolbelt/common/lease/lease_example.md" ]
layout: post
template: one-col
title: Toolbelt lease management
categories: Toolbelt
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Toolbelt/common/lease/lease_temporary-lease.md  product = product %}
<a name="2"></a>{% include _inlines/Toolbelt/common/lease/lease_usage.md  product = product %}
<a name="3"></a>{% include _inlines/Toolbelt/common/lease/lease_parameters.md  product = product %}
<a name="4"></a>{% include _inlines/Toolbelt/common/lease/lease_example.md  product = product %}