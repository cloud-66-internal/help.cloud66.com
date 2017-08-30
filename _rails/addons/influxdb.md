---
menuheaders: [ "What is InfluxDB?", "Add InfluxDB", "Note" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/influxdb/influxdb_what-is-influxdb-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/influxdb/influxdb_add-influxdb-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/influxdb/influxdb_note-v1.md" ]
layout: post
template: one-col
title: InfluxDB
categories: AddOns
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/AddOns/common/influxdb/influxdb_what-is-influxdb-v1.md  product = product %}
<a name="2"></a>{% include _inlines/AddOns/common/influxdb/influxdb_add-influxdb-v1.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/influxdb/influxdb_note-v1.md  product = product %}