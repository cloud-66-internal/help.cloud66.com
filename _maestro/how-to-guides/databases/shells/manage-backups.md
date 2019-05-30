---
layout: post
template: one-col
title: Managing database backups
categories: how-to-guides/databases
order: 20
lead: "How to manage database backups in Maestro"
legacy: false
tags: ["backups, databases"]
permalink: /:collection/:path:output_ext
---

Maestro gives you tools to [automatically restore your database backups](/maestro/how-to-guides/add-ins/database-backups.html), but you can also manage them yourself. 

## Downloading backups

You can retrieve your backup file(s) in one of three ways:

### Cloud 66 toolbelt
The best way to retrieve your database backup is by using the [toolbelt backup management](/maestro/references/toolbelt.html#about-backup-management). Your backup may be bigger than 250 MB, in which case it will be divided into several files. By using the toolbelt, the files are automatically downloaded and concatenated for you.


### Maestro Dashboard

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. In the **Add-Ins** panel, click the database backup you'd like to download
3. Click the download (cloud) icon
4. Click *Copy script to clipboard*

You can use this script to automatically download the backup files via the terminal.

### Direct link download

Follow the steps for the Dashboard above but, instead of clicking *Copy script*, click the *more >* link and then download the files via your browser (you will need to concantenate the files manually in this case).


## Unpacking backups

Unpack your backup file with the following command:

```
$ tar -xvf <tar_file>  -C <folder_name>
```

The `-C` option allows you to choose which folder to extract the files to.

If your backup is greater than 250 MB, Maestro will divide it into separate files. In this case, you have to concatenate the parts into a single file before using the command above (unless you are using the Cloud 66 toolbelt).

For example, if we had three files called
file.tar-aa, file.tar-ab and file.tar-ac, we would use the following command: 

```
$ cat file.tar-aa file.tar-ab file.tar-ac > file.tar
```

This will result in a file called file.tar, which we can now unzip using the command above.


## Moving backups between servers

To move your backup to a remote server, use SCP:

```
$ scp  -i <identity_file> database_dump.sql <remote_server_user>@<remote_server_address>:/tmp
```

## Restoring backups on another server


### MySQL

From the [MySQL command-line](http://dev.mysql.com/doc/refman/5.5/en/mysql.html), use the following command to restore your database from a dumped backup file `(.sql)`:

```
$ mysql -u <db_username> -p<db_password> <db_name> </tmp/database_dump.sql>
```


### PostgreSQL

From the PostgreSQL command-line prompt, use the following command to restore your database from a dumped backup file `(.sql)`:

```
$ psql -U <db_username> --no-password <db_name> < <path_to_your_backup_file(.sql)>
```


### MongoDB

From the MongoShell, use the following command to restore your database from a dumped backup folder:

```
$ mongorestore  --drop --username <db_username> --password <db_password> --db <db_name> <path_to_your_backup_folder(dump)>
```


### Redis

Ensure that Redis is not running before restoring your backups and use the appropriate method to stop it before proceeding.

Redis data are simply represented by a single `dump.rdb` file. You just have to copy this file into the right folder using your command-line interface:

```
$ sudo rm -rf /data/redis/dump.rdb && sudo cp <path_to_your_backup_file(.rdb)> /data/redis/dump.rdb
```

