---
layout: post
template: one-col
title: Running Rake Tasks
categories: how-to-guides/deployment
lead: ""
legacy: false
tags: ["debugging"]

permalink: /:collection/:path
---


### Introduction
You can choose to run your rake tasks automatically or manually. Running them automatically involves either scheduling them by using the rake task add-on or by using deploy hooks. Alternatively, you can run them manually on your server. This guide will walk you through each of these.


### Scheduled
Read more about the [rake task add-in](http://help.cloud66.com/stack-add-ins/rake-task) in the documentation.


### Deployment hooks

You can use [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to execute your rake task at any point of your deployment.

Simply add a bash script to your stack that contains the rake task: for example, create the file `/.cloud66/scripts/rake_task.sh` as below:

```
#!/bin/bash
cd $STACK_PATH
bundle exec rake your:task
```

Then, add a deploy_hook to execute the above script on each deploy: create the file `.cloud66/deploy_hooks.yml` as below:

```
production:
  after_rails:
    - source: /.cloud66/scripts/rake_task.sh
      destination: /tmp/rake_task.sh
      target: rails
      execute: true
      run_on: all_servers
      apply_during: all
      sudo: true
```




## Manually
This is done by starting a [terminal connection to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and executing your rake task.

```
$ cd $STACK_PATH
$ bundle exec rake your:task
```

