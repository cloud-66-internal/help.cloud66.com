---
layout: post
template: one-col
title: Migrating your application between servers
categories: how-to-guides/deployment
order: 40
lead: "How to move your entire application to a new server or a new data center"
legacy: false
tags: ["high-availability"]

permalink: /:collection/:path:output_ext
---

## Migrating between servers

### 1. Set a failover group 

- On your dashboard click on *Failover Groups*
- Add a new failover group
- Choose application `A` as the primary instance
- Click on "add group" 


### 2. Add a CNAME record in your DNS provider dashboard 

To point at the address provided in the failover group and wait for 24 hours to propagate. While you are waiting for the DNS to get propagated you can follow the steps until step 8.

#### Note:
<div class="notice"><p>If TTL of your DNS is 300 seconds you don't need to wait - just complete the process.</p></div>


### 3. Database backup

On application `A`, set backup for your databases (using the [Database Backup Add-in](/maestro/how-to-guides/add-ins/database-backups.html)).


### 4. Clone primary application

Visit the overview page for application `A` and click *Clone* in the right sidebar. This will allow you to choose a new application name and environment. Cloning your application will preserve any environment variables from the existing application, and also allows you to define where to deploy along with other settings.


### 5. Add your database to the backup application

Add database or all the databases you need on to the application `B` (the clone)


### 6. Set up replication between applications

On application `B` go to the database server (Redis, MySQL or etc.) and choose the server. On the right sidebar click on "configure replication" choose application A (you have to be Administrator on application `A `otherwise it won't be listed). This makes application `B` database into a slave for application `A`.

### 7. Add the second application to the failover group

To add application `B` as a backup to the failover group, edit the related failover group and add application `B` as a backup.

### Note:
<div class="notice"><p>Make sure DNS record for the failover group is populated.</p></div>

### 8. Put the primary application into maintenance mode

- Go to the overview page for application `A`
- Click on *Network Settings*
- Click on the *Redirects* tab
- Check _"Put application in Maintenance Mode"_ box
- Click *Apply Redirects*

### 9. Change the second database master

Follow step 6 again but this time in the drop-down menu choose "No data source" (this makes `B`'s DB into the master)

### 10. Switch to the new application

Go to the failover group and switch to application `B`. We recommend you keep the DNS on the failover group to make this procedure easy in the future.


### 11. [OPTIONAL] Switch your DNS record to the new application

You can now point your DNS to application `B`.


## Migrating between data centers

Do you want to move your application from one cloud vendor or region to another? Follow the steps below for a seamless transition between applications.

1.  Reduce the TTL of your DNS to 5 minutes, and leave it for 24 hours so that it has time to propagate the network.
2.  Clone your application and deploy it to the new data center. This will save any environment variables you had configured on the source application.
3.  Set up your target application as a database slave, which means that any changes to your source database will be replicated across to the target application until you switch it off.
**OR**
4.  Use our one-time database import feature to migrate your data across.

When you're happy with this new application, simply switch your DNS over to it. As the TTL is 5 minutes (set earlier), it should take effect quickly.

If you followed step 3 above, switch the target database from being a slave to a master (as outlined in the [database replication between applications](/maestro/how-to-guides/databases/shells/pg-replication-version.html) documentation).


