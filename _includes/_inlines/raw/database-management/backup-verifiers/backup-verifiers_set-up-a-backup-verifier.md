---
post: 
---

## Set up a backup verifier

Create a file in the `.cloud66` folder in the root of your repository. To verify your backups across all environments, name the file `backup_verifier_mysql.sql` for MySQL, and `backup_verifier_pg.sql` for PostgreSQL backups. You can also specify which environment to run backup verifiers for by appending the environment to the filename. For example, `backup_verifier_mysql_production.sql` or `backup_verifier_pg_staging.sql`.




