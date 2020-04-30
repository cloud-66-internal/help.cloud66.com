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

## Controlling Unicorn with systemd

Cloud 66 uses the following signals to control Unicorn:

### Stop the web server
{% highlight shell %}
sudo systemctl stop cloud66_web_server.service
{% endhighlight %}

### Start the web server
{% highlight shell %}
sudo systemctl start cloud66_web_server.service
{% endhighlight %}

### Restart the web server (zero downtime)
{% highlight shell %}
sudo systemctl restart cloud66_web_server.service
{% endhighlight %}

If you need more control over your restarts, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). 

## Controlling Unicorn with Bluepill

#### Warning
<div class="notice notice-warning"><p>
As of May 2020 Bluepill is officially deprecated for all servers managed by Cloud 66 <em>except</em> those running Ubuntu 14.04 and earlier. Please use systemd commands (above).
</p></div>

### Stop the web server
{% highlight shell %} sudo bluepill cloud66_web_server stop {% endhighlight %}

### Start the web server
{% highlight shell %} sudo bluepill cloud66_web_server quit {% endhighlight %}

{% highlight shell %} sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill {% endhighlight %}

### Restart the web server (hot-restart)
{% highlight shell %} sudo bluepill cloud66_web_server restart {% endhighlight %}

{% highlight shell %} kill -USR2 {% endhighlight %}
