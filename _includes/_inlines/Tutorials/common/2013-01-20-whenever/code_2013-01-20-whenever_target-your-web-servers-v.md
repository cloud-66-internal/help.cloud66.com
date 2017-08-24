<!-- usedin: [ _includes/_inlines/Tutorials/common/2013-01-20-whenever/2013-01-20-whenever_target-your-web-servers.md] -->

```
env :PATH, ENV['PATH']

every 10.minutes, :roles => [:app] do
  rake "test:example"
end
```
