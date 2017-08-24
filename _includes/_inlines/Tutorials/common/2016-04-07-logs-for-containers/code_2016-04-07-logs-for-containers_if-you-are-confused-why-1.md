
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
