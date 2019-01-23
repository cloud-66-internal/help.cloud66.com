---
layout: post
template: one-col
title:  "Deplying with Unicorn rack server"
categories: how-to-guides/deployment
lead: Run your Rack apps with Unicorn
tags: ['Web server']
legacy: false
permalink: /:collection/:path
---

[Unicorn](http://unicorn.bogomips.org/) is a Rack HTTP server that uses forked processes to handle multiple incoming requests concurrently.

<h2 id="deploy">Deploy with Unicorn</h2>
You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Unicorn Rack server, add a line to your Procfile labeled as <em>custom_web</em>. Here is an example:

{% highlight ruby %}
custom_web: bundle exec unicorn_rails -c config/unicorn.rb -E $RAILS_ENV -D
{% endhighlight %}

Please take note that Unicorn is running in Daemon mode with the `-D` parameter.

<div class="notice notice-warning">
    <h3>Warning</h3>
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

## Controlling your Unicorn server

Cloud 66 uses the following signals to control Unicorn:

### Kill the web server

- kill -QUIT &lt;pid>: Stop the process
- kill -USR2 &lt;pid>: Spin off another master process.
- kill -s TTIN &lt;pid>: Add a new worker to the master process

### Stop the web server
<p>
<kbd>
	sudo bluepill cloud66_web_server stop
</kbd>
</p>

### Start the web server
<p>
<kbd>
	sudo bluepill cloud66_web_server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill
</kbd>
</p>

### Restart the web server (zero-downtime)
<p>
<kbd>
	sudo bluepill cloud66_web_server restart
</kbd>
</p>

