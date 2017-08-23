<!-- layout:code post: 2016-01-21-docker-dependency_if-you-have-a-docker-stack-but -->

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
