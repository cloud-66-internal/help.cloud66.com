<!--  usedin: [ _legacy_docker/stack-management/server-restart-notifications-v1.md, _maestro/stack-management/server-restart-notifications-v1.md, _node/stack-management/server-restart-notifications-v1.md, _rails/stack-management/server-restart-notifications-v1.md] -->


## How do I actually restart my servers?

In order to minimise down-time, you can restart one server at a time (assuming you have a {% if include.product == "rails" %}[load balancer](https://help.cloud66.works/{{ include.product }}/addins/load-balancer.html) {%else%}[load balancing](https://help.cloud66.works/{{ include.product }}/addins/load-balancing.html){%endif%} in place). Selecting an out-of-hours time is recommended to minimise disruption. You can also use the [maintenance page]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) to temporarily notify your users that you are performing maintenance.

To restart your server, it is recommended that you [SSH to your server](https://help.cloud66.works/{{ include.product }}/stack-management/ssh-to-server.html) and run either of the following terminal commands:

```
sudo reboot 
```

{%include _inlines/StackManagement/common/server-restart-notifications/code_server-restart-notifications_how-do-i-actually-restart-v1.md  product = include.product %}







