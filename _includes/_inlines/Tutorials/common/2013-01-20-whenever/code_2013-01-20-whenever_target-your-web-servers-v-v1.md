

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:app] do
  rake "test:example"
end
```
