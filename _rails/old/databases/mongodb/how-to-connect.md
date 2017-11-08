---
menuheaders: [ "How to connect to your MongoDB database" ]
layout: post
template: one-col
title: Customize your MongoDB Configuration with Rails
categories: Databases
lead: "Customize your MongoDB Configuration on Cloud 66 Rails stacks"
legacy: false
recommendedName: [ "MongoDB with Rails", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "mongodb" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/mongodb/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
