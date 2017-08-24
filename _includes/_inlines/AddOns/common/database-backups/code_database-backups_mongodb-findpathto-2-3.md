<!-- usedin: [ _includes/_inlines/AddOns/common/database-backups] - layout:code post: database-backups_mongodb -->

```

$ find /path/to/unarchived/folder '(' -name 'MongoDB.tar' -o -name 'Mongo*.tar.gz' ')' -type f -exec basename {} ';'    

```
