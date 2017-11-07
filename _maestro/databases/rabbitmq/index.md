---
menuheaders: [ "About deploying RabbitMQ", "Features", "Database deployment types", "How to connect to your RabbitMQ database", "Environment Variables", "Customize your database configuration" ]
layout: post
template: one-col
title: RabbitMQ with Cloud 66 Maestro
categories: Databases
lead: "Using RabbitMQ on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "Backup" ]
recommendedLinks: [ "backup.html"]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "rabbitmq" %}

<a href="#about-deploying-{{ dbtype }}"></a>{% include _inlines/Databases/common/rabbitmq/about-deploying-rabbitmq-header-v1.md  product = page.collection %}
{% include _inlines/Databases/common/rabbitmq/about-deploying-dbs-v1.md  product = page.collection %}
<a href="#features"></a>{% include _inlines/Databases/common/rabbitmq/features-v1.md  product = page.collection dbtype = dbtype %}
<a href="#database-deployment-types"></a>{% include _inlines/Databases/common/rabbitmq/deployment-types-v1.md  product = page.collection %}
<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/rabbitmq/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
<a href="#environment-variables"></a>{% include _inlines/Databases/common/rabbitmq/env-vars-v1.md  product = page.collection dbtype = dbtype %} 
<a href="#customize-your-database-configuration"></a>{% include _inlines/Databases/common/rabbitmq/customize-v1.md  product = page.collection dbtype = dbtype %}