<!-- usedin: [ _includes/_inlines/Tutorials/common/2013-01-20-whenever/2013-01-20-whenever_target-your-redis-server.md] -->

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:redis] do
  command "a_dummy_command"
end
```
