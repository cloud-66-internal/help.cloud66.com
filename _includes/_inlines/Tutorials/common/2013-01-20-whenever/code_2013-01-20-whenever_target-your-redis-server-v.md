
```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:redis] do
  command "a_dummy_command"
end
```
