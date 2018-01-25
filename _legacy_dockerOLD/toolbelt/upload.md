---
layout: post
template: one-col
title: Toolbelt upload command
categories: Toolbelt
lead: ""
legacy: true

permalink: /:collection/:path
---


## Upload

Use this command to copy a file from your local computer to the remote server.


### Usage

```
$ cx upload [-s <stack>] [--server <server name>] [source file] [target directory]
```
If you don't specify a target directory, the file will be uploaded to /tmp on your remote server.

### Parameters

|		Parameter 		   	 |	Default		|   Description    |
|----------------------------|:------------:| ----------------:|
|stack 					  	 |		—		| Name of the stack|
|server name (optional)	  	 | 	—			| Name of the server to access |
|source file	  		  	 | 	—			| The path to the file on your local computer |
|target directory (optional) |		—		| Your remote server target path |

### Example

```
$ cx upload -s "My Awesome App" --server web /tmp/file.txt /tmp/file.txt
```
