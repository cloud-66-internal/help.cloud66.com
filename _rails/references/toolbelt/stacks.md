---
menuheaders: [ "List your stacks", "Usage", "Parameters", "Examples", "Create a new Docker stack", "Usage", "Parameters", "Examples", "Redeploy your stack", "Usage", "Parameters", "Examples", "Restart your stack", "Usage", "Parameters", "Example", "Reboot your stack", "Usage", "Parameters", "Example", "Clear caches", "Usage", "Parameters", "Example", "Listen to your deployment logs", "Usage", "Parameters", "Example", "Manage your configuration files", "Usage", "Parameters", "Show help pages for a command", "Usage", "Parameters" ]
layout: post
template: one-col
title: Toolbelt stack management
categories: Toolbelt
lead: ""
legacy: false

permalink: /:collection/:path
---


## List your stacks

Lists all the stacks available to your account.


### Usage

```
$ cx stacks list [-e <environment>]
```


### Parameters

|		Parameter 		   |   Description    |
|--------------------------| ----------------:|
|e (optional) 			   | Full or partial environment name |

### Examples

```
$ cx stacks list
```


```
$ cx stacks list -e staging
```
* * *

## Create a new Docker stack

Build a new Docker stack based on your desired service definition.


### Usage

```
$ cx --org <organization_name> stacks create --name <stack_name> --environment <environment> --service_yaml <service_yaml_path> [--manifest_yaml <manifest_yaml_path>]
```




### Parameters
|		Parameter 		   	|   Description    |
|---------------------------| ----------------:|
|organization_name		   	|Name of the organization -you can find it by using cx info-|
|name 	 			   		| Name of your new stack |
|environment		   		| Environment of your new stack |
|service_yaml 	   	   		| Path to your service.yml file |
|manifest_yaml (optional)  	| Path to your manifest.yml file |

### Examples


```
$ cx --org My_Awsome_org stacks create --name my_stack --environment production --service_yaml ~/service.yaml --manifest_yaml ~/manifest.yaml
```


```
$ cx --org My_Awsome_org stacks create --name my_stack --environment production --service_yaml ~/service.yaml 
```
* * *

## Redeploy your stack

Trigger the deployment of a stack from the command line, just like clicking on _redeploy_ in the UI.


### Usage

```
$ cx stacks redeploy [-s <stack>] [-y] [--git-ref <git_ref>] [--service <service>] [--service <service>] [--service <service>]
```




### Parameters
|		Parameter 		   	|   Description    |
|---------------------------| ----------------:|
|stack 					   	| Name of your stack |
|e (optional)	 	 			   	| Your stack environment |
|y (optional)		  				   	| Automatically answer yes to any prompts |
|git-ref (optional, non-Docker)	  	   	| Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only. |
|service (optional, repeatable - docker)   	| Will deploy the specified services from your stack only. Each service can have an optional colon-separated reference. For image based services the reference is taken as an image tag, for git based services the reference is taken as a git reference. Docker stacks only |
|listen (optional)	 | 	Will follow the deployment and log progress output |

### Examples

```
$ cx stacks redeploy -s "My Awesome App" -e production
```


```
$ cx stacks redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
```


```
$ cx stacks redeploy -s "My Awesome Docker App" --service web --service api:latest
```
Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

* * *

## Restart your stack

Allows you to restart Nginx on your stack with one simple command.


### Usage

```
$ cx stacks restart [-s <stack>]
```




### Parameters
|		Parameter 		   	|   Description    |
|---------------------------| ----------------:|
|stack 					   	| Name of your stack |
|e (optional)	 	 	 	| Your stack environment |

### Example

```
$ cx stacks restart -s "My Awesome App"
```
* * *


## Reboot your stack

Allows you to reboot your servers on your stack with one simple command.


### Usage

```
$ cx stacks reboot -s <stack> [--group <server group name>] [--strategy <strategy name>] [--environment <environment name>]
```




### Parameters
|		Parameter 		   	|     Description    |
|---------------------------| ------------------:|
|stack 					   	| Name of your stack |
|y (optional)		  				   	| Answer yes to confirmations |
|group (default web)		 	 			   	| Group of servers you wish to reboot (all, web, haproxy, db, mysql, redis, postgresql, mongodb) |
|strategy		  	   	| Reboot in serial or parallel |
|e (environment) (optional)		 | 	Full or partial environment name |
The group parameter specifies which group of servers you wish to reboot. Valid values are “all”, “web”, “haproxy”, “db”; DB specific values like “mysql” or “redis” for example are also supported. If this value is left unspecified, the default value of “web” will be used

The strategy parameter specifies whether you want all your servers to be rebooted in parallel or in serial. Valid values for this parameter are “serial” or “parallel”; “serial” reboots involves web servers being removed/re-added to the LB one by one. Note that for this only applies to web servers; non-web server will still be rebooted in parallel. If this value is left unspecified, Cloud 66 will determine the best strategy based on your infrastructure layout.

### Example

```
$ cx stack reboot -s mystack
$ cx stack reboot -s mystack --group web
$ cx stack reboot -s mystack --group all
$ cx stack reboot -s mystack --strategy parallel
$ cx stack reboot -s mystack --group web --strategy serial
```
* * *


## Clear caches

For improved performance, volatile code caches exist for your stack. It is possible for a those volatile caches to become invalid if you switch branches, change git repository URL, or rebase or force a commit. Since switching branch or changing git repository URL is done via the Cloud 66 interface, your volatile caches will automatically be purged. However, rebasing or forcing a commit doesn't have any association with Cloud 66, so this command can be used to purge the exising volatile caches.


### Usage

```
$ cx stacks clear-caches [-s <stack>]
```




### Parameters

|		Parameter 		   	|     Description    |
|---------------------------| ------------------:|
|stack 					   	| Name of your stack |

### Example

```
$ cx stacks clear-caches -s "My Awesome App"
```
* * *


## Listen to your deployment logs


### Usage

```
$ cx stacks listen [-s <stack>]
```




### Parameters

|		Parameter 		   	|     Description    |
|---------------------------| ------------------:|
|stack 					   	| Name of your stack |
 
 


### Example

```
$ cx stacks listen -s "My Awesome App" -e production
```
You can leave the command by pressing `Ctrl-C` at any time.

* * *


## Manage your configuration files

List, download and upload of configuration files such as a _service.yml_ or _manifest.yml_.


### Usage

```
$ cx stacks configure list [-s <stack>]
```




### Parameters
|		Parameter 		   	|   Description    |
|---------------------------| ----------------:|
|list 					   	|List of all versions of a configuration file|
|download 	 			   	| Download a configuration file |
|uplaod	  				   	| Upload a new version of configuration file |
|stack (optional) 	   	   	| 	Name of your stack, this can be omitted if the current directory is a stack directory |
|f (file) (optional)	   	| File name, accepted values are service.yml and manifest.yml |
|e (environment) (optional) | 	Full or partial environment name |

* * *


## Show help pages for a command

Shows a list of commands or help for one command.


### Usage

```
$ cx stacks help [<command>]
```




### Parameters

|		Parameter 		   |   Description    |
|--------------------------| ----------------:|
|command 				   |The command you wish to see help pages for|

