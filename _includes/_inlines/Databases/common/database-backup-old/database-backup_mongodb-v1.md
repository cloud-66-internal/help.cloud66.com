<!--  post: -->


#### MongoDB

1. Run following command to see if there is database folder in unarchived folder (Replace YOUR_DATABASE_NAME with correct value): 



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-findpathto-v1.md  product = include.product %}




If the command return a result, that is data directory we want to restore. Go to final step.

2. Run following command to flatten the folder



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-findpathto-2-v1.md  product = include.product %}




3. Run following command to find the data file



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-findpathto-2-3-v1.md  product = include.product %}




If the result of command  has a *.gz extension go to 3.1 unless use 3.2

3.1



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-tarxvfpat-v1.md  product = include.product %}




3.2



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-tarxvfpat-2-v1.md  product = include.product %}




4. Run following command to clean the unzipped folder (Replace YOUR_DATABASE_NAME with correct value) :



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-rmrfpath-v1.md  product = include.product %}




5. Run following command to restore MongoDB. 
If the step 1 has a result use that as /path/to/database/back unless use /path/to/unarchived/folder . Also replace YOUR_DATABASE_NAME with correct value 



{%include _inlines/Databases/common/database-backup/code_database-backup_mongodb-mongorestore-v1.md  product = include.product %}




