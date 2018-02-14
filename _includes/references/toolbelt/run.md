## Run command

This command will execute a command directly on the remote server. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it, starts a SSH session, executes the command specified and returns its output.


### Usage

```
$ cx run -s <stack> --server <server name>|<server ip>|<server role> --service '<command>'
```




### Parameters


At least one of the optional server parameters are necessary in order to identify which server to run the command on.

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack|
|server					   |		—		| Specify a server |
|server name (optional) 	   | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (eg. web) |
|service (optional)	 	   |	—	| The service in which to run the command (Docker stacks only) |


### Examples

```
$ cx run -s "My Awesome App" --server web1 'pwd'
```

The service parameter applies to Docker stacks and allows you to enter a Docker container with your command (based on the latest image of that service). Some examples are:

```
$ cx run -s My_Awesome_App --server web1 --service my_api_service '/bin/bash'
```


```
$ cx run -s My_Awesome_App --server web1 --service my_api_service 'bundle exec rails c'
```

