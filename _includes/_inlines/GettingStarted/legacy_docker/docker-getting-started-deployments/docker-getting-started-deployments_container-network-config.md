<!-- post: -->


## Container Network Configuration

The service will run inside a container, we need to configure it to respond to HTTP traffic. A standard web server listens on port 80 for HTTP traffic and 443 for HTTPS traffic.

A Rails app listens to port 3000 so we should map the container port **3000** to the public Internet ports **80**  and **443**. Click the connector icon (circled in red above) to update the **container port** and **public internet** ports.


 ![Configuring docker container and public ports](/images/guides/docker_onboarding/container_ports_animated.gif)


Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. [Learn more about Container Port Mapping](http://help.cloud66.com/building-your-stack/container-port-mapping)

