<!-- post: -->


#### Mysql

First you need to detect if the backup is a **Text backup** or **Binary Backup**.  Run following command on the result folder of previous step :



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto.md %}




If the command return a result it is a text backup and if the result is empty it is a binary backup.

**Restore Mysql Text backup**
1. Run following command to flatten the folder 



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto-2.md %}




2. Run following command to find the data file



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto-2-3.md %}




3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-gzipdpath.md %}




4. On order to clean old data you can drop your current db and create a new one. You can use following scripts to drop and recreate your database but first you need to set some environment variables.
You can find YOUR_MYSQL_DB_APP_USERNAME, YOUR_MYSQL_DB_APP_PASSWORD,YOUR_MYSQL_ADMIN_USERNAME,YOUR_MYSQL_ADMIN_PASSWORD and YOUR_MYSQL_DATABASE_NAME in Cloud66 Dashboard Mysql server detail page.



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-export.md %}




4.1 Use following commands to drop your database 



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu.md %}




4.2 Use following command to create a new database 



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2.md %}




4.3 Use following commands to revoke user's privileges



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2-3.md %}




4.4 Use following commands to give enough permission to you app user



{%include _inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2-3-4.md %}




5. You can use following command to restore your database 

```
$ mysql -u $MYSQL_ADMIN_USERNAME -p$MYSQL_ADMIN_PASSWORD $MYSQL_DATABASE_NAME 


