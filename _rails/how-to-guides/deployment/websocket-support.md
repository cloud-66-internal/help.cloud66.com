---
layout: post
template: one-col
title: Configuring WebSocket via Action Cable
categories: how-to-guides/deployment
order: 18
lead: "How to configure Action Cable for a Cloud 66 Rails application"
legacy: false
tags: ["websocket"]
permalink: /:collection/:path:output_ext
---

## Overview

[WebSocket](http://www.websocket.org/) is a protocol that allows bi-directional web communication between client and server, and [Action Cable](https://guides.rubyonrails.org/action_cable_overview.html) is the native Rails integration of this protocol. You can configure your application to communicate via Action Cable using the method below.

<div class="notice notice-warning"><p markdown="1">
⚠️ AWS Classic Load Balancers do not support websockets natively. We recommend switching to one of Amazon's newer load balancers.
</p></div>

## Configuring your app for Action Cable

Action Cable runs as a “server” and needs to be configured in your `config/routes.rb`. You need to mount `ActionCable.server` to a local server path in your `routes.rb`.

For example, this mounts the server to the `/cable` path: 

```ruby
# Serve websocket cable requests in-process
mount ActionCable.server => '/cable'
```

### Default application server configuration

If you’re using the default Cloud 66 application server for your Rails app (Passenger), will automatically configure your application to allow connections to the `/cable` endpoint. The endpoint will communicate via the same port as the rest of your application. You can change the name of this endpoint, but you will then need to modify your app’s NGINX settings [using CustomConfig](/rails/tutorials/custom-config.html).

We will also configure Action Cable to use a separate connection pool to avoid it competing with normal HTTP connections.

### Custom application server configuration 

If you’re using a [custom Rails application server](/rails/how-to-guides/rack-servers/) we will add the required headers to NGINX to resolve your endpoints (including `/cable`). You will then need to configure your custom server to handle Action Cable. 

Bear in mind that Action Cable (and WebSocket in general) tends to lead to a lot of persistent connections to your servers. You should configure and scale your application server to accommodate this.