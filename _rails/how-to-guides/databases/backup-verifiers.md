---
layout: post
template: one-col
title: Using backup verifiers
categories: how-to-guides/databases
order: 20
lead: "How to verify your database backups"
legacy: false
tags: ["databases"]
permalink: /:collection/:path
---

### Note:

Backup verifier is only supported for Rails stacks.

## What is a backup verifier?

A backup verifier is a great way to ensure that your backups actually contain the data you expect. You simply provide a query that you expect to return a specific result, and we verify that your backup actually returns this value. This feature supports both MySQL and PostgreSQL databases, and requires the use of managed backups. Backup verification runs once every 6 hours for each stack, and you will be notified in the case of a failured verification.

## Set up a backup verifier

Create a file in the .cloud66 folder in the root of your repository. To verify your backups across all environments, name the file backup_verifier_mysql.sql for MySQL, and backup_verifier_pg.sql for PostgreSQL backups. You can also specify which environment to run backup verifiers for by appending the environment to the filename. For example, backup_verifier_mysql_production.sql or backup_verifier_pg_staging.sql.

### Important

By including this script in your repository, you are opting in to the use of verified backups and will be charged accordingly. Please see our pricing below for more information.

To verify your backup, the script must contain a SQL query that returns a data set containing a single column called result with a value of true or false. Should you need to change your verification script at some point, simply commit the change to Git and redeploy your code. Please find below an example of such queries and an example of the output for each respective database.

### Important
Your backup will be assumed to be verified if the value returned from the query is true.

### MySQL

This query will count the number of records in the users table, and returns a 1 if that number is not zero.

```
select count(*)<>0 as result from users
```

That query may return the following output (non-zero values are interpreted as true in MySQL), indicating that your users table holds data.

```
result
1
```

### PostgreSQL


Similarly, this query also counts the number of records in the users table, and returns a boolean of true if that number is not zero.

```
select count(*)<>0 as result from users
```

The result of this query may be the following, indicating that your users table holds data.

```
result
--------
t
```

### View backup verification status

To see your backup verification status, visit your stack detail page, and click the link to your managed backup page. A successfully verified backup will display a green tick, and a failure during verification will result in a red cross - clicking on the red cross will show the error message.