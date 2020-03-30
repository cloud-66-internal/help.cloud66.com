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

[Puma](http://puma.io/) is a light-weight Rack server built for speed and parallelism. Cloud 66 uses the following signals to control Puma:

### Stop the web server
{% highlight shell %}
sudo bluepill cloud66_web_server stop
{% endhighlight %}

### Start the web server
{% highlight shell %}
sudo bluepill cloud66_web_server quit
{% endhighlight %}

{% highlight shell %}
sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill
{% endhighlight %}

### Restart the web server (hot-restart)
{% highlight shell %}
sudo bluepill cloud66_web_server restart
{% endhighlight %}

{% highlight shell %}
kill -USR2 <pid>
{% endhighlight %}

## Deploy with Puma
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default app server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

{% highlight shell %}
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid
{% endhighlight %}