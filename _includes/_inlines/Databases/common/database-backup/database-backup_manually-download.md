<!-- post: -->


#### Manually download

In download backup page (Cloud66 dashboard), you have this option to manually download backups. By clicking on **Manually download backups** you will see some signed(time bound) generated link(s) for your backup (Or its part if it is greater than 350MB). 
You can use **curl** to download it : 



{%include _inlines/Databases/common/database-backup/code_database-backup_manually-download-curlo.md %}




**Example**


{%include _inlines/Databases/common/database-backup/code_database-backup_manually-download-curlomysq.md %}




You need to concatenate different parts if you have a multipart backup in order to be able to use it. As an example if your backup contains four parts called mysql.tar.aa, mysql.tar.ab, mysql.tar.ac, mysql.tar.ad you can use bellow command for concatenation after downloading them :    


{%include _inlines/Databases/common/database-backup/code_database-backup_manually-download-catmysqltar.md %}




