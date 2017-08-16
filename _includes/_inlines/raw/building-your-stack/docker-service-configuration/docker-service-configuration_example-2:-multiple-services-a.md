---
post: 
---

### Example 2: Multiple services and databases

In this example, we'll be running two services - one for _web_ and the other for an _api_, as well as MySQL and Redis databases. You can define as many services as you need. The first time you build your stack, those services will be started on the first server you build but you can use the UI, toolbelt or the API to move them around.

{% highlight yaml %}
services:
  web:
    git_url: git@github.com:pkallberg/node-js-app.git
    git_branch: test   
    command: rackup -p 3000               
    build_command: rake db:migrate        
    deploy_command: rake db:migrate       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]     
    health: default
  api:
    image: quay.io/john/node              
    command: node test.js                 
    ports: ["1337:8080"]                  
    requires: ["web"]                     
databases:
  - "mysql"                               
  - "redis"                               
{% endhighlight %}

As you can see above, we are running a _web_ and _api_ service with different configurations. They are running on MySQL and Redis databases.

