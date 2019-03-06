
## Listing processs


### Usage

```
$ cx processes list [-s <stack>] [--server <server name>]
```
List all the processes running on an application or a server. Optionally provide the server to list only the processes running on that server.

### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		| Name of the application|
|process name   		   | 	—			| Name of the target process |
|server name (optional)	   | 	—			| Name of the target server |
|count 					   |		—		| Desired relative count or absolute count (i.e. [+2],[-3] or 5) |
{:.table}


### Example

```
$ cx processes scale -s mystack --server backend1 --name worker [+5]
$ cx processes scale -s mystack --server backend2 --name worker [-5]
$ cx processes scale -s mystack --server backend3 --name worker 15
$ cx processes scale -s mystack --name worker 2
```
