<!-- usedin: [ _legacy_docker/AddOns/load-balancing.md, _maestro/AddOns/load-balancing.md, _node/addons/load-balancing.md, _rails/AddOns/load-balancing.md] -->


## Balance the load per service
## Note

This feature is only available for Docker stacks that are non-development.




For docker stacks you can use a load balancer to balance your services and they don't have to be present on each server! Essentially Nginx will direct the requests to the service on its own machine first, if the service doesn't exist there, then it will send it through Weave network to a server that has the service.
