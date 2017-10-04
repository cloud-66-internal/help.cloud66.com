<!--  usedin: [ _legacy_docker/AddIns/database-backups-v1.md, _maestro/AddIns/database-backups-v1.md, _node/addins/database-backups-v1.md, _rails/AddIns/database-backups-v1.md] -->


#### Redis

1. Run following command to flatten the folder 



{%include _inlines/AddIns/common/database-backups/code_database-backups_redis-findpathto-v1.md  product = include.product %}




2. Run following command to find the data file



{%include _inlines/AddIns/common/database-backups/code_database-backups_redis-findpathto-2-v1.md  product = include.product %}




3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.



{%include _inlines/AddIns/common/database-backups/code_database-backups_redis-gzipdpath-v1.md  product = include.product %}




3. Use following command to stop Redis service : 



{%include _inlines/AddIns/common/database-backups/code_database-backups_redis-sudobluepill-v1.md  product = include.product %}




4. Use following command to delete Redis data file




