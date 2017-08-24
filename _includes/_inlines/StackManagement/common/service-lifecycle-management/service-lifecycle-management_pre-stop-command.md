<!-- usedin: [ _legacy_docker/stack-management/service-lifecycle-management.md, _maestro/stack-management/service-lifecycle-management.md, _node/stack-management/service-lifecycle-management.md, _rails/stack-management/service-lifecycle-management.md] -->

## Pre-stop command

<span style="background-color: yellow">NOTE: This only applies to container version 2 (Kubernetes)</span>

This hook is called immediately before a container is terminated. MORE info:
```
services:
    <service_name>:
        pre_stop_command: /tmp/pre-stop.sh
```