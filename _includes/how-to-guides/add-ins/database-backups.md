## What is the database backup add-in?

Use this add-in to automatically back up your database on a schedule of your choosing.

## Backup types
Cloud 66 supports two types of backups: _managed_ and _unmanaged_.

### Managed backups
Using managed backups has several benefits:

- You can download database backups through the web UI and API
{% if page.collection == 'rails' %}- [Backup verifiers](/rails/how-to-guides/databases/backup-verifiers.html) ensure that your backups actually contain what you expect{%endif%}
- Use [database replication](/rails/how-to-guides/databases/database-replication.html) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.

### Unmanaged backups

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.

## Backup format
Backup format for redis and mongodb is always **binary**.  For _MySQL_ and _Postgresql_ you can choose between **binary** and **text**. Each format has its own benefits and downsides.

### Binary
For binary backups we are taking a snapshot of the data folder of your database service and applying needed logs to have a consistent data folder. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup. 

As this backup contains raw data of your database server(Instead of human readable SQL dump file) you can expect much faster backup/restore process, specially for large databases this method can be faster up to 4 times which can be very helpful in failover scenarios. But there are some limitation :

- You can not restore it on a server with different version
- You can not use it on slave servers
- You can not use it on servers which their data folder is symlinked to other locations
- You can not use it on encrypted databases 
- You need to shutdown the database service during the restore 

### Text

For this format we generate a dump file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump.

As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version but restore process will be much longer than *binary*, particularly if you have lots of indexes in your database.

These are other benefits of this type of backup: 

- You can restore this backup when server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load

## Backup schedule

You can specify how often you would like to backup your database. Your options are:
 
- Hourly 
- Daily 
- Weekly 
- Monthly 

## Compression
You can specify whether or not you would like to Gzip compress your backups. Compressing your backups will take up less space, but will require additional processing during the compression.  

## Exclude tables
This option applies to **text** MySQL and PostgreSQL backups.  You can provide a comma separated list of tables which you want to exclude from your backup to create a smaller one.   

## Install on replica
This option applies to **text** MySQL and PostgreSQL and redis backups. With this option you can move the backup service to your database replica if available, to relieve pressure on your production database. 

### Note
<div class="notice notice-danger">
	<p>Add/Remove Postgresql binary backup needs a service restart.</p>
</div>

### Note
<div class="notice notice-danger">
	<p>In order for backups to work, you are required to have twice as much space on your server as your backup consumes.</p>
</div>

## Downloading a backup
You can retrieve your backup in one of three ways:

### Using Cloud 66 Toolbelt 
You can retrieve your database backup by using the [toolbelt backup management]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#about-backup-management). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.

### Using a download script

Download the script and transfer it to the desired server or simply click on **Copy script to clipboard** and paste it to the server and run the command. 

By running the download script, your backup will be downloaded (and concatenated if it is a multi part backup) and prepared to be ready to restore. At final step , script will show you the steps you need to follow in order to restore downloaded backup.

### Manual download 

You can download backup files from the Cloud 66 web Dashboard. Open the database backup page and click **Manually download backups**. This will generate signed, time bound link(s) for your backup. We split backups larger than 350MB into multiple parts.
You can then use **curl** to download the file(s): 

<pre class="prettyprint">
$ curl -o "YOUR_BACKUP_FILE_NAME" "GENERATED_URL"
</pre>

**Example**

<pre class="prettyprint">
$ curl -o "MySQL.tar.aa" "https://c66-managed-backup.s3.amazonaws.com/a657f3e657771822b6e7b/backups/54335cfce20127c3/MySQL/OsZOe/2017.01.11.14.00.21/MySQL.tar.aa?AWSAccessKeyId=AKIAJXHLWDDQ&Expires=1484144370&Signature=9MACFYOLIQ%2FsXqqqi"
</pre>

You need to concatenate different parts if you have a multipart backup in order to be able to use it. As an example if your backup contains four parts called MySQL.tar.aa, MySQL.tar.ab, MySQL.tar.ac, MySQL.tar.ad you can use bellow command for concatenation after downloading them :    

<pre class="prettyprint">
$ cat MySQL.tar.aa MySQL.tar.ab MySQL.tar.ac MySQL.tar.ad > MySQL.tar 
</pre>

## Restoring a backup

You can restore a backup through Cloud66 dashboard backup page. There is a **restore button** for each backup that will download the backup on your server and restore it.  

In this section we are going to describe the steps you need to follow if you want to manually restore your backup. 

After you downloaded a backup you will need to follow couple of steps base on your database type to restore it. 

First step is to **untar**  downloaded backup (Unless you are using download script which will untar the result automatically)


<pre class="prettyprint"> $ tar -xvf [tar_file]  -C [folder_name]  </pre>

The -C option allows you to choose which folder to extract the files to.

After you have an unarchived version of your backup ready in a folder you should follow some steps base on your database type.

### MySQL

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 
</pre>

If the command return a result it is a text backup and if the result is empty it is a binary backup.

### Restore a MySQL text backup

**Step 1:** Run following command to flatten the folder 

<pre class="prettyprint">
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  
</pre>

**Step 2:** Run following command to find the data file

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
</pre>

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.
 
<pre class="prettyprint">
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
</pre>

**Step 4:** In order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables. 

You can find `YOUR_MYSQL_DB_APP_USERNAME`, `YOUR_MYSQL_DB_APP_PASSWORD`,`YOUR_MYSQL_ADMIN_USERNAME`,`YOUR_MYSQL_ADMIN_PASSWORD` and `YOUR_MYSQL_DATABASE_NAME` on the Cloud66 Dashboard MySQL server detail page.

<pre class="prettyprint">
$ export $MySQL_DB_APP_USERNAME=YOUR_MYSQL_DB_APP_USERNAME
$ export $MySQL_DB_APP_PASSWORD=YOUR_MYSQL_DB_APP_PASSWORD"
$ export $MySQL_ADMIN_USERNAME=YOUR_MYSQL_ADMIN_USERNAME"
$ export $MySQL_DATABASE_NAME=YOUR_MYSQL_DATABASE_NAME"
</pre>

**4.1** Use following commands to drop your database 

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "DROP DATABASE $MySQL_DATABASE_NAME ;"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"
</pre>

**4.2** Use following command to create a new database 

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "CREATE DATABASE $MySQL_DATABASE_NAME CHARACTER SET utf8;"
</pre>

**4.3** Use following commands to revoke user privileges

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
</pre>

**4.4** Use following commands to give enough permission to you app user

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MySQL_DATABASE_NAME.*  TO '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT  SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES  ON $MySQL_DATABASE_NAME.*  TO '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
</pre>

**Step 5:** Finally, use the following command to restore your database:

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME <  /path/to/unarchived/folder/data_file
</pre>

### Restoring a MySQL Binary backup

You need Percona innobackupex to be able to restore a MySQL binary backup. Percona innobackupex is installed on your MySQL server if it is provisioned by Cloud66. You can use following command to install it on any other ubuntu servers :
 
<pre class="prettyprint">
$ wget https://repo.percona.com/apt/percona-release_0.1-4.$(lsb_release -sc)_all.deb  -O /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo dpkg -i /tmp/percona-release_0.1-4.$(lsb_release -sc)_all.deb
$ sudo apt-get update
$ sudo apt-get install -y percona-xtrabackup-24
</pre>
 
**Step 1:** Find the Percona backup folder. Run following command to find it:

<pre class="prettyprint">
$ find /path/to/unarchived/folder -name ibdata1 -type f  -exec dirname {} ';'
</pre>

**Step 2:** Find the MySQL Data Directory . You should be able to find it in MySQL configuration file (my.cnf) . In normal MySQL installation you can find MySQL configuration file in **/etc/MySQL** path. Open my.cnf and search for **datadir** in **MySQLd** section.

**Step 3:** Stop the MySQL service : 

Ubuntu 16.04 
<pre class="prettyprint">
$ sudo systemctl stop MySQL 
</pre>

**Step 4:** Use following command to delete the MySQL data directory 

<pre class="prettyprint">
$ sudo rm -rf /path/to/your/MySQL/data/directory
</pre>

#### Note
<div class="notice notice-danger">
<p>Please make a copy of the MySQL data directory before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 5:** Use following command to create a blank MySQL data directory

<pre class="prettyprint">
$ sudo mkdir -p /path/to/your/MySQL/data/directory
</pre>

**Step 6:** Run following command to restore the Percona backup folder (from step 1)

<pre class="prettyprint">
$ sudo innobackupex --copy-back /path/to/percona/backup/folder
</pre>

**Step 7:** Run following command to fix the permissions on the MySQL data directory :

<pre class="prettyprint">
$ sudo chown -R MySQL:MySQL  /path/to/your/MySQL/data/directory 
</pre>

**Step 8:** Start MySQL service

For Ubuntu 16.04 & 18.04 use:
<pre class="prettyprint">
$ sudo systemctl start MySQL 
</pre>

### Postgresql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f) 
</pre>

If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Postgresql Text backup**

**Step 1:** Run following command to flatten the folder 

<pre class="prettyprint">
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  
</pre>

**Step 2:** Run following command to find the data file

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
</pre>

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.
 
<pre class="prettyprint">
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
</pre>

**Step 4:** On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.

<pre class="prettyprint">
$ export $PG_DATABASE_NAME=YOUR_PG_DATABASE_NAME
$ export $PG_APP_USERNAME=YOUR_PG_APP_USERNAME"
</pre>

**4.1** Use following command to stop all the activities on your db 

<pre class="prettyprint">
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid <> pg_backend_pid();"
</pre>

**4.2** Use following command to drop your database 

<pre class="prettyprint">
$ sudo -u postgres psql -c 'DROP DATABASE IF EXISTS $PG_DATABASE_NAME'
</pre>

**4.3** Use following command to create a new database 

<pre class="prettyprint">
$ sudo -u postgres psql -c "CREATE DATABASE $PG_DATABASE_NAME WITH encoding 'unicode'"
</pre>

**4.4** If you are using **postgis** use following commands to add it to newly created database 

<pre class="prettyprint">
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_topology;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION fuzzystrmatch;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_tiger_geocoder;"
</pre>

**Step 5:** You can use following command to restore your database 

<pre class="prettyprint">
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME <  /path/to/unarchived/folder/data_file
$ pg -U $PG_APP_USERNAME --no-password $PG_DATABASE_NAME <  /path/to/unarchived/folder/data_file
</pre>

### Restore Postgresql Binary backup

**Step 1:** You need to find the main backup folder in unarchived folder. Run following command to find it :

<pre class="prettyprint">
$ find /path/to/unarchived/folder -name raw -type d
</pre>

**Step 2:** Stop Postgresql service : 

Ubuntu 16.04 & 18.04 
<pre class="prettyprint">
$ sudo systemctl stop postgresql 
</pre>

**Step 3:** Use following command to delete Postgresql data directory 

<pre class="prettyprint">
$ sudo rm -rf /usr/local/pgsql/data
</pre>

#### Note
<div class="notice notice-danger">

<p>Please take a backup from Postgresql data directory before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 4:** Use following command to create a blank Postgresql data directory

<pre class="prettyprint">
$ sudo mkdir -p /usr/local/pgsql/data
</pre>

**Step 5:** Use following command to copy the content of main backup folder (step 1)
<pre class="prettyprint">
$ sudo cp -a /path/to/unarchived/folder/main/backup/. /usr/local/pgsql/data/
</pre>

**Step 6:** Run following command to fix the permission of Postgresql data directory :

<pre class="prettyprint">
$ sudo chown -R postgres:postgres /usr/local/pgsql/data 
</pre>

**Step 7:** Start Postgresql service

Ubuntu 16.04 & 18.04
<pre class="prettyprint">
$ sudo systemctl start postgresql
</pre>


### Redis

**Step 1:** Run following command to flatten the folder 

<pre class="prettyprint">
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;  
</pre>

**Step 2:** Run following command to find the data file

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'    
</pre>

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.
 
<pre class="prettyprint">
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
</pre>

**Step 4:** Use following command to stop Redis service : 

<pre class="prettyprint">
$ sudo bluepill cloud66_redis stop || sudo service redis stop
</pre>

**Step 5:** Use following command to delete Redis data file

<pre class="prettyprint">
$ sudo rm -rf /data/redis/dump.rdb
</pre>

#### Note
<div class="notice notice-danger">
	<p>Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 6:** Use following command to copy new data file 

<pre class="prettyprint">
$ sudo cp -a /path/to/unarchived/folder/data_file /data/redis/dump.rdb
</pre>

**Step 7:** Run following command to fix the permission of Redis data directory :

<pre class="prettyprint">
$ sudo chown -R redis:redis /data/redis 
</pre>

**Step 8:** Run following command to start Redis service

<pre class="prettyprint">
$ sudo bluepill cloud66_redis start || sudo service redis start 
</pre>


### MongoDB

**Step 1:** Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value): 

<pre class="prettyprint">
$ find /path/to/unarchived/folder  -name YOUR_DATABASE_NAME -type d
</pre>

If the command return a result, that is data directory we want to restore. Go to final step.

**Step 2:** Run following command to flatten the folder

<pre class="prettyprint">
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
</pre>

**Step 3:** Run following command to find the data file

<pre class="prettyprint">
$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'    
</pre>

If the result of command  has a *.gz extension go to 3.1 otherwise use 3.2
 
**3.1**

<pre class="prettyprint">
$ tar -xvf /path/to/unarchived/folder/Mongo*.tar.gz -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/Mongo*.tar.gz
$ rm -rf /path/to/unarchived/folder/MongoDB
</pre>

**3.2**

<pre class="prettyprint">
$ tar -xvf /path/to/unarchived/folder/MongoDB.tar -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/MongoDB.tar
$ rm -rf /path/to/unarchived/folder/MongoDB
</pre>

**Step 4:** Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :

<pre class="prettyprint">
$ rm -rf /path/to/unarchived/folder/YOUR_DATABASE_NAME
$ find /path/to/unarchived/folder -empty -type d -delete
</pre>

**Step 5:** Run following command to restore MongoDB. 
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value 

<pre class="prettyprint">
$ mongorestore --drop --db YOUR_DATABASE_NAME  /path/to/database/back 
</pre>
