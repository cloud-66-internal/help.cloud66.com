<!-- layout:code post: 2013-01-20-whenever_target-all-servers -->

```
env :PATH, ENV['PATH']

every 10.minutes do
  command "a_dummy_command"
end
every 45.minutes do
  command "a_dummy_command"
end
```
