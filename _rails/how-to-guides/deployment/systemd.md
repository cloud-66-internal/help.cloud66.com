---
layout: post
template: one-col
title: Managing processes with systemd
categories: how-to-guides/deployment
order: 7
lead: "Manage processes and background workers in your application"
legacy: false
tags: ["code","workers"]
permalink: /:collection/:path:output_ext
---

## Overview

By default Cloud 66 uses [**systemd**](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html){:target="_blank"} to monitor and manage processes on all new servers. It is automatically installed on all servers provisioned through Cloud 66. 

The only exception to this is for some legacy servers deployed before June 2020. These servers may use [bluepill](https://github.com/bluepill-rb/bluepill){:target="_blank"}. You can check which process manager your application is using:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙ *Settings & Information* in the right-hand panel
- Click the *Application Updates* tab
- If you see an update named *Server Process Manager* then your application is still using bluepill. If you do not see it, your application is already using systemd. (See below for instructions on how to [migrate to systemd](#migrating-from-bluepill-to-systemd).)

If you need help with bluepill please see our [separate (legacy) guide](/rails/how-to-guides/deployment/bluepill-legacy.html). 

## Using systemd

You can use systemd to manually control processes on your servers using the command-line interface. If you are familiar with Ubuntu or other Linux variants you should recognise many of these commands.

When you add processes through the Cloud 66 web interface, they will will also use systemd but will be managed by Cloud 66.

We have documented some of the most common commands below, but please r[ead the full man page for systemd](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html){:target="_blank"} if you need more detail. You might also read [this excellent guide](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units){:target="_blank"} from DigitalOcean.

#### Note
<div class="notice"><p>
systemd does not require or support daemonized services. Unlike some other process managers (such as Bluepill), you should <strong>not</strong> add the `-d` flag to your systemd commands. 
</p></div>

### Process status

To get the status for all processes:

```shell
$ sudo systemctl 
```

To get the status for a specific process:

```shell 
$ sudo systemctl status <application>.service 
```

An example of this in practice would be `systemctl status nginx.service`

### Stop a service

To stop a service:

```shell 
$ sudo systemctl stop <application>.service 
```

An example of this in practice would be `systemctl stop nginx.service`

### Start a service

To start a service:

```shell 
$ sudo systemctl start <application>.service 
```

An example of this in practice would be `systemctl start nginx.service`

### Restart a service

Stops and then starts a service. Useful for refreshing a service after a configuration update:

```shell 
$ sudo systemctl restart <application>.service 
```

An example of this in practice would be `systemctl reload nginx.service`

### Reload a service

When supported, this reloads a service's config file without interrupting pending operations:

```shell 
$ sudo systemctl reload <application>.service 
```

An example of this in practice would be `systemctl reload nginx.service`

### Check if a service is running

Check if a service is currently running (active):

```shell 
$ sudo systemctl is-active <application>.service 
```

An example of this in practice would be `systemctl is-active nginx.service`

### Set a service to start at bootup

To set a service to start whenever the server is booted:

```shell 
$ sudo systemctl enable <application>.service 
```

An example of this in practice would be `systemctl enable nginx.service`

### Set a service to NOT start at bootup

To set a service to start whenever the server is booted:

```shell 
$ sudo systemctl disable <application>.service 
```

An example of this in practice would be `systemctl disable nginx.service`

## Process signals

The default process signals for systemd processes are:

### Web reload signals

The generic web process restart (reload) signal is `restart_signal`: `hup`

For the default signals for specific web servers, click the links below:

- [Puma](/rails/how-to-guides/rack-servers/puma-rack-server.html#customizing-shutdown-and-reload-signals)
- [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html#customizing-shutdown-and-reload-signals)
- [Thin](/rails/how-to-guides/rack-servers/thin-rack-server.html#customizing-shutdown-and-reload-signals)

### Non-Web processes

<table class='table table-bordered table-striped'>
<tr>
<th width="25%">Process type</th>
<th>Signal</th>
</tr>
<tr>
<td>sidekiq processes</td>
<td><code>stop_sequence</code>: <code>term, 90, kill</code> </td>
</tr>
<tr>
<td>resque processes</td>
<td><code>stop_sequence</code>: <code>quit, 75, term, 15, kill</code></td>
</tr>
<tr>
<td>generic processes</td>
<td><code>stop_sequence</code>: <code>term, 90, kill</code></td>
</tr>
<tr>
<td>Restart</td>
<td><code>restart_on_deploy</code>: <code>true</code></td>
</tr>
</table>

### Specifying custom signals

If you'd like to specify custom process signals you can do this in [your Manifest file](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes).

## Migrating from Bluepill to systemd

<div class="notice notice-danger"><p>
🚨 systemd is only supported by Ubuntu version 16.04 and up. As such you cannot migrate servers running 14.04 and below to systemd. Ruby is only compatible with Ruby up to version 2.2 - so you will need to migrate your app to a newer version of Ubuntu before you upgrade.
</p></div>

If your servers are currently using Bluepill and you would like to transition to using systemd then please follow this checklist:

1. Ensure none of your process **initialization strings** - including processes for custom web servers - use daemonization flags like `-d` or `-daemonize`.  Using these flag with systemd will cause the process to terminate prematurely. 
2. Check and update any of your **config files** that enable daemonization. This is particularly relevant for users using custom web servers:
    - [Puma](/rails/how-to-guides/rack-servers/puma-rack-server.html)
    - [Thin](/rails/how-to-guides/rack-servers/thin-rack-server.html)
    - [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html)
3. Set your application(s) to migrate (NOTE that this will require admin perms on the stack)
    - EITHER via web Dashboard: click ⚙ *Settings & Information* in the right-hand panel, then click the *Application Updates* tab, then **apply** the *Server Process Manager* update (if that update is not available, your app is already using systemd)
    - OR use the Toolbelt command: `cx settings set -s APPLICATION_NAME migrate.bluepill.to.systemd true`
4. **Redeploy** your application

As always, we recommend testing your changes in a non-production environment before updating your live application.