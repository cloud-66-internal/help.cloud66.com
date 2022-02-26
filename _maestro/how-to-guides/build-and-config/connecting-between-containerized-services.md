---
layout: post
template: one-col
title: Connecting between containerized services
categories: how-to-guides/build-and-config
order: 10
lead: "How to use Elastic DNS to connect between containerized services within your Maestro application"
legacy: false
tags: ["networking", "services"]
permalink: /:collection/:path:output_ext
---

## Overview

When services need to connect to each other in a containerized environment, you can't rely on IP addresses since containers are both ephemeral and abstracted from the underlying servers. Instead you can use the **service name** and (where needed) the **application namespace**. When used together these are known the service’s **Elastic DNS address**. 

## Finding service names and namespaces

You can find the names of all your services, as well as your application’s namespace on your [Cloud 66 Dashboard](https://app.cloud66.com/). 

- **Service names** are listed on the front page of your application overview.
- To see the full **Elastic DNS address**, click the service name and then mouseover the service name in the Containers page (if you have multiple instances of a service, they will all use the same ElasticDNS address).
- The **application namespace** can also be found under ⚙️Settings & Information (note that it’s **different** from your application name)

## Connecting to a service in the same application

Let's imagine your application has two services - **web** and **api**. In our application, **web** needs to connect to **api** internally for data.

Our **api** runs Rails, and listens on *port 3000*. So we configure the **api** service to have container *port 3000* exposed. This is now exposed *internally* only - no one can access **api** from outside of your application. The defintion of the **api** service in `service.yml` will look like this:

```yaml
services: 
  api: 
    ports:
    - container: 3000 
```

If we want to connect directly to the **api** service from *within the* **web** service we can now simply use `http://api:3000` as the address. We will configure your application so that "api" is automatically translated to the location where your **api** service is listening.

Now, if we re-configure **api** so that it runs over port 80 instead, we can connect to it using `http://api`

We can do similar things if these services use TCP or UDP:

- `tcp://api:8000`
- `udp://api`

## Connecting to services in different applications

If two Maestro applications in the same cluster need to communicate with each other they use the same syntax as above, but add **.namespace** to reference the other application.

So, if our second application uses the **web-front-end** namespace, and the application in our example above uses the **backoffice-workers** namespace, you could connect between them as follows:

- `http://web-worker.web-front-end:8080` would connect to the **web-worker** service on port 8080.
- `tcp://scheduler.backoffice-workers:8000` would connect  to the backoffice **scheduler** over port 8000
- `http://processor.backoffice-workers` would connect to the **processor** over standard HTTP

<div class="notice notice-warning"><p markdown="1">If you don't want two services to be able to connect to each other internally (perhaps for compliance or security reasons) then you should not run them on the same Maestro cluster.</p></div>

## Connecting to databases

You can connect to databases from containers using the same syntax. For example your default MySQL server can be addressed as `http://mysql:3306`.  

If your application has multi databases, they can be addressed using the database type appended by the name of the server. For example: `mysql-default` and `mysql-leopard`.