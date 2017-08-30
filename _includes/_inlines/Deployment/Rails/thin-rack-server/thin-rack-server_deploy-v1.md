<!-- usedin: [ _rails/deployment/thin-rack-server-v1.md] -->


## Deploy with Thin

You need to choose your web server at the time of the initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

```
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV -d
```

Please take note that Thin is running in Daemon mode with the `-d` parameter.




