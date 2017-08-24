<!-- usedin: [ _legacy_docker/deployment/building-your-service.md, _skycap/deployment/building-your-service.md] -->


### Dockerfile path

Specifies a relative path for your Dockerfile (from your _build_root_) to be used for building this service. For example, if you have a subfolder in the root of your repository called _docker_ where your Dockerfile lives, you can specify this as follows:



{%include _inlines/Deployment/common/building-your-service/code_building-your-service_dockerfile-path-rvices.md %}




This will default to the value of _build_root_/Dockerfile if not specified.

* * *

