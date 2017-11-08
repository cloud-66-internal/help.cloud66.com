---
menuheaders: [ "Managing your Cloud 66 backups", "Download your backup", "1. Cloud 66 toolbelt", "2. Cloud 66 web UI", "3. Command line", "Unzip your backup", "Move your backup to another server", "Restore your backup on another server", "MySQL database", "PostgreSQL database", "MongoDB database", "Redis database" ]
layout: post
template: one-col
title: How to manage your Cloud 66 backups
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---








## Managing your Cloud 66 backups
Cloud 66 makes it easy for you to run and restore your [database backups](https://help.cloud66.works/{{ include.product }}/addins/database-backups.html), but you can also manage them yourself. This includes downloading the backup, unzipping it, moving it to another server and restoring it. What follows is a logical scenario of what a user is likely to face in this situation.






## Download your backup
You can retrieve your backup in one of three ways:






### 1. Cloud 66 toolbelt
The best way to retrieve your database backup is by using the [toolbelt backup management](http://help.cloud66.com/toolbelt/toolbelt-backup-management). Your backup may be bigger than 250 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.






### 2. Cloud 66 web UI
Access your stack detail page, and click the link for your database backup add-in. This page lists your available database backups, and allows you to download and restore each one. Click the download icon to view the available downloads, and either download through your browser or with the command line (option 3 below).






### 3. Command line
Use the `wget` command to download your backup:





```
$ wget <generated_public_link>
```





See option 2 above to retrieve your download link. **Remember to put quotes around it.**






## Unzip your backup
Now that you have downloaded your backup, you can go ahead and unzip it with the following command:





```
$ tar -xvf <tar_file>  -C <folder_name>
```





The `-C` option allows you to choose which folder to extract the files to.

If your backup is greater than 250 MB, Cloud 66 will divide it into separate files. In this case, you have to concatenate the parts into a single file before using the command above (unless you are using the Cloud 66 toolbelt).

For example, if we had three files called
file.tar-aa, file.tar-ab and file.tar-ac, we would use the following command: 





```
$ cat file.tar-aa file.tar-ab file.tar-ac > file.tar
```





This will result in a file called file.tar, which we can now unzip using the command above.






## Move your backup to another server
To move your backup to a remote server, we will use SCP:





```
$ scp  -i <identity_file> database_dump.sql <remote_server_user>@<remote_server_address>:/tmp
```










## Restore your backup on another server






### MySQL database

From the [MySQL command-line](http://dev.mysql.com/doc/refman/5.5/en/mysql.html), use the following command to restore your database from a dumped backup file `(.sql)`:





```
$ mysql -u <db_username> -p<db_password> <db_name> </tmp/database_dump.sql>
```










### PostgreSQL database

From the PostgreSQL command-line prompt, use the following command to restore your database from a dumped backup file `(.sql)`:





```
$ psql -U <db_username> --no-password <db_name> < <path_to_your_backup_file(.sql)>
```










### MongoDB database

From the MongoShell, use the following command to restore your database from a dumped backup folder:





```
$ mongorestore  --drop --username <db_username> --password <db_password> --db <db_name> <path_to_your_backup_folder(dump)>
```










### Redis database
Ensure that Redis is not running before restoring your backups and use the appropriate method to stop it before proceeding.

Redis data are simply represented by a single `dump.rdb` file. You just have to copy this file into the right folder using your command-line interface:





```
$ sudo rm -rf /data/redis/dump.rdb && sudo cp <path_to_your_backup_file(.rdb)> /data/redis/dump.rdb
```





