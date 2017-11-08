---
menuheaders: [ "How to connect to your RabbitMQ database" ]
layout: post
template: one-col
title: Customize your RabbitMQ Configuration with Maestro
categories: Databases
lead: "Customize your RabbitMQ Configuration on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "RabbitMQ with Maestro", "Backup" ]
recommendedLinks: [ "index.html", "backup.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "rabbitmq" %}

<a href="#how-to-connect-to-your-{{ dbtype }}-database"></a>{% include _inlines/Databases/common/rabbitmq/how-to-connect-v1.md dbtype = dbtype product = page.collection %}
