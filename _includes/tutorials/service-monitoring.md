
We use [cAdvisor](https://github.com/google/cadvisor) to monitor your containers for their CPU, memory, disk IO and network usage. cAdvisor runs as a daemon and collects, aggregates, processes, and exports information about running containers, and also has native support for Docker containers. The charts for this information are displayed on your container page, and you can choose which interval you'd like to see.

#### CPU usage
Contrary to other CPU usage metrics, the cAdvisor does not collect percentages - instead it collects nanoseconds that each container uses. We are using collected information by cAdvisor to calculate the percentage of CPU usage.

#### Memory usage
The memory usage chart will show memory usage of a container, which includes all memory regardless of when it was accessed.

#### Disk IO usage
The disk IO chart shows the number of bytes transferred to/from each disk.

#### Network usage
The network chart shows the number of bytes transferred/received to/from each container.