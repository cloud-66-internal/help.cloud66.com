<!-- post: -->


## Cloud 66 configuration for WebSocket

Cloud 66 opens **8080** and **8443** ports by default on your rails servers to allow you to use WebSocket.

If you want to use WebSocket with Cloud 66, your WebSocket servers need to listen to the following ports:

- **8080**
- **8443** for SSL

You can use a different port to use WebSocket (not supported by Cloud 66) but you will need manually open the ports to allow external connections to your Rails servers.

Find out more about [Stack networking page](http://help.cloud66.com/managing-your-stack/stack-network-settings).

