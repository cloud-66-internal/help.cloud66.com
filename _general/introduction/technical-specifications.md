---
menuheaders: [ "Operating system", "Supported cloud providers", "Supported frameworks", "Component versions", "Components built via apt-packages", "Components built from source", "Warning", "Important" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_operating-system.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_supported-cloud-providers.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_supported-frameworks.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_component-versions.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_components-built-via-apt-packages.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_components-built-from-source.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_warning.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/technical-specifications/versions_important.md" ]
layout: post
template: one-col
title: Technical specifications
categories: introduction
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/unknown/General/technical-specifications/versions_operating-system.md  product = product %}
<a name="2"></a>{% include _inlines/unknown/General/technical-specifications/versions_supported-cloud-providers.md  product = product %}
<a name="3"></a>{% include _inlines/unknown/General/technical-specifications/versions_supported-frameworks.md  product = product %}
<a name="4"></a>{% include _inlines/unknown/General/technical-specifications/versions_component-versions.md  product = product %}
<a name="5"></a>{% include _inlines/unknown/General/technical-specifications/versions_components-built-via-apt-packages.md  product = product %}
<a name="6"></a>{% include _inlines/unknown/General/technical-specifications/versions_components-built-from-source.md  product = product %}
<a name="7"></a>{% include _inlines/unknown/General/technical-specifications/versions_warning.md  product = product %}
<a name="8"></a>{% include _inlines/unknown/General/technical-specifications/versions_important.md  product = product %}