
## List your stacks

Lists all the stacks available to your account.


### Usage

```
$ cx stacks list [-e <environment>]
```


### Parameters


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
|| :|
|stack 					   	| Name of your stack |
{:.table}

 
 


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
|-:|
|list 					   	|List of all versions of a configuration file|
|download 	 			   	| Download a configuration file |
|uplaod	  				   	| Upload a new version of configuration file |
|stack (optional) 	   	   	| 	Name of your stack, this can be omitted if the current directory is a stack directory |
|f (file) (optional)	   	| File name, accepted values are service.yml and manifest.yml |
|e (environment) (optional) | 	Full or partial environment name |
{:.table}


* * *


## Show help pages for a command

Shows a list of commands or help for one command.


### Usage

```
$ cx stacks help [<command>]
```




### Parameters


|		Parameter 		   |   Description    |
|--| ----:|
|command 				   |The command you wish to see help pages for|
{:.table}

