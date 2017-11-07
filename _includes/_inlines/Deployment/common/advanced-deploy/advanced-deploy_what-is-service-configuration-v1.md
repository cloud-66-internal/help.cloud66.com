<!--  usedin: [ _legacy_docker/getting-started/advanced-deploy-v1.md, _node/getting-started/advanced-deploy-v1.md, _rails/getting-started/advanced-deploy-v1.md, _skycap/getting-started/advanced-deploy-v1.md] -->


## What is service configuration?

Service configuration allows you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

*   Defining build and deploy commands
*   Specifying a central logging folder
*   Setting port definitions for your containers
*   Mount volumes into your containers
*   Set dependencies between your containers

[Read more about service configuration here.](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html)

This is a sample [service.yml](https://help.cloud66.works/{{ include.product }}/deployment/docker-service-configuration.html) to tell Cloud 66 to build a Docker image using [Buildgrid](https://help.cloud66.works/skycap/deployment/buildgrid) and run the service with the name **web** and also provision a **mysql** database.



{%include _inlines/Deployment/common/advanced-deploy/code_advanced-deploy_what-is-service-configuration-service-v1.md  product = include.product %}



