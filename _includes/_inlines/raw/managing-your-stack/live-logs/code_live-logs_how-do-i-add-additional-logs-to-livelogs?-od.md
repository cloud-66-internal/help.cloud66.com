<!-- post: live-logs_how-do-i-add-additional-logs-to-livelogs? -->


production:    
    docker:
        configuration:
            custom_log_files: ["/tmp/dockerlogs/*/*.log"]
    mysql:                     
        configuration:
            custom_log_files: 
            - "/another_mysql_dump_log/*.log"
            - "/var/log/mysql/error.log"
