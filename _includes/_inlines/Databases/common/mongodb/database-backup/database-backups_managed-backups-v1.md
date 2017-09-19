<!-- usedin: [ _legacy_docker/Databases/database-backup-v1.md, _maestro/Databases/database-backup-v1.md, _node/Databases/database-backup-v1.md, _rails/databases/database-backup-v1.md] -->


### Managed backups

Having managed backups carries several benefits:

- You can download database backups through the web UI and API
- [Backup verifiers](http://help.cloud66.com/rails/databases/{{ include.dbtype }}/backup-verifier.html) ensure that your backups actually contain what you expect
- Use [database replication](http://help.cloud66.com/rails/databases/{{ include.dbtype }}/replication.html) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.

