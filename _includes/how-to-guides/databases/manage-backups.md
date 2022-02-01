We recommend using the [Cloud 66 database backup add-in](/{{page.collection}}/how-to-guides/add-ins/database-backups.html) to manage and restore database backups, but you can also manage them manually. This includes downloading the backup, decompressing it, moving it to another server and restoring it. 

## Restoring an automated backup

You can restore a backup directly through Cloud66 dashboard backup page. There is a **Restore** button for each backup that will automatically download that backup to your server and restore it. If you'd prefer to do so manually, follow one of the guides below.

## Managed backup disk space requirements

Although managed backups are stored separately from servers, the creation of each backup is run on your database server before the archive is moved to Cloud 66’s managed backup servers.

As such your server requires enough disk space to (temporarily) hold a single database backup. If your server is low on disk space you may encounter an error like this:
`Not enough free space. You need at least xxx MB free space for this backup`

Before taking backups we calculate the size of your data directory and make sure that your server has **at least twice** that much storage free. This ensures that the backup doesn’t fill up the hard drive entirely. 

We have suggested some methods for adding or clearing up disk space below, but before proceeding we recommend you have a solid grasp on how disks and volumes work in Ubuntu (and Linux in general). This [excellent thread](https://stackoverflow.com/questions/24429949/device-vs-partition-vs-file-system-vs-volume-how-do-these-concepts-relate-to-ea){:target="_blank"}, this [guide to mount command](https://www.computerhope.com/unix/umount.htm){:target="_blank"}, and this [guide to partitions](https://tldp.org/LDP/sag/html/partitions.html){:target="_blank"} explain all the concepts.

### Resolving space issues

There are three main ways to resolve a lack of storage space:

### 1. Add additional disk space to your cloud server

Attach a new disk to your server and mount `"/var/cloud66/backups"` on the new disk. Please remove the existing `/var/cloud66/backups` by running `"sudo rm -rf /var/cloud66/backups"` before mounting `"/var/cloud66/backups"`.

### 2. Clear your server of unneeded files

Your server may have outdated or unneeded files (logs are a common culprit). A handy way to identify these is to use the `ncdu` command - [this comprehensive guide](https://computingforgeeks.com/ncdu-analyze-disk-usage-in-linux-with-ncdu/){:target="_blank"} explains how to install and use `ncdu`.

### 3. Disable backup size checks

If you are confident that you have enough space and the first option is not possible, you can use the [Cloud 66 Toolbelt](https://help.cloud66.com/rails/references/toolbelt/toolbelt-commands.html#settings-set) to run `"cx settings set -s STACK_NAME db.check.backup.size false"` where `STACK_NAME` is the name of your application. This will disable backup size checks.

<div class="notice notice-danger" markdown="1"><p>🚨 If your server does not have enough space to accommodate the backup, this setting could cause the backup to fail, or the server disk to be fully utilised</p></div>

## Migrating data between applications

You can use automated database backups to migrate data between applications using the Dashboard, but there are some format restrictions when doing so:

<table class='table table-bordered table-striped'>
  <tr>
    <th>DB Engine</th>
    <th>Compatible backup format(s) for migration</th>
  </tr>
  <tr>
    <td>MySQL</td>
    <td>Binary only</td>
  </tr>
  <tr>
    <td>PostgreSQL</td>
    <td>Text only</td>
  </tr>
  <tr>
    <td>Mongo</td>
    <td>Either</td>
  </tr>
  <tr>
    <td>Redis</td>
    <td>Either</td>
  </tr>
</table>

This only applies to migrations between applications - restores to the original database (i.e. in the same application) will work regardless of format. 

To migrate data between applications:

1. Add a new server of the same type (e.g. MySQL) on the destination application
2. Visit the new server's page in the Cloud 66 Dashboard (click on the server type and then the name of the server)
3. Click the *Import Database* button (on the right-hand side)
4. Choose the source application (i.e. where you're pulling the backup from) and click *Import* - this will automatically "restore" the latest database backup to your new server.

Remember to wait for the task to be completed before you start trying to use the database for anything. 

## Downloading a backup

You can manually retrieve a backup in one of three ways:

### 1. Using Cloud 66 Toolbelt

If you are using managed backups, you can retrieve your database backup by using [Cloud 66 Toolbelt](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#backups-download). Your backup may be bigger than 350 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.

### 2. From your Cloud 66 Dashboard

If you are using managed backups, you can download backups via your Cloud 66 Dashboard. To do so, open your Application Overview and click the link for your database backup add-in. 

This page lists your available database backups, and allows you to download and restore each one. Click the download icon and choose one of these options:

1. Copy the script (shell command) by clicking on the link, and then paste this into a terminal (or shell) on the machine where you want the files to be downloaded. This will automatically download and concatenate your backup files to the destination chosen.
2. Click on the "more" link to display the direct link(s) to the backup file(s). These links are only active for a few minutes, so you should use them immediately. Clicking a link will download that file via your browser.

### 3. Via command line

You can also copy the direct links (see above) and then manually `curl` these links to your computer or server. Remember that these links are time-bound - they will expire after a few minutes.

```bash
$ curl -o "YOUR_BACKUP_FILE_NAME" "GENERATED_URL"
```

## Preparing files for manual restoration

After downloading a backup you will need to follow several steps to restore that data. Except for the first two, these steps differ by database engine.

### Concatenate multiple files

*NOTE: This step can be skipped if you use the Toolbelt or script option to download the backup.*

If your total backup is larger than 350MB we will split it across multiple files in increments of 350MB. Before restoring this data, you will need to concatenate (join) these files into a single large file. For example:

```bash
$ cat file.tar-aa file.tar-ab file.tar-ac > file_combined.tar
```

### Unarchive the backup files

*NOTE: This step can be skipped if you use the Toolbelt or script option to download the backup.*

Before manually restoring your data will need to decompress the backup file. The file will be in the `tar` format. To decompress it use:

```bash $ tar -xvf [tar_file] -C [folder_name] ```

The -C option allows you to choose which folder to extract the files to.

Once you have your files prepared, you can follow the guide for your specific backup format and engine (see below). 

## Restoring a MySQL text backup

<div class="notice"><p>
This is a method for <em>manually</em> restoring your MySQL text backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding. </p></div>

**Step 1:** Run following command to flatten the folder

```bash
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
```

**Step 2:** Run following command to find the data file

```bash
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'
```

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

```bash
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
```

**Step 4:** In order to purge old data you can drop your current db and create a new one. To start, you need to set some environment variables.

You can find `YOUR_MYSQL_DB_APP_USERNAME`, `YOUR_MYSQL_DB_APP_PASSWORD`,`YOUR_MYSQL_ADMIN_USERNAME`,`YOUR_MYSQL_ADMIN_PASSWORD` and `YOUR_MYSQL_DATABASE_NAME` on the Cloud66 Dashboard MySQL server detail page. You can then use these in the commands below:

```bash
$ export $MySQL_DB_APP_USERNAME="YOUR_MYSQL_DB_APP_USERNAME"
$ export $MySQL_DB_APP_PASSWORD="YOUR_MYSQL_DB_APP_PASSWORD"
$ export $MySQL_ADMIN_USERNAME="YOUR_MYSQL_ADMIN_USERNAME"
$ export $MySQL_DATABASE_NAME="YOUR_MYSQL_DATABASE_NAME"
```

**4.1** Use following commands to drop your database

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "DROP DATABASE $MySQL_DATABASE_NAME ;"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES ;"
```

**4.2** Use following command to create a new database

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "CREATE DATABASE $MySQL_DATABASE_NAME CHARACTER SET utf8;"
```

**4.3** Use following commands to revoke user privileges

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "REVOKE ALL PRIVILEGES ON $MySQL_DATABASE_NAME.* FROM '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
```

**4.4** Use following commands to give enough permission to you app user

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES ON $MySQL_DATABASE_NAME.* TO '$MySQL_DB_APP_USERNAME'@'localhost';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER,LOCK TABLES,CREATE VIEW,SHOW VIEW,EXECUTE,TRIGGER,CREATE TEMPORARY TABLES,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,REFERENCES ON $MySQL_DATABASE_NAME.* TO '$MySQL_DB_APP_USERNAME'@'%';"
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD -e "FLUSH PRIVILEGES;"
```

**Step 5:** Finally, use the following command to restore your database:

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME < /path/to/unarchived/folder/data_file
```

## Restoring a MySQL Binary backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your MySQL binary backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

You need Percona innobackupex to be able to restore a MySQL binary backup. Percona innobackupex is installed on your MySQL server if it is provisioned by Cloud66. If you need to install it on another server, [follow this guide](https://www.percona.com/doc/percona-xtrabackup/2.3/installation/apt_repo.html). 

**Step 1:** Find the Percona backup folder. Run following command to find it:

```bash
$ find /path/to/unarchived/folder -name ibdata1 -type f -exec dirname {} ';'
```

**Step 2:** Find the MySQL Data Directory . You should be able to find it in MySQL configuration file (`my.cnf`). In normal MySQL installation you can find MySQL configuration file in **/etc/mysql** path. Open my.cnf and search for **datadir** in **MySQLd** section.

**Step 3:** Stop the MySQL service :

Ubuntu 18.04 & 20.04
```bash
$ sudo systemctl stop MySQL
```

**Step 4:** Use following command to delete the MySQL data directory

```bash
$ sudo rm -rf /path/to/your/MySQL/data/directory
```

#### Note

<div class="notice notice-danger">
<p>Please make a copy of the MySQL data directory before deleting it so that you can restore if something goes wrong.</p>
</div>

**Step 5:** Use following command to create a blank MySQL data directory

```bash
$ sudo mkdir -p /path/to/your/MySQL/data/directory
```

**Step 6:** Run following command to restore the Percona backup folder (from step 1)

```bash
$ sudo innobackupex --copy-back /path/to/percona/backup/folder
```

**Step 7:** Run following command to fix the permissions on the MySQL data directory :

```bash
$ sudo chown -R MySQL:MySQL /path/to/your/MySQL/data/directory
```

**Step 8:** Start MySQL service

For Ubuntu 18.04 & 20.04 use:
```bash
$ sudo systemctl start MySQL
```

## Restoring a Postgres text backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Postgres text backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to flatten the folder

```bash
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
```

**Step 2:** Run following command to find the data file

```bash
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'
```

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

```bash
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
```

**Step 4:** On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.

```bash
$ export $PG_DATABASE_NAME=YOUR_PG_DATABASE_NAME
$ export $PG_APP_USERNAME=YOUR_PG_APP_USERNAME"
```

**4.1** Use following command to stop all the activities on your db

```bash
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid <> pg_backend_pid();"
```

**4.2** Use following command to drop your database

```bash
$ sudo -u postgres psql -c 'DROP DATABASE IF EXISTS $PG_DATABASE_NAME'
```

**4.3** Use following command to create a new database

```bash
$ sudo -u postgres psql -c "CREATE DATABASE $PG_DATABASE_NAME WITH encoding 'unicode'"
```

**4.4** If you are using **postgis** use following commands to add it to newly created database

```bash
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_topology;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION fuzzystrmatch;"
$ sudo -u postgres psql -d $PG_DATABASE_NAME -c "CREATE EXTENSION postgis_tiger_geocoder;"
```

**Step 5:** You can use following command to restore your database

```bash
$ MySQL -u $MySQL_ADMIN_USERNAME -p$MySQL_ADMIN_PASSWORD $MySQL_DATABASE_NAME < /path/to/unarchived/folder/data_file
$ pg -U $PG_APP_USERNAME --no-password $PG_DATABASE_NAME < /path/to/unarchived/folder/data_file
```

## Restoring a Postgres binary backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Postgres binary backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** You need to find the main backup folder in unarchived folder. Run following command to find it :

```bash
$ find /path/to/unarchived/folder -name raw -type d
```

**Step 2:** Stop the postgresql service :

Ubuntu 18.04 & 20.04
```bash
$ sudo systemctl stop postgresql
```

**Step 3:** Use following command to delete the Postgres data directory

```bash
$ sudo rm -rf /usr/local/pgsql/data
```

#### Note

<div class="notice notice-danger">

<p>Please take a backup from the Postgres data directory before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 4:** Use following command to create a blank Postgres data directory

```bash
$ sudo mkdir -p /usr/local/pgsql/data
```

**Step 5:** Use following command to copy the content of main backup folder (step 1)
```bash
$ sudo cp -a /path/to/unarchived/folder/main/backup/. /usr/local/pgsql/data/
```

**Step 6:** Run following command to fix the permission of Postgres data directory :

```bash
$ sudo chown -R postgres:postgres /usr/local/pgsql/data
```

**Step 7:** Start the postgresql service

Ubuntu 18.04 & 20.04
```bash
$ sudo systemctl start postgresql
```

## Restoring a Redis backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your Redis backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to flatten the folder

```bash
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
```

**Step 2:** Run following command to find the data file

```bash
$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'
```

**Step 3:** If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.

```bash
$ gzip -d /path/to/unarchived/folder/data_file_from_previous_step
```

**Step 4:** Use following command to stop Redis service :

```bash
$ sudo systemctl redis.service stop || sudo service redis stop
```

**Step 5:** Use following command to delete Redis data file

```bash
$ sudo rm -rf /data/redis/dump.rdb
```

#### Note

<div class="notice notice-danger">
<p>Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.</p>
</div>

**Step 6:** Use following command to copy new data file

```bash
$ sudo cp -a /path/to/unarchived/folder/data_file /data/redis/dump.rdb
```

**Step 7:** Run following command to fix the permission of Redis data directory :

```bash
$ sudo chown -R redis:redis /data/redis
```

**Step 8:** Run following command to start Redis service

```bash
$ sudo systemctl redis.service start || sudo service redis start
```

## Restoring a MongoDB backup

<div class="notice"><p>This is a method for <em>manually</em> restoring your MongoDB backup - we only recommend this method if you cannot use the automated method described above. Please also ensure you have prepared your files before proceeding.</p></div>

**Step 1:** Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value):

```bash
$ find /path/to/unarchived/folder -name YOUR_DATABASE_NAME -type d
```

If the command returns a result, that is data directory we want to restore. Go to final step.

**Step 2:** Run following command to flatten the folder

```bash
$ find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
```

**Step 3:** Run following command to find the data file

```bash
$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'
```

If the result of command has a *.gz extension go to 3.1 otherwise use 3.2

**3.1**

```bash
$ tar -xvf /path/to/unarchived/folder/Mongo*.tar.gz -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/Mongo*.tar.gz
$ rm -rf /path/to/unarchived/folder/MongoDB
```

**3.2**

```bash
$ tar -xvf /path/to/unarchived/folder/MongoDB.tar -C /path/to/unarchived/folder && find /path/to/unarchived/folder -type f -exec mv -i {} /path/to/unarchived/folder \;
$ rm -rf /path/to/unarchived/folder/MongoDB.tar
$ rm -rf /path/to/unarchived/folder/MongoDB
```

**Step 4:** Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :

```bash
$ rm -rf /path/to/unarchived/folder/YOUR_DATABASE_NAME
$ find /path/to/unarchived/folder -empty -type d -delete
```

**Step 5:** Run following command to restore MongoDB.
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value

```bash
$ mongorestore --drop --db YOUR_DATABASE_NAME /path/to/database/back
```