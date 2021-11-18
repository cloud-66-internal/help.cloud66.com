---
layout: post
template: one-col
title: Configure Service Networking
categories: how-to-guides/build-and-config
order: 4
lead: "Advanced service network configuration and port mapping"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

This guide covers more complex and advanced cases of service networking. If you've never configured a Maestro service before, consider following [our tutorial](/maestro/tutorials/container-ports.html) on port mapping first.

If you need an introduction to the concept of Service Networking, you can find one [here](/maestro/the-basics/concepts-and-terminology.html#service-networking).

Read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help on customizing your service configuration.

## Non-HTTP ports (TCP and UDP)

If your application does not use HTTP traffic you can map ports by specifying the protocol (TCP or UDP).

Let's imagine we have a service that listens on port 5454 on UDP and we would like to make it available to the outside world on port 111. 

To achieve this via the *edit service* interface: 

1. Open the Application Overview from your Dashboard
2. Click on the *Services* tab
3. Click on the *Edit service* icon next to the service you wish to configure. This will open a panel on the left-hand side of your screen.
4. Click on the YAML tab in the panel
5. Change **Container** to `5454`
6. Delete any lines for `HTTP` and `HTTPS` (unless your service needs them)
6. Add a new line: `udp:111`
7. Save your changes and deploy your application

If you'd prefer to make these changes directly in the (full) `service.yml` the result would look similar to this:

```yaml
services:
    my_service:
        ports:
          - container: 5454
            udp: 111
```

In the example below, our service listens to TCP port 8787 and we want to make it available on port 9000 to the outside world:

```yaml
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
```

Note that you don't need to set the protocol for the container port - that is defined by the service itself. By specifying the protocol of the *HTTP Port* you're ensuring that requests that reach the container are using the same networking protocol as the service itself.

## Mapping multiple ports

Some services listen to multiple ports. An example is InfluxDB which listens to different ports for queries and admin controls. You can map these relationships using an array in the `service.yml`. For example:

```yaml
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
          - container: 8788
            tcp: 9001
```

## Examples of default ports

Some example of default ports used by popular programming frameworks or application servers:

  <table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th>Application</th> 
     <th>Default Port</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr>
     <td>Rack (webrick)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Rack (unicorn, thin, puma)</td>
     <td>9292</td>
    </tr> 
    <tr>
     <td>Node (Express)</td>
     <td>3000</td>
    </tr> 
    <tr>
     <td>Java (Play)</td>
     <td>9000</td>
    </tr> 
    <tr>
     <td>RethinkDB</td>
     <td>8080</td>
    </tr> 
    <tr>
     <td>InfluxDB</td>
     <td>8083, 8086, 8090, 8099</td>
    </tr> 
        <tr>
     <td>Python (Django)</td>
     <td>8000</td>
    </tr> 
   </tbody> 
  </table> 

## Traffic matching

The `traffic_matches` option allows you to route incoming traffic to different services based on the incoming domain name. You can specify an array of domains (as strings) to match to your service.

In the following example, if traffic comes in on `app.your_domain.com` or `www.anotherdomain.com` on this service port, then traffic will automatically get routed to `my-service`. 

```yaml
services:
  my-service:
    traffic_matches: ["app.your_domain.com", "www.anotherdomain.com"]
```

This option also allows you to have multiple services listening on the same port (port 80 for example) as long as they have different rules for matching server names. For example:

```yaml
services:
  my-first-service:
    traffic_matches: ["app.your_domain.com", "www.anotherdomain.com"]
    ports:
    - container: 5000
      http: 80
  my-second-service:
    traffic_matches: ["app.third_domain.com", "fourthdomain.com"]
    ports:
    - container: 3000
      http: 80
```

### Managing traffic matching via the Dashboard

You can also add and update traffic matching via the dashboard. To edit an existing service: 

1. Log into your [Dashboard](https://app.cloud66.com/)
2. Click through to the app you need to update
3. In the **Services** panel, click the edit icon next to the service you need to update
4. In the drawer that slides out from the left, click the *Network & Storage* tab (at the top)
5. Add or update (or remove) your domain matching strings
6. Click *Save Service*
7. Apply the change to the service by clicking the green Apply button (above the **Services** panel)
8. Redeploy your application to roll out the change

### Using traffic matches to reroute all traffic

The `traffic_matches` option can also be used to ensure that any and all traffic hitting your servers is routed to a specific service. To do this, add  `traffic_matches` to that service and set it to match `"_"` (underscore). This is will route any traffic that hits your servers to this service. For example:

```yaml
    services:
        <service_name>:
            traffic_matches: ["_"]
```

Be cautious with this approach as it is effectively a global setting and may disrupt your other services if there are any conflicts.

## DNS Behaviour

The `dns_behaviour` directive allows you to change the default behavior of returned DNS addresses of different versions. As outlined above, ElasticDNS always try to return the version of the container that has the same version of the caller. You can change this behavior by setting `dns_behaviour` value to `non-versioned`, in which case ElasticDNS will return the address of containers with the latest version.

## Load Balancing

You can change the container network load balancing method with the `load_balancing` directive. The accepted values are `roundrobin`, `sticky` and `closest`, and the default value is `roundrobin` which return the list of container's IP for the requested service in roundrobin. If you choose the `sticky` option, you will get the last IP you got (if you request after 1 minute you may get a new IP). If you choose the `closest` option, you will get the list of container's IP that exists on caller server (it will return all available IPs if there is no container of the requested service on caller server).
