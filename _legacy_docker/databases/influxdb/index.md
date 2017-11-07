---
menuheaders: [ "About deploying InfluxDB", "Features", "Database deployment types", "How to connect to your InfluxDB database", "Environment Variables", "Customize your database configuration" ]
layout: post
template: one-col
title: InfluxDB with Cloud 66 Docker
categories: Databases
lead: "Using InfluxDB on Cloud 66 for docker stacks"
legacy: true
recommendedName: [ "Backup" ]
recommendedLinks: [ "backup.html"]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "influxdb" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/influxdb/about-deploying-influxdb-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/influxdb/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/influxdb/features-v1.md  product = page.collection dbtype = dbtype %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/influxdb/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/influxdb/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/influxdb/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/influxdb/customize-v1.md  product = page.collection dbtype = dbtype %}