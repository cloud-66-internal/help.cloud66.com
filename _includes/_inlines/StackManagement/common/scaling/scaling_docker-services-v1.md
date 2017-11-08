


### Docker services

You can scale your Docker services horizontally across your Docker cluster by clicking the _Docker cluster_ server group from your stack page, and using the _+_ and _-_ buttons to increase or decrease the number of running containers on each server.

In your service configuration, you can also specify constraints for a service across the cluster, which currently includes `max_count`, or the max number of containers for a service across the cluster. This doesn't affect deploys, but comes into account when scaling up/down on server or cluster.



{%include _inlines/StackManagement/common/scaling/code_scaling_docker-services-rvices-v1.md  product = include.product %}




