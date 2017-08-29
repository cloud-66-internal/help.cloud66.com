<!--  usedin: [ _legacy_docker/Databases/database-backup.md, _maestro/Databases/database-backup.md, _node/Databases/database-backup.md, _rails/databases/database-backup.md] -->


#### Postgresql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :



{%include _inlines/Databases/common/database-backup/code_database-backups_postgresql-findpathto.md  product = include.product %}




If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Postgresql Text backup**

1\. 
 	Run following command to flatten the folder 



	{%include _inlines/Databases/common/database-backup/code_database-backups_postgresql-findpathto-2.md  product = include.product %}




2\. 	Run following command to find the data file



	{%include _inlines/Databases/common/database-backup/code_database-backups_postgresql-findpathto-2-3.md  product = include.product %}




3\. 	If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.



	{%include _inlines/Databases/common/database-backup/code_database-backups_postgresql-gzipdpath.md  product = include.product %}




4\. On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.



	{%include _inlines/Databases/common/database-backup/code_database-backups_postgresql-export.md  product = include.product %}




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
