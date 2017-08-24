---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1970-09-26-manage-backups/code_1970-09-26-manage-backups_unzip-your-backup-tarxvf.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1970-09-26-manage-backups/code_1970-09-26-manage-backups_unzip-your-backup-catfiletar.html" ]
 usedin: [ _legacy_docker/Tutorials/1970-09-26-manage-backups.md, _maestro/Tutorials/1970-09-26-manage-backups.md, _node/tutorials/1970-09-26-manage-backups.md, _rails/Tutorials/1970-09-26-manage-backups.md] -->


## Unzip your backup
Now that you have downloaded your backup, you can go ahead and unzip it with the following command:



{%include _inlines/Tutorials/common/1970-09-26-manage-backups/code_1970-09-26-manage-backups_unzip-your-backup-tarxvf.md %}




The `-C` option allows you to choose which folder to extract the files to.

If your backup is greater than 250 MB, Cloud 66 will divide it into separate files. In this case, you have to concatenate the parts into a single file before using the command above (unless you are using the Cloud 66 toolbelt).

For example, if we had three files called
file.tar-aa, file.tar-ab and file.tar-ac, we would use the following command: 



{%include _inlines/Tutorials/common/1970-09-26-manage-backups/code_1970-09-26-manage-backups_unzip-your-backup-catfiletar.md %}




This will result in a file called file.tar, which we can now unzip using the command above.

