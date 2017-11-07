<!-- usedin: [ _legacy_docker/Tutorials/1976-09-26-stack-failover-v1.md, _maestro/Tutorials/1976-09-26-stack-failover-v1.md, _node/tutorials/1976-09-26-stack-failover-v1.md, _rails/Tutorials/1976-09-26-stack-failover-v1.md] -->


### 1. Code

[Clone your existing stack](https://help.cloud66.works/{{ include.product }}/getting-started/stack-definition.html) to a different cloud vendor or data center, and set it into [maintenance mode]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) to prevent it from serving content. We highly recommend that you build a stack with similar server specifications to your main stack to avoid issues during a switch. 

