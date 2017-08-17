<!-- layout:code post: puma-rack-server_deploy-with-puma -->

```

custom&#95;web: bundle exec puma -e $RACK&#95;ENV -b unix:///tmp/web&#95;server.sock --pidfile /tmp/web&#95;server.pid -d

```
