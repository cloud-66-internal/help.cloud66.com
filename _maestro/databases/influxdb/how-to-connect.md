---
menuheaders: [ "How to connect to your InfluxDB database" ]
layout: post
template: one-col
title: Customize your InfluxDB Configuration with Maestro
categories: Databases
lead: "Customize your InfluxDB Configuration on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "InfluxDB with Maestro", "Backup" ]
recommendedLinks: [ "index.html", "backup.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "influxdb" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/influxdb/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
