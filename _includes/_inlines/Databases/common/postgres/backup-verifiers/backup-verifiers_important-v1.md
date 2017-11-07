<!--  usedin: [ _legacy_docker/Databases/backup-verifiers-v1.md, _maestro/Databases/backup-verifiers-v1.md, _node/Databases/backup-verifiers-v1.md, _rails/databases/backup-verifiers-v1.md] -->


### Important

Your backup will be assumed to be **verified** if the value returned from the query is **true**.




**MySQL**

This query will count the number of records in the *users* table, and returns a 1 if that number is not zero.



{%include _inlines/Databases/common/backup-verifiers/code_backup-verifiers_important-lectcount-v1.md  product = include.product %}




The result of this query may be the following, indicating that your *users* table holds data.



{%include _inlines/Databases/common/backup-verifiers/code_backup-verifiers_important-sult-v1.md  product = include.product %}


### PostgreSQL

Similarly, this query also counts the number of records in the users table, and returns a boolean of true if that number is not zero.

{%include _inlines/Databases/common/backup-verifiers/code_backup-verifiers_important-lectcount-v1.md  product = include.product %}

The result of this query may be the following, indicating that your users table holds data.

{%include _inlines/Databases/common/backup-verifiers/code_backup-verifiers_important-sultB-v1.md  product = include.product %}
