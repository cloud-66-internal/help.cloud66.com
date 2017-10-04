<!-- usedin: [ _legacy_docker/AddIns/load-balancing-v1.md, _maestro/AddIns/load-balancing-v1.md, _node/addins/load-balancing-v1.md, _rails/AddIns/load-balancing-v1.md] -->


## Balance the load per service
## Note

This feature is only available for Docker stacks that are non-development.




For docker stacks you can use a load balancer to balance your services and they don't have to be present on each server! Essentially Nginx will direct the requests to the service on its own machine first, if the service doesn't exist there, then it will send it through Weave network to a server that has the service.
