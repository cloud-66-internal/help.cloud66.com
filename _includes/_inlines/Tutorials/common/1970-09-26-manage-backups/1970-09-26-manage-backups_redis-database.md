<!--  usedin: [ _legacy_docker/Tutorials/1970-09-26-manage-backups.md, _maestro/Tutorials/1970-09-26-manage-backups.md, _node/tutorials/1970-09-26-manage-backups.md, _rails/Tutorials/1970-09-26-manage-backups.md] -->


### Redis database
Ensure that Redis is not running before restoring your backups and use the appropriate method to stop it before proceeding.

Redis data are simply represented by a single `dump.rdb` file. You just have to copy this file into the right folder using your command-line interface:



{%include _inlines/Tutorials/common/1970-09-26-manage-backups/code_1970-09-26-manage-backups_redis-database-sudormrf.md %}



