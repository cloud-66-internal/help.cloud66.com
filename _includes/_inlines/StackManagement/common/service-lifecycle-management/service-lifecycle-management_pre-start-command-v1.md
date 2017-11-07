<!-- usedin: [ _legacy_docker/stack-management/service-lifecycle-management-v1.md, _maestro/stack-management/service-lifecycle-management-v1.md, _node/stack-management/service-lifecycle-management-v1.md, _rails/stack-management/service-lifecycle-management-v1.md] -->

## Post-start command

<span style="background-color: yellow">NOTE: This only applies to container version 2 (Kubernetes)</span>

This hook executes immediately after a container is created. MORE info:
```
services:     
    <service_name>:         
        post_start_command: /tmp/post-start.sh
```

