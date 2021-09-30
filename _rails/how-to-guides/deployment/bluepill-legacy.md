---
layout: post
template: one-col
title: Managing processes with Bluepill
categories: how-to-guides/deployment
order: 7
lead: "Manage background workers in your application"
legacy: false
tags: ["code","workers"]
permalink: /:collection/:path:output_ext
---

## Overview

Bluepill *was* Cloud 66's default process manager until June 2020. It has been replaced by [systemd](/rails/how-to-guides/deployment/systemd.html). Some legacy servers (deployed before June 2020) may still be using Bluepill. To check this:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙ *Settings & Information* in the right-hand panel
- Click the *Application Updates* tab
- If you see an update named *Server Process Manager* then your application is still using bluepill. If you do not see it, your application is already using systemd.

<div class="notice notice-warning"><p>If your servers are <strong>not</strong> running Bluepill then you are reading the wrong guide. Please visit the <a href="/rails/how-to-guides/deployment/systemd.html">systemd doc</a> instead.
</p></div>

If you'd like to migrate from Bluepill to systemd, please follow [the migration checklist](/rails/how-to-guides/deployment/systemd.html#migrating-from-bluepill-to-systemd).

## Commands

If [bluepill](https://github.com/bluepill-rb/bluepill) is installed on your server, you can control your processes manually from your server command-line interface.

A process Bluepill config is saved into a `.pill` file. Bluepill loads pill files for each process it manages. See also [Bluepill gem page](http://rubygems.org/gems/bluepill).

When you add processes through Cloud 66 interface, they will be managed by Cloud 66. For instance if you restart your server, they will be automatically restart aswell.


## Process naming convention

Cloud 66 processes beging with "cloud66\_" and user processes with "user\_"


## Build your own pill file

To build your own process with Bluepill, please refer to this [page](https://github.com/bluepill-rb/bluepill).

Don't forget to add a log file in your pill config. For instance:

```shell
process.stdout = process.stderr = "<STACK_PATH>/log/process.log"
```

## Status

To get all processes status:

```shell
$ sudo bluepill status
```

To get a specific process status:

```shell
$ sudo bluepill <process_name> status
```

## Stop

To stop a specific process:

```shell
$ sudo bluepill <process_name> stop
```

## Start

To start a specific process:

```shell
$ sudo bluepill <process_name> start
```

## Load a process

To load a `.pill` file into bluepill:

```shell
$ sudo bluepill load /etc/bluepill/autoload/<process_name>.pill
```


## Unload a process

To quit a process from bluepill:

```shell
$ sudo bluepill <process_name> quit
```

#### Note
<div class="notice">
  <p>Also remember that we configure the pill files to log to <code>&lt;STACK_PATH&gt;/log</code> folder.</p>
</div>

## Process signals 

The default process signals for Bluepill processes are:


### Generic web reload signal 

* `restart_signal`: `usr2`

### Stop sequences

<table class='table table-bordered table-striped'>
<tr>
<th>Process type</th>
<th>Signal</th>
</tr>
<tr>
<td>sidekiq processes</td>
<td><code>stop_sequence</code>: <code>term, 31, kill</code></td>
</tr>
<tr>
<td>All other processes (including web servers)</td>
<td><code>stop_sequence</code>: <code>quit, 30, term, 11, kill</code></td>
</tr>
<tr>
<td>Restart</td>
<td><code>restart_on_deploy</code>: <code>true</code></td>
</tr>
</table>

If you'd like to specify custom process signals you can do this in [your Manifest file](/rails/how-to-guides/deployment/building-a-manifest-file.html#processes).
