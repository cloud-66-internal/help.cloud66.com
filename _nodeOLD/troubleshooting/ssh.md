---
layout: post
template: one-col
title: SSH
categories: troubleshooting
lead: ""
legacy: false
permalink: /:collection/:path
---


## How Toolbelt SSH works

Toolbelt detects your IP and after cloud 66 openning up the firewall to the detected IP, it runs a ssh command to your server. Based on this there are different scenarios that can lead to not being able to ssh to your servers.

## Versbose mode SSH

Verbose mode gives you more information on the ssh command running. It is a good way of checking if there is anything on your box that prevent you to SSH to the server. to run the ssh in verbose mode run the CX command like below:

```
cx -vvv ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```


## Cloud provider's firewall API has delay

It happens some times that on cloud providers the API for opening a port gets back with ok before the rule actually gets applied, thus SSH fails. By running the bellow commands you'll give it 10 seconds for the rule to be applied, and then you try.

```
cx lease -s <STACK_NAME> -e <ENVIRONMENT> -p 22 -t 10
sleep 10
cx ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```



## Detected IP is different

CX detects the IP that you get by searching "what is my IP" on google. Some network providers may use a different IP for different destination's port in this case port 22 for SSH. So to avoid this palying havoc with the `cx ssh` you will need to open the port to the world first and then `cx ssh`, so try running the following commands:

```
cx lease -s <STACK_NAME> -e <ENVIRONMENT> -p 22 -t 10 -f 0.0.0.0/0
cx ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```


## Prompted for Password

If you are being prompted for the password using CX, it means either your user doesn't exist on the 

Asking for password means either your Linux user doesn't exist on the server, or the key you are using doesn't match the one on the server -probably because of an incomplete key on the server. 

In order to fix any of the two issues above you can ask your team leader - Cannot see this happens to account owner - to remove your user permission from that stack and re-add your user again, so Cloud66 will go through the process of adding your username to the stack's servers again which I believe would fix this issue!

### Note:

Adding your user to servers may take up to 20 minutes as it is running in the background

