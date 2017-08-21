<!-- post: -->


#### Binary

For binary backups we are taking a snapshot of the data folder of your database service and applying needed logs to have a consistent data folder. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup. 
As this backup contains raw data of your database server(Instead of human readable SQL dump file) you can expect much faster backup/restore process, specially for large databases this method can be faster up to 4 times which can be very helpful in failover scenarios. But there are some limitation :

- You can not restore it on a server with different version
- You can not use it on slave servers
- You can not use it on servers which their data folder is symlinked to other locations
- You can not use it on encrypted databases 
- You need to shutdown the database service during the restore 

