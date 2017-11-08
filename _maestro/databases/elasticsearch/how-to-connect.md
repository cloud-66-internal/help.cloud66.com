---
menuheaders: [ "How to connect to your Elasticsearch database" ]
layout: post
template: one-col
title: Customize your Elasticsearch Configuration with Maestro
categories: Databases
lead: "Customize your Elasticsearch Configuration on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "Elasticsearch with Maestro", "Backup" ]
recommendedLinks: [ "index.html", "backup.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "elasticsearch" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/elasticsearch/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
