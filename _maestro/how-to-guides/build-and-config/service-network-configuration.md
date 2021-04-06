---
layout: post
template: one-col
title: Service networking configuration (V1)
categories: how-to-guides/build-and-config
order: 100
lead: "Configure the service network"
legacy: false
tags: ["security", "customization", "service.yml"]
permalink: /:collection/:path:output_ext
---

<div class="notice notice-danger">
<p>PLEASE NOTE:<br/> This guide only applies to Version 1 of Maestro, also know as <em>CSv1</em>. If you are new to Maestro then you should use the Dashboard features to manage this configuration.</p></div>


## Traffic distribution

The external traffic to your server(s) is distributed by a Nginx reverse proxy for each upstream on HTTP and HTTPS. You can define which ports each service listens on (if any) using the `ports` directive below. 

If you have multiple containers running for your service(s), round-robin will be used to distribute traffic between them (providing load balancing). Should you have multiple services listening on the same external port, the `traffic_matches` directive is used to direct traffic to a specific service based on the hostname.


## ContainerNet

ContainerNet is a private and secure network (based on [Weave](http://weave.works/)) between all containers across all the servers and components in your application, including databases. 

This network provides an internal IP address to each container, automatically updating with DHCP and DNS and is fully integrated with the [life-cycle management of your services](/maestro/how-to-guides/build-and-config/service-network-configuration.html).

### Encryption

Weave includes a secure, performant authenticated [encryption mechanism](http://blog.weave.works/2015/06/16/weave-net-cryptography-faq/) which we automatically configure on your behalf, so you don’t have to take any custom encryption actions yourself.


## ElasticDNS

ElasticDNS sits on top of ContainerNet to provide simple DNS-based service discovery without having to change your code. This service consists of two parts: a small client and a central service. 

The client has a DNS server and local cache and runs in a container on your server(s). It serves DNS queries ending with `.cloud66.local` by making a query to the central server and caching the results for their [TTL duration](http://en.wikipedia.org/wiki/Time_to_live). This means that you can call, for example, `api.cloud66.local` to contact a container running your API service. 

ElasticDNS knows your infrastructure and your data sources are also added to the service discovery. For example, your MySQL database can be discovered using the DNS name `mysql.cloud66.local`, MongoDB can be found using `mongodb.cloud66.local`.

### Using database groups with ElasticDNS

If your application has two or more [database groups](/maestro/how-to-guides/databases/attaching-multiple-databases.html), then the ElasticDNS addresses for those groups will be derived from their names. For example if you have two MySQL database groups named `main` and `spare` then the ElasticDNS addresses will be:

- `main.mysql.cloud66.local`
- `spare.mysql.cloud66.local`

If one of these groups is set as the ["primary"](/maestro/how-to-guides/databases/attaching-multiple-databases.html#understanding-primary-database-groups), it will also be mapped to the default mysql group (`mysql.cloud66.local`).

### Dynamic routing

As ElasticDNS is centrally backed, it also knows about the caller, which is important when you have multiple versions of your application running at any given moment (during deployment for example). 

Consider the following scenario: you have an app consisting of 2 services: a `web` service (accessible externally) and an `API` service which is used by the web service internally. Every time you deploy your application a new version of both services is rolled out to your servers.

Whenever you deploy, the load balancer for the externally available services (`web` in this case) is instructed to switch new traffic to the new containers while still serving the existing traffic with the old containers. So if a visitor to your site is in the middle of a large file upload, it is not going to be interrupted. At this point, you have 2 versions of your web and 2 versions of your API service up and running.

ElasticDNS is clever enough to know which version of the app is running in a container. So if an **old** web container asks for `api.cloud66.local` it will get the address to an **old** API container, but if a **new** web container asks for the same thing, it will get the address to a **new** API container.

## Configuration

There are a number of directives you can set in your service configuration to customize your service network settings:

- [dns behaviour](#dns-behaviour)
- [load balancing](#load-balancing)
- [ports](#ports)
- [traffic matches](#traffic-matches)

(Read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help on customizing your service configuration.)

### DNS Behaviour

The `dns_behaviour` directive allows you to change the default behavior of returned DNS addresses of different versions. As outlined above, ElasticDNS always try to return the version of the container that has the same version of the caller. You can change this behavior by setting `dns_behaviour` value to `non-versioned`, in which case ElasticDNS will return the address of containers with the latest version.

### Load Balancing

You can change the load balancing method of ElasticDNS with the `load_balancing` directive. The accepted values are `roundrobin`, `sticky` and `closest`, and the default value is `roundrobin` which return the list of container's IP for the requested service in roundrobin. If you choose the `sticky` option, you will get the last IP you got (if you request after 1 minute you may get a new IP). If you choose the `closest` option, you will get the list of container's IP that exists on caller server (it will return all available IPs if there is no container of the requested service on caller server).

### Ports

The `ports` option allows you to specify ports definitions for your service. The format of the ports definition is a list of `CONTAINER_PORT:HTTP_PORT:HTTPS_PORT`. Note that the `HTTP_PORT` and `HTTPS_PORT` fields are optional, and you can have HTTPS without HTTP if you wish and vice-versa by including the colons, but leaving that corresponding port number blank. You can define multiple port definition triplets for a single service using the above format, for example:

```yaml
services:
    <service_name>:
        ports: ["3000:80:443", "4000::8443", "5000"]
```

In this example, the application is listening on port 3000 in the container, and that port is exposed via HTTP on port 80, and HTTPS on port 443. Port 4000 inside the container is also available on port 8443 externally, and port 5000 in the container is available locally on the server. These HTTP/HTTPS ports are available from outside the server, and any traffic to these ports will be redirected to any containers running this service. During scaling, any containers running this service will get traffic distributed to them in a round robin fashion. 

#### Advanced ports

You can also specify ports declaratively, and assign tcp/udp mappings directly to the host. This will mean that containers are mapped directly to the corresponding tcp/udp port on the host. Please note that if you use tcp/udp port mappings then you can only have a single container of that service running per server (cannot map multiple containers to the same host port). Note that each port specification is optional. Http/Https ports will be mapped via Nginx automatically. For example:

```yaml
services:
    <service_name>:
        ports:
          - container: 3000
            http: 80
            https: 443
            tcp: 25
            udp: 111
```

* * *

### Traffic matches

The `traffic_matches` option allows you to specify an array of string server name matches for your service. These are automatically configured in your reverse proxy service (Nginx). In the following example, if traffic comes in on `app.your_domain.com` or `*.anotherdomain.com` on this service port, then traffic will automatically get routed to it. This option also allows you to have multiple services listening on the same port (port 80 for example) as long as they have different rules for matching server names.

```yaml
services:
    <service_name>:
        traffic_matches: ["app.your_domain.com", "*.anotherdomain.com"]
```


### Using traffic matches to reroute all traffic

The `traffic_matches` option can also be used to ensure that any and all traffic hitting your servers is routed to a specific service. To do this, add  `traffic_matches` to that service and set it to match `"_"` (underscore). This is will route any traffic that hits your servers to this service. For example:

```yaml
    services:
        <service_name>:
            traffic_matches: ["_"]
```

Be cautious with this approach as it is effectively a global setting and may disrupt your other services if there are any conflicts.
