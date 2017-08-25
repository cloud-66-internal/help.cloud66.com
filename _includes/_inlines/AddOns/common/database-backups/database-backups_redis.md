<!--  usedin: [ _legacy_docker/AddOns/database-backups.md, _maestro/AddOns/database-backups.md, _node/addons/database-backups.md, _rails/AddOns/database-backups.md] -->


#### Redis

1. Run following command to flatten the folder 



{%include _inlines/AddOns/common/database-backups/code_database-backups_redis-findpathto.md  product = include.product %}




2. Run following command to find the data file



{%include _inlines/AddOns/common/database-backups/code_database-backups_redis-findpathto-2.md  product = include.product %}




3. If the result of previous step has a *.gz extension run following command to unzip it, unless go to next step.



{%include _inlines/AddOns/common/database-backups/code_database-backups_redis-gzipdpath.md  product = include.product %}




3. Use following command to stop Redis service : 



{%include _inlines/AddOns/common/database-backups/code_database-backups_redis-sudobluepill.md  product = include.product %}




4. Use following command to delete Redis data file




