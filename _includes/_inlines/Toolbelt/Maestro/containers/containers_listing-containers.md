<!-- post: -->


## Listing containers

### Usage
```
$ cx containers list [-s <stack>] [--server <slave server name>|<slave server ip>] [--trunc <false|true>]
```
Lists all the containers on the given stack. Optionally provide the server to list only the containers running on that server.



|       Parameter             | Default  |       Description                |
| --------------------------- |:--------:| ---------------------------:|
| stack                       | -        |   Name of the stack         |
| server name (optional)      | -        |   Name of the target server |
| trunc (optional)            | true     |   Truncate container Ids    |
