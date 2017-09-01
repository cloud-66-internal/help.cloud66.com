---
menuheaders: [ "About deploying MongoDB", "Features", "Database deployment types", "How to connect to your MongoDB database", "Environment Variables", "Control your Rails database migrations", "Customize your database configuration" ]
layout: post
template: one-col
title: MongoDB with Cloud 66 Node
categories: Databases
lead: "Using MongoDB on Cloud 66 for node stacks"
legacy: false
recommendedName: [ "Backup", "Replica Sets" ]
recommendedLinks: [ "backup.html", "mongodb-replica-sets.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "mongodb" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/mongodb/about-deploying-mongodb-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/common/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/common/features-v1.md  product = page.collection %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/common/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/common/how-to-connect-v1.md  product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/common/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#control-your-rails-database-migrations"></a>{% include _inlines/Databases/rails/common/control-rails-db-migration-v1.md  product = page.collection %}
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/common/customize-v1.md  product = page.collection dbtype = dbtype %}
