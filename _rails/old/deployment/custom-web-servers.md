---
menuheaders: [ "About custom web servers", "Important", "Configurations for your Rack server", "Traffic Socket", "PID file", "Manual control of the web servers", "Stop the web server", "Start the web server", "Restart the web server" ]
layout: post
template: one-col
title: Custom Web Servers
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---









## About custom web servers

By default, stacks deployed by Cloud 66 run on [Phusion Passenger](https://www.phusionpassenger.com/) behind [Nginx](http://wiki.nginx.org/Main). You can also choose to use one of several servers:

- [Passenger Enterprise](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/passenger-enterprise.html)
- [Puma](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/puma-rack-server.html)
- [Unicorn](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/unicorn-rack-server.html)
- [Thin](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/thin-rack-server.html)





### Important

You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger will not be applied after your stack has initially been built. You can however change freely between other supported servers after build.









## Configurations for your Rack server

If you would like to use a different server, there are some points you'd need to consider for it to work with a Cloud 66 stack. These conventions will allow Cloud 66 to redirect traffic to your servers and manage them for availability, memory consumption and restart cycles.






### Traffic Socket

For the traffic to be redirected to your web server, it should use a Unix socket at `/tmp/web_server.sock`






### PID file

For the web server to be managed and restarted properly by Cloud 66, it needs to have it's PID file at `/tmp/web_server.pid`






## Manual control of the web servers

To control your web servers manually you can use the following commands:






### Stop the web server



	sudo bluepill cloud66_web_server stop








### Start the web server



	sudo bluepill cloud66_web_server quit
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill








### Restart the web server

If supported by your web server, you can use the following command to restart the web server with no down time (this will send a USR2 signal to your webserver)



	sudo bluepill cloud66_web_server restart




