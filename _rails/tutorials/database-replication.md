---
layout: post
template: one-col
title: PostgreSQL Replication
categories: tutorials
lead: ""
legacy: false
tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
permalink: /:collection/:path
---



## About database replication

Database replication involves configuring a master and slave database architecture, whereby the slave is an exact replica of the master at all times. This feature is supported for MySQL, PostgreSQL, Redis and MongoDB databases.

Database replication can be set up for a single stack, or between stacks, with various benefits:
**Single stack**

- Improved read performance: The slave server only allows reads and is ideal for use with reporting tools, and any database backups are taken from the slave rather than the master.
- Improved application reliability: Having a second server with your data, in case of hardware issues (reducing a single point of failure).

**Between stacks**

- Improved redundancy: Allows you to have a failover stack in a different region.
- Data migration: Makes it easy to migrate your stack with minimal downtime.

Note that replication between stacks is not supported for MongoDB.


## How it works

When you start replicating your database, the Cloud 66 will commence the following process:

1.  We take a full backup of the master database server in your source stack

*   Single stack: we create a secondary database server in your cloud and restore your backup on it
*   Between stacks: we restore your backup on the secondary database server
2.  The secondary database is configured to be a slave of the source database
3.  The source database is configured to be a master of the secondary database
4.  The relevant environment variables are updated for use in your code and scripts

Similarly, when you disable replication, the following steps are initiated:

*   We disable replication on your master database, and configure it to be a standalone database server
*   The secondary database server is removed as a slave from the master database server on the source
*   The source database server is configured as a standalone database server
*   The relevant environment variables are updated for use in your code and scripts


## Environment Variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.
{% if include.dbtype == "redis" or include.dbtype == "postgres" or include.dbtype == "mysql" %}

{% endif %}

In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.


## Enable database replication

The process of enabling database replication varies slightly for a single stack as opposed to replication between stacks.



<div class="notice">

Important!

Database replication will disrupt the database serving your application during the replication configuration process. The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you scale your server.

</div>



### Single stack

To enable replication on a single stack, visit your stack detail page, click on the database server group (eg. _PostgreSQL server_) and click _Scale Up_ in the top right corner. This will allow you to choose your new server size. Your new server should contain at least two times more disk space than the size of your database backup, and we recommend that it is comparable to your master server (in terms of memory).


### Between stacks

To enable replication between stacks, ensure that you have a secondary stack deployed, and that its database server contains at least two times more disk space than the size of your database backup. Visit your stack detail page, click on the database server group (eg. _PostgreSQL server_) click into your main database server page. Next, click _Configure data replication_ in the right sidebar, and select a source stack. Confirm to commence the replication process.


## Disable database replication

To disable replication between stacks, visit your stack detail page, click on the database server group (eg. _PostgreSQL server_) click into your main database server page. Next, click _Configure data replication_ in the right sidebar, and select _Disable replication_. Confirm to commence the replication process.


## Create slave database

To add a slave database server you need to follow the below steps. To add multiple you need to scale up one by one.

1.   Set up a managed backup via [add-ins](https://help.cloud66.com/{{ include.product }}/addins/add-in-implementation.html) if you don't have any.
2.   Go on your stack page, database servers page (eg. _PostgreSQL Servers_)
3.   On the right sidebar click on _SCALEUP DATABASE_ (the button will not be shown if you have not set up database backups)


## Re-synchronizing slave with master

From time-to-time your slave database may go out of sync with its master. You can use our toolbelt to re-synchronize them.

To re-synch them, have a look at our documentation on [Toolbelt database management](https://help.cloud66.com/{{ include.product }}/toolbelt/databases.html).

