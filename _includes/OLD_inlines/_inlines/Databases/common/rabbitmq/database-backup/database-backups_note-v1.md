


## Note

Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.


{%include _inlines/Databases/common/database-backup/code_database-backups_note-sudormrf-2-3-v1.md  product = include.product %}




5\. Use following command to copy new data file 



{%include _inlines/Databases/common/database-backup/code_database-backups_note-sudocpap-2-v1.md  product = include.product %}




6\. Run following command to fix the permission of Redis data directory :



{%include _inlines/Databases/common/database-backup/code_database-backups_note-sudochown-2-3-v1.md  product = include.product %}




7\. Run following command to start Redis service



{%include _inlines/Databases/common/database-backup/code_database-backups_note-sudobluepill-v1.md  product = include.product %}




