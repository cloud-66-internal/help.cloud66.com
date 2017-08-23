<!-- layout:code post: 2016-04-07-logs-for-containers_if-you-are-confused-why-you- -->

```
services:
  SERVICE_NAME:
    image: quay.io/cloud66/sample-rails  
    command: "/bin/sh -c 'rackup -p 3000 > /PATH_TO_LOG_FOLDER/LOG_FILE 2>&1'"
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    - container: 3000
      http: 80
      https: 443       
    log_folder: /PATH_TO_LOG_FOLDER
databases:
  - "mysql"
```
