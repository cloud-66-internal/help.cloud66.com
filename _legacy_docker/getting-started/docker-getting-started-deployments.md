---
menuheaders: [ "Setting up a Docker Deployment", "Deployment Setup", "Configuring Services", "Container Network Configuration", "Adding Data Sources", "Configuring Servers", "Deployment", "Advanced Features" ]
layout: post
template: one-col
title: Docker Getting Started (Deployment)
categories: getting-started
lead: ""
legacy: true

permalink: /:collection/:path
---








## Setting up a Docker Deployment
 Once all of the services have been successfully built you'll see the option to Setup a new deployment. You can deploy your app to any of your favorite cloud providers or to your own [registered servers](http://help.cloud66.com/deployment/registered-servers).

    

        







## Deployment Setup

The first step in the deployment process is to Choose an [environment](https://help.cloud66.com/getting-started/stack-environments):

*   Development
*   QA
*   Staging
*   Production

![Build a new docker stack from the dashboard](/images/guides/docker_onboarding/docker_guide_start_deploy_modal.png)
    









## Configuring Services

In the example below we have a single Rails service. In this case it's been pulled from an image. The previous section of this guide explains how to [add and build images for your services](https://help.cloud66.works/legacy_docker/docker-getting-started-building-your-images.html).

The Rails service is a web application so we need to configure it to handle web traffic.



 ![Build a new docker stack from the dashboard](/images/guides/docker_onboarding/docker_guide_services.png)








## Container Network Configuration

The service will run inside a container, we need to configure it to respond to HTTP traffic. A standard web server listens on port 80 for HTTP traffic and 443 for HTTPS traffic.

A Rails app listens to port 3000 so we should map the container port **3000** to the public Internet ports **80**  and **443**. Click the connector icon (circled in red above) to update the **container port** and **public internet** ports.


 ![Configuring docker container and public ports](/images/guides/docker_onboarding/container_ports_animated.gif)


Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. [Learn more about Container Port Mapping](http://help.cloud66.com/building-your-stack/container-port-mapping)






## Adding Data Sources

The Rails app also needs a database, lets deploy this to a separate MySQL server. First we add another server to the stack and then we should select MySQL as a Data Source

![Add another server](/images/guides/docker_onboarding/docker_guide_add_server_animated.gif)
    
In this example we created a separate server for the database. If you have a low traffic site it's fine for your database to share with the Docker server.


Lets add the MySQL Data Source, you can add as many Data Sources as your app requires.

![Adding a MySQL datasource to a stck](/images/guides/docker_onboarding/docker_guide_add_datasource.png)

Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.

Remember, you can also deploy to your own servers. However you should first [add them as registered servers](http://help.cloud66.com/deployment/registered-servers).






## Configuring Servers

We need to choose a cloud provider for the deployment. For this example we'll use DigitalOcean and deploy the stack to the London region. The server size can be set by clicking on the cog icon displayed at the top right of each server.

![image](/images/guides/docker_onboarding/docker_guide_target_cloud.png)
![image](/images/guides/docker_onboarding/docker_guide_server_config.png)
![Add another server](/images/guides/docker_onboarding/docker_guide_server_modal.png)

[How to choose the right size server](https://help.cloud66.com/getting-started/choosing-server-size).





## Deployment

Now everything is ready to go, just hit the deploy button. During the build and deployment process you can view the log to see what's happening behind the scenes.

![image](/images/guides/docker_onboarding/docker_guide_deploying.gif)






## Advanced Features

 Information that defines how your application is deployed is accessible from _manifest.yml_. You can edit this file directly if you need to access [advanced deployment features](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html). For example advanced configuration of Cross-Origin Resource Sharing or Amazon Virtual Private Cloud and more.

 [**← Previous: Building Images**] (docker-getting-started-building-images)

