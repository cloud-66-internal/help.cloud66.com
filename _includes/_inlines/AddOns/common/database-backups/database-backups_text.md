<!-- usedin: [ _legacy_docker/AddOns] - post: -->


#### Text

For this format we are generating a dump file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump.
As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version but restore process will be much longer than **binary** specially if you have lots of indexes in your database.
These are other benefits of this type of backup : 

- You can restore this backup when server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load

