---
layout: post
template: one-col
title:  "Using the Application Jobs Add-in"
categories: how-to-guides/add-ins
order: 3
lead: Schedule automated tasks against your Maestro services
tags: ['Add in']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

The Application Jobs add-in allows you to define and schedule regular tasks (shell commands) that will run against your Maestro application's **services** (i.e inside your containers). Commands run using the `sh` shell by default. Each time an application job runs, it starts a new container from the service, executes the task and then destroys the container. 

If you need to run a job on the underlying server, rather than the service, you should use the [Server Job add-in](/maestro/how-to-guides/add-ins/shell.html) instead.

## Adding a new application job

To add a new application job: 

1. Click the *+* button on the add-ins panel of your Application Overview
2. Click the Install Now button on the Application Jobs add-in block. 
3. Choose a service and give your new job a name
4. Specify the shell command you want to run
5. Set a schedule for the job, or set it to run only on demand. (You can use [cron syntax](/{{page.collection}}/references/understanding-cron-syntax.html) for more control over your scheduling) 
6. Clicks the green Create Job button

You will now see your new job listed in your Application Overview.  You can edit it, or run it on demand by clicking on the small downward arrow. Your run results (success, failure and any output) can be seen in real-time on the job detail page. 

## Using parameters

When you are running a job on demand via dashboard or [toolbelt]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#job-management), you can pass it parameters (if it is written to accept them).

### Notation

Jobs use a facility in the shell called *positional parameters*. Positional parameters are a series of special variables ($1, $2 ... $n) that contain the contents of the command line. Where **n** is greater than 9 using braces. For example, to refer to the 15th positional parameter, use the notation `${15}`.

```bash
cp $1 $2
ls $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}

```

### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default

```bash
cp $1 ${2:-/tmp}
```

### Passing parameters to a job

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value.

#### Example
<table class='table table-bordered table-striped'>
<tbody>
<tr><td width="35%">Job command</td> <td><code>cp $1 ${2:-/tmp}</code></td></tr>
<tr><td>Passing arguments via dashboard</td><td><code>"log*.txt" tmp/logs</code></td></tr>
<tr><td>Passing arguments via Toolbelt</td><td><code>--arg "log*.txt" -- arg tmp/logs</code></td></tr>
</tbody>
</table>