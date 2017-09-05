---
menuheaders: [ "How to connect to your PostgreSQL database" ]
layout: post
template: one-col
title: Customize your PostgreSQL Configuration for Docker
categories: Databases
lead: "Customize your PostgreSQL Configuration on Cloud 66 Docker stacks"
legacy: true
recommendedName: [ "PostgreSQL with Docker", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "postgres" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/common/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
