<!-- usedin: [ _legacy_docker/deployment] - post: -->


## New IP addresses

If the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address subsequently change, we are notified by the agent, which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, ActiveProtect is reconfigured and DNS records are updated accordingly. Furthermore, if required, the load balancer is updated to serve the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the stack.

