---
layout: post
template: one-col
title: Configuring WebSocket
categories: how-to-guides/deployment
order: 20
lead: "How to enable WebSocket in a Maestro application"
legacy: false
tags: ["websocket"]

permalink: /:collection/:path
---

## Overview

[WebSocket](http://www.websocket.org) is a protocol that allows bi-directional web communication between client and server.

## Configuring for WebSocket

Maestro opens ports **8080** and **8443** by default on your servers to allow you to use WebSocket. To work with optimally Maestro, your WebSocket servers need to listen to these ports.

If necessary you can use different ports for WebSocket, but you will need to manually open the ports to allow external connections to your servers.

Find out more about [service networking](/maestro/how-to-guides/deployment/service-network-configuration.html).

## Test your WebSocket server

To test your WebSocket server, use your terminal to create a `.html` file with the code below directly on your server. Make sure to replace *\<your_address\>* with your WebSocket server IP address. Then open the page in a web browser.

```
<html>
  <head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
      <script>
      $(document).ready(function(){
        function debug( str ) {
          $("#debug").append( str );
        };

        ws = new WebSocket("ws://your address");
        ws.onmessage = function(evt) {
          $("#msg").append("evt.data");
        };
        ws.onclose = function() {
          debug("socket closed");
        };
        ws.onopen = function() {
          debug("connected...");
          ws.send("hello server");
        };
      });
    </script>
  </head>
  <body>
    <div id="debug"></div>
    <div id="msg"></div>
  </body>
</html>
```


## WebSocket through a load balancer

You can use a load balancer and scale up your servers to have more redundancy and capacity for your WebSocket servers.

Read our detailed guide for more info on how to set up [HAProxy and WebSocket](/maestro/how-to-guides/deployment/haproxy-for-websocket.html) in Maestro.

On **Linode** alternative HTTP ports 8080 and 8443 are opened on NodeBalancers and can be used for WebSockets.

#### Note
<div class="notice"><p>ELB (Amazon) doesn't support WebSocket traffic.</p></div>


