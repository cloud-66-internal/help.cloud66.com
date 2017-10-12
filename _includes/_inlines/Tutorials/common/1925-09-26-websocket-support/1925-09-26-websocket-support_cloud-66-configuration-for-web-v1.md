<!-- usedin: [ _legacy_docker/Tutorials/1925-09-26-websocket-support-v1.md, _maestro/Tutorials/1925-09-26-websocket-support-v1.md, _node/tutorials/1925-09-26-websocket-support-v1.md, _rails/Tutorials/1925-09-26-websocket-support-v1.md] -->


## Cloud 66 configuration for WebSocket

Cloud 66 opens **8080** and **8443** ports by default on your rails servers to allow you to use WebSocket.

If you want to use WebSocket with Cloud 66, your WebSocket servers need to listen to the following ports:

- **8080**
- **8443** for SSL

You can use a different port to use WebSocket (not supported by Cloud 66) but you will need manually open the ports to allow external connections to your Rails servers.

Find out more about [Stack networking page](https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html).

