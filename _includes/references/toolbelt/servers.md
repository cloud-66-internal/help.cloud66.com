
## Server management

These commands allow you to list and set various settings on your servers.


## List server settings

This command lists the possible settings for a specific server.

### Usage

```shell
$ cx servers settings list [-s <stack>] --server <server name>|<server ip>|<server role>
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		|Name of the application|
|server name (optional) 	   | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (e.g. web) |
|setting 	   |	—	| The setting you would like to change |
|value	   |	—	| The value for the setting |
{:.table}


### Examples

```shell
$ cx servers settings set -s "My Awesome App" --server lion
```


## Reboot servers

Use this command to reboot a specific server from the command line


### Usage

```shell
$ cx servers reboot [-s <stack>] [-e application environment] --server <server name> 
```


### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		|Name of the application |
|server name (optional)    | 	—			| Name of the server to reboot |
|e (optional) 	   		   | 	—			| Your application environment |
{:.table}


### Example

```shell
$ cx server reboot -s mystack --server lion -e production
```
