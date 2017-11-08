---
layout: post
template: one-col
title: Managing Logs For Containers
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


{% assign product = "common" %}





If you are confused why you can see your logs in [livelogs](http://help.cloud66.com/managing-your-stack/live-logs) but not under `/var/log/containers/` even after introducing `log_folder` or if you need to work with your logs this article is for you.

In the livelogs you can see the `stdout` and the content of `/log` folder of your container by default, so if you cannot see anything under `/log` and still there are logs being shown in livelogs it means the logs are coming from the container's stdout.

This sample will run an app in a container and by default the folder `/log` and the `stdout` will be piped to Docker default Json log file.





```
services:
  SERVICE_NAME:
    image: quay.io/cloud66/sample-rails  
    command: rackup -p 3000             
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    ports: 
    - container: 3000
      http: 80
      https: 443       
databases:
  - "mysq
```





If your app shows its log in the `stdout` and you need to have a more centeralised log file you can do this:

1. Change the command from: `command: rackup -p 3000`

   	to:  `command: rackup -p 3000 > /PATH_TO_LOG_FOLDER/LOG_FILE`

   	which will pipe the stdout to your specified log file.

2. Add this to your service: 

		log_folder: /PATH_TO_LOG_FOLDER

	So your service.yml will look like this:


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


3\. Now after you start the service you can ssh to the server/host and have a look at `/var/log/containers/SERVICE_NAME/`

You should see the `LOG_FILE` is listed.


