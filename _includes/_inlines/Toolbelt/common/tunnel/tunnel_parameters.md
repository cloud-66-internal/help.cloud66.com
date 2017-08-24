<!-- usedin: [ _legacy_docker/Toolbelt] - post: -->


### Parameters

At least one of the optional server parameters are necessary in order to identify which server to run the command on.

Also, you need to specify at least the `remote` port. If `local` is missing, `remote + 1` will be used as `local`. For example, `--remote 3306` without `local` will use `3307` as `local`.


|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|server  		   | 	—			| Specify a server |
|server name (optional)	   | 	—			| Name of the target server |
|server ip (optional)	   | 	—			| IP of the server to access |
|server role (optional)	   | 	—			| Role of the server to access (eg. web) |
|remote 					   |		—		| Remote port for the tunnel |
|local (optional)					   |		—		| Local port for the tunnel. If not specified, remote + 1 is used. |
