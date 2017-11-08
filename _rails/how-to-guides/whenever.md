---
menuheaders: [ "Note", "Target all servers", "Target your web server(s)", "Target your database server", "Target your Redis server", "Target the first server in a server group", "Note" ]
layout: post
template: one-col
title: Whenever
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---


## Note

Whenever jobs will be run on all your app servers by default - but you can also be more specific about where they should run.


### Target all servers

```
env :PATH, ENV['PATH']

every 10.minutes do
  command "a_dummy_command"
end
every 45.minutes do
  command "a_dummy_command"
end
```




### Target your web server(s)

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:app] do
  rake "test:example"
end
```




### Target your database server

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:db] do
  command "a_dummy_command"
end
```




### Target your Redis server

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:redis] do
  command "a_dummy_command"
end
```




### Target the first server in a server group

```
env :PATH, ENV['PATH']

def primary_runner(command)
  runner("if ENV['PRIMARY'] == 'true'; #{command}; end")
end

every 15.minutes, roles: [:app] do
  primary_runner 'MyClass.some_job' # runs on primary app server only
  runner 'MyClass.another_job' # runs on all app servers
end
```

This will only run _MyClass.some_job_ on your primary app server, and _MyClass.another_job_ on all app servers. It checks whether or not each server
has the _PRIMARY_ environment variable set to true.



## Note

You should include the line **env :PATH, ENV['PATH']** at the top of your _config/schedule.rb_ file to avoid command not found errors.

 
You can view your generated crontab jobs with:

```
crontab -l
```

