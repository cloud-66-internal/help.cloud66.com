<!-- usedin: [ _legacy_docker/Databases] - post: -->


## Configure a MongoDB replica set

When you select to scale up your MongoDB backend with Cloud 66, we perform the following steps:

- Backup your database
- Create two more servers in your cloud (MongoDB replica sets require an odd number of servers)
- Deploy and configure MongoDB on the new servers
- Restore the backup on the new servers
- Configure all MongoDB instances in the stack to act as a single replica set
- Generate appropriate environment variables with the addresses of the replica set servers

It is important for backups to keep their referential integrity, otherwise different parts of the database might be backed up at different times, affecting database performance.

**Note**

The process of database replication will disrupt your database serving your application for the duration of scaling up and scaling down.

This interruption is during the backup and configuration steps of the scaling and not during the long process of firing up and building the servers


