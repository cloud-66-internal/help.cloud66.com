---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/advanced-deploy/code_advanced-deploy_what-is-service-configuration-service.html" ]
 usedin: [ _legacy_docker/getting-started/advanced-deploy.md, _node/getting-started/advanced-deploy.md, _rails/getting-started/advanced-deploy.md, _skycap/getting-started/advanced-deploy.md] -->


## What is service configuration?

Service configuration allows you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

*   Defining build and deploy commands
*   Specifying a central logging folder
*   Setting port definitions for your containers
*   Mount volumes into your containers
*   Set dependencies between your containers

[Read more about service configuration here.](../building-your-stack/docker-service-configuration)

This is a sample [service.yml](../building-your-stack/docker-service-configuration) to tell Cloud 66 to build a Docker image using [Buildgrid](../building-your-stack/cloud-66-buildgrid) and run the service with the name **web** and also provision a **mysql** database.



{%include _inlines/GettingStarted/common/advanced-deploy/code_advanced-deploy_what-is-service-configuration-service.md %}



