---
layout: post
template: one-col
title: Service Dependency
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


{% assign product = "common" %}





If you have a docker stack but your services don't follow the dependencies you've defined, this article is probably for you.

Imagine you have two services (I've used two for simplicity) called `web` and `api`; `web` needs `api` to be up before it starts up. Although, you've defined all the dependencies (Note the `requires` line under `web` service), you are still not getting the result you need (`web` doesn't start after `api`).





```
 services:
  web:
    git_url: giturl.git
    git_branch: git branch   
    command: STARTUP COMMAND               
    build_command: BUILD COMMAND        
    deploy_command: DEPLOY COMMAND       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]
    requires: ["api"]     
  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                                       
databases:
  - "DATABASE_NAME"
```





  What happens here is that all the services are put in a queue based on the logic of your service.yml (`api` first and `web` second in this case). Cloud 66 fires up the first one/s (`api`) and then moves on to the next one/s (`web`). Now imagine service `api` would take a long time to start but `web` starts quickly. As Cloud 66 doesn't know how long to wait to move on to the next service, this may end up having service `web` started while service `api` is still starting!

  Cloud 66 has introduced a mechanism called [health check](https://help.cloud66.works/{{ include.product }}/stack-management/service-lifecycle-management.html) to prevent such matters. This means, it waits for the container to pass the health check and make sure the service is up, and then move to the next stage (starting `web`). So your service file would look something like the below (Note the health lines for `api` service):





```
  services:
  web:
    git_url: giturl.git
    git_branch: git branch   
    command: STARTUP COMMAND               
    build_command: BUILD COMMAND        
    deploy_command: DEPLOY COMMAND       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]
    requires: ["api"]
  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                  
    health:                    
          type: inbound        #defaults to inbound
          endpoint: "/healthy" #defaults to /
          protocol: "http"     #defaults to HTTP
          timeout: "45s"       #defaults to 30s
          accept: ["200"]      #defaults to 200 and 300-399                    
databases:
  - "DATABASE_NAME"
```






