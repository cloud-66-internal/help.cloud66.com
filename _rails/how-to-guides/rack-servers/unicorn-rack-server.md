---
layout: post
template: one-col
title:  "Using Unicorn web server"
categories: how-to-guides/rack-servers
order: 2
lead: Run your Rack apps with Unicorn web server
tags: ['Web server']
legacy: false
permalink: /:collection/:path:output_ext
---

[Unicorn](http://unicorn.bogomips.org/) is a web server that uses forked processes to handle multiple incoming requests concurrently.

## Deploy with Unicorn
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default web app server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Unicorn web server, add a line to your Procfile labeled as <em>custom_web</em>. Here is an example:

{% highlight ruby %}
custom_web: bundle exec unicorn_rails -c config/unicorn.rb -E $RAILS_ENV
{% endhighlight %}

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-D` or `-daemonize` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

#### Warning
<div class="notice notice-warning">
    <p>Please ensure to follow the conventions set out in the configuration below if you are having issues, and that you are using an up-to-date version of Unicorn.</p>
</div>

Here is a **unicorn.rb** configuration file that is compatible with Cloud 66 requirements (following the Procfile line above, this should be located under the `config` folder of your Rails app):

{% highlight ruby %}
worker_processes 2

working_directory "#{ENV['STACK_PATH']}"

listen "/tmp/web_server.sock", :backlog => 64

timeout 30

pid '/tmp/web_server.pid'

stderr_path "#{ENV['STACK_PATH']}/log/unicorn.stderr.log"
stdout_path "#{ENV['STACK_PATH']}/log/unicorn.stdout.log"

preload_app true
GC.respond_to?(:copy_on_write_friendly=) and
	GC.copy_on_write_friendly = true

check_client_connection false

before_fork do |server, worker|
	old_pid = '/tmp/web_server.pid.oldbin'
	if File.exists?(old_pid) && server.pid != old_pid
		begin
			Process.kill("QUIT", File.read(old_pid).to_i)
		rescue Errno::ENOENT, Errno::ESRCH
			# someone else did our job for us
		end
	end

	defined?(ActiveRecord::Base) and
		ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
	defined?(ActiveRecord::Base) and
		ActiveRecord::Base.establish_connection
end
{% endhighlight %}

## Controlling Unicorn via your terminal

You can manage your web server directly from your terminal. The commands you need to use will depend on whether your servers use systemd or Bluepill to manage processes. To check which process manager your application uses:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙*Settings & Information* in the right-hand panel
- Find the **Process Manager** line - it will show you which one your application is using

<div class="Tabs Tabs--enclosed">
<nav>
<ul class="TabMini js_tabs">
<li class="TabMini-item active">
<a href="#systemd" class="TabMini-link">
systemd
</a>
</li>
<li class="TabMini-item">
<a href="#bluepill" class="TabMini-link">
Bluepill (legacy)
</a>
</li>
</ul>
</nav>

<section id="systemd" class="Tabs-content js_tab_content">

Cloud 66 uses the following signals to control Puma via <a href="/rails/how-to-guides/deployment/systemd.html">systemd</a>:

<h3>Stop the web server</h3>
<pre class="prettyprint">
sudo systemctl stop cloud66_web_server.service
</pre>

<h3>Start the web server</h3>
<pre class="prettyprint">
sudo systemctl start cloud66_web_server.service
</pre>

<h3>Restart the web server</h3>
<pre class="prettyprint">
sudo systemctl restart cloud66_web_server.service
</pre>

</section>

<section id="bluepill" class="Tabs-content js_tab_content is-hidden">

Cloud 66 uses the following signals to control Puma via <a href="/rails/how-to-guides/deployment/bluepill.html">Bluepill</a>:

<h3>Stop the web server</h3>
<pre class="prettyprint"> sudo bluepill cloud66_web_server stop </pre>


<h3>Start the web server</h3>
<pre class="prettyprint"> sudo bluepill cloud66_web_server quit </pre>

<pre class="prettyprint"> sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill </pre>

<h3>Restart the web server (hot-restart)</h3>
<pre class="prettyprint"> sudo bluepill cloud66_web_server restart </pre>

<pre class="prettyprint"> kill -USR2 </pre>

</section>
</div>
