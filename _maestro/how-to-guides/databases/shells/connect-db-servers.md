---
layout: post
template: one-col
title: Connecting to database servers
categories: how-to-guides/databases
order: 10
lead: "How to connect to your database servers within Maestro"
legacy: false
tags: ["debugging"]

permalink: /:collection/:path:output_ext
---

There are two ways to connect to your databases running in Maestro:

* Accessing the server directly via SSH and then logging in using terminal commands
* Using a desktop database client


## Via SSH

You can connect directly into your database server and invoke a database console from there. To do that, please refer to our [SSH guide](/maestro/how-to-guides/common-tools/ssh-to-server.html) documentation.

## With a client

To use a database client, you will first need to add a firewall rule to allow traffic from your desktop to your Maestro application. You can [follow our guide](/maestro/tutorials/firewall-rule.html) on the subject.

Once the firewall is open you can use a database client from your local computer to access the public IP address of the server hosting the database. You can find that IP by: 

* Visting your [Dashboard](https://app.cloud66.com)
* Opening **Application Overview** for the app in question
* Clicking on the *Servers* tab at the top of the main panel
