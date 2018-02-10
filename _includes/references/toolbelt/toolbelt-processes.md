
## Listing processs


### Usage

```
$ cx processes list [-s <stack>] [--server <server name>]
```
List all the processes running on a stack or a server. Optionally provide the server to list only the processes running on that server.

### Parameters


|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|server name (optional)	   | 	—			| Name of the target server |

### Example

```
$ cx processes list -s My_Awesome_Stack
$ cx processes list -s My_Awesome_Stack --server my_selected_server
```
* * *

## Scaling processes

To scale processes up or down on a stack or on a specific server.


### Usage

```
$ cx processes scale [-s <stack>] [--server <server name>] [--name <process name>] <count>
```

Scales up/down <count> processes. If you specify [+X] or [-X] for the count, then that number of processes will be added/removed. Specifying a number without [ ] will act as an absolute value meaning that the resulting number of processes will be that number (it might scale up or down). Optionally provide the server to act only on that server.


### Parameters


|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|process name   		   | 	—			| Name of the target process |
|server name (optional)	   | 	—			| Name of the target server |
|count 					   |		—		| Desired relative count or absolute count (i.e. [+2],[-3] or 5) |

### Example

```
$ cx processes scale -s mystack --server backend1 --name worker [+5]
$ cx processes scale -s mystack --server backend2 --name worker [-5]
$ cx processes scale -s mystack --server backend3 --name worker 15
$ cx processes scale -s mystack --name worker 2
```
