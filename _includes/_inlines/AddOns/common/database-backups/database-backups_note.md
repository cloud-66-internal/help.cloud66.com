<!-- usedin: [ _legacy_docker/AddOns/database-backups.md, _maestro/AddOns/database-backups.md, _node/addons/database-backups.md, _rails/AddOns/database-backups.md] -->


### Note

Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.






{%include _inlines/AddOns/common/database-backups/code_database-backups_note-sudormrf-2-3.md %}




5. Use following command to copy new data file 



{%include _inlines/AddOns/common/database-backups/code_database-backups_note-sudocpap-2.md %}




6. Run following command to fix the permission of Redis data directory :



{%include _inlines/AddOns/common/database-backups/code_database-backups_note-sudochown-2-3.md %}




7. Run following command to start Redis service



{%include _inlines/AddOns/common/database-backups/code_database-backups_note-sudobluepill.md %}




