

## Overview

To add a job, simply click on the _+_ button on the add-ins menu of your application page.
Your run results (success, failure and any output) can be seen in real-time on the job detail page.

## Run a job
You can set the timing of the job in either minutes, hours, a daily, weekly and monthly time, as well as on demand (under the hood, scheduled jobs are run as cronjobs on your server).

## Variety of jobs
There are a variety of jobs for your application.


{% if page.collection == 'maestro' %} 
* [Docker tasks](/maestro/how-to-guides/add-ins/docker-tasks.html)
{% endif %}{% if page.collection == 'legacy_docker' %}
* [Docker server task](/{{page.collection}}/how-to-guides/add-ins/docker-server-task.html)
* [Docker service task](/{{page.collection}}/how-to-guides/add-ins/docker-service-task.html){% endif %}   
* [Shell command](/{{page.collection}}/how-to-guides/add-ins/shell.html)
{% if page.collection == 'rails' %}
* [Rake task](/rails/how-to-guides/add-ins/rake-task.html)
{% endif %}


## Using parameters

When you are running a job on demand via dashboard or [toolbelt]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#job-management), you can pass parameters if you used in your command.

### Notation
Jobs use a facility in the shell called <i>positional parameters</i>. Positional parameters are a series of special variables ($1, $2 ... $n) that contain the contents of the command line. Where <strong>n</strong> is greater than 9 using braces. For example, to refer to the 15th positional parameter, use the notation `${15}`. 
 
<pre class="prettyprint">
cp $1 $2
ls $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}
</pre>

### Default values
You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default

<pre class="prettyprint">
cp $1 ${2:-/tmp}
</pre>

### Pass parameters to job

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value.

<pre class="prettyprint">
job command: cp $1 ${2:-/tmp}
passing arguments in dashboard: "log*.txt" tmp/logs
passing arguments in toolbelt: --arg "log*.txt" -- arg tmp/logs
</pre>
