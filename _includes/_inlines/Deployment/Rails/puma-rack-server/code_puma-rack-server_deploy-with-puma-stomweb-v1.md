<!-- usedin: [ _includes/_inlines/Deployment/Rails/puma-rack-server/puma-rack-server_deploy-with-puma-v1.md] -->

```
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid -d
```
