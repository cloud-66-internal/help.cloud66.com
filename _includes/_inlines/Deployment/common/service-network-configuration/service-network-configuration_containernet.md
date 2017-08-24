<!-- usedin: [ _legacy_docker/deployment/service-network-configuration.md, _maestro/Deployment/service-network-configuration.md, _node/deployment/service-network-configuration.md, _rails/deployment/service-network-configuration.md, _skycap/deployment/service-network-configuration.md] -->


## ContainerNet

ContainerNet is a private and secure network (based on [Weave](http://weave.works/)) between all containers across all the servers and components in your stack, including databases. This network provides an internal IP address to each container, automatically updating with DHCP and DNS and is fully integrated with the [life-cycle management of your services](/managing-your-stack/service-life-cycle-management).

