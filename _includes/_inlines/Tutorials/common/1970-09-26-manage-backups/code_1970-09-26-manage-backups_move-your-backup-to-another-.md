<!-- layout:code post: 1970-09-26-manage-backups_move-your-backup-to-another-serve -->

```
$ scp  -i <identity_file> database_dump.sql <remote_server_user>@<remote_server_address>:/tmp
```
