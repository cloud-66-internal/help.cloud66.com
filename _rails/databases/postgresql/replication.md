---
menuheaders: [ "Contents", "About database replication", "How it works", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Environment variables", "Enable database replication", "Important", "Single stack", "Between stacks", "Disable database replication", "Create slave database", "Re-synchronizing slave with master" ]
gitlinks: [ ]
layout: post
template: one-col
title: PostgreSQL Replication
categories: Databases
slug: postgresql
lead: ""
legacy: false
permalink: /:collection/:categories/:slug/:name
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="1"></a>{% include _inlines/Databases/common/database-replication/database-replication_about-database-replication.md  product = product %}
<a name="2"></a>{% include _inlines/Databases/common/database-replication/database-replication_how-it-works.md  product = product %}
<a name="3"></a>{% include _inlines/Databases/common/database-replication/database-replication_postgresql.md  product = product %}
<a name="4"></a>{% include _inlines/Databases/rails/postgres/env-vars.md  product = product %} 
<a name="5"></a>{% include _inlines/Databases/common/database-replication/database-replication_enable-database-replication.md  product = product %}
<a name="6"></a>{% include _inlines/Databases/common/database-replication/database-replication_important.md  product = product %}
<a name="7"></a>{% include _inlines/Databases/common/database-replication/database-replication_single-stack.md  product = product %}
<a name="8"></a>{% include _inlines/Databases/common/database-replication/database-replication_between-stacks.md  product = product %}
<a name="9"></a>{% include _inlines/Databases/common/database-replication/database-replication_disable-database-replication.md  product = product %}
<a name="10"></a>{% include _inlines/Databases/common/database-replication/database-replication_create-slave-database.md  product = product %}
<a name="11"></a>{% include _inlines/Databases/common/database-replication/database-replication_re-synchronizing-slave-with-master.md  product = product %}