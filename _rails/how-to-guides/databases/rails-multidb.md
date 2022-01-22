---
layout: post
template: one-col
title: Configuring multiple databases for Rails
categories: how-to-guides/databases
order: 3
lead: "How to configure multiple database for Rails with Active Record (i.e. native Rails MultiDB)"
legacy: false
tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
permalink: /:collection/:path:output_ext
---
 
## Overview

Rails version 6 (and above) natively supports attaching multiple databases to your application. This is built into Active Record and supports a number of very useful features - like replicas and automatic connection switching. 

Cloud 66 fully supports the native implementation of MultiDB for Rails. However, we recommend you read the [official Rails guide to MultiDB](https://guides.rubyonrails.org/active_record_multiple_databases.html) before configuring it on Cloud 66. Be sure to apply all the environment and config changes outlined in that doc to your application before setting up MultiDB.

<div class="notice" markdown="1">⚠️ MultiDB for Rails relies on Cloud 66 Database Groups, but you can also use Database Groups with your Rails application **without** implementing the native MultiDB architecture, if you prefer.
</div>


## Configuring a primary and replica database

To set up a read-only replica alongside your primary database, your `database.yml` file might look something like this:

```yaml
production:
  primary:
    database: my_primary_database
    username: root
    password: <%= ENV['ROOT_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
  primary_replica:
    database: my_primary_database
    username: root_readonly
    password: <%= ENV['ROOT_READONLY_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
    replica: true
```

Cloud 66 will ingest this configuration and instantiate database servers based on whatever is specified. Note that the `primary_replica` has the same name as the `primary` - this is by design - they are essentially the same database (from Rails's perspective).

The primary and replica databases **must run on separate servers**, and so we will provision separate server for each database pair (i.e. one for the primary, and another for the replica). 

You can further customise these databases using your [manifest](/rails/quickstarts/getting-started-with-manifest.html) file ([see below](#customising-rails-multidb-instances-via-manifest)).

## Configuring multiple separate databases

If you need completely separate databases, you can configure them as follows:

```yaml
production:
  animals:
    database: animals_db
    username: animals_root
    password: <%= ENV['ANIMALS_ROOT_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
  shapes:
    database: shapes_db
    username: shapes_root
    password: <%= ENV['SHAPES_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
```

You can also have replicas alongside these separate databases. For example:

```yaml
production:
  animals:
    database: animals_db
    username: animals_root
    password: <%= ENV['ANIMALS_ROOT_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
  animals_replica:
    database: animals_db
    username: animals_root_readonly
    password: <%= ENV['ANIMALS_ROOT_READONLY_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
    replica: true    
  shapes:
    database: shapes_db
    username: shapes_root
    password: <%= ENV['SHAPES_PASSWORD'] %>
    adapter: mysql2
    encoding: utf8mb4
```

Different databases of the same type (e.g. MySQL) **must run on separate servers**, and so we will provision separate servers for each database of that type. You can run two or more databases of **different types** on the same server (although, in general, we recommend against sharing servers in production environments).

You can further customise these databases using your [manifest](/rails/quickstarts/getting-started-with-manifest.html) file (see below).

## Customising Rails MultiDB instances via manifest

You can use your app's `manifest.yml` file to further customise your databases - specifying different database versions within the same application, for example. This relies on Database Groups - we recommend reading our guide to Groups before customising your databases. 

You can customise your databases by using (exactly) the same names in both configuration files. For example, if we revisit the example above with `animals` and `shapes`. If you wanted the `animals` database to use MySQL v5.7 and the `shapes` database to use MySQL v8.0 you would create a manifest file in `.cloud66/manifest.yml` that looked like this: 

```yaml
mysql:
  groups:
    animals:
      configuration:
        version: 5.7
    animals_replica:
      configuration:
        version: 5.7
    shapes:
      configuration:
        version: 8.0
```

Any databases not explicitly mentioned in the manifest file will be ignored (and therefore use the default configurations).

There are a wide range of settings available - please check out our reference guide for the full list. 

<div class="notice notice-warning" markdown="1">⚠️ If the database names in your database.yml and manifest.yml do not match *exactly*, this will create conflicts. Be sure to use exactly the same names in both configuration files.
</div>