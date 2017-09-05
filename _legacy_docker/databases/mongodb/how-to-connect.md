---
menuheaders: [ "How to connect to your PostgreSQL database" ]
layout: post
template: one-col
title: Customize your MongoDB Configuration with Docker
categories: Databases
lead: "Customize your MongoDB Configuration on Cloud 66 docker stacks"
legacy: true
recommendedName: [ "MongoDB with Rails", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "mongodb" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/common/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
