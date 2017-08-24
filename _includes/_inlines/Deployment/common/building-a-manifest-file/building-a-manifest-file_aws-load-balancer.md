<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


#### AWS load balancer

Use a manifest file to customize the AWS load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings:

- **httpchk**: The URL visited to check your server health.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_aws-load-balancer-oduction.md %}




* * *

