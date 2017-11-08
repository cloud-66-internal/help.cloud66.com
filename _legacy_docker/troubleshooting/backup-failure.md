---
menuheaders: [ "PostgreSQL" ]
layout: post
template: one-col
title: Backup Failure
categories: troubleshooting
lead: ""
legacy: true
permalink: /:collection/:path
---


## PostgreSQL

When Cloud 66 takes database backup it needs **twice** the size of your database data directory (`/usr/local/pgsql/data/`). It uses the environment variable `POSTGRESQL_DATABASE` for taking the backup.

1. <a name="1"></a>If you get this error: ***Not enough free space. You need at least x MB free space for this backup***
  - Remove the unnecessary files in that folder, or clear up your database to make the data folder size smaller
  - Increasing the size of the hard disk
  - **Danger:** We highly discourage you from doing this one as it may result in taking the db down if there is not enough space. 
  
  As a temporary solution until you try one of the above, you can disable the `free-space-calculation` step by [disabling the stack's db.check.backup.size](https://help.cloud66.works/{{ include.product }}/toolbelt/settings.html).

2. If you get this error: canceling statement due to conflict with recovery 
  Running queries on hot-standby server is somewhat tricky — it can fail, because during querying some needed rows might be updated or deleted on primary. As a primary does not know that a query is started on secondary it thinks it can clean up (vacuum) old versions of its rows. Then secondary has to replay this cleanup, and has to forcibly cancel all queries which can use these rows. There are some workarounds for it:
  - moving the backup process to the master.
  - set the parameter `hot_standby_feedback`, which prevents VACUUM from removing recently-dead rows and so cleanup conflicts do not occur. More info [here](https://www.postgresql.org/docs/current/static/hot-standby.html#HOT-STANDBY-CONFLICT).
3. If you get this warning: ***There is not enough space to guarantee a successful backup of your database***
  It means that free space on your hard drive for backups is less than 6 times of your database data directory size.
  Please take a look at [#1](#1) for more info

4. **Backup file doesn't contain database data:**
  If the Backup data doesn't contain your data check the following:

  - Your database name and the value of `POSTGRESQL_DATABASE` environment variable are the same.
  - Your backup settings may exclude some tables

