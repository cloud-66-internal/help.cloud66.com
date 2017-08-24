---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-tarxvfpat.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-tarxvfpat-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-rmrfpath.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Databases/common/database-backup/code_database-backups_mongodb-mongorestore.html" ]
 usedin: [ _legacy_docker/Databases/database-backup.md, _maestro/Databases/database-backup.md, _node/Databases/database-backup.md, _rails/databases/database-backup.md] -->


#### MongoDB

1. Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value): 



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto.md %}




If the command return a result, that is data directory we want to restore. Go to final step.

2. Run following command to flatten the folder



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto-2.md %}




3. Run following command to find the data file



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-findpathto-2-3.md %}




If the result of command  has a *.gz extension go to 3.1 unless use 3.2

3.1



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-tarxvfpat.md %}




3.2



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-tarxvfpat-2.md %}




4. Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-rmrfpath.md %}




5. Run following command to restore MongoDB. 
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value 



{%include _inlines/Databases/common/database-backup/code_database-backups_mongodb-mongorestore.md %}




