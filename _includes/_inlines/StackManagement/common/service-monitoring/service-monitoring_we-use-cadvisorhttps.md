<!-- usedin: [ _legacy_docker/stack-management/service-monitoring.md, _maestro/stack-management/service-monitoring.md, _node/stack-management/service-monitoring.md, _rails/stack-management/service-monitoring.md] -->


We use [cAdvisor](https://github.com/google/cadvisor) to monitor your containers for their CPU, memory, disk IO and network usage. cAdvisor runs as a daemon and collects, aggregates, processes, and exports information about running containers, and also has native support for Docker containers. The charts for this information are displayed on your container page, and you can choose which interval you'd like to see.

