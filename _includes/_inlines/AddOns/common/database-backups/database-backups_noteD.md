<!-- usedin: [ _legacy_docker/AddOns/database-backups.md, _maestro/AddOns/database-backups.md, _node/addons/database-backups.md, _rails/AddOns/database-backups.md] -->


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