<!-- usedin: [ _legacy_docker/deployment/service-network-configuration-v1.md, _maestro/Deployment/service-network-configuration-v1.md, _node/deployment/service-network-configuration-v1.md, _rails/deployment/service-network-configuration-v1.md, _skycap/deployment/service-network-configuration-v1.md] -->


### Load Balancing

You can change the load balancing method of ElasticDNS with the `load_balancing` directive. The accepted values are `roundrobin` , `sticky` and `closest`, and the default value is `roundrobin` which return the list of container's IP for the requested service in roundrobin. If you choose the `sticky` option, you will get the last IP you got (if you request after 1 minute you may get a new IP). If you choose the `closest` option, you will get the list of container's IP that exist on caller server (it will return all available IPs if there is no container of the requested service on caller server).

