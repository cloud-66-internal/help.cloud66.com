<!-- usedin: [ _legacy_docker/Databases/database-replication-v1.md, _maestro/Databases/database-replication-v1.md, _node/Databases/database-replication-v1.md, _rails/databases/database-replication-v1.md] -->


<div class="notice">

Important!

Database replication will disrupt the database serving your application during the replication configuration process. The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you scale your server.

</div>


