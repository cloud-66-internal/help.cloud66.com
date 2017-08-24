<!-- usedin: [ _legacy_docker/Toolbelt/stacks.md, _maestro/Toolbelt/stacks.md, _node/toolbelt/stacks.md, _rails/Toolbelt/stacks.md] -->


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
