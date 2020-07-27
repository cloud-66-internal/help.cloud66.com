## Gateway management

These commands allow you to manage your gateways.


## List gateways

This command lists all gateways on your account.


### Usage

```shell
$ cx --org <organization_name> gateways list [ --verbose]
```


### Parameters

|		Parameter 		   |	Default		|    Description    |
|--|:--:| -:|
|name				   |		—		|The name of the gateway|
|address 	   | 	—		| Public address of the gateway. It could be the IP or DNS address|
|username	 	   |	—	| The username which should be used to connect to gateway|
|private-ip 	   |	—	| The private ip of the gateway.|
{:.table}


### Example

```shell
$ cx --org My_Awesome_org gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
```



## Open gateway

Make the gateway available to use with cloud66 for ttl amount of time.


### Usage

```shell
$ cx --org <organization_name> gateways open --name <gateway name> --key <The path to the gateway server key> --ttl <time to live >
```


### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| --:|
|		name			   |		—		|Name of the gateway|
{:.table}



### Example

```shell
$ cx --org My_Awesome_org gateways close --name aws_bastion
```



## Remove gateway

This command will remove the gateway from your account


### Usage

```shell
$ cx --org <organization_name> gateways remove --name <gateway name>
```


### Parameters

|		Parameter 		   |	Default		|    Description    |
|--|:--:| -----:|
|		name			   |		—		|Name of the gateway|
{:.table}



### Example

```shell
$ cx --org My_Awesome_org gateways remove --name aws_bastion
```

