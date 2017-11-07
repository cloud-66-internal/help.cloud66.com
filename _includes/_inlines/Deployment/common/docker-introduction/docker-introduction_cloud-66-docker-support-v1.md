<!-- usedin: [ _legacy_docker/deployment/docker-introduction-v1.md, _maestro/Deployment/docker-introduction-v1.md, _skycap/deployment/docker-introduction-v1.md] -->


## Cloud 66 Docker support

Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](https://help.cloud66.works/skycap/deployment/building-your-service.html) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack.




