---
menuheaders: [ "About deploying PostgreSQL", "Features", "Database deployment types", "How to connect to your PostgreSQL database", "Environment variables", "Control your Rails database mgrations", "Customize your database configuration" ]
layout: post
template: one-col
title: PostgreSQL with Cloud 66 for Rails
categories: Databases
lead: "Using PostgreSQL on Cloud 66 Rails stacks"
legacy: false
slug: postgresql
permalink: /:collection/:categories/:slug/index.html
recommendedName: [ "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "backup-verifier.html", "backup.html", " replication.html" ]
version: 1
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Databases/rails/postgres/about-deploying-postgres-header-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Databases/rails/postgres/about-deploying-dbs-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Databases/rails/postgres/features-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Databases/rails/postgres/deployment-types-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Databases/rails/postgres/how-to-connect-v1.md  product = product %}
<a name="6"></a>{% include _inlines/Databases/rails/postgres/env-vars-v1.md  product = product %} 
<a name="7"></a>{% include _inlines/Databases/rails/postgres/control-rails-db-migration-v1.md  product = product %}
<a name="8"></a>{% include _inlines/Databases/rails/postgres/customize-v1.md  product = product %}
