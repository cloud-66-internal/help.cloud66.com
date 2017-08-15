---
layout: code
---

production:   
    docker:
        configuration:
            custom_log_files: ["/tmp/dockerlogs/*/*.log"]
    mysql:                    
        configuration:
            custom_log_files:
            - "/another_mysql_dump_log/*.log"
            - "/var/log/mysql/error.log"
