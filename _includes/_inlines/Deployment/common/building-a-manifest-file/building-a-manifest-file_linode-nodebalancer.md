<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


#### Linode Nodebalancer

Use a manifest file to the Linode Nodebalancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Linode documentation](https://www.linode.com/docs/platform/nodebalancer/nodebalancer-reference-guide) for more information):

- **httpchk**: The health-check configuration
- **balance**: The load balancing strategy. You can use these values : roundrobin, leastconn or source.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_linode-nodebalancer-oduction..md %}




* * *

