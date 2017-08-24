---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_rackspace-load-balancer-oduct.html" ]
 usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


#### Rackspace load balancer

Use a manifest file to customize the Rackspace load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Rackspace documentation](http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Algorithms-d1e4367.html) for more information):

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, RANDOM or LEAST_CONNECTIONS.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_rackspace-load-balancer-oduct.md %}




* * *

