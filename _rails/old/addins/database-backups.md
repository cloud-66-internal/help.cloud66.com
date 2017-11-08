---
menuheaders: [ "What is the database backup add-in?", "Backup types", "Managed backups", "Unmanaged backups", "Backup format", "Binary", "Text", "Backup schedule", "Compression", "Exclude tables", "Install on replica", "Note", "Note", "Downloading backup", "Cloud 66 toolbelt", "Download script", "Manually download", "Restore backup", "Mysql", "Note", "Postgresql", "    Note", "Redis", "Note", "MongoDB", "Pricing" ]
layout: post
template: one-col
title: Database Backup
categories: addins
lead: ""
legacy: false

permalink: /:collection/:path
---









## What is the database backup add-in?

Use this add-in to backup your database on a schedule of your choosing.  You can choose from different settings to have your expected behavior :






### Backup types

Cloud 66 provides two types of backups: _managed_ and _unmanaged_.






#### Managed backups

Having managed backups carries several benefits:

- You can download database backups through the web UI and API
- [Backup verifiers](https://help.cloud66.works/rails/databases/backup-verifiers.html) ensure that your backups actually contain what you expect
- Use [database replication](https://help.cloud66.works/{{include.product}}/databases/database-replication.html) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.






#### Unmanaged backups

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.






### Backup format

Backup format for redis and mongodb is always **binary**.  For _Mysql_ and _Postgresql_ you can choose between **binary** and **text**.
Each format has its own benefits and downsides : 






#### Binary

For binary backups we are taking a snapshot of the data folder of your database service and applying needed logs to have a consistent data folder. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup. 
As this backup contains raw data of your database server(Instead of human readable SQL dump file) you can expect much faster backup/restore process, specially for large databases this method can be faster up to 4 times which can be very helpful in failover scenarios. But there are some limitation :

- You can not restore it on a server with different version
- You can not use it on slave servers
- You can not use it on servers which their data folder is symlinked to other locations
- You can not use it on encrypted databases 
- You need to shutdown the database service during the restore 






#### Text

For this format we are generating a dump file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump.
As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version but restore process will be much longer than **binary** specially if you have lots of indexes in your database.
These are other benefits of this type of backup : 

- You can restore this backup when server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load






### Backup schedule

You can specify how often you would like to backup your database. It could be

- Hourly 
- Daily 
- Weekly 
- Monthly 






### Compression

You can specify whether or not you would like to Gzip compress your backups. Compressing your backups will take up less space, but will require additional processing during the compression.  






### Exclude tables

This option applies to **text** MySQL and PostgreSQL backups.  You can provide a comma separated list of tables which you want to exclude from your backup to create a smaller one.   






### Install on replica

This option applies to **text** MySQL and PostgreSQL and redis backups. With this option you can move the backup service to your database replica if available, to relieve pressure from your production database. 









### Note
   
Add/Remove Postgresql binary backup needs a service restart.









### Note


In order for backups to work, you are required to have twice as much space on your server as your backup consumes.




### Downloading backup

You can retrieve your backup in one of three ways:






#### Cloud 66 toolbelt

You can retrieve your database backup by using the [toolbelt backup management](https://help.cloud66.works/{{include.product}}/toolbelt/backups.html). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.






#### Download script

Access your stack detail page in Cloud 66 dashboard, and click the link for your database backup add-in. This page lists your available database backups, and allows you to download and restore each one. By clicking the download icon you will have this option to use a download script or manually download backup.
Download the script and transfer it to the desired server or simply click on **Copy script to clipboard** and paste it to the server and run the command. 
By running the download script, your backup will be downloaded (and concatenated if it is a multi part backup) and prepared to be ready to restore. At final step , script will show you the steps you need to follow in order to restore downloaded backup.






#### Manually download

In download backup page (Cloud66 dashboard), you have this option to manually download backups. By clicking on **Manually download backups** you will see some signed(time bound) generated link(s) for your backup (Or its part if it is greater than 350MB). 
You can use **curl** to download it : 





```

$ curl -o "YOUR_BACKUP_FILE_NAME" "GENERATED_URL"

```





**Example**





```

$ curl -o "mysql.tar.aa" "https://c66-managed-backup.s3.amazonaws.com/a657f3e657771822b6e7b/backups/54335cfce20127c3/mysql/OsZOe/2017.01.11.14.00.21/mysql.tar.aa?AWSAccessKeyId=AKIAJXHLWDDQ&Expires=1484144370&Signature=9MACFYOLIQ%2FsXqqqi"

```





You need to concatenate different parts if you have a multipart backup in order to be able to use it. As an example if your backup contains four parts called mysql.tar.aa, mysql.tar.ab, mysql.tar.ac, mysql.tar.ad you can use bellow command for concatenation after downloading them :    





```

$ cat mysql.tar.aa mysql.tar.ab mysql.tar.ac mysql.tar.ad > mysql.tar 

```










### Restore backup

You can restore a backup through Cloud66 dashboard backup page. There is a **restore button** for each backup that will download the backup on your server and restore it.  

In this section we are going to describe the steps you need to follow if you want to manually restore your backup. 
After you downloaded a backup you will need to follow couple of steps base on your database type to restore it. 
First step is to **untar**  downloaded backup (Unless you are using download script which will untar the result automatically)





```

$ tar -xvf 
  -C 
 

```





The -C option allows you to choose which folder to extract the files to.

After you have an unarchived version of your backup ready in a folder you should follow some steps base on your database type.






#### Mysql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :





```

$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 

```





If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Mysql Text backup**
1. Run following command to flatten the folder 





```

$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  

```





2. Run following command to find the data file





```

$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    

```





3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.





```

$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step

```





4. On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_MYSQL_DB_APP_USERNAME, YOUR_MYSQL_DB_APP_PASSWORD,YOUR_MYSQL_ADMIN_USERNAME,YOUR_MYSQL_ADMIN_PASSWORD and YOUR_MYSQL_DATABASE_NAME in Cloud66 Dashboard Mysql server detail page.





```

$ export $MYSQL_DB_APP_USERNAME=YOUR_MYSQL_DB_APP_USERNAME
$ export $MYSQL_DB_APP_PASSWORD=YOUR_MYSQL_DB_APP_PASSWORD"
$ export $MYSQL_ADMIN_USERNAME=YOUR_MYSQL_ADMIN_USERNAME"
$ export $MYSQL_DATABASE_NAME=YOUR_MYSQL_DATABASE_NAME"

```





4.1 Use following commands to drop your database 





```

$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "DROP DATABASE $MYSQL_DATABASE_NAME ;"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"

```





4.2 Use following command to create a new database 





```

$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "CREATE DATABASE $MYSQL_DATABASE_NAME CHARACTER SET utf8;"

```





4.3 Use following commands to revoke user's privileges





```

$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MYSQL_DATABASE_NAME.* FROM '$MYSQL_DB_APP_USERNAME'@'localhost';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MYSQL_DATABASE_NAME.* FROM '$MYSQL_DB_APP_USERNAME'@'%';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"

```





4.4 Use following commands to give enough permission to you app user




```

$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MYSQL_DATABASE_NAME.*  TO '$MYSQL_DB_APP_USERNAME'@'localhost';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MYSQL_DATABASE_NAME.*  TO '$MYSQL_DB_APP_USERNAME'@'%';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"

```



 5.You can use following command to restore your database 


```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD $MYSQL_DATABASE_NAME 

```


**Restore Mysql Binary backup**

You need Percona innobackupex to be able to restore a mysql binary backup. Percona innobackupex is installed on your mysql server if it is provisioned by Cloud66. You can use following command to install it on any other ubuntu servers :

```
$ wget https://repo.percona.com/apt/percona-release_0.1-4.$(lsb_release -sc)_all.deb  -O /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo dpkg -i /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo apt-get update
$ sudo apt-get install -y percona-xtrabackup-24
```

1. You need to find the Percona backup folder in unarchived folder. Run following command to find it :
```
$ find /path/to/unarchived/folder -name ibdata1 -type f  -exec dirname {} ';'
```
2. Find Mysql Data Directory . You should be able to find it in Mysql configuration file (my.cnf) . In normal Mysql installation you can find Mysql configuration file in /etc/mysql path. Open my.cnf and search for datadir in mysqld section.

3. Mysql service :

3.1 Ubuntu 12.04
```
$ sudo /etc/init.d/mysql stop
```
3.2 Ubuntu 14.04
```
$ sudo service mysql stop
```
3.3 Ubuntu 16.04
```
$ sudo systemctl stop mysql
```
Use following command to delete Mysql data directory




### Note
    
Please take a backup from Mysql data directory before deleting it to be able to restore if something goes wrong.
```
$ sudo rm -rf /path/to/your/mysql/data/directory
```
Use following command to create a blank Mysql data directory
```
$ sudo mkdir -p /path/to/your/mysql/data/directory
```
Run following command to restore the Percona backup folder (from step 1)
```
$ sudo innobackupex --copy-back /path/to/percona/backup/folder
```
Run following command to fix the permission of Mysql data directory :
```
$ sudo chown -R mysql:mysql  /path/to/your/mysql/data/directory
```
Start Mysql service
8.1 Ubuntu 12.04
```
$ sudo /etc/init.d/mysql start
```
8.2 Ubuntu 14.04
```
$ sudo service mysql start
```
8.3 Ubuntu 16.04
```
$ sudo systemctl start mysql
```




#### Postgresql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :





```

$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 

```





If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Postgresql Text backup**
1. Run following command to flatten the folder 





```

$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  

```





2. Run following command to find the data file





```

$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    

```





3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.





```

$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step

```





4. On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.





```

$ export $PG_DATABASE_NAME=YOUR_PG_DATABASE_NAME
$ export $PG_APP_USERNAME=YOUR_PG_APP_USERNAME"

```





4.1 Use following command to stop all the activities on your db 

```
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid 

```

4.2 Use following command to drop your database

```
$ sudo -u postgres psql -c 'DROP DATABASE IF EXISTS $PG_DATABASE_NAME'
```
4.3 Use following command to create a new database

```
$ sudo -u postgres psql -c "CREATE DATABASE $PG_DATABASE_NAME WITH encoding 'unicode'"
```
4.4 If you are using postgis use following commands to add it to newly created database

```
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_topology;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION fuzzystrmatch;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_tiger_geocoder;"
```

You can use following command to restore your database
```
$ pg -U $PG_APP_USERNAME --no-password $PG_DATABASE_NAME <  /path/to/unarchived/folder/data_file
```
**Restore Postgresql Binary backup**

You need to find the main backup folder in unarchived folder. Run following command to find it :
```
$ find /path/to/unarchived/folder -name raw -type d
```
Stop Postgresql service :
2.1 Ubuntu 12.04 / 14.04
```
$ (sudo -u postgres pg_ctl stop -D /usr/local/pgsql/data -m f -t 10 || true) && sudo stop postgresql
```
2.2 Ubuntu 16.04
```
$ sudo systemctl stop postgresql
```
Use following command to delete Postgresql data directory





###     Note

Please take a backup from Postgresql data directory before deleting it to be able to restore if something goes wrong.
```
$ sudo rm -rf /usr/local/pgsql/data
```
Use following command to create a blank Postgresql data directory
```
$ sudo mkdir -p /usr/local/pgsql/data
```
Use following command to copy the content of main backup folder (step 1)
```
$ sudo cp -a /path/to/unarchived/folder/main/backup/. /usr/local/pgsql/data/
```
Run following command to fix the permission of Postgresql data directory :
```
$ sudo chown -R postgres:postgres /usr/local/pgsql/data
```
Start Postgresql service
7.1 Ubuntu 12.04
```
$ sudo /etc/init.d/postgresql start
```
7.2 Ubuntu 14.04
```
$ sudo service postgresql start
```
7.3 Ubuntu 16.04
```
$ sudo systemctl start  postgresql"
```




#### Redis

1. Run following command to flatten the folder 





```

$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  

```





2. Run following command to find the data file





```

$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'    

```





3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.





```

$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step

```





3. Use following command to stop Redis service : 





```

$ sudo bluepill cloud66_redis stop || sudo service redis stop

```





4. Use following command to delete Redis data file









### Note

Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.








```

$ sudo rm -rf /data/redis/dump.rdb

```





5. Use following command to copy new data file 





```

$ sudo cp -a /path/to/unarchived/folder/data_file /data/redis/dump.rdb

```





6. Run following command to fix the permission of Redis data directory :





```

$ sudo chown -R redis:redis /data/redis 

```





7. Run following command to start Redis service





```

$ sudo bluepill cloud66_redis start || sudo service redis start 

```










#### MongoDB

1. Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value): 





```

$ find /path/to/unarchived/folder  -name YOUR_DATABASE_NAME -type d

```





If the command return a result, that is data directory we want to restore. Go to final step.

2. Run following command to flatten the folder





```

$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;

```





3. Run following command to find the data file





```

$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'    

```





If the result of command  has a *.gz extension go to 3.1 unless use 3.2

3.1





```

$ tar -xvf /path/to/unarchived/folder/Mongo*.tar.gz -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/Mongo*.tar.gz
$ rm -rf /path/to/unarchived/folder/MongoDB

```





3.2





```

$ tar -xvf /path/to/unarchived/folder/MongoDB.tar -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/MongoDB.tar
$ rm -rf /path/to/unarchived/folder/MongoDB

```





4. Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :





```

$ rm -rf /path/to/unarchived/folder/YOUR_DATABASE_NAME
$ find /path/to/unarchived/folder -empty -type d -delete

```





5. Run following command to restore MongoDB. 
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value 





```

$ mongorestore --drop --db YOUR_DATABASE_NAME  /path/to/database/back 

```










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

        

    




