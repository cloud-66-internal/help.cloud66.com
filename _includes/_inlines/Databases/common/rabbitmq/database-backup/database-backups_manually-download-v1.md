<!--  usedin: [ _legacy_docker/Databases/database-backup-v1.md, _maestro/Databases/database-backup-v1.md, _node/Databases/database-backup-v1.md, _rails/databases/database-backup-v1.md] -->


### Manually download

In download backup page (Cloud66 dashboard), you have this option to manually download backups. By clicking on **Manually download backups** you will see some signed(time bound) generated link(s) for your backup (Or its part if it is greater than 350MB). 
You can use **curl** to download it : 

{%include _inlines/Databases/common/database-backup/code_database-backups_manually-download-curlo-v1.md  product = include.product %}

**Example**

{%include _inlines/Databases/common/database-backup/code_database-backups_manually-download-curlomysq-v1.md  product = include.product %}

You need to concatenate different parts if you have a multipart backup in order to be able to use it. As an example if your backup contains four parts called mysql.tar.aa, mysql.tar.ab, mysql.tar.ac, mysql.tar.ad you can use bellow command for concatenation after downloading them :

{%include _inlines/Databases/common/database-backup/code_database-backups_manually-download-catmysqltar-v1.md  product = include.product %}
