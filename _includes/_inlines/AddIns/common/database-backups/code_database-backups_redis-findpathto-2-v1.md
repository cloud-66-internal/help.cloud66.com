<!-- usedin: [ _includes/_inlines/AddIns/common/database-backups/database-backups_redis-v1.md] -->

```

$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'    

```
