---
layout: post
template: one-col
title: Toolbelt SSH to servers
categories: Toolbelt
lead: ""
legacy: false

permalink: /:collection/:path
---


## SSHing to your server

Allows direct SSH shell into your servers by opening the firewall temporarily for the source IP address, downloading the SSH key and starting a SSH session with one command. 

Your server SSH key is downloaded to `~/.ssh` and re-used in subsequent SSH connections via the toolbelt. You need to have shell to server rights over the stack to use this command.

If your server deployed behind a bastion server, you need to provide the private key needed to connecting to bastion server to be able to connect to your server.

### Usage

```
$ cx ssh  [--gateway-key <The path to the key of gateway server>]    [-s <stack>] <server name>|<server ip>|<server role>
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack name |		—		|Name of the stack to access|
|gateway-key (optional)		   |		—		|The path to the key of gateway server|
|server name (optional) 	   | 	—		| Name of the server to access |
|server ip (optional)	 	   |	—	| IP of the server to access |
|server role (optional)	 	   |	—	| Role of the server to access (eg. web) |
|e (optional) 	   |	—	| Your stack environment|

### Example

```
$ cx ssh -s "My Awesome App" Lion -e production
$ cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion -e production
```
