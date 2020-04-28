---
layout: post
template: one-col
title:  "Using Puma rack server"
categories: how-to-guides/rack-servers
order: 1
lead: Run your Rack apps with Puma
tags: ['Web server']
legacy: false
permalink: /:collection/:path:output_ext
---

[Puma](http://puma.io/) is a light-weight Rack server built for speed and parallelism. 

## Deploying with Puma
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default app server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

{% highlight shell %}
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid
{% endhighlight %}

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

## Achieving zero downtime reloads with Puma

If you'd like your application servers to be able to reload without any downtime then you need to make some changes to the configuration of your restart sequence.

Our default restart sequence for Puma servers uses the `USR2` [signal](https://github.com/puma/puma/blob/master/docs/signals.md#puma-signals), which restart workers and reloads the Puma configuration file, if there is one.. To achieve a rolling restart (i.e. zero downtime) you need to set your Puma servers to use the `USR1` signal instead. 

You can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). The result would look something like this:

{% highlight shell %}
production:
  procfile_metadata:
    web:
      restart_signal: usr1
{% endhighlight %}

Please be sure you understand the tradeoffs of using `USR1` - [read this for more context](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). You may also need to make changes to your **Puma config files** as per the [same doc](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). In short:

- Don't use `preload!`
- Use `prune_bundler` instead

<div class="notice notice-warning"><p>
An important caveat here: this will not apply when you make changes to environment variables. That requires a full (hard) restart.
</p></div>


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
