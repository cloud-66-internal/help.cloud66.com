---
layout: post
template: one-col
title:  "About Custom web servers"
categories: tutorials
lead: Run your Rack apps with Passenger, Puma, Unicorn or Thin
legacy: false
tags: ['Web server']
permalink: /:collection/:path
---

By default, stacks deployed by Cloud 66 run on <a href="https://www.phusionpassenger.com/" target="_blank">Phusion Passenger</a> behind <a href="http://wiki.nginx.org/Main" target="_blank">Nginx</a>. You can also choose to use one of several servers:

- [Passenger Enterprise](/rails/tutorials/passenger-enterprise.html)
- [Puma](/rails/tutorials/puma-rack-server.html)
- [Unicorn](/rails/tutorials/unicorn-rack-server.html)
- [Thin](/rails/tutorials/thin-rack-server.html)

<div class="notice">
    <h3>Important</h3>
    <p>Custom web servers currently only apply to Rack-based stacks, not Docker stacks.</p>
</div>

<div class="notice">
	<h3>Important</h3>
	<p>You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger will not be applied after your stack has initially been built. You can however change freely between other supported servers after build.</p>
</div>

<h2 id="config">Configurations for your Rack server</h2>
If you would like to use a different server, there are some points you'd need to consider for it to work with a Cloud 66 stack. These conventions will allow Cloud 66 to redirect traffic to your servers and manage them for availability, memory consumption and restart cycles.

<h3 id="traffic">Traffic Socket</h3>
For the traffic to be redirected to your web server, it should use a Unix socket at `/tmp/web_server.sock`

<h3 id="pid">PID file</h3>
For the web server to be managed and restarted properly by Cloud 66, it needs to have it's PID file at `/tmp/web_server.pid`

<h2 id="manual">Manual control of the web servers</h2>
To control your web servers manually you can use the following commands:

<h3 id="stop">Stop the web server</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server stop
</kbd>
</p>

<h3 id="start">Start the web server</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66&#95;web&#95;server.pill
</kbd>
</p>

<h3 id="restart">Restart the web server</h3>
If supported by your web server, you can use the following command to restart the web server with no down time (this will send a USR2 signal to your webserver)
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>