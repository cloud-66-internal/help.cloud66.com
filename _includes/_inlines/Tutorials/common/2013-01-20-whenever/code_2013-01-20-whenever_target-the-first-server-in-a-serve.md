<!-- usedin: [ _includes/_inlines/Tutorials/common/2013-01-20-whenever] - layout:code post: 2013-01-20-whenever_target-the-first-server-in-a-server-gro -->

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
