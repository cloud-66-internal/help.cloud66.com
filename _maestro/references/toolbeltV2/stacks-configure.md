---
layout: post
template: one-col
title: cx stacks configure
categories: references/toolbeltV2
lead: "Stacks List command for Cloud66 Toolbelt"
legacy: false
order: 1
tags: ["shell"]
permalink: /:collection/:path
---

[<- Back to table of cx commands](/maestro/references/toolbeltV2.html#list-stacks)

## stacks configure

List, download and upload of configuration files such as a _service.yml_ or _manifest.yml_.


### stacks configure: usage

```
$ cx stacks configure list [-s <stack>]

$ cx stacks configure download [-s <stack>]

$ cx stacks configure download [-s <stack>]
```


### stacks configure: parameters

|		Parameter 		   	|   Description    |
|-:|
|list 					   	|List of all versions of a configuration file|
|download 	 			   	| Download a configuration file |
|uplaod	  				   	| Upload a new version of configuration file |
|stack (optional) 	   	   	| 	Name of your stack, this can be omitted if the current directory is a stack directory |
|f (file) (optional)	   	| File name, accepted values are service.yml and manifest.yml |
|e (environment) (optional) | 	Full or partial environment name |
{:.table}
