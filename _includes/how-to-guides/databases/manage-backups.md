We recommend using the [Cloud 66 database backup add-in](/{{page.collection}}/how-to-guides/add-ins/database-backups.html) to manage and restore database backups, but you can also manage them manually. This includes downloading the backup, decompressing it, moving it to another server and restoring it. 

## Restoring an automated backup

You can restore a backup directly through Cloud66 dashboard backup page. There is a **restore button** for each backup that will automatically download that backup to your server and restore it. If you'd prefer to do so manually, follow one of the guides below.

## Migrating data using automated backups

You can use automated database backups to migrate data between servers using the Dashboard, but there are some format restrictions for 


## Downloading a backup

You can retrieve your backup in one of three ways:

### 1. Using Cloud 66 Toolbelt

If you are using managed backups, you can retrieve your database backup by using [Cloud 66 Toolbelt](/{{page.collection}}/references/toolbelt.html#about-backup-management). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.

### 2. From your Cloud 66 Dashboard

If you are using managed backups, you can download backups via your Cloud 66 Dashboard. To do so, open your Application Overview and click the link for your database backup add-in. 

This page lists your available database backups, and allows you to download and restore each one. Click the download icon and choose one of these options:

1. Copy the script (shell command) by clicking on the link, and then paste this into a terminal (or shell) on the machine where you want the files to be downloaded. This will automatically download and concatenate your backup files to the destination chosen.
2. Click on the "more" link to display the direct link(s) to the backup file(s). These links are only active for a few minutes, so you should use them immediately. Clicking a link will download that file via your browser.

### 3. Manually via command line

You can also copy the direct links (see above) and then manually `curl` these links to your computer or server. Remember that these links are time-bound - they will expire after a few minutes.

{% highlight bash %}
$ curl -o "YOUR_BACKUP_FILE_NAME" "GENERATED_URL"
{% endhighlight %}

## Preparing files for manual restoration

After downloading a backup you will need to follow several steps to restore that data. Except for the first two, these steps differ by database engine.

### Concatenate multiple files

*NOTE: This step can be skipped if you use the Toolbelt or script option to download the backup.*

If your total backup is larger than 350MB we will split it across multiple files in increments of 350MB. Before restoring this data, you will need to concatenate (join) these files into a single large file. For example:

{% highlight bash %}
$ cat file.tar-aa file.tar-ab file.tar-ac > file_combined.tar
{% endhighlight %}

### Unarchive the backup files

*NOTE: This step can be skipped if you use the Toolbelt or script option to download the backup.*

Before manually restoring your data will need to decompress the backup file. The file will be in the `tar` format. To decompress it use:

{% highlight bash %} $ tar -xvf [tar_file] -C [folder_name] {% endhighlight %}

The -C option allows you to choose which folder to extract the files to.

Once you have your files prepared, you can follow the guide for your specific backup format and engine (see below). 

## Restoring a MySQL text backup

<div class="notice"><p>
This is a method for <em>manually</em> restoring your MySQL text backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding. </p></div>

**Step 1:** Run following command to flatten the folder

{% highlight bash %}
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
{% endhighlight %}

**Step 2:** Run following command to find the data file

{% highlight bash %}
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'
{% endhighlight %}

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

{% highlight bash %}
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
{% endhighlight %}

**Step 4:** In order to purge old data you can drop your current db and create a new one. To start, you need to set some environment variables.

You can find `YOUR_MYSQL_DB_APP_USERNAME`, `YOUR_MYSQL_DB_APP_PASSWORD`,`YOUR_MYSQL_ADMIN_USERNAME`,`YOUR_MYSQL_ADMIN_PASSWORD` and `YOUR_MYSQL_DATABASE_NAME` on the Cloud66 Dashboard MySQL server detail page. You can then use these in the commands below:

{% highlight bash %}
$ export $MySQL_DB_APP_USERNAME="YOUR_MYSQL_DB_APP_USERNAME"
$ export $MySQL_DB_APP_PASSWORD="YOUR_MYSQL_DB_APP_PASSWORD"
$ export $MySQL_ADMIN_USERNAME="YOUR_MYSQL_ADMIN_USERNAME"
$ export $MySQL_DATABASE_NAME="YOUR_MYSQL_DATABASE_NAME"
{% endhighlight %}

**4.1** Use following commands to drop your database

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "DROP DATABASE $MySQL_DATABASE_NAME ;"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"
{% endhighlight %}

**4.2** Use following command to create a new database

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "CREATE DATABASE $MySQL_DATABASE_NAME CHARACTER SET utf8;"
{% endhighlight %}

**4.3** Use following commands to revoke user privileges

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
{% endhighlight %}

**4.4** Use following commands to give enough permission to you app user

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES ON $MySQL_DATABASE_NAME.* TO '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES ON $MySQL_DATABASE_NAME.* TO '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
{% endhighlight %}

**Step 5:** Finally, use the following command to restore your database:

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME < /path/to/unarchived/folder/data_file
{% endhighlight %}

## Restoring a MySQL Binary backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your MySQL binary backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

You need Percona innobackupex to be able to restore a MySQL binary backup. Percona innobackupex is installed on your MySQL server if it is provisioned by Cloud66. If you need to install it on another server, [follow this guide](https://www.percona.com/doc/percona-xtrabackup/2.3/installation/apt_repo.html). 

**Step 1:** Find the Percona backup folder. Run following command to find it:

{% highlight bash %}
$ find /path/to/unarchived/folder -name ibdata1 -type f -exec dirname {} ';'
{% endhighlight %}

**Step 2:** Find the MySQL Data Directory . You should be able to find it in MySQL configuration file (`my.cnf`). In normal MySQL installation you can find MySQL configuration file in **/etc/mysql** path. Open my.cnf and search for **datadir** in **MySQLd** section.

**Step 3:** Stop the MySQL service :

Ubuntu 16.04 & 18.04
{% highlight bash %}
$ sudo systemctl stop MySQL
{% endhighlight %}

**Step 4:** Use following command to delete the MySQL data directory

{% highlight bash %}
$ sudo rm -rf /path/to/your/MySQL/data/directory
{% endhighlight %}

#### Note

<div class="notice notice-danger">
<p>Please make a copy of the MySQL data directory before deleting it so that you can restore if something goes wrong.</p>
</div>

**Step 5:** Use following command to create a blank MySQL data directory

{% highlight bash %}
$ sudo mkdir -p /path/to/your/MySQL/data/directory
{% endhighlight %}

**Step 6:** Run following command to restore the Percona backup folder (from step 1)

{% highlight bash %}
$ sudo innobackupex --copy-back /path/to/percona/backup/folder
{% endhighlight %}

**Step 7:** Run following command to fix the permissions on the MySQL data directory :

{% highlight bash %}
$ sudo chown -R MySQL:MySQL /path/to/your/MySQL/data/directory
{% endhighlight %}

**Step 8:** Start MySQL service

For Ubuntu 16.04 & 18.04 use:
{% highlight bash %}
$ sudo systemctl start MySQL
{% endhighlight %}

## Restoring a Postgres text backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Postgres text backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to flatten the folder

{% highlight bash %}
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
{% endhighlight %}

**Step 2:** Run following command to find the data file

{% highlight bash %}
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'
{% endhighlight %}

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

{% highlight bash %}
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
{% endhighlight %}

**Step 4:** On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.

{% highlight bash %}
$ export $PG_DATABASE_NAME=YOUR_PG_DATABASE_NAME
$ export $PG_APP_USERNAME=YOUR_PG_APP_USERNAME"
{% endhighlight %}

**4.1** Use following command to stop all the activities on your db

{% highlight bash %}
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid <> pg_backend_pid();"
{% endhighlight %}

**4.2** Use following command to drop your database

{% highlight bash %}
$ sudo -u postgres psql -c 'DROP DATABASE IF EXISTS $PG_DATABASE_NAME'
{% endhighlight %}

**4.3** Use following command to create a new database

{% highlight bash %}
$ sudo -u postgres psql -c "CREATE DATABASE $PG_DATABASE_NAME WITH encoding 'unicode'"
{% endhighlight %}

**4.4** If you are using **postgis** use following commands to add it to newly created database

{% highlight bash %}
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_topology;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION fuzzystrmatch;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_tiger_geocoder;"
{% endhighlight %}

**Step 5:** You can use following command to restore your database

{% highlight bash %}
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME < /path/to/unarchived/folder/data_file
$ pg -U $PG_APP_USERNAME --no-password $PG_DATABASE_NAME < /path/to/unarchived/folder/data_file
{% endhighlight %}

## Restoring a Postgres binary backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Postgres binary backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** You need to find the main backup folder in unarchived folder. Run following command to find it :

{% highlight bash %}
$ find /path/to/unarchived/folder -name raw -type d
{% endhighlight %}

**Step 2:** Stop the postgresql service :

Ubuntu 16.04 & 18.04
{% highlight bash %}
$ sudo systemctl stop postgresql
{% endhighlight %}

**Step 3:** Use following command to delete the Postgres data directory

{% highlight bash %}
$ sudo rm -rf /usr/local/pgsql/data
{% endhighlight %}

#### Note

<div class="notice notice-danger">

<p>Please take a backup from the Postgres data directory before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 4:** Use following command to create a blank Postgres data directory

{% highlight bash %}
$ sudo mkdir -p /usr/local/pgsql/data
{% endhighlight %}

**Step 5:** Use following command to copy the content of main backup folder (step 1)
{% highlight bash %}
$ sudo cp -a /path/to/unarchived/folder/main/backup/. /usr/local/pgsql/data/
{% endhighlight %}

**Step 6:** Run following command to fix the permission of Postgres data directory :

{% highlight bash %}
$ sudo chown -R postgres:postgres /usr/local/pgsql/data
{% endhighlight %}

**Step 7:** Start the postgresql service

Ubuntu 16.04 & 18.04
{% highlight bash %}
$ sudo systemctl start postgresql
{% endhighlight %}

## Restoring a Redis backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Redis backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to flatten the folder

{% highlight bash %}
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
{% endhighlight %}

**Step 2:** Run following command to find the data file

{% highlight bash %}
$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'
{% endhighlight %}

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

{% highlight bash %}
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
{% endhighlight %}

**Step 4:** Use following command to stop Redis service :

{% highlight bash %}
$ sudo bluepill cloud66_redis stop || sudo service redis stop
{% endhighlight %}

**Step 5:** Use following command to delete Redis data file

{% highlight bash %}
$ sudo rm -rf /data/redis/dump.rdb
{% endhighlight %}

#### Note

<div class="notice notice-danger">
<p>Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 6:** Use following command to copy new data file

{% highlight bash %}
$ sudo cp -a /path/to/unarchived/folder/data_file /data/redis/dump.rdb
{% endhighlight %}

**Step 7:** Run following command to fix the permission of Redis data directory :

{% highlight bash %}
$ sudo chown -R redis:redis /data/redis
{% endhighlight %}

**Step 8:** Run following command to start Redis service

{% highlight bash %}
$ sudo bluepill cloud66_redis start || sudo service redis start
{% endhighlight %}

## Restoring a MongoDB backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your MongoDB backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value):

{% highlight bash %}
$ find /path/to/unarchived/folder -name YOUR_DATABASE_NAME -type d
{% endhighlight %}

If the command returns a result, that is data directory we want to restore. Go to final step.

**Step 2:** Run following command to flatten the folder

{% highlight bash %}
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
{% endhighlight %}

**Step 3:** Run following command to find the data file

{% highlight bash %}
$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'
{% endhighlight %}

If the result of command has a *.gz extension go to 3.1 otherwise use 3.2

**3.1**

{% highlight bash %}
$ tar -xvf /path/to/unarchived/folder/Mongo*.tar.gz -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/Mongo*.tar.gz
$ rm -rf /path/to/unarchived/folder/MongoDB
{% endhighlight %}

**3.2**

{% highlight bash %}
$ tar -xvf /path/to/unarchived/folder/MongoDB.tar -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/MongoDB.tar
$ rm -rf /path/to/unarchived/folder/MongoDB
{% endhighlight %}

**Step 4:** Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :

{% highlight bash %}
$ rm -rf /path/to/unarchived/folder/YOUR_DATABASE_NAME
$ find /path/to/unarchived/folder -empty -type d -delete
{% endhighlight %}

**Step 5:** Run following command to restore MongoDB.
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value

{% highlight bash %}
$ mongorestore --drop --db YOUR_DATABASE_NAME /path/to/database/back
{% endhighlight %}