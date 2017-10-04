<!-- usedin: [ _legacy_docker/Databases/database-replication-v1.md, _maestro/Databases/database-replication-v1.md, _node/Databases/database-replication-v1.md, _rails/databases/database-replication-v1.md] -->


## Create slave database

To add a slave database server you need to follow the below steps. To add multiple you need to scale up one by one.

1.   Set up a managed backup via [add-ins](https://help.cloud66.com/{{ include.product }}/addins/add-in-implementation.html) if you don't have any.
2.   Go on your stack page, database servers page (eg. _PostgreSQL Servers_)
3.   On the right sidebar click on _SCALEUP DATABASE_ (the button will not be shown if you have not set up database backups)

