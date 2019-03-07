---
layout: post
template: one-col
title: Managing processes with Bluepill
categories: how-to-guides/deployment
order: 7
lead: "Manage background workers in your application"
legacy: false
tags: ["code","workers"]
permalink: /:collection/:path
---


## Commands

When [bluepill](https://github.com/bluepill-rb/bluepill) is installed on your server, you can control your processes manually from your server command-line interface.

A process Bluepill config is saved into a `.pill` file. Bluepill loads pill files for each process it manages. See also [Bluepill gem page](http://rubygems.org/gems/bluepill).

When you add processes through Cloud 66 interface, they will be managed by Cloud 66. For instance if you restart your server, they will be automatically restart aswell.



## Process names convention

Cloud 66 processes beging with "cloud66\_" and user processes with "user\_"



## Build your own pill file

To build your own process with Bluepill, please refer to this [page](https://github.com/bluepill-rb/bluepill).

Don't forget to add a log file in your pill config. For instance:

```
process.stdout = process.stderr = "<STACK_PATH>/log/process.log"
```




## Status

To get all processes status:

```
$ sudo bluepill status
```

To get a specific process status:

```
$ sudo bluepill <process_name> status
```




## Stop

To stop a specific process:

```
$ sudo bluepill <process_name> stop
```




## Start

To start a specific process:

```
$ sudo bluepill <process_name> start
```




## Load a process

To load a `.pill` file into bluepill:

```
$ sudo bluepill load /etc/bluepill/autoload/<process_name>.pill
```




## Unload a process

To quit a process from bluepill:

```
$ sudo bluepill <process_name> quit
```




### Note
<div class="notice">
  <p>Also remember that we configure the pill files to log to <code>&lt;STACK_PATH&gt;/log</code> folder.</p>
</div>