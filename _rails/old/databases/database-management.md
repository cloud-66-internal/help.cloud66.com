---
menuheaders: [ "About deploying databases", "Database deployment types", "No database (external)", "Local database", "Dedicated database", "Upgrading your database", "Control your Rails database migrations", "Customize your database configuration", "Warning", "Database customization variables", "&#42;It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers" ]
layout: post
template: one-col
title: Database management
categories: Databases
lead: ""
legacy: false

permalink: /:collection/:path
---



## About deploying databases

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL (or Percona if [configured via Manifest](http://help.cloud66.com/building-your-stack/building-your-manifest-file#mysql))
* PostgreSQL
* MongoDB
* Redis
* Elasticsearch
* RabbitMQ
* SQLite (only in development environments)
* GlusterFS
* InfluxDB

When creating a Docker stack, you can [add as many databases as you need in your service configuration during the stack build](/building-your-stack/docker-service-configuration#database-configs). For Rack-based stacks, Cloud 66 automatically detects whether your application relies on a database or not during your code analysis. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. If you haven't specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.


## Database deployment types


### No database (external)

This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally.
Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.


### Local database

This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.


### Dedicated database

This option will automatically create a new server for your database and configure your application accordingly.


## Upgrading your database

Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack.


## Control your Rails database migrations

Cloud 66 chooses a server to perform the migrations - all other servers will wait until the migrations are finished before continuing with deployment. You can see which server performs the migrations in the Stack Information page, and change it using the `c66.migrations.run` [reserved tag](/deployment/cloud-66-reserved-tags#tags).

You can control your Rails database migrations by setting `run.deploy.command` option through [Stack settings](https://help.cloud66.works/{{ include.product }}/toolblet/settings.html) via [Toolbelt](/toolbelt/toolbelt-introduction) which gives you the option of running migrations or not.

```
$ cx settings set -s my_stack run.deploy.command true
```

When you have disabled `run.deploy.command` in [Stack settings](https://help.cloud66.works/{{ include.product }}/toolblet/settings.html) , you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.


## Customize your database configuration

You can customize the database configuration on your servers using [CustomConfig](/database-management/database-management#customize). CustomConfig is available for MySQL, PostgreSQL, Redis and MongoDB.

Editing and committing your database CustomConfig will perform the following steps on every database server in your stack, one by one, sequentially:

- Check your template for Liquid syntax errors
- Determine the correct server configuration and prepare general variables
- Prepare custom variables for your database type (eg. server_state)
- Compile the database configuration based on the information from the server and database type
- Upload the configuration to the server
- Restart your database



### Warning

A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.



### Database customization variables

There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

**Global variables**

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
		

  


**MySQL variables**

The following variables are only available in the MySQL CustomConfig.

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
       <td>server_state</td> 
       <td>string</td> 
       <td>Value can be <i>stand_alone</i>, <i>mysql_master</i> or <i>mysql_slave</i> based on your server status</td> 
      </tr> 
      <tr> 
       <td>server_id</td> 
       <td>integer</td> 
       <td>An ID used by MySQL replication to identify your server*</td> 
      </tr> 
      <tr> 
       <td>db_name</td> 
       <td>string</td> 
       <td>Database name</td> 
      </tr> 
     </tbody> 
    </table> 
		

  



##### *It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers

**PostgreSQL variables**

The following variables are only available in the PostgreSQL CustomConfig.

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
     <td>server_state</td> 
     <td>string</td> 
     <td>Value can be <i>stand_alone</i>, <i>pg_master</i> or <i>pg_slave</i> based on your server status</td> 
    </tr> 
   </tbody> 
  </table> 
  


**Redis variables**

The following variables are only available in the Redis CustomConfig.
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
     <td>server_state</td> 
     <td>string</td> 
     <td>Value can be <i>stand_alone</i>, <i>redis_master</i> or <i>redis_slave</i> based on your server status</td> 
    </tr> 
    <tr> 
     <td>master_address</td> 
     <td>string</td> 
     <td>IP address of replication master (empty string if server is stand alone or master)</td> 
    </tr> 
    <tr> 
     <td>master_port</td> 
     <td>integer</td> 
     <td>Will be 6379 when server is <i>redis_slave</i> , otherwise it is 0</td> 
    </tr> 
   </tbody> 
  </table> 

  


