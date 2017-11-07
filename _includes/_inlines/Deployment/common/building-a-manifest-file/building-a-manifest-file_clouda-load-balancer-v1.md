<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


### CloudA load balancer

Use a manifest file to customize the CloudA load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, SOURCE_IP or LEAST_CONNECTIONS.

{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_clouda-load-balancer-oduction-v1.md  product = include.product %}

* * *

