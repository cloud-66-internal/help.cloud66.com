---
layout: post
template: one-col
title: RabbitMQ Backup
categories: Databases
lead: ""
legacy: true
permalink: /:collection/:path
---

{% assign dbtype = "rabbitmq" %}

## What is the database backup add-in?

Use this add-in to backup your database on a schedule of your choosing.  You can choose from different settings to have your expected behavior :


## Backup types

Cloud 66 provides two types of backups: _managed_ and _unmanaged_.


### Managed backups

Having managed backups carries several benefits:

- You can download database backups through the web UI and API
- [Backup verifiers](http://help.cloud66.com/rails/databases/{{ include.dbtype }}/backup-verifier.html) ensure that your backups actually contain what you expect
- Use [database replication](http://help.cloud66.com/rails/databases/{{ include.dbtype }}/replication.html) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.


### Unmanaged backups

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.


## Backup format

Backup format for redis and mongodb is always **binary**.  For _Mysql_ and _Postgresql_ you can choose between **binary** and **text**.
Each format has its own benefits and downsides : 


### Binary

For binary backups we are taking a snapshot of the data folder of your database service and applying needed logs to have a consistent data folder. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup. 
As this backup contains raw data of your database server(Instead of human readable SQL dump file) you can expect much faster backup/restore process, specially for large databases this method can be faster up to 4 times which can be very helpful in failover scenarios. But there are some limitation :

- You can not restore it on a server with different version
- You can not use it on slave servers
- You can not use it on servers which their data folder is symlinked to other locations
- You can not use it on encrypted databases 
- You need to shutdown the database service during the restore 

### Text

For this format we are generating a dump file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump.
As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version but restore process will be much longer than **binary** specially if you have lots of indexes in your database.
These are other benefits of this type of backup : 

- You can restore this backup when server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load


## Backup schedule

You can specify how often you would like to backup your database. It could be

- Hourly 
- Daily 
- Weekly 
- Monthly 


## Compression

You can specify whether or not you would like to Gzip compress your backups. Compressing your backups will take up less space, but will require additional processing during the compression.  


## Exclude tables

This option applies to **text** MySQL and PostgreSQL backups.  You can provide a comma separated list of tables which you want to exclude from your backup to create a smaller one.   


## Install on replica

This option applies to **text** MySQL and PostgreSQL and redis backups. With this option you can move the backup service to your database replica if available, to relieve pressure from your production database. 


## Note
   
Add/Remove Postgresql binary backup needs a service restart.



## Note
In order for backups to work, you are required to have twice as much space on your server as your backup consumes.


## Downloading backup

You can retrieve your backup in one of three ways:


### Cloud 66 toolbelt

You can retrieve your database backup by using the [toolbelt backup management](http://help.cloud66.com/{{ include.product }}/toolbelt/backups.html). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.


### Download script

Access your stack detail page in Cloud 66 dashboard, and click the link for your database backup add-in. This page lists your available database backups, and allows you to download and restore each one. By clicking the download icon you will have this option to use a download script or manually download backup.
Download the script and transfer it to the desired server or simply click on **Copy script to clipboard** and paste it to the server and run the command. 
By running the download script, your backup will be downloaded (and concatenated if it is a multi part backup) and prepared to be ready to restore. At final step , script will show you the steps you need to follow in order to restore downloaded backup.


## Pricing
<table class="table table-bordered table-striped table-small"> 
 <thead> 
  <tr> 
   <th align="center"> </th> 
   <th align="center"> Database/month </th> 
   <th align="center"> GB/month </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> Managed backup </td> 
   <td> $12 </td> 
   <td> $0.12 </td> 
  </tr> 
  <tr> 
   <td> Unmanaged backup </td> 
   <td> $5 </td> 
   <td> — </td> 
  </tr> 
 </tbody> 
</table>

        

    


