<!-- post: 2016-04-07-logs-for-containers_if-you-are-confused-why-you- -->


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
  - "mysql" 
  