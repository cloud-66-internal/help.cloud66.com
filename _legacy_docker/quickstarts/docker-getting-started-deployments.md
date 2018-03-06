---
layout: post
template: one-col
title: Docker Getting Started (Deployment)
categories: quickstarts
lead: ""
legacy: true
order: 2
tags: ["getting-started"]
permalink: /:collection/:path
---


## Setting up a Docker Deployment
 Once all of the services have been successfully built you'll see the option to Setup a new deployment. You can deploy your app to any of your favorite cloud providers or to your own [registered servers]({% if page.collection != "skycap" %}/{{page.collection}}/tutorials/registered-servers.html{%else%}/maestro/tutorials/registered-servers.html{%endif%}).


    

        



## Deployment Setup

The first step in the deployment process is to Choose an [environment](/{{page.collection}}/references/stack-environments.html):

*   Development
*   QA
*   Staging
*   Production

![Build a new docker stack from the dashboard](/assets/legacy_docker/1.png)
    



## Configuring Services

In the example below we have a single Rails service. In this case it's been pulled from an image. The previous section of this guide explains how to [add and build images for your services](/legacy_docker/quickstarts/docker-getting-started.html).

The Rails service is a web application so we need to configure it to handle web traffic.

 ![Build a new docker stack from the dashboard](/assets/legacy_docker/2.png)


## Container Network Configuration

The service will run inside a container, we need to configure it to respond to HTTP traffic. A standard web server listens on port 80 for HTTP traffic and 443 for HTTPS traffic.

A Rails app listens to port 3000 so we should map the container port **3000** to the public Internet ports **80**  and **443**. Click the connector icon (circled in red above) to update the **container port** and **public internet** ports.
 ![Configuring docker container and public ports](/assets/legacy_docker/3.gif)
Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. [Learn more about Container Port Mapping](/{{page.collection}}/tutorials/container-ports.html)


## Adding Data Sources

The Rails app also needs a database, lets deploy this to a separate MySQL server. First we add another server to the stack and then we should select MySQL as a Data Source

![Add another server](/assets/legacy_docker/4.gif)
    
In this example we created a separate server for the database. If you have a low traffic site it's fine for your database to share with the Docker server.
Lets add the MySQL Data Source, you can add as many Data Sources as your app requires.

![Adding a MySQL datasource to a stck](/assets/legacy_docker/5.png)

Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.

Remember, you can also deploy to your own servers. However you should first [add them as registered servers]({% if page.collection != "skycap" %}/{{page.collection}}/tutorials/registered-servers.html{%else%}/maestro/tutorials/registered-servers.html{%endif%}).


## Configuring Servers

We need to choose a cloud provider for the deployment. For this example we'll use DigitalOcean and deploy the stack to the London region. The server size can be set by clicking on the cog icon displayed at the top right of each server.

![image](/assets/legacy_docker/6.png)
![image](/assets/legacy_docker/7.png)
![Add another server](/assets/legacy_docker/8.png)

[How to choose the right size server](/{{page.collection}}/references/non-recommended-server-sizes.html).

## Deployment

Now everything is ready to go, just hit the deploy button. During the build and deployment process you can view the log to see what's happening behind the scenes.

![image](/assets/legacy_docker/9.gif)


## Advanced Features

 Information that defines how your application is deployed is accessible from _manifest.yml_. You can edit this file directly if you need to access [advanced deployment features](/{{page.collection}}/tutorials/getting-started-with-manifest.html). For example advanced configuration of Cross-Origin Resource Sharing or Amazon Virtual Private Cloud and more.

 **← [Previous: Building Images](/legacy_docker/quickstarts/docker-getting-started.html)**

