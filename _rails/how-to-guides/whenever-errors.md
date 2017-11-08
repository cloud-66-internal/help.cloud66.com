---
menuheaders: [ "Problem", "Resolution" ]
layout: post
template: one-col
title: Whenever cron errors
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## Problem
The Whenever Schedules cause schedules to execute within a crontab context, however the context doesn't have access to the full PATH.
You may see output from your cron jobs that looks similar to:



```
/bin/bash: bundle: command not found
```







## Resolution
Simply add the following line to the top of your *config/schedule.rb* file (then commit it, push it and redeploy your stack):





```
env :PATH, ENV['PATH']
```





