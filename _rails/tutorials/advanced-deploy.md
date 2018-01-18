---
layout: post
template: one-col
title: Advanced Deploy
categories: tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---


## What is a manifest file?

A manifest file allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack.

[Read more about manifest file here.](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html)

This is a sample [manifest.yml](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) to tell Cloud 66 to provision one server for a Docker stack to run your services.

```
production:
    docker:
        configuration:
          version: 1.12.6
        servers:
            server:
                unique_name: dockernodea                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default
```



## What is service configuration?

Service configuration allows you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

*   Defining build and deploy commands
*   Specifying a central logging folder
*   Setting port definitions for your containers
*   Mount volumes into your containers
*   Set dependencies between your containers

[Read more about service configuration here.](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html)

This is a sample [service.yml](https://help.cloud66.works/{{ include.product }}/deployment/docker-service-configuration.html) to tell Cloud 66 to build a Docker image using [Buildgrid](https://help.cloud66.works/skycap/deployment/buildgrid) and run the service with the name **web** and also provision a **mysql** database.

```
---
services:
  web:
    git_url: http://github.com/cloud66-samples/rails-4.1-mysql.git
    git_branch: master
    command: bundle exec rails server -b 0.0.0.0 -e _env:RAILS_ENV
    build_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:schema:load"
    deploy_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:migrate"
    ports:
    - container: 3000
      http: 80
      https: 443
    env_vars:
      RAILS_ENV: production
      RACK_ENV: production  
databases:
- mysql
```

