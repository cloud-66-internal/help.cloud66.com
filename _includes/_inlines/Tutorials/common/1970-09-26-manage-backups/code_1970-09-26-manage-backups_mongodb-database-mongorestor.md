<!-- layout:code post: 1970-09-26-manage-backups_mongodb-database -->

```
$ mongorestore  --drop --username <db_username> --password <db_password> --db <db_name> <path_to_your_backup_folder(dump)>
```
