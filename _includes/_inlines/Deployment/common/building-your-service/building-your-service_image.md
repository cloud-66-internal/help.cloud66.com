---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2-3.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2-3-4.html" ]
 usedin: [ _legacy_docker/deployment/building-your-service.md, _skycap/deployment/building-your-service.md] -->


### Image

The source of your Docker image, which can come from a private repository that the credentials are provided. For [Docker Hub](https://registry.hub.docker.com/) images, use the following URL format:



{%include _inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices.md %}




If you are pulling a public image from Docker Hub, use the following format:



{%include _inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2.md %}




If you are using [Quay.io](https://quay.io/) for your image repository, you will use the following URL format:



{%include _inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2-3.md %}




If you are using [Google Container Registry](https://cloud.google.com/container-registry/docs/) for your image repository, you will use the following URL format:



{%include _inlines/Deployment/common/building-your-service/code_building-your-service_image-rvices-2-3-4.md %}




When you [specify the Google Container Registy as a Docker image repo](https://app.cloud66.com/image_repositories) you need choice `I'm using a different provider or my own custom repo` and use the following settings:

*   Custom Repo provider URL = https://gcr.io
*   Username for provider = oauth2accesstoken
*   Password for provider = (output of the commmand `$ gcloud auth print-access-token`)
*   Email address for provider = fake@fake.com

