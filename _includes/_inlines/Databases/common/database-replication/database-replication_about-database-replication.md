

## About database replication

Database replication involves configuring a master and slave database architecture, whereby the slave is an exact replica of the master at all times. This feature is supported for MySQL, PostgreSQL, Redis and MongoDB databases.

Database replication can be set up for a single stack, or between stacks, with various benefits:


**Single stack**

- Improved read performance: The slave server only allows reads and is ideal for use with reporting tools, and any database backups are taken from the slave rather than the master.
- Improved application reliability: Having a second server with your data, in case of hardware issues (reducing a single point of failure).

**Between stacks**

- Improved redundancy: Allows you to have a failover stack in a different region.
- Data migration: Makes it easy to migrate your stack with minimal downtime.

Note that replication between stacks is not supported for MongoDB.