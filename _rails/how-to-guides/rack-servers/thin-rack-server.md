---
layout: post
template: one-col
title:  "Using Thin rack server"
categories: how-to-guides/rack-servers
lead: Run your Rack apps with Thin
tags: ['Web server']
legacy: false
permalink: /:collection/:path
---

[Thin](http://code.macournoyer.com/thin/) is a Ruby web server that can handle high levels of concurrency. 

<h2 id="deploy">Deploy with Thin</h2>
You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec thin start --socket /tmp/web&#95;server.sock --pid /tmp/web&#95;server.pid -e $RACK&#95;ENV -d
</pre>
Please take note that Thin is running in Daemon mode with the `-d` parameter.

<div class="notice">
	<h3>Important</h3>
	<p>Your web server is not automatically restarted during redeployment. If you would like for it to restart automatically, you can accomplish this using a <a href='#'>deploy hook</a>.</p>
</div>

## Controlling your Thin server

Cloud 66 uses the following signals to control Thin:

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

<h3 id="hot-restart">Restart the web server (hot-restart)</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>
<p>
<kbd>
	kill -USR2 &lt;pid>
</kbd>
</p>

