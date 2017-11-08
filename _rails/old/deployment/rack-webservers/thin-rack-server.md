---
menuheaders: [ "About running apps with Thin", "Start the web server", "Stop the web server", "Restart the web server (hot-restart)", "Deploy with Thin", "Important" ]
layout: post
template: one-col
title: Thin Rack Server
categories: Deployment
lead: ""
legacy: false
recommendedName: [ "Nginx" ]
recommendedLinks: ["https://help.cloud66.com/rails/deployment/nginx.html"]
permalink: /:collection/:path
---


## About running apps with Thin

[Thin](http://code.macournoyer.com/thin/) is a Ruby web server that can handle high levels of concurrency. Cloud 66 uses the following signals to control Thin:


### Start the web server

	sudo bluepill cloud66_web_server quit
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill


### Stop the web server

	sudo bluepill cloud66_web_server stop


### Restart the web server (hot-restart)

	sudo bluepill cloud66_web_server restart
	kill -USR2 <pid>


## Deploy with Thin

You need to choose your web server at the time of the initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

```
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV -d
```

Please take note that Thin is running in Daemon mode with the `-d` parameter.



## Important

Your web server is not automatically restarted during redeployment. If you would like for it to restart automatically, you can accomplish this using a [deploy hook](#).


