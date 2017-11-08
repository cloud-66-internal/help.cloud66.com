---
menuheaders: [ "Overview", "Run a job", "Variety of jobs", "Using parameters", "Notation", "Default values", "Pass parameters to job" ]
layout: post
template: one-col
title: Jobs
categories: addins
lead: ""
legacy: false
recommendedName: [ "Add a shell command", "Rake Tasks" ]
recommendedLinks: [ "shell.html", "rake-task.html" ]
permalink: /:collection/:path
---






## Overview

To add a job, simply click on the _+_ button on the add-ins menu of your stack page.
Your run results (success, failure and any output) can be seen in real-time on the job detail page.






## Run a job

You can set the timing of the job in either minutes, hours, a daily, weekly and monthly time, as well as on demand (under the hood, scheduled jobs are run as cronjobs on your server).






## Variety of jobs

There are a variety of jobs for your stack.

{% if include.product == "rails" %}
*   [Shell command](https://help.cloud66.works/{{ include.product }}/addins/jobs/shell.html)
*   [Rake task](https://help.cloud66.works/{{ include.product }}/addins/jobs/rake-task.html)
{% else %}
*   [Docker server task](https://help.cloud66.works/{{ include.product }}/addins/jobs/docker-server-task.html)
*   [Docker service task](https://help.cloud66.works/{{ include.product }}/addins/jobs/docker-service-task.html)
{% endif %}





## Using parameters

When you are running a job on demand via dashboard or [toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/jobs.html), you can pass parameters if you used in your command.





### Notation

Jobs use a facility in the shell called _positional parameters_. Positional parameters are a series of special variables ($1, $2 ... $n) that contain the contents of the command line. Where **n** is greater than 9 using braces. For example, to refer to the 15th positional parameter, use the notation `${15}`. 





```
cp $1 $2
ls $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}
```










### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default





```
cp $1 ${2:-/tmp}
```










### Pass parameters to job

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value.





```
job command: cp $1 ${2:-/tmp}
passing arguments in dashboard: "log*.txt" tmp/logs
passing arguments in toolbelt: --arg "log*.txt" -- arg tmp/logs
```





