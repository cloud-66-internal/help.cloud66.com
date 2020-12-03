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

```shell
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV
```

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-d` or `-daemonize` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

## Customizing shutdown and reload signals

The default shutdown command for Unicorn servers on Cloud 66 is `HUP` and the default shutdown sequence for applications using **systemd** (our default process manager) is: 

```terminal
quit, 75, int, 15, kill
```
<div class="notice"><p>If your application still uses Bluepill (our legacy process manager), please refer to the <a href="/rails/how-to-guides/deployment/bluepill-legacy.html#process-signals">separate guide</a> on the subject.</p></div>

If you need your web server to shut down using a different command, or in a particular sequence, or with longer or shorter delays, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html).

For non-web process signals, please consult our [systemd guide](/rails/how-to-guides/deployment/systemd.html#process-signals).

## Controlling Thin via your terminal

You can manage your web server directly from your terminal. The commands you need to use will depend on whether your servers use systemd or Bluepill to manage processes. To check which process manager your application uses:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙*Settings & Information* in the right-hand panel
- Find the **Process Manager** line - it will show you which one your application is using

(If you'd like to migrate from Bluepill to systemd, please follow [the migration checklist](/rails/how-to-guides/deployment/systemd.html#migrating-from-bluepill-to-systemd).)

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
<pre><code class="language-bash">sudo systemctl stop cloud66_web_server.service</code></pre>

<h3>Start the web server</h3>

<pre><code class="language-bash">sudo systemctl start cloud66_web_server.service</code></pre>

<h3>Restart the web server</h3>

<pre><code class="language-bash">sudo systemctl restart cloud66_web_server.service</code></pre>

</section>

<section id="bluepill" class="Tabs-content js_tab_content is-hidden">

Cloud 66 uses the following signals to control Puma via <a href="/rails/how-to-guides/deployment/bluepill-legacy.html">Bluepill</a>:

<h3>Stop the web server</h3>

<pre><code class="language-bash">sudo bluepill cloud66_web_server stop</code></pre>

<h3>Start the web server</h3>

<pre><code class="language-bash">sudo bluepill cloud66_web_server quit</code></pre><br/>

<pre><code class="language-bash">sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill</code></pre>

<h3>Restart the web server (hot-restart)</h3>

<pre><code class="language-bash">sudo bluepill cloud66_web_server restart</code></pre>

<pre><code class="language-bash">kill -USR2</code></pre>

</section>
</div>

If you need more control over your restarts, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html). 

