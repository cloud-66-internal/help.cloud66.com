---
menuheaders: [ "Environment Variables" ]
layout: post
template: one-col
title: Environment Variables for PostgreSQL with Docker
categories: Databases
lead: "Using PostgreSQL Environment Variables on Cloud 66 docker stacks"
legacy: true
recommendedName: [ "PostgreSQL with Docker", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "postgres" %}

<a href="#environment-variables"></a>{% include _inlines/Databases/common/postgres/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
