---
layout: post
template: one-col
title: Running Rake tasks
categories: how-to-guides/deployment
order: 5
lead: "Running Rake tasks on your Cloud 66 application"
legacy: false
tags: ["debugging"]

permalink: /:collection/:path:output_ext
---


## Introduction
You can choose to run your Rake tasks automatically or manually. Running them automatically involves either scheduling them by using the Rake task add-on or by using deploy hooks. Alternatively, you can run them manually on your server.


## Scheduling Rake tasks
Read more about the [rake task add-in](/rails/how-to-guides/add-ins/rake-task.html) in the documentation.


## Using deploy hooks

You can use [deploy hooks](/rails/tutorials/deploy-hooks.html) to execute your rake task at any point of your deployment.

Simply add a bash script to the application that contains the rake task. For example, create the file `/.cloud66/scripts/rake_task.sh` as below:

```shell
#!/bin/bash
cd $STACK_PATH
bundle exec rake your:task
```

Then add a deploy_hook to execute the above script on each deploy: create the file `.cloud66/deploy_hooks.yml` as below:

```yaml
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
This is done by starting a [terminal connection to your server](/rails/how-to-guides/common-tools/ssh.html) and executing your rake task.

```shell
$ cd $STACK_PATH
$ bundle exec rake your:task
```

