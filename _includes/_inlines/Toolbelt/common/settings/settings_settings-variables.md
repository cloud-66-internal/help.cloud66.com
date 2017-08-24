<!-- usedin: [ _legacy_docker/Toolbelt] - post: -->


## Settings Variables

These are the available settings:

|		Setting 		   |  Description    |
|--------------------------| ----------------:|
|allowed.web.source				   | IP addresses that are allowed to access a stacks web servers (with IP addresses in the command or a CSV file with IP addresses as input) |
|asset.prefix		   		| If you change your default Rails assets folder, you can set it here |
|continuous.deploy	   | Enable or disable [continuous deployment on Github](). To enable, you can use the values 1, true, on or enable, and to disable you can use the values 0, false, off or disable |
|custom.build.command 	   | YSet custom build command. Only applies to [Sinatra]() or [Padrino stacks]() |
|custom.deploy.command			   | Set custom deploy command. Only applies to [Sinatra]() or [Padrino stacks]() |
|db.check.backup.size		   		| Enable/Disable Check free space before taking backup (Default is true) 
To disable checking the free space set this to false|
|deploy.parallel	   | Enable or disable [parallel deployments]() on the stack. To enable, you can use the values 1, true, on or enable, and to disable you can use the values 0, false, off or disable |
|git.branch 	   | Change the Git branch of the stack repository |
|git.repository	   | Change the Git repository URL|
|maintenance.mode			   |Enable or disable maintenance mode on the stack. To enable, you can use the values 1, true, on or enable, and to disable you can use the values 0, false, off or disable|
|reconfigure.nginx		   		| If set to true, it will regenerate Nginx configuration and restart it (only on the next deployment)|
|run.deploy.command	   | Enable or disable option run [deploy command]() on every deployment ([database migrations]() for Rails stacks). To enable, you can use the values 1, true, on or enable, and to disable you can use the values 0, false, off or disable |
|stack.name 	   | View your stack name |
