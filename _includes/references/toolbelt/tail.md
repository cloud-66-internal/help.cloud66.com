### Usage

```
$ cx tail [-s <stack>] <server name>|<server ip>|<server role> <log filename>
```


### Parameters


At least one of the optional parameters are necessary in order to identify which server to run the command on.

|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		| Name of the application|
|server name (optional)    | 	—			| Name of the server to access |
|server ip (optional)      | 	—			| IP of the server to access |
|server role (optional)    | 	—			| Role of the server to access (e.g. web) |
|log filename			   |		—		| The logfile to tail (e.g. nginx_error.log) |
{:.table}

### Example

```
$ cx tail -s "My Awesome App" web nginx_error.log
```
