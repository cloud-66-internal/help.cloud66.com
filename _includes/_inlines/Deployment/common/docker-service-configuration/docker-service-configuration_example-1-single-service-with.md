

### Example 1: Single service with MySQL database

In this example, we'll be running a service called _web_, which is pulled from a Quay repository and requires a MySQL database.

{% highlight yaml %}
services:
  web:
    image: quay.io/cloud66/sample-rails  
    command: rackup -p 3000             
    build_command: rake db:schema:load
    deploy_command: rake db:migrate
    log_folder: /usr/src/app/log
    ports: ["3000:80:443"]        
databases:
  - "mysql"                              
{% endhighlight %}

As you can see above, the _web_ service is based on a Quay image and requires the _rackup -p 3000_ startup command. It has both a build and a deploy command and specifies a logging folder. Finally, the container is set to listen on port 3000, and uses external ports 80 and 443.

