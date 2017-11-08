---
menuheaders: [ "How to connect to your MySQL database" ]
layout: post
template: one-col
title: Customize your MySQL Configuration with Docker
categories: Databases
lead: "Customize your MySQL Configuration on Cloud 66 Docker stacks"
legacy: true
recommendedName: [ "MySQL with Rails", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "mysql" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/mysql/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
