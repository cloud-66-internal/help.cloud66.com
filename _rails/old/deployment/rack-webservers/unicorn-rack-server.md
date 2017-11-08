---
menuheaders: [ "About Unicorn", "Deploy with Unicorn", "Kill the web server", "Start the web server", "Stop the web server", "Restart the web server (zero-downtime)", "Warning" ]
layout: post
template: one-col
title: Unicorn Rack Server
categories: Deployment
lead: ""
recommendedName: [ "Nginx" ]
recommendedLinks: ["https://help.cloud66.com/rails/deployment/nginx.html"]
legacy: false
permalink: /:collection/:path
---


## About Unicorn

[Unicorn](http://unicorn.bogomips.org/) is a Rack HTTP server that uses forked processes to handle multiple incoming requests concurrently.

Cloud 66 uses the following signals to control Unicorn:


## Deploy with Unicorn

You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Unicorn Rack server, add a line to your Procfile labeled as _custom_web_. Here is an example:

{% highlight ruby %}
custom_web: bundle exec unicorn_rails -c config/unicorn.rb -E $RAILS_ENV -D
{% endhighlight %}

Please take note that Unicorn is running in Daemon mode with the `-D` parameter.



### Kill the web server

- kill -QUIT \<pid>: Stop the process
- kill -USR2 \<pid>: Spin off another master process.
- kill -s TTIN \<pid>: Add a new worker to the master process


### Start the web server

	sudo bluepill cloud66_web_server quit
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill


### Stop the web server

	sudo bluepill cloud66_web_server stop


### Restart the web server (zero-downtime)

	sudo bluepill cloud66_web_server restart


## Warning

Please ensure to follow the conventions set out in the configuration below if you are having issues, and that you are using an up-to-date version of Unicorn.
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

