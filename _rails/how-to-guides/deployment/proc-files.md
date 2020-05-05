---
layout: post
template: one-col
title:  "Running background processes"
categories: how-to-guides/deployment
order: 4
legacy: false
lead: Cloud 66 supports the widely used Procfile format files
tags: ['Deployment']
permalink: /:collection/:path:output_ext
---

## About running background processes
You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called <kbd>Procfile</kbd>.

### Important
<div class="notice">
<p>Specifying processes in a Procfile currently only apply to Rack-based applications, not Docker applications.</p>
</div>

Should you wish to use different processes in different environments, you can name your Procfile in the following convention:

<pre class="terminal">
Procfile_ENV
</pre>

For example, to limit specific processes to running only in your development environment, call the file <kbd>Procfile_development</kbd>.

## How to run background processes
A typical Procfile may look something like this:

<pre class="prettyprint">
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
</pre>

The commands above would run <kbd>rake resque:work QUEUE=*</kbd> and <kbd>rake resque:scheduler</kbd> and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your Application Overview.

You can reference your application environment variables with a `$` before the name. This will be replaced by the actual value in the command executed. As an example, `$RAILS_ENV` will be evaluated as `production` if you are in the production environment.

## Running processes with unique identifiers
To assign a unique identifier to your process (for example with Sidekiq), use the <kbd>&#123;&#123;UNIQUE_INT&#125;&#125;</kbd> notation. For example, your process could look as follows:

<pre class="terminal">
worker: bundle exec sidekiq -e production
</pre>	

This integer should be unique across processes, so that multiple processes won't clash, but may not be unique across servers.

## Scaling background processes
You can scale your background processes up and down on the process server page. On your Application Overview, click the link to your _Process server_ group on your Application Overview. Use the <i>+</i> and <i>-</i> buttons to scale your processes up and down.

You can also scale up a [standalone process server](/rails/how-to-guides/scaling/scaling.html#process-servers) for more resources.

## Pause and resume background processes

On each process server you can pause and resume your background processes! You will find that in your Application Overview under process server and on the top right corner of each server box.

* **Pause** is scaling down the processes to zero.
* **Resume** is scaling them back up to the number of processes there were before pause.





