---
menuheaders: [ "About deploying MySQL", "Features", "Database deployment types", "How to connect to your MySQL database", "Environment Variables", "Control your Rails database migrations", "Customize your database configuration" ]
layout: post
template: one-col
title: MySQL with Cloud 66 Rails
categories: Databases
lead: "Using MySQL on Cloud 66 for rails stacks"
legacy: false
recommendedName: [ "Backup Verifiers", "Backup", "Replication" ]
recommendedLinks: [ "backup-verifier.html", "backup.html", "replication.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "mysql" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/mysql/about-deploying-mysql-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/mysql/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/mysql/features-v1.md  product = page.collection dbtype = dbtype %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/mysql/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/mysql/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/mysql/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#control-your-rails-database-migrations"></a>{% include _inlines/Databases/rails/control-db-migrations/control-rails-db-migration-v1.md  product = page.collection %}
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/mysql/customize-v1.md  product = page.collection dbtype = dbtype %}
