---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backup_note-sudormrf-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backup_note-sudocpap-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backup_note-sudochown-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backup_note-sudobluepill.html" ]
 post: -->


### Note

Please take a backup from Redis data file before deleting it to be able to restore if something goes wrong.






{%include _inlines/Databases/common/database-backup/code_database-backup_note-sudormrf-2-3.md %}




5. Use following command to copy new data file 



{%include _inlines/Databases/common/database-backup/code_database-backup_note-sudocpap-2.md %}




6. Run following command to fix the permission of Redis data directory :



{%include _inlines/Databases/common/database-backup/code_database-backup_note-sudochown-2-3.md %}




7. Run following command to start Redis service



{%include _inlines/Databases/common/database-backup/code_database-backup_note-sudobluepill.md %}




