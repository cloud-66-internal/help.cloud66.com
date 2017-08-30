<!-- usedin: [ _includes/_inlines/StackManagement/common/live-logs/live-logs_how-do-i-add-additional-logs-to-livelogs-v1.md] -->

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
