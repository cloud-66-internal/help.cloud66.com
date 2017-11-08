---
menuheaders: [ "Tunnel command", "Usage", "Parameters", "Examples" ]
layout: post
template: one-col
title: Toolbelt tunnel command
categories: Toolbelt
lead: ""
legacy: true

permalink: /:collection/:path
---


## Tunnel command

This command opens an SSH tunnel from your local machine to a remote server on the given ports. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it and opens an SSH tunnel.


### Usage

```
$ cx tunnel -s <stack> --server <server name>|<server ip>|<server role> --remote <remote port> --local <local port>
```




### Parameters

At least one of the optional server parameters are necessary in order to identify which server to run the command on.

Also, you need to specify at least the `remote` port. If `local` is missing, `remote + 1` will be used as `local`. For example, `--remote 3306` without `local` will use `3307` as `local`.
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|server  		   | 	—			| Specify a server |
|server name (optional)	   | 	—			| Name of the target server |
|server ip (optional)	   | 	—			| IP of the server to access |
|server role (optional)	   | 	—			| Role of the server to access (eg. web) |
|remote 					   |		—		| Remote port for the tunnel |
|local (optional)					   |		—		| Local port for the tunnel. If not specified, remote + 1 is used. |

### Examples

```
$ cx tunnel -s "My Awesome App" --server mysql --remote 3306 --local 13306
```

