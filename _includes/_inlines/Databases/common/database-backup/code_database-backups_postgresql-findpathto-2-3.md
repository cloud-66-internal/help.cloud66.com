<!-- usedin: [ _includes/_inlines/Databases/common/database-backup/database-backups_postgresql.md] -->


```
$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
```
