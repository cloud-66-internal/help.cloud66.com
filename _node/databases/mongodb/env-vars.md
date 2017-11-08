---
menuheaders: [ "Environment Variables" ]
layout: post
template: one-col
title: Environment Variables for MongoDB with Node
categories: Databases
lead: "Using MongoDB Environment Variables on Cloud 66 node stacks"
legacy: false
recommendedName: [ "MongoDB with Rails", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "mongodb" %}



## Environment Variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.


{% if include.dbtype == "redis" or include.dbtype == "postgres" or include.dbtype == "mysql" %}

{% endif %}

In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.

