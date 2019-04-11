---
layout: post
template: one-col
title: Using the database backup add-in
categories: how-to-guides/add-ins
lead: "Schedule and automate your database backups with this add-in"
legacy: false
tags: ["databases"]
permalink: /:collection/:path:output_ext
---

Use this add-in to backup your database on a schedule of your choosing.

## Backup types

Cloud 66 provides two types of backups: _managed_ and _unmanaged_.

### Managed backups

Managed backups have several benefits:

- You can download database backups through via the web Dashboard and API
- You can easily restore database backups
- They are stored by Maestro

The 100 most recent managed backups are kept by default.

### Unmanaged backups

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.

## Backup format

The backup format for redis and mongodb is always **binary**.  For _Mysql_ and _Postgresql_ you can choose between **binary** and **text**.

Each format has its own benefits and drawbacks: 

### Binary

Binary backups take a snapshot of the data folder of your database service, along with necessary log files. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup.

As this backup contains raw binary (rather than a human-readable SQL dump file) you can expect a much faster backup/restore process, particularly for large databases. This method can be faster up to 4 times which can be very helpful in failover scenarios. But there are also some limitations:

- You cannot restore it on a server running a different version of the database engine
- You cannot use it on slave servers
- You cannot use it for symlinked data folders
- You can not use it on encrypted databases 
- You need to shut down the database service during the restore 

### Text

This is a dump file with SQL commands that will recreate the database in the same state as it was at the time of the dump.

As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version. 

However, the restore process will be much slower than **binary**, particularly if you have lots of indexes in your database. These are other benefits of this type of backup : 

- You can restore this backup when the server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load

#### Note
<div class="notice notice"><p>If you add or remove a Postgresql binary backup, you will need to restart the service.</p></div>

## Backup schedule

You can specify how often you would like to back up your database. It can be:

- Hourly 
- Daily 
- Weekly 
- Monthly 

#### Warning
<div class="notice notice-warning"><p>In order for backups to work, you need twice as much disk space on your server as your backup consumes.</p></div>


## Compression

You can specify whether or not you would like to Gzip compress your backups. Compressing your backups will take up less space, but will require additional processing during compression.  


## Exclude tables

This option only applies to **text**-format MySQL and PostgreSQL backups. You can provide a comma-separated list of tables to exclude from your backup.


## Install on replica

This option only applies to **text**-format MySQL and PostgreSQL and redis backups. Allows you to move the backup service to a database replica (only in the same application) to reduce the load on your production database.

In the case of multiple slaves the backup will always be on the oldest slave server (the lowest server ID).

Note that adding or removing replicas will move the backups to the replica or master recursively.

## Downloading backups

You can retrieve your backup in one of three ways:

### Cloud 66 Toolbelt

You can retrieve your database backup by using the [toolbelt backup management](/maestro/references/toolbelt.html#download-your-backups). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.


### Download script

The plugin also offers a bash script that can be used to automatically download and restore your database backup on another server. 

To do so:

1. Open your **Application Overview** in the Dashboard
2. Click the on the database backup add-in. 
3. Click on the cloud icon next to the backup you want to download
4. Click on *Copy script to clipboard* 
5. Paste this script into the target server and run the command

By running the download script, your backup will be downloaded (and concatenated if it is a multi-part backup) and prepared for restoration. As a final step, the script will show you the steps you need to follow in order to restore the downloaded backup.

### Manual download

You can also manually download backup files.

1. Open your **Application Overview** in the Dashboard
2. Click the on the database backup add-in. 
3. Click on the cloud icon next to the backup you want to download
4. Click on the *more* link next to *Download each backup file manually*
5. Click on the link(s) to download the file(s) to your desktop

These links are temporary and will expire in a few minutes, so you should not bookmark them.

You can use **curl** to download these files: 

```
$ curl -o "YOUR_BACKUP_FILE_NAME" "GENERATED_URL"
```

If you have a multipart backup, you will need to concatenate the different files in order to be able to use the backup. 

For example if your backup contains four parts called mysql.tar.aa, mysql.tar.ab, mysql.tar.ac and mysql.tar.ad you can use this command to concatenate them into a file called mysql.tar:

```
$ cat mysql.tar.aa mysql.tar.ab mysql.tar.ac mysql.tar.ad > mysql.tar

```

## Restoring backup

### Via the Dashboard

You can automatically restore a backup through the Dashboard backup page. There is a **restore button** for each backup that will download the backup to your server and restore it.  

### Manually restoring a backup

Regardless of which database you use, you will first need to **untar** downloaded backups, unless you are using the download script which will untar the files automatically.

```
$ tar -xvf <tar_file> -C <folder_name>
```

The -C option allows you to choose which folder to extract the files to.

After you have an unarchived version of your backup ready in a folder you need to follow different steps depending on your database type.

### MySQL

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :

```
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 
```

If the command returns a result it is a text backup and if the result is empty it is a binary backup.

#### Restore MySQL Text backup

1. Run this command to flatten the folder 
```
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  
```
2. Run this command to find the data file:
```
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
```
3. If the result of previous step has a *.gz extension run following command to unzip it:
```
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
```
4. Next set environment variables for the database. You can find all of the variables needed below in your server detail page on the Dashboard.
```
$ export $MYSQL_DB_APP_USERNAME=YOUR_MYSQL_DB_APP_USERNAME
$ export $MYSQL_DB_APP_PASSWORD=YOUR_MYSQL_DB_APP_PASSWORD"
$ export $MYSQL_ADMIN_USERNAME=YOUR_MYSQL_ADMIN_USERNAME"
$ export $MYSQL_DATABASE_NAME=YOUR_MYSQL_DATABASE_NAME"
```
5. Next use the following commands to drop your database 
```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "DROP DATABASE $MYSQL_DATABASE_NAME ;"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"
```
6. Use the following command to create a new database 
```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "CREATE DATABASE $MYSQL_DATABASE_NAME CHARACTER SET utf8;"
```
7. Use following commands to revoke user's privileges
```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MYSQL_DATABASE_NAME.* FROM '$MYSQL_DB_APP_USERNAME'@'localhost';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MYSQL_DATABASE_NAME.* FROM '$MYSQL_DB_APP_USERNAME'@'%';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
```
8. Use following commands to give enough permission to you app user
```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MYSQL_DATABASE_NAME.*  TO '$MYSQL_DB_APP_USERNAME'@'localhost';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MYSQL_DATABASE_NAME.*  TO '$MYSQL_DB_APP_USERNAME'@'%';"
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
```
9. Finally use following command to restore your database 
```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD $MYSQL_DATABASE_NAME 
```

#### Restore MySQL Binary backup

You need the Percona innobackupex package on a server to be able to restore a MySQL binary backup. Percona innobackupex will already be installed on your MySQL server if it was provisioned by Maestro. You can use following command to install it on any other Ubuntu server:

```
$ wget https://repo.percona.com/apt/percona-release_0.1-4.$(lsb_release -sc)_all.deb  -O /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo dpkg -i /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo apt-get update
$ sudo apt-get install -y percona-xtrabackup-24
```

## Warning
<div class="notice notice-warning"><p>Please backup the MySQL data directory before starting this process, so that you are able to restore if something goes wrong.</p></div>

1. You need to find the Percona backup folder in unarchived folder. Run following command to find it :
```
$ find /path/to/unarchived/folder -name ibdata1 -type f  -exec dirname {} ';'
```
2. Find the MySQL Data Directory . You should be able to find it in MySQL configuration file (my.cnf) . In normal MySQL installation you can find MySQL configuration file in `/etc/mysql` path. Open `my.cnf` and search for `datadir` in mysqld section.
3. Stop the MySQL service:
```
$ sudo systemctl stop mysql
```
4. Delete the MySQL data directory:
```
$ sudo rm -rf /path/to/your/mysql/data/directory
```
5. Create a blank MySQL data directory:
```
$ sudo mkdir -p /path/to/your/mysql/data/directory
```
6. Restore the Percona backup folder (from step 1):
```
$ sudo innobackupex --copy-back /path/to/percona/backup/folder
```
7. Fix the permissions on the MySQL data directory:
```
$ sudo chown -R mysql:mysql  /path/to/your/mysql/data/directory
```
8. Restart the MySQL service
```
$ sudo systemctl start mysql
```

### PostgreSQL

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :

```
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 
```

If the command returns a result it is a text backup and if the result is empty it is a binary backup.

#### Restore Postgresql Text backup

1. Run following command to flatten the folder: 
```
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  
```
2.     Find the data file:
```
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
```
3. If the result of previous step has a *.gz extension run following command to unzip it.
```
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
```
4. Set some environment variables. You can find these variables on the Postgresql server detail page in the Dashboard.
```
$ export $PG_DATABASE_NAME=YOUR_PG_DATABASE_NAME
$ export $PG_APP_USERNAME=YOUR_PG_APP_USERNAME"
```
5. Stop all the activity on your DB: 
```
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid 
```
6. Drop your database
```
$ sudo -u postgres psql -c 'DROP DATABASE IF EXISTS $PG_DATABASE_NAME'
```
7. Create a new database
```
$ sudo -u postgres psql -c "CREATE DATABASE $PG_DATABASE_NAME WITH encoding 'unicode'"
```
8. If you are using postgis use following commands to add it to newly created database
```
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_topology;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION fuzzystrmatch;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_tiger_geocoder;"
```
9. You can use following command to restore your database
```
$ pg -U $PG_APP_USERNAME --no-password $PG_DATABASE_NAME <  /path/to/unarchived/folder/data_file
```

#### Restore Postgresql Binary backup

1. You need to find the main backup folder in unarchived folder. Run following command to find it :
```
$ find /path/to/unarchived/folder -name raw -type d
```
2. Stop the Postgresql service :
```
$ sudo systemctl stop postgresql
```
3. Delete the Postgresql data directory
```
$ sudo rm -rf /usr/local/pgsql/data
```
4. Create a blank Postgresql data directory
```
$ sudo mkdir -p /usr/local/pgsql/data
```
5. Copy the content of main backup folder (step 1)
```
$ sudo cp -a /path/to/unarchived/folder/main/backup/. /usr/local/pgsql/data/
```
6. Fix the permissions of the Postgresql data directory:
```
$ sudo chown -R postgres:postgres /usr/local/pgsql/data
```
7. Restart the Postgresql service:
```
$ sudo systemctl start  postgresql"
```

### Redis

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
4. Stop the Redis service : 
```
$ sudo bluepill cloud66_redis stop || sudo service redis stop
```
5. Use following command to delete Redis data file
```
$ sudo rm -rf /data/redis/dump.rdb
```
6. Use following command to copy new data file 
```
$ sudo cp -a /path/to/unarchived/folder/data_file /data/redis/dump.rdb
```
7. Run following command to fix the permission of Redis data directory:
```
$ sudo chown -R redis:redis /data/redis 
```
8. Run following command to start Redis service
```
$ sudo bluepill cloud66_redis start || sudo service redis start 
```

### MongoDB

1. Run the following command to see if there is a database folder in the unarchived folder (Replace YOUR_DATABASE_NAME with correct value): 
```
$ find /path/to/unarchived/folder  -name YOUR_DATABASE_NAME -type d
```
If the command returns a result, that is data directory we want to restore. Go to the final step.

2. Run following command to flatten the folder
```
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
```
3. Run following command to find the data file. If the result of command  has a *.gz extension go to step 4, otherwise go to step 5:
```
$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'    
```
4. Untarring the a *.gz
```
$ tar -xvf /path/to/unarchived/folder/Mongo*.tar.gz -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/Mongo*.tar.gz
$ rm -rf /path/to/unarchived/folder/MongoDB
```
5. Untarring (standard)
```
$ tar -xvf /path/to/unarchived/folder/MongoDB.tar -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/MongoDB.tar
$ rm -rf /path/to/unarchived/folder/MongoDB
```
6. Clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :
```
$ rm -rf /path/to/unarchived/folder/YOUR_DATABASE_NAME
$ find /path/to/unarchived/folder -empty -type d -delete
```
7. Run following command to restore MongoDB. 
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value 
```
$ mongorestore --drop --db YOUR_DATABASE_NAME  /path/to/database/back 
```
        

    


