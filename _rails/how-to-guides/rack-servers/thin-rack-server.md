---
layout: post
template: one-col
title:  "Using Thin web server"
categories: how-to-guides/rack-servers
order: 4
lead: Run your Rack apps with Thin web server
tags: ['Web server']
legacy: false
permalink: /:collection/:path:output_ext
---

[Thin](http://code.macournoyer.com/thin/) is a Ruby web server that can handle high levels of concurrency. 

## Deploying with Thin
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default web server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin web server, add a line to your Procfile labeled as custom_web. Here is an example:

{% highlight shell %}
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV
{% endhighlight %}

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-d` or `-daemonize` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

## Controlling Thin via your terminal

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

If you need more control over your restarts, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). 

