---
layout: post
template: one-col
title: Customize your MySQL Configuration with Maestro
categories: Databases
lead: "Customize your MySQL Configuration on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "MySQL with Rails", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "mysql" %}

## Customize your database configuration

You can customize the database configuration on your servers using [CustomConfig](https://help.cloud66.works/{{ include.product }}/stack-management/custom-config.html). CustomConfig is available for MySQL, PostgreSQL, Redis and MongoDB.

Editing and committing your database CustomConfig will perform the following steps on every database server in your stack, one by one, sequentially:

- Check your template for Liquid syntax errors
- Determine the correct server configuration and prepare general variables
- Prepare custom variables for your database type (eg. server_state)
- Compile the database configuration based on the information from the server and database type
- Upload the configuration to the server
- Restart your database

<div class="notice notice-warning">
    <p>A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>

### Database customization variables

There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

### Global variables

The following variables are available to any database CustomConfig.

<table class="table table-bordered table-striped">
   <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="60%">
   </colgroup>
   <thead>
    <tr>
     <th>Variable Name</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>server</td>
     <td>Hash</td>
     <td>Hash containing information about your server</td>
    </tr>
    <tr>
     <td>cloud</td>
     <td>string</td>
     <td>Stack cloud</td>
    </tr>
    <tr>
     <td>memory</td>
     <td>integer</td>
     <td>Server memory size (bytes)</td>
    </tr>
    <tr>
     <td>core</td>
     <td>integer</td>
     <td>Server core count</td>
    </tr>
   </tbody>
  </table>

{% if include.dbtype == "redis" or include.dbtype == "postgres" or include.dbtype == "mysql" %}

{% endif %}

