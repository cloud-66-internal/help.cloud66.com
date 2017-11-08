---
menuheaders: [ "Listing containers", "Usage", "Parameters", "Example", "Stopping containers", "Usage", "Parameters", "Example", "Restarting containers", "Usage", "Parameters", "Example", "Executing a command under an existing container", "Usage", "Parameters", "Example", "Attaching to a container", "Usage", "Parameters", "Example" ]
layout: post
template: one-col
title: Toolbelt container management
categories: Toolbelt
lead: ""
legacy: false
permalink: /:collection/:path
---







## Listing containers





### Usage





```
$ cx containers list [-s <stack>] [--server <slave server name>|<slave server ip>] [--trunc ]
```


Lists all the containers on the given stack. Optionally provide the server to list only the containers running on that server.







### Parameters


|       Parameter             | Default  |       Description           |
| --------------------------- |:--------:| ---------------------------:|
| stack                       | -        |   Name of the stack         |
| server name (optional)      | -        |   Name of the target server |
| trunc (optional)            | true     |   Truncate container Ids    |





### Example





```
$ cx containers list -s My_Awesome_App
$ cx containers list -s My_Awesome_App --server my_selected_server
$ cx containers list -s My_Awesome_App --trunc false
```









## Stopping containers






### Usage




```
$ cx containers stop [-s <stack>] <container>
```


Stops a particular container on the given stack based on container Id or container name.






### Parameters



|       Parameter             |  Default |      					 Description     			         |
| --------------------------- |:--------:| -------------------------------------------------------------:|
| stack                       | -        |   Name of the stack        									 |
| contaienr 			      | -        |  The container Id or container name (short version supported) |





### Example





```
$ cx containers stop -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers stop -s mystack 2844142cbf
$ cx containers stop -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers stop -s mystack web
```









## Restarting containers






### Usage





```
$ cx containers restart [-s <stack>] <container>
```


Restarts a particular container on the given stack based on container Id or container Name.





### Parameters




|       Parameter             |  Default |      					 Description     			         |
| --------------------------- |:--------:| -------------------------------------------------------------:|
| stack                       | -        |   Name of the stack        									 |
| contaienr 			      | -        |  The container Id or container name (short version supported) |





### Example





```
$ cx containers restart -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers restart -s mystack 2844142cbf
$ cx containers restart -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers restart -s mystack web
```









## Executing a command under an existing container

This command executes your command within the context of a running container. The default docker-flags are for an interactive shell though they can be specified with the command.






### Usage





```
$ cx containers exec [-s <stack>] <container> <command>
```








### Parameters



|       Parameter             | Default  |       Description           |
| ---------------------------|:--------:| ---------------------------:|
| stack                       |    -     |   Name of the stack         |
| container      			  |    -     |   The Id or name of the container you wish to exec |
| command          			  |    -     |   The command you wish to run   |
| docker-flags     			  |    -     |   Any Docker flags you wish to run with, eg. "--interactive=true --tty=true --detach=false"|
| environment          		  |    -     |   Full or partial environment name    |






### Example





```
$ cx containers exec -s mystack 2844142cbf /bin/bash
$ cx containers exec -s mystack web.pro-active-quick-witted-dinosaur /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=true --tty=true --detach=false" 2844142cbf /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=false --tty=false --detach=true" 2844142cbf /tmp/my_background_command
```









## Attaching to a container

Attaches to the running container and forwards output from the container to the console. Note: Does not forward signals and does not allow input.






### Usage





```
$ cx containers attach [-s <stack>] <container>
```










### Parameters



|       Parameter             |  Default |      					 Description     			         |
| --------------------------- |:--------:| -------------------------------------------------------------:|
| stack                       | -        |   Name of the stack        									 |
| contaienr 			      | -        |  The container Id or container name (short version supported) |





### Example





```
$ cx containers attach -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers attach -s mystack 2844142cbf
$ cx containers attach -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers attach -s mystack web
```





