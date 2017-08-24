<!-- usedin: [ _legacy_docker/Databases/database-backup.md, _maestro/Databases/database-backup.md, _node/Databases/database-backup.md, _rails/databases/database-backup.md] -->


### Restore backup

You can restore a backup through Cloud66 dashboard backup page. There is a **restore button** for each backup that will download the backup on your server and restore it.  

In this section we are going to describe the steps you need to follow if you want to manually restore your backup. 
After you downloaded a backup you will need to follow couple of steps base on your database type to restore it. 
First step is to **untar**  downloaded backup (Unless you are using download script which will untar the result automatically)



{%include _inlines/Databases/common/database-backup/code_database-backups_restore-backup-tarxvf.md %}




The -C option allows you to choose which folder to extract the files to.

After you have an unarchived version of your backup ready in a folder you should follow some steps base on your database type.

