---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_gce-load-balancer-oduction.html" ]
 usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


#### GCE load balancer

Use a manifest file to customize the GCE load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [GCE documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) for more information):

- **httpchk**: The URL visited to check your server health.

- **balance**: The load balancing strategy. You can use these values: NONE, CLIENT_IP or CLIENT_IP_PROTO.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_gce-load-balancer-oduction.md %}




* * *

