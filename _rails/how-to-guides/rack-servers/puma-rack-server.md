---
layout: post
template: one-col
title:  "Using Puma web server"
categories: how-to-guides/rack-servers
order: 1
lead: Run your Rack apps with Puma web server
tags: ['Web server']
legacy: false
permalink: /:collection/:path:output_ext
---

[Puma](http://puma.io/) is a light-weight web server built for speed and parallelism. 

## Deploying with Puma
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default app server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma web server, add a line to your Procfile labeled as custom_web. Here is an example that relies on our sample config file below:

{% highlight shell %}
custom_web: bundle exec puma
{% endhighlight %}

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-d` or `-daemon` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

## Sample config file for Puma

The following config file will work with Cloud 66. Please take careful note that it enables features like `preload_app!` and explicitly sets the number of workers. This will prevent you from using rolling restarts (see below), so will need to be changed if you intend to use that feature. 

{% highlight config %}
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

port ENV.fetch("PORT") { 3000 }
environment ENV.fetch("RAILS_ENV") { "development" }
pidfile ENV.fetch("PIDFILE") { "/tmp/web_server.pid" }

workers ENV.fetch("WEB_CONCURRENCY") { 2 }
preload_app!

directory ENV.fetch("STACK_PATH") { "." }
bind ENV.fetch("BIND") { "unix:///tmp/web_server.sock" }
{% endhighlight %}

(We also have a [commented plain-text version](/rails/how-to-guides/rack-servers/puma-config.txt) of this config with explanatory notes)

If you'd prefer to use Puma without having a config file, you can simply use this catch-all initialization string:

{% highlight shell %}
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid
{% endhighlight %}

## Achieving zero downtime reloads with Puma

If you'd like your application servers to be able to reload without any downtime then you need to make some changes to the configuration of your restart sequence.

Our default restart sequence for Puma servers uses the `USR2` [signal](https://github.com/puma/puma/blob/master/docs/signals.md#puma-signals), which restart workers and reloads the Puma configuration file, if there is one.. To achieve a rolling restart (i.e. zero downtime) you need to set your Puma servers to use the `USR1` signal instead. 

You can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). The result would look something like this:

{% highlight yaml %}
production:
  procfile_metadata:
    web:
      restart_signal: usr1
{% endhighlight %}

Please be sure you understand the tradeoffs of using `USR1` - [read this for more context](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). You may also need to make changes to your **Puma config files** as per the [same doc](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). In short:

- Don't use `preload!`
- Use `prune_bundler` instead

<div class="notice"><p>
An important caveat here: this will not apply when you make changes to environment variables. That requires a full (hard) restart.
</p></div>

## Controlling Puma with systemd

Cloud 66 uses the following signals to control Puma via [systemd](/rails/how-to-guides/deployment/systemd.html):

### Stop the web server
{% highlight shell %}
sudo systemctl stop cloud66_web_server.service
{% endhighlight %}

### Start the web server
{% highlight shell %}
sudo systemctl start cloud66_web_server.service
{% endhighlight %}

### Restart the web server
{% highlight shell %}
sudo systemctl restart cloud66_web_server.service
{% endhighlight %}

## Controlling Puma with Bluepill

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
