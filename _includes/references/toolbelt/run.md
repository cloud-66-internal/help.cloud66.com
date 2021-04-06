## Run command

This command will execute a command directly on the remote server. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it, starts a SSH session, executes the command specified and returns its output.


### Usage

```shell
$ cx run -s <stack> --server <server name>|<server ip>|<server role> --service '<command>'
```




### Parameters


At least one of the optional server parameters are necessary in order to identify which server to run the command on.

|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		|Name of the application|
|server					   |		—		| Specify a server |
|server name (optional) 	   | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (e.g. web) |
|service (optional)	 	   |	—	| The service in which to run the command (Maestro applications only) |
{:.table}


### Example

```shell
$ cx run -s "My Awesome App" --server web1 'pwd'
```

### Examples of service usage

The service parameter only applies to Maestro applications and allows you to enter a Docker container with your command (based on the latest image of that service).

* This command runs "ls -la" in a **new** container of the "webapp" service, returns the output, and exits:
```shell
$ cx run -s mystack --svc webapp 'ls -la'
```

* This command runs "bundle exec rails c" in a **new** container of the "api" service, and remains in the session
```shell
$ cx run -s mystack --service api --interactive 'bundle exec rails c'
```

* This command runs "bundle exec rails c" **inside** the specified container (web-123), and remains in the session.
```shell
$ cx run -s mystack --container web-123 -i 'bundle exec rails c'
```


