<!--  usedin: [ _legacy_docker/Tutorials/2016-01-21-Docker-Dependency-v1.md, _maestro/Tutorials/2016-01-21-Docker-Dependency-v1.md] -->


If you have a docker stack but your services don't follow the dependencies you've defined, this article is probably for you.

Imagine you have two services (I've used two for simplicity) called `web` and `api`; `web` needs `api` to be up before it starts up. Although, you've defined all the dependencies (Note the `requires` line under `web` service), you are still not getting the result you need (`web` doesn't start after `api`).



{%include _inlines/Tutorials/common/2016-01-21-Docker-Dependency/code_2016-01-21-docker-dependency_if-you-have-a-docker-stac-1-v1.md  product = include.product %}




  What happens here is that all the services are put in a queue based on the logic of your service.yml (`api` first and `web` second in this case). Cloud 66 fires up the first one/s (`api`) and then moves on to the next one/s (`web`). Now imagine service `api` would take a long time to start but `web` starts quickly. As Cloud 66 doesn't know how long to wait to move on to the next service, this may end up having service `web` started while service `api` is still starting!

  Cloud 66 has introduced a mechanism called [health check](http://help.cloud66.com/managing-your-stack/service-life-cycle-management#health) to prevent such matters. This means, it waits for the container to pass the health check and make sure the service is up, and then move to the next stage (starting `web`). So your service file would look something like the below (Note the health lines for `api` service):



{%include _inlines/Tutorials/common/2016-01-21-Docker-Dependency/code_2016-01-21-docker-dependency_if-you-have-a-docker-stac-v1.md  product = include.product %}



