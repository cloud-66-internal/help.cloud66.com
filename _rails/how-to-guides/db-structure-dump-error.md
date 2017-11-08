---
menuheaders: [ "The basics", "The Resolution", "Important" ]
layout: post
template: one-col
title: Errors during deployment around database dumping
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## The basics
When *rake db:migrate*, or *rake db:structure:load* is executed as part of your deployment, your structure.sql/migrations are executed against your database.
(note: your structure.sql may contain migrations to execute)

If migrations are executed then rails will try and execute the below in an attempt to ensure that the structure.sql is kept up to date.



```
$ rake db:structure:dump
```



However, as your deployment on Cloud 66 is an endpoint (ie. you are not commiting changes from your Cloud 66 server back to your repository), this is a completely unnecessary step. The structure.sql file that is generated on your webserver will never be commited back to your repository.

The error can occur when structure dump is executed but your web-server may not have the dump tools locally required to execute the dump task. This occurs mainly when your database server is located externally (or on another physical server)






## The Resolution

Adding the following line to your application's *Rakefile* will stop the structure dump from occuring when performing the Cloud 66 deployment:





```
Rake::Task["db:structure:dump"].clear if ENV['STACK_PATH']
```













### Important

By relying on the $STACK_PATH condition means this is safe to apply in your own environments as long as you don't have the same environment variable set. If that isn't the case, you can always use the opposite of the condition to apply the change only if your own environment variable is NOT present.




