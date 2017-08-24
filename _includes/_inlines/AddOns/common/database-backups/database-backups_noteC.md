<!-- usedin: [ _legacy_docker/AddOns/database-backups.md, _maestro/AddOns/database-backups.md, _node/addons/database-backups.md, _rails/AddOns/database-backups.md] -->


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