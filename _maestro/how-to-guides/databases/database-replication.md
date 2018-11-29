---
layout: post
template: one-col
title: Enabling database replication
categories: how-to-guides/databases
order: 10
lead: "Enabling replication between databases"
legacy: false
tags: ["databases","replication"]

permalink: /:collection/:path
---

## Overview 

Database replication involves configuring a master and slave database architecture, whereby the slave is an exact replica of the master at all times. This feature is supported for MySQL, PostgreSQL, Redis and MongoDB.

Database replication can be set up for a single application, or between akspplication, with various benefits:

### For a single application

- Improved read performance: The slave server only allows reads and is ideal for use with reporting tools, and any database backups are taken from the slave rather than the master.
- Improved application reliability: Having a second server with your data, in case of hardware issues (no single point of failure).

### For multiple applications

- Improved redundancy: Allows you to have a failover stack in a different region.
- Data migration: Makes it easy to migrate your stack with minimal downtime.

#### Note 
<div class="notice"><p>Replication between different applications is not supported for MongoDB.</p></div>


## How it works

When you start replicating your database, the Cloud 66 will commence the following process:

1.  We take a full backup of the master database server in your source stack.
2.  A secondary database is configured to be a slave of the source database
3.  The source database is configured to be a master of the secondary database
4.  The relevant environment variables are updated for use in your code and scripts

In the case of a single application, we create a secondary database server in your cloud and restore your backup to it
For databases that span applications, we restore your backup on the database server of the second application.

Similarly, when you disable replication, we do the following:

1.   We disable replication on your master database, and configure it to be a standalone database server
2.   The secondary database server is removed as a slave from the master database server on the source
3.   The source database server is configured as a standalone database server
4.   The relevant environment variables are updated for use in your code and scripts

## Environment Variables

Maestro generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. 

When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.

In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.


## Enable database replication

The process of enabling database replication varies slightly for a single application compared to replication between applications.

#### Important
<div class="notice notice-warning"><p>Database replication will disrupt the database serving your application during the replication configuration process. The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you scale your server.</p></div>

### Single application

To enable replication for a single application, you need to scale up to create a slave: 

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on the *Servers* tab 
3. Click the green **+** next to the database you want to replicate. This will allow you to choose your new server size. Your new server should be comparable to your master server.

#### Note
<div class="notice"><p>You will not be able to scale your database up unless you have <a href="/maestro/how-to-guides/add-ins/database-backup.html">managed backups</a> enabled.</p></div>

### Between applications

To enable replication between applications, ensure that you have a secondary application deployed, and that its database server contains at least twice as much disk space as the size of your database backup. Then:

1. Open the application overview page for the primary application from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on the *Servers* tab 
3. Click on the name of the database server
4. Click _Configure data replication_ in the right sidebar, and select a source application. 
5. Confirm to commence the replication process.

## Disable database replication

To disable replication between stacks, visit your stack detail page, click on the database server group (eg. _PostgreSQL server_) click into your main database server page. Next, click _Configure data replication_ in the right sidebar, and select _Disable replication_. Confirm to commence the replication process.

## Re-synchronizing slave with master

From time-to-time your slave database may go out of sync with its master. You can use our toolbelt to re-synchronize them.

To re-synch them, have a look at our documentation on [Toolbelt database management](/maestro/references/shells/toolbelt.html#database-management).

