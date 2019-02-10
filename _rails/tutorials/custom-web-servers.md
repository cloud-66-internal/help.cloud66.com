---
layout: post
template: one-col
title:  "Using custom web servers with Cloud 66"
categories: tutorials
order: 4
lead: Run your Rack apps with Passenger, Puma, Unicorn or Thin
legacy: false
tags: ['Web server']
permalink: /:collection/:path
---

By default, applications deployed by Cloud 66 run on <a href="https://www.phusionpassenger.com/" target="_blank">Phusion Passenger</a> behind <a href="http://wiki.nginx.org/Main" target="_blank">Nginx</a>. You can also choose to use one of several servers:

- [Passenger Enterprise](/rails/how-to-guides/rack-servers/passenger-enterprise.html)
- [Puma](/rails/how-to-guides/rack-servers/puma-rack-server.html)
- [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html)
- [Thin](/rails/how-to-guides/rack-servers/thin-rack-server.html)

### Important
<div class="notice">
	<p>You need to choose your web server at the time of initial build of the application. Changes to or from Passenger will not be applied after your application has initially been built. You can however change freely between other supported servers after build.</p>
</div>

## Configurations for your Rack server
If you would like to use a different server, there are some points you'd need to consider for it to work with a Cloud 66 application. These conventions will allow Cloud 66 to redirect traffic to your servers and manage them for availability, memory consumption and restart cycles.

### Traffic Socket
For the traffic to be redirected to your web server, it should use a Unix socket at `/tmp/web_server.sock`

### PID file
For the web server to be managed and restarted properly by Cloud 66, it needs to have it's PID file at `/tmp/web_server.pid`

## Manual control of the web servers
To control your web servers manually you can use the following commands:

### Stop the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server stop
</kbd>
</p>

### Start the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66&#95;web&#95;server.pill
</kbd>
</p>

### Restart the web server
If supported by your web server, you can use the following command to restart the web server with no down time (this will send a USR2 signal to your webserver)
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>