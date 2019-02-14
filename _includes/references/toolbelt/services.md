
## Listing services


### Usage

```
$ cx services list [-s <stack>] [--server <slave server name>|<slave server ip>]
```

Gets information about the given service such as `service name, source type`, `git-ref`, `image info`, `container count`  and `docker commands`.
Optionally provide the server to act only on that server.


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		|Name of the application|
|service name			   |		—		| Name of the target service |
|server name (optional)    | 	—		| Name of the target server |
|group (optional)    | 	—		| Name of the target server group (i.e. web/db/docker etc)|
|count   | 	—		| Desired count (i.e. +2, -3 or 5) |
{:.table}


### Example

```
$ cx services scale -s mystack my_web_service 1
$ cx services scale -s mystack a_backend_service --server backend +5
$ cx services scale -s mystack a_backend_service -2
$ cx services scale -s mystack a_backend_service --group docker 3
```




## Stopping services


### Usage

```
$ cx services stop [-s <stack>] <service name> [--server <server name>|<server ip>]
```

Gets information about the given service such as `service name, source type`, `git-ref`, `image info`, `container count`  and `docker commands`.
Optionally provide the server to act only on that server.


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		|Name of the application|
|service name			   |		—		| Name of the target service |
|server name (optional)    | 	—		| Name of the target server |
{:.table}


### Example

```
$ cx services restart -s mystack my_web_service
$ cx services restart -s mystack a_backend_service
$ cx services restart -s mystack --server my_server my_web_service
```




## Getting service information


### Usage

```
$ cx services info [-s <stack>] <service name> [--server <server name>|<server ip>]
```
Gets information about the given service such as `service name, source type`, `git-ref`, `image info`, `container count`  and `docker commands`.
Optionally provide the server to act only on that server.

### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		|Name of the application|
|service name			   |		—		| Name of the target service |
|server name (optional)    | 	—		| Name of the target server |
{:.table}

### Example

```
$ cx services info -s mystack my_web_service
$ cx services info -s mystack a_backend_service
$ cx services info -s mystack --server my_server my_web_service
```




### Result

```
NAME             VALUE
name             web
source type      git
git-ref          d33e491e5a33
container count  1
image name       web
image uid        92fd690d33fe43f55c80dc6687a7171c
image tag        20150824122440373
command          bundle exec rails s production
build command    bundle exec rake db:schema:load
deploy command
```

