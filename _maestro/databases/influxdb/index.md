---
menuheaders: [ "About deploying InfluxDB", "Features", "Database deployment types", "How to connect to your InfluxDB database", "Environment Variables", "Customize your database configuration" ]
layout: post
template: one-col
title: InfluxDB with Cloud 66 Maestro
categories: Databases
lead: "Using InfluxDB on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "Backup" ]
recommendedLinks: [ "backup.html"]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "influxdb" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/influxdb/about-deploying-influxdb-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/common/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/common/features-v1.md  product = page.collection %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/common/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/common/how-to-connect-v1.md  product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/common/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/common/customize-v1.md  product = page.collection dbtype = dbtype %}