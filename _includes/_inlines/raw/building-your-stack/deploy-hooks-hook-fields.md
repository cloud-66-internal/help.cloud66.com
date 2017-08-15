# Hook fields

There are three types of deploy hooks, and the fields available (and required) vary by type:

1.  **Snippets:** use pre-existing scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or third parties.
2.  **Commands:** run your own commands.
3.  **Scripts:** use your own scripts for more comprehensive procedures(Only for Rails/Rack stacks).







	
Hook type  

	
Field
	
Description


	

**Snippets** 
-



	


snippet![image](http://assets.cloud66.com/help/images/required.gif)
Snippet to be used - run in _/tmp/deploy_hooks_ by default
	


target ![image](http://assets.cloud66.com/help/images/required.gif)
Target server(s), with accepted values _any_, _rails_, _mysql_, _postgresql_, _mongodb_, _redis_, _sinatra_, _padrino_, _custom_
	

	 **Note:** Please make sure you read the _run_on_ part, if your target is not _any_
	

	


execute ![image](http://assets.cloud66.com/help/images/required.gif)
Set to true for the snippet to be executable.
	


apply_during  
 (all)
Specify when you want the deploy hook action to take place. Accepted values are _build_only_, _deploy_only_ or _all_. The _build_ step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are _deploy_ steps.
	


halt_on_error (true)
Specify whether the execution should continue or halt in the event of an error.
	


run_on  
 (single server)
If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: _single_server_ or _all_servers_. If you've specified _target: any_ above, this will apply to all servers.
	


run_as  
 (server user)
If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and _sudo_.
	


sudo (false)
If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and _run_as_.


	

**Commands** 
-



	


command![image](http://assets.cloud66.com/help/images/required.gif)
Command to be used - run in _/tmp/deploy_hooks_ by default
	


target ![image](http://assets.cloud66.com/help/images/required.gif)
Target server(s), with accepted values _any_, _rails_, _docker_, _mysql_, _postgresql_, _mongodb_, _redis_, _sinatra_, _padrino_, _custom_
	

	 **Note:** Please make sure you read the _run_on_ part, if your target is not _any_
	

	


execute ![image](http://assets.cloud66.com/help/images/required.gif)
Set to true for the command to execute.
	


apply_during  
 (all)
Specify when you want the deploy hook action to take place. Accepted values are _build_only_, _deploy_only_ or _all_. The _build_ step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are _deploy_ steps.
	


halt_on_error (true)
Specify whether the execution should continue or halt in the event of an error.
	


run_on  
 (single server)
If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: _single_server_ or _all_servers_. If you've specified _target: any_ above, this will apply to all servers.
	


run_as  
 (server user)
If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and _sudo_.
	


sudo (false)
If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and _run_as_.


	

**Scripts** 
-



	


source![image](http://assets.cloud66.com/help/images/required.gif)
This specifies the source location of your deploy hook file within your repository.
	


destination ![image](http://assets.cloud66.com/help/images/required.gif)
The destination path on your target server. You can also specify environment variables in your destination field, _&lt;%= ENV['STACK_PATH'] %&gt;_ for example.
	


target ![image](http://assets.cloud66.com/help/images/required.gif)
Target server(s), with accepted values _any_, _rails_, _mysql_, _postgresql_, _mongodb_, _redis_, _sinatra_, _padrino_, _custom_
	

	 **Note:** Please make sure you read the _run_on_ part, if your target is not _any_
	

	


apply_during  
 (all)
Specify when you want the deploy hook action to take place. Accepted values are _build_only_, _deploy_only_ or _all_. The _build_ step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are _deploy_ steps.
	


halt_on_error (true)
Specify whether the execution should continue or halt in the event of an error.
	


run_on  
 (single server)
If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: _single_server_ or _all_servers_. If you've specified _target: any_ above, this will apply to all servers.
	


run_as  
 (server user)
If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and _sudo_.
	


sudo (false)
If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and _run_as_.
	


parse (true)
Specifies whether the file being transferred should be parsed for [environment variables](/deployment/environment-variables). Using this you can embed _&lt;%= ENV['ENV_VAR'] %&gt;_ for example in your source file, and have it resolved during the deploy hook action.
	


owner  
 (your server user)
Ownership permissions for the file (and destination folder) on the target server. An example could be _user:group_.
	


execute (false)
Do you want to execute the file after it has been copied to its destination on the target server?






































































































































Default values (if the field is not explicitly specified) are shown in brackets.




