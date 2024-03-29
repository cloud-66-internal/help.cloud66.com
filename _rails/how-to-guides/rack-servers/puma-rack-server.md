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

[Puma](https://puma.io/) is a light-weight web server built for speed and parallelism. 

## Deploying with Puma
You need to choose your web server at the time of initial build of the application. Changes to or from Passenger (the default app server) will not be applied after your application has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma web server, add a line to your Procfile labeled as custom_web. Here is an example that relies on our sample config file below:

```shell
custom_web: bundle exec puma
```

You **should not** daemonize the `custom_web` process. In other words, please do not use the `-d` or `-daemon` flags in your initialization string. Please also make sure your config file does not enable daemonization.

We do not support old-style daemonization because it is more reliable to allow the system's process manager (systemd) to handle persistent processes.

## Sample config file for Puma

The following config file will work with Cloud 66. Please take careful note that it enables features like `preload_app!` and explicitly sets the number of workers. This will prevent you from using rolling restarts (see below), so will need to be changed if you intend to use that feature. 

```shell
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
```

(We also have a [commented plain-text version](/rails/how-to-guides/rack-servers/puma-config.txt) of this config with explanatory notes)

#### Note
<div class="notice"><p>
The directory block in the above config ensures that Puma will use the latest version of your code when it is deployed. Without this block, some versions of Puma will continue to point to older versions of code until "hard" restarted. You can also find this in the init string below (<code class="language-bash">--dir $STACK_PATH</code>).</p></div>

If you'd prefer to use Puma without having a config file, you can simply use this catch-all initialization string:

<pre class="language-bash line-numbers u-whiteSpaceNoWrap"><code>custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid --dir $STACK_PATH</code></pre>


## Customizing shutdown and reload signals

The default shutdown command for Puma servers on Cloud 66 is `USR2` and the default shutdown sequence for applications using **systemd** (our default process manager) is:

```terminal
term, 90, kill
```
<div class="notice"><p>If your application still uses Bluepill (our legacy process manager), please refer to the <a href="/rails/how-to-guides/deployment/bluepill-legacy.html#process-signals">separate guide</a> on the subject.</p></div>

If you need your web server to shut down using a different command, or in a particular sequence, or with longer or shorter delays, you can define a custom restart sequence in the [procfile_metadata](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes) section of your [Manifest file](/rails/quickstarts/getting-started-with-manifest.html).

For non-web process signals, please consult our [systemd guide](/rails/how-to-guides/deployment/systemd.html#process-signals).

## Achieving zero downtime reloads

If you'd like your application servers to be able to reload without any downtime then you need to make some changes to the configuration of your restart sequence.

Our default restart sequence for Puma servers uses the `USR2` [signal](https://github.com/puma/puma/blob/master/docs/signals.md#puma-signals), which restart workers and reloads the Puma configuration file, if there is one. To achieve a rolling restart (i.e. zero downtime) you need to set your Puma servers to use the `USR1` signal instead. See above for instructions on customizing your signals. 

The result would look something like this:

```yaml
production:
  procfile_metadata:
    web:
      restart_signal: usr1
```

Please be sure you understand the tradeoffs of using `USR1` - [read this for more context](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). You may also need to make changes to your **Puma config files** as per the [same doc](https://github.com/puma/puma/blob/master/docs/deployment.md#restarting). In short:

- Don't use `preload!`
- Use `prune_bundler` instead

<div class="notice"><p>
An important caveat here: this will not apply when you make changes to environment variables. That requires a full (hard) restart.
</p></div>

## Controlling Puma via your terminal

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





