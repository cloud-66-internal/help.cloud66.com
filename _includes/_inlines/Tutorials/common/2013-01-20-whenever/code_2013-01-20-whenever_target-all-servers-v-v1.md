

```
env :PATH, ENV['PATH']

every 10.minutes do
  command "a_dummy_command"
end
every 45.minutes do
  command "a_dummy_command"
end
```
