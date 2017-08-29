---
menuheaders: [ "Features" ]
layout: post
template: one-col
title: PostgreSQL
categories: Databases
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Databases/rails/postgres/features.md  product = product %}
