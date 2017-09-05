---
menuheaders: [ "About deploying SQLite", "Features", "Database deployment types", "How to connect to your SQLite database", "Environment Variables", "Control your Rails database migrations", "Customize your database configuration" ]
layout: post
template: one-col
title: SQLite with Cloud 66 Maestro
categories: Databases
lead: "Using SQLite on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "Backup" ]
recommendedLinks: [ "backup.html"]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "sqlite" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/sqlite/about-deploying-sqlite-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/common/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/common/features-v1.md  product = page.collection %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/common/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/common/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/common/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#control-your-rails-database-migrations"></a>{% include _inlines/Databases/rails/common/control-rails-db-migration-v1.md  product = page.collection %}
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/common/customize-v1.md  product = page.collection dbtype = dbtype %}