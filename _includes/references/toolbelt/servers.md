
## Server management

These commands allow you to list and set various settings on your servers.


## List server settings

This command lists the possible settings for a specific server.

### Usage

```
$ cx servers settings list [-s <stack>] --server <server name>|<server ip>|<server role>
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack|
|server name (optional)    | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (eg. web) |

### Example

```
$ cx servers settings list -s My_Awesome_App --server web
```


## Set server settings

Use this command to set server settings from the command line.


### Usage

```
$ cx servers settings set [-s <stack>] --server <server name>|<server ip>|<server role> <setting>=<value>
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack|
|server name (optional) 	   | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (eg. web) |
|setting 	   |	—	| The setting you would like to change |
|value	   |	—	| The value for the setting |

### Examples

```
$ cx servers settings set -s "My Awesome App" --server lion
```


## Reboot servers

Use this command to reboot a specific server from the command line


### Usage

```
$ cx servers reboot [-s <stack>] [-e stack environment] --server <server name> 
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack |
|server name (optional)    | 	—			| Name of the server to reboot |
|e (optional) 	   		   | 	—			| Your stack environment |

### Example

```
$ cx server reboot -s mystack --server lion -e production
```
