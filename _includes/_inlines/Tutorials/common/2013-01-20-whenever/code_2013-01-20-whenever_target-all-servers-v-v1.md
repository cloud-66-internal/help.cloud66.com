<!-- usedin: [ _includes/_inlines/Tutorials/common/2013-01-20-whenever/2013-01-20-whenever_target-all-servers-v1.md] -->

```
env :PATH, ENV['PATH']

every 10.minutes do
  command "a_dummy_command"
end
every 45.minutes do
  command "a_dummy_command"
end
```
