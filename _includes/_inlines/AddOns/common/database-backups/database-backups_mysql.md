---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-findpathto-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-gzipdpath.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-export.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/database-backups/code_database-backups_mysql-mysqlu-2-3-4.html" ]
 usedin: [ _legacy_docker/AddOns/database-backups.md, _maestro/AddOns/database-backups.md, _node/addons/database-backups.md, _rails/AddOns/database-backups.md] -->


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