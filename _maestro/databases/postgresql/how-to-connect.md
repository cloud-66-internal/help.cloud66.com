---
menuheaders: [ "How to connect to your PostgreSQL database" ]
layout: post
template: one-col
title: Customize your PostgreSQL Configuration with Maestro
categories: Databases
lead: "Customize your PostgreSQL Configuration on Cloud 66 Maestro stacks"
legacy: false
recommendedName: [ "PostgreSQL with Maestro", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---

{% assign dbtype = "postgres" %}

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

