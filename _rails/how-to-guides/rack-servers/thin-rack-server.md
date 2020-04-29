---
layout: post
template: one-col
title:  "Using Thin rack server"
categories: how-to-guides/rack-servers
order: 4
lead: Run your Rack apps with Thin
tags: ['Web server']
legacy: false
permalink: /:collection/:path:output_ext
---

[Thin](http://code.macournoyer.com/thin/) is a Ruby web server that can handle high levels of concurrency. 

## Deploying with Thin
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default web server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

{% highlight shell %}
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV
{% endhighlight %}

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-d` or `-daemonize` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

## Controlling Thin with systemd

Cloud 66 uses the following signals to control Thin:

### Stop the web server
{% highlight shell %}
sudo systemctl stop cloud66_web_server.service
{% endhighlight %}

### Start the web server
{% highlight shell %}
sudo systemctl start cloud66_web_server.service
{% endhighlight %}

### Restart the web server (hot-restart)
{% highlight shell %}
sudo systemctl restart cloud66_web_server.service
{% endhighlight %}

If you need more control over your restarts, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). 

## Controlling Thin with Bluepill

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
