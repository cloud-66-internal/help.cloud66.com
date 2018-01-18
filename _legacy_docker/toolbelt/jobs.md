---
layout: post
template: one-col
title: Toolbelt job management
categories: Toolbelt
lead: ""
legacy: true

permalink: /:collection/:path
---


## Job management

These commands allow you to list jobs and run a job immediately.

## List jobs

This command lists all jobs on a stack or a server.


### Usage

```
$ cx jobs list [-s <stack>] --server <server name>|<server ip>|<server role> --service <service name>
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack | 
|server name (optional)    | 	—		    | Name of the target server|
|server ip (optional)	   |	—			| IP of the server to access |
|server role (optional)	   |	—			| Role of the server to access (eg. web)|
|service name (optional)   |	—			| Name of the target service |
|e (optional)	       	   |	 	—		| Your stack environment |

### Example

```
$ cx jobs list -s My_Awesome_App
$ cx jobs list -s My_Awesome_App --server dingo
$ cx jobs list -s My_Awesome_App --server web -e production
```


## Run a job on demand

Use this command to run a job from the command line.


### Usage

```
$ cx job list [-s <stack>] --arg <arg> <job name>
```




### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack | 
|server name 	 		   | 	—		    | Name of the job to run|
|arg (optional)	 		   |	—			| Parameters you would like to pass job ( [more info]() ) |

### Examples

```
$ cx job run -s "My Awesome App" my_job
$ cx job run -s "My Awesome App" --arg "arg1" --arg "arg2" my_job
```
