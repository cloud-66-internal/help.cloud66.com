---
menuheaders: [ "Features" ]
layout: post
template: one-col
title: PostgreSQL
categories: Databases
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>about-deploying-postgres-header
<a name="2"></a>about-deploying-dbs
<a name="3"></a>{% include _inlines/Databases/rails/postgres/features.md  product = product %}
<a name="4"></a>deployment-types 
<a name="5"></a>how-to-connect
<a name="6"></a>env-vars <!-- include specific table in here if needed -->
<a name="7"></a> customize
