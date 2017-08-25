<!--  usedin: [ _rails/Tutorials/2017-08-21-whenever-errors.md] -->


## Problem
The Whenever Schedules cause schedules to execute within a crontab context, however the context doesn't have access to the full PATH.
You may see output from your cron jobs that looks similar to:

{%include _inlines/Tutorials/common/2040-09-26-whenever-errors/code_2040-09-26-whenever-errors_problem-inbashbund.md %}

