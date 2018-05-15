
## List your stack settings


### Usage

```
$ cx settings list [-s <stack>] [-e <environment>]
```




### Parameters

|		Parameter 		   |  Description    |
|--|-:|
|stack 					   |Name of the stack|
|setting_name 	   | 	A valid setting from the list above |
|value	   | The value for the setting |
|e (optional) 	   | 	Your stack environment |
{:.table}


### Example

```
$ cx settings set -s "My Awesome App" git.repository git://github.com/cloud66-samples/rails-mysql.git -e production

$ cx settings set -s my_stack deploy.parallel true
```


## Settings Variables

These are the available settings:

|Setting|Default|Description|
|-----|:----:|-------:|
|allowed.web.source| nil i.e. 0.0.0.0 |IP addresses that are allowed to access a stacks web servers (with IP addresses in the command or a CSV file with IP addresses as input)|
|asset.prefix| nil |If you change your default Rails assets folder, you can set it here|
|continuous.deploy|false|Enable or disable [continuous deployment on Github](). |
|custom.build.command|-|Set custom build command. Only applies to [Sinatra]() or [Padrino stacks]()|
|custom.deploy.command|-|Set custom deploy command. Only applies to Sinatra or [Padrino stacks]()|
|db.check.backup.size|true|Enable/Disable Check free space before taking backup|
|deploy.parallel|true|Enable or disable [parallel deployments]() on the stack.|
|git.branch|-|Change the Git branch of the stack repository|
|git.repository|-|Change the Git repository URL|
|logrotate.app.frequency|daily| For application specific log files accpetd value: hourly, daily, weekly and monthly|
|logrotate.app.keep.count|14| The number of log files to keep for each logfile|
|logrotate.server.frequency|daily|For server specific log files accpetd value: hourly, daily, weekly and monthly|
|logrotate.server.keep.count|14|The number of log files to keep for each logfile|
|maintenance.mode|false|Enable or disable maintenance mode on the stack.|
|reconfigure.nginx|true|If set to true, it will regenerate Nginx configuration and restart it (only on the next deployment)|
|run.deploy.command|true|Enable or disable option run [deploy command]() on every deployment ([database migrations]() for Rails stacks). |
|stack.name||View your stack name|
{:.table}

1. To enable, you can use the values 1, true, on or enable, and to disable you can use the values 0, false, off or disable


