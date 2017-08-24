<!-- usedin: [ _legacy_docker/stack-management/service-monitoring.md, _maestro/stack-management/service-monitoring.md, _node/stack-management/service-monitoring.md, _rails/stack-management/service-monitoring.md] -->


### CPU usage
Contrary to other CPU usage metrics, the cAdvisor does not collect percentages - instead it collects nanoseconds that each container uses. We are using collected information by cAdvisor to calculate the percentage of CPU usage.

