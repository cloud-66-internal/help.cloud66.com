---
menuheaders: [ "Note" ]
layout: post
template: one-col
title: Setting up custom LiveLog files
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


### Note

Server log file paths changes are calculated after each deployment, so if you change your logs in your manifest, be sure to redeploy in order to see them on the LiveLogs page.

You can also have multiple custom log files defined for different server roles; for instance see the example below to add custom log files to all Docker servers with different custom log files for all MySQL servers (on the same stack):

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

