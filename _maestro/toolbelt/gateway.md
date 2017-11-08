---
menuheaders: [ "Gateway management", "List gateways", "Usage", "Parameters", "Example", "Add gateway", "Usage", "Parameters", "Example", "Open gateway", "Usage", "Parameters", "Example", "Close gateway", "Usage", "Parameters", "Example", "Remove gateway", "Usage", "Parameters", "Example" ]
layout: post
template: one-col
title: Toolbelt gateway management
categories: Toolbelt
lead: ""
legacy: false

permalink: /:collection/:path
---


## Gateway management

These commands allow you to manage your gateways.


## List gateways

This command lists all gateways on your account.


### Usage

```
$ cx --org <organization_name> gateways list [ --verbose]
```


### Parameters
|		Parameter 		   |	Default		|    Description    |
|--------------------------|:--------------:| -----------------:|
|		verbose	(optional)		   |		—		|Show more information about gateways|


### Example

```
$ cx --org My_Awesome_org gateways list
$ cx --org My_Awesome_org gateways list --verbose
```


## Add gateway

This command add a gateway into your account.


### Usage

```
$ cx --org <organization_name> gateways add --name <gateway name> --address <gateway address> --username <gateway username>  --private-ip <private ip of gateway>
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|name				   |		—		|The name of the gateway|
|address 	   | 	—		| Public address of the gateway. It could be the IP or DNS address|
|username	 	   |	—	| The username which should be used to connect to gateway|
|private-ip 	   |	—	| The private ip of the gateway.|

### Example

```
$ cx --org My_Awesome_org gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
```



## Open gateway

Make the gateway available to use with cloud66 for ttl amount of time.


### Usage

```
$ cx --org <organization_name> gateways open --name <gateway name> --key <The path to the gateway server key> --ttl <time to live >
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|name 					   |		—		|The name of the gateway|
|key	   | 	—		| The path to the key you want to add|
|ttl	 	   |	—	| Amount of time you want the gateway available (e.g 1h, 30m, 30s,... )|


### Example

```
$ cx --org My_Awesome_org gateways open --name aws_bastion --key /tmp/gateway.pem --ttl 45m
```



## Close gateway

Invalidate the gateway key so it will not be available for cloud66 usage.

### Usage

```
$ cx --org <organization_name> gateways close --name <gateway name>
```


### Parameters
|		Parameter 		   |	Default		|    Description    |
|--------------------------|:--------------:| -----------------:|
|		name			   |		—		|Name of the gateway|


### Example

```
$ cx --org My_Awesome_org gateways close --name aws_bastion
```



## Remove gateway

This command will remove the gateway from your account


### Usage

```
$ cx --org <organization_name> gateways remove --name <gateway name>
```


### Parameters
|		Parameter 		   |	Default		|    Description    |
|--------------------------|:--------------:| -----------------:|
|		name			   |		—		|Name of the gateway|


### Example

```
$ cx --org My_Awesome_org gateways remove --name aws_bastion
```

