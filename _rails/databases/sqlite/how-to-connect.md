---
menuheaders: [ "How to connect to your SQLite database" ]
layout: post
template: one-col
title: Customize your SQLite Configuration with Rails
categories: Databases
lead: "Customize your SQLite Configuration on Cloud 66 Rails stacks"
legacy: false
recommendedName: [ "SQLite with Rails", "Backup" ]
recommendedLinks: [ "index.html", "backup.html" ]
keywords: []
permalink: /:collection/:path
---

{% assign dbtype = "sqlite" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/sqlite/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
