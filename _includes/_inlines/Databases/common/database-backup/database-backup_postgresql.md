<!-- post: -->


#### Postgresql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :



{%include _inlines/Databases/common/database-backup/code_database-backup_postgresql-findpathto.md %}




If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Postgresql Text backup**
1. Run following command to flatten the folder 



{%include _inlines/Databases/common/database-backup/code_database-backup_postgresql-findpathto-2.md %}




2. Run following command to find the data file



{%include _inlines/Databases/common/database-backup/code_database-backup_postgresql-findpathto-2-3.md %}




3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.



{%include _inlines/Databases/common/database-backup/code_database-backup_postgresql-gzipdpath.md %}




4. In order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_PG_DATABASE_NAME and YOUR_PG_APP_USERNAME in Cloud66 Dashboard Postgresql server detail page.



{%include _inlines/Databases/common/database-backup/code_database-backup_postgresql-export.md %}




4.1 Use following command to stop all the activities on your db 

```
$ sudo -u postgres psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '$PG_DATABASE_NAME' AND pg_stat_activity.pid 


