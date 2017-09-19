<!-- usedin: [ _includes/_inlines/Databases/common/database-backup/database-backups_redis-v1.md] -->


```
$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'    
```
