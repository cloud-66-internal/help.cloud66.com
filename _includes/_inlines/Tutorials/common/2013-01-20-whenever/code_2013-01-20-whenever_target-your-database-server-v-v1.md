

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:db] do
  command "a_dummy_command"
end
```
