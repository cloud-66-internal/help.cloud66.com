


## How it works

When you start replicating your database, the Cloud 66 will commence the following process:

1.  We take a full backup of the master database server in your source stack

*   Single stack: we create a secondary database server in your cloud and restore your backup on it
*   Between stacks: we restore your backup on the secondary database server
2.  The secondary database is configured to be a slave of the source database
3.  The source database is configured to be a master of the secondary database
4.  The relevant environment variables are updated for use in your code and scripts

Similarly, when you disable replication, the following steps are initiated:

*   We disable replication on your master database, and configure it to be a standalone database server
*   The secondary database server is removed as a slave from the master database server on the source
*   The source database server is configured as a standalone database server
*   The relevant environment variables are updated for use in your code and scripts

