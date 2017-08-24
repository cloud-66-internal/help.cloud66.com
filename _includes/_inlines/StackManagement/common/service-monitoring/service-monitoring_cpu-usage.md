<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### CPU usage
Contrary to other CPU usage metrics, the cAdvisor does not collect percentages - instead it collects nanoseconds that each container uses. We are using collected information by cAdvisor to calculate the percentage of CPU usage.

