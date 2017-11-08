---
menuheaders: [ "About deploying Elasticsearch", "Features", "Database deployment types", "How to connect to your Elasticsearch database", "Environment Variables", "Customize your database configuration", "About Scaling your Elasticsearch Cluster", "General Recommendations" ]
layout: post
template: one-col
title: Elasticsearch with Cloud 66 Maestro
categories: Databases
lead: "Using Elasticsearch on Cloud 66 Maestro for container stacks"
legacy: false
recommendedName: [ "Backup" ]
recommendedLinks: [ "backup.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "elasticsearch" %}



# About deploying Elasticsearch

When creating a Docker stack, you can add as many databases as you need in your service configuration during the stack build. For Rack-based stacks, Cloud 66 automatically detects whether your application relies on a database or not during your code analysis. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.


After you have analyzed your code, ensure that your desired database type is displayed in the About your app section of the analysis results. If you haven’t specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.


## Features

{% if include.dbtype == 'postgres' %}
Cloud 66 aims to offer a great experinece for anyone that plans to deploy a project backed by a PostgreSQL database. With this in mind, we provide a great flexibility and control over your database. This page may prove useful towards finding more about how to deploy and connect to your database, the environment variables that Cloud 66 generates and maintains on your servers, the way you can replicate and backup your database and any useful troubleshooting techniques one may find handy to know.

{% elsif include.dbtype == 'mysql' %}
This is a really nice intro to what Cloud66 offers related to MySQL db and what features you may want to be aware of before starting using it. 

{% endif %}


## Database deployment types

### No database (external)

This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally. Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

### Local database

This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

### Dedicated database

This option will automatically create a new server for your database and configure your application accordingly.

### Upgrading your database

Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack.




## How to connect to your {{ include.dbtype }} database

### Connect to your database

If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example {{ include.dbtype | upcase }}_URL.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

{% if include.dbtype == 'mongodb' or include.dbtype == 'postgres' or include.dbtype == 'mysql' %}
### Examples of connecting to your database

The notation in the examples below allow you to seamlessly switch between your local development environment and your Cloud 66 environment without changing your database settings. The logic will determine if the Cloud 66 environment variable exists, and depending on the result, generate a value or use your own value. Alternatively, you can simply hard-code values as you wish.

### Note

You can use [Yamllint.com](http://www.yamllint.com) to check your YAML syntax before committing.
{% endif %}


{% if include.dbtype == 'mysql' %}
### MySQL YML

```
development:
    adapter: mysql2
    username: <%= ENV['MYSQL_USERNAME'] %>
    password: <%= ENV['MYSQL_PASSWORD'] %>
    database: <%= ENV['MYSQL_DATABASE'] %>
    host: <%= ENV['MYSQL_ADDRESS'] %>
```

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported MySQL encodings](https://dev.mysql.com/doc/refman/5.5/en/charset-charsets.html):

```
encoding: swe7
```
{% elsif include.dbtype == 'postgres' %}

### PostgreSQL YML

```
development:
    adapter: postgresql
    username: <%= ENV['POSTGRESQL_USERNAME'] %>
    password: <%= ENV['POSTGRESQL_PASSWORD'] %>
    database: <%= ENV['POSTGRESQL_DATABASE'] %>
    host: <%= ENV['POSTGRESQL_ADDRESS'] %>
```

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported PostgreSQL encodings](https://www.postgresql.org/docs/9.3/static/multibyte.html):

```
encoding: latin1
template: template0
```
{% elsif include.dbtype == 'mongodb' %}

### Mongoid YML

```
development:
  sessions:
    default:
      database: <%= ENV['MONGODB_DATABASE'] %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```
{% endif %}


## Environment Variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.


{% if include.dbtype == "redis" or include.dbtype == "postgres" or include.dbtype == "mysql" %}

{% endif %}

In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.


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

Warning!

A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.
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






## About scaling your Elasticsearch cluster

You can scale your Elasticsearch cluster through the Cloud 66 dashboard on the Elasticsearch server group page.

Elasticsearch scaling works by splitting your **indices** into **shards**, and placing them on an Elasticsearch running instance called a **node** on another server. A collection of nodes is called a **cluster**. 

You specify the number of shards for individual indices when creating them, and can dynamically change the number of replicas with the API. 

By moving primary and replica shards to different nodes, Elasticsearch achieves both data reduncancy and improved performance.






## General recommendations

- **It is preferable to scale to three or more servers.** This is because that in order to avoid a [split brain](https://en.wikipedia.org/wiki/Split-brain_(computing)), there must be a majority of the master eligible nodes present for the cluster to be active and elect a master node. For two nodes this number is two, so loss of connectivity between the nodes for whatever reason will render the cluster inoperable until connectivity is restored.

- **Please make sure that all of your indices have replicas!** Elasticsearch distributes the replica shards such that if any one server goes down, a replica shard on another server will be promoted to a primary shard, so there is no loss of data. However, if the server holds the only primary shard and there are no replicas, you will lose data.

- Elasticsearch and its underlying search engine, Lucene, **are extremely RAM hungry applications**. Running them on low RAM servers is highly unadvisable, as illustrated by the next point. 

- Unlike more traditional database stores that will attempt to perform less strenuous operations if server resourses are limited, **Elasticsearch assumes you give it enough resources to work with, and will crash if that is not the case**. As such, please stress test with realistic data sets for your application before using Elasticsearch in production. We cannot advise you how much resources your cluster will require, as it is very much dependent on your application.

- Scaling will produce a node that is both master-eligible, and data storing. Dedicated master or data nodes are currently not supported.

