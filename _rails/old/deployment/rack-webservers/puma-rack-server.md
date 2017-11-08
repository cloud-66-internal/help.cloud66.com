---
menuheaders: [ "About running apps with Puma", "Start the web server", "Stop the web server", "Restart the web server (hot-restart)", "Deploy with Puma", "Warning" ]
layout: post
template: one-col
title: Puma Rack Server
categories: Deployment
lead: ""
legacy: false
recommendedName: [ "Nginx" ]
recommendedLinks: ["https://help.cloud66.com/rails/deployment/nginx.html"]
permalink: /:collection/:path
---


## About running apps with Puma

[Puma](http://puma.io/) is a light-weight Rack server built for speed and parallelism. Cloud 66 uses the following signals to control Puma:


### Start the web server

	sudo bluepill cloud66_web_server quit
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill


### Stop the web server

	sudo bluepill cloud66_web_server stop


### Restart the web server (hot-restart)

	sudo bluepill cloud66_web_server restart
	kill -USR2 <pid>


## Deploy with Puma

You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

```
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid -d
```

Take note that Puma is running in Daemon mode with the `-d` parameter.



## Warning

Should you have any issues, please ensure that you are using an up-to-date version of Puma with the correct configurations.

We recommend that you run [Unicorn](/web-server/unicorn-rack-server), as you may have to handle server restarts manually with Puma.
To solve the issue of manual restarts with Puma, you can use an _after_rails_ [deploy hook](/deployment/deploy-hooks) to manually run the following command in case you find that it is not responding to the SIGUSR2 that Cloud 66 issues.

```
bundle exec pumactl -P /tmp/web_server.pid restart
```

