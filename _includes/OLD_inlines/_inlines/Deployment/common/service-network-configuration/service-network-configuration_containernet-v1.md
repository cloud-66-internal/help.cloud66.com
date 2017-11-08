


## ContainerNet

ContainerNet is a private and secure network (based on [Weave](http://weave.works/)) between all containers across all the servers and components in your stack, including databases. This network provides an internal IP address to each container, automatically updating with DHCP and DNS and is fully integrated with the {% if include.product == "skycap" %}[life-cycle management of your services](https://help.cloud66.works/maestro/stack-management/service-lifecycle-management.html){% else %}[life-cycle management of your services](https://help.cloud66.works/{{ include.product }}/stack-management/service-lifecycle-management.html){% endif %}.

