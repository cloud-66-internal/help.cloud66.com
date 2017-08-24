<!-- usedin: [ _includes/_inlines/Tutorials/common/2015-07-08-Setting-up-custom-livelogs/2015-07-08-setting-up-custom-livelogs_note.md] -->

```
production:   
    docker:
        configuration:
            custom_log_files: ["/tmp/dockerlogs/*/*.log"]
    mysql:                    
        configuration:
            custom_log_files:
            - "/another_mysql_dump_log/*.log"
            - "/var/log/mysql/error.log"
```
