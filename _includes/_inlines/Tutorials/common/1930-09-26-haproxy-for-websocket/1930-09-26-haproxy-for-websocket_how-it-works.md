<!-- usedin: [ _legacy_docker/Tutorials/1930-09-26-haproxy-for-websocket.md, _maestro/Tutorials/1930-09-26-haproxy-for-websocket.md, _rails/Tutorials/1930-09-26-haproxy-for-websocket.md] -->


## How it works

By default, all HAProxy servers configured by Cloud 66 will redirect all WebSocket traffic from ports **80** or **443** to ports **8080** or **8443** of your web servers.

To by pass the auto detection and traffic redirection by HAProxy, you can connect your WebSocket servers through ports **8080** and **8443** of your HAProxy server. The HAProxy server is configured to pass through all traffic on ports **8080** and **8443** to the same ports of the web servers.

