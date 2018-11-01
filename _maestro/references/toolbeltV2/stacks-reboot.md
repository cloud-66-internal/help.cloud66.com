---
layout: post
template: one-col
title: cx stacks reboot
categories: references/toolbeltV2
lead: "Stacks Reboot command for Cloud66 Toolbelt"
legacy: false
order: 1
tags: ["shell"]
permalink: /:collection/:path
---

[<- Back to table of cx commands](/maestro/references/toolbeltV2.html#list-stacks)

## stacks reboot

Reboots the servers used by your stack

### stacks reboot: usage

````
$ cx stacks reboot [-e <environment>]
```

### stacks reboot: parameters

|		Parameter 		   |   Description    |
|--| | | | | :|
|stack 					   	| Name of your stack |
|y (optional)		  				   	| Answer yes to confirmations |
|group (default web)		 	 			   	| Group of servers you wish to reboot (all, web, haproxy, db, mysql, redis, postgresql, mongodb) |
|strategy		  	   	| Reboot in serial or parallel |
|e (environment) (optional)		 | 	Full or partial environment name |
{:.table}

The group parameter specifies which group of servers you wish to reboot. Valid values are “all”, “web”, “haproxy”, “db”; DB specific values like “mysql” or “redis” for example are also supported. If this value is left unspecified, the default value of “web” will be used

The strategy parameter specifies whether you want all your servers to be rebooted in parallel or in serial. Valid values for this parameter are “serial” or “parallel”; “serial” reboots involves web servers being removed/re-added to the LB one by one. Note that for this only applies to web servers; non-web server will still be rebooted in parallel. If this value is left unspecified, Cloud 66 will determine the best strategy based on your infrastructure layout.

### stacks reboot: examples

```
$ cx stack reboot -s mystack
$ cx stack reboot -s mystack --group web
$ cx stack reboot -s mystack --group all
$ cx stack reboot -s mystack --strategy parallel
$ cx stack reboot -s mystack --group web --strategy serial
```