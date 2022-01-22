---
layout: post
template: one-col
title: Deploying behind a gateway server
categories: how-to-guides/deployment
order: 50
lead: "How to deploy your application to a DMZ"
legacy: false
tags: ["security"]
permalink: /:collection/:path:output_ext
---


## About deployment gateways

If you want to deploy your application in a DMZ, you should prepare a bastion server which enables you to connect to your DMZ. You should define a **Deployment Gateway** in your Cloud66 account and specify the information of the bastion server, then you will be able to deploy your application in the DMZ.


### Important

Team members should have **Edit Deploy Gateways** access rights to be able to use the deployment gateway.

## Deploying an application behind a gateway

Gateway management is available through [toolbelt](/maestro/references/toolbelt/toolbelt-commands.html#gateways-list) .

First, you need to define a gateway. For example:

```shell
$ cx gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
```

In order to use this gateway for an application deployment, you need to first specify it in the manifest:

```yaml
production:
       gateway:
           name: aws_bastion
           username: ec2-user
```

...and then make it available before you start the deployment:

```shell
$ cx gateways open --name aws_bastion --key /tmp/gateway.pem --ttl 1h
```

Now you can deploy your application.

After the deployment is finished you can invalidate the gateway or leave it until the TTL is over.

```shell
$ cx gateways close --name aws_bastion
```


## Accessing servers behind a gateway

If you want to connect to your servers behind a bastion server you will need to have access to the bastion server's key. You can then use Toolbelt to connect to your server as follows:

```shell
$ cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion
```

