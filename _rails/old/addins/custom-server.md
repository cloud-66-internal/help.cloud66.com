---
menuheaders: [ "What is the custom server add-in?", "Add a custom server" ]
layout: post
template: one-col
title: Custom Server
categories: addins
lead: ""
legacy: false

permalink: /:collection/:path
---


### What is the custom server add-in?
Adding a custom server to your stack allows you to manage your own services while still benefiting from the Cloud 66 ecosystem.

A custom server will have the following Cloud 66 features enabled:

- [Monitoring](https://help.cloud66.works/{{ include.product }}/stack-management/server-monitoring.html)
- [Security]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %})
- Use of [Cloud 66 add-ins](https://help.cloud66.works/{{ include.product }}/addins/add-in-implementation.html)
- [Log rotation](https://help.cloud66.works/{{ include.product }}/stack-management/logging.html)
- [SSH to your server via toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/ssh.html)


## Add a custom server
To add a custom server, access the add-ins menu and click _Custom Server_. You will then be able to choose the size of your new server and how many you'd like to add. Once your server is added, you'll be able to see and manage it as part of your stack.

