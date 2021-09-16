## Tail

This will run a Linux tail command on the specified server and given log file. You must specify the log file name including the extension. If you don't specify a path, or specify a relative path, then we will assume `<stack-directory>/current/log` (i.e. the subdirectory under the `$STACK_PATH`) as the "current" directory. You can specify a different (absolute) log path as needed.

This command is only supported on Linux and OS X.

### Usage

```shell
$ cx tail [-s <stack>] <server name> <log filename> #Will use $STACK_PATH dir
$ cx tail [-s <stack>] <server ip>  /optional/log/path/<log filename>
$ cx tail [-s <stack>] <server role> /optional/log/path/<log filename>
```

Server names and roles are case insensitive and will work with their starting characters as well.

### Parameters

A server parameter is required in order to identify which server to run the command on (i.e you must specify at least a server name, IP address or role).

|		Parameter 		   |	Default	|   Description    |
|---|:--:| :----|
|stack 					   |		—		| Name of the application|
|log path (optional)      | 	—			| Path to log directory |
|server name (need one)     | 	—			| Name of the server to access |
|server ip (need one)      | 	—			| IP of the server to access |
|server role (need one)    | 	—			| Role of the server to access (e.g. web) |
|log filename			   |		—		| The log file to tail (e.g. nginx_error.log) |
{:.table}

### Examples

```shell
$ cx tail [-s <stack>] <server name> <log filename> #Will use $STACK_PATH dir
$ cx tail [-s <stack>] <server ip>  /optional/log/path/<log filename>
$ cx tail [-s <stack>] <server role> /optional/log/path/<log filename>
```
