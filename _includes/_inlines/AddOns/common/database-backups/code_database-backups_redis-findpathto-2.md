<!-- usedin: [ _includes/_inlines/AddOns/common/database-backups/database-backups_redis.md] -->

```

$ find /path/to/unarchived/folder '(' -name '*.rdb' -o -name '*.rdb.gz' ')' -type f -exec basename {} ';'    

```
