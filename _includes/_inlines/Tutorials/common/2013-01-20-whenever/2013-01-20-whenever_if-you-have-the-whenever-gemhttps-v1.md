<!-- usedin: [ _rails/Tutorials/2013-01-20-whenever-v1.md] -->


If you have the [whenever gem](https://github.com/javan/whenever) in your Gemfile (and have a corresponding schedule defined in _config/schedule.rb_) then Cloud 66 will automatically setup your desired whenever schedules as crontab jobs on the appropriate servers.

Should you wish to remove these jobs, simply remove the schedule file or gem and redeploy. You can target specific servers by using roles in your _config/schedule.rb_ definition.

Instead of using whenever jobs, you may find it more beneficial to use [scheduled rake tasks](http://help.cloud66.com/stack-add-ins/rake-task). There are a number of benefits with this approach:

1.  See your jobs (and run history) via the UI, and run them on demand
2.  You can modify their scheduling via the UI
3.  You can get alerts if your job fails

Depending on whether you're running your task as a runner, rake or command, you will need to reference environment variables differently. For example, if using a _command_, you'll need to reference your environment in bash syntax, eg. `$STACK_PATH`.

