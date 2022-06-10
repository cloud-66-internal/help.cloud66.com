---
layout: post
template: one-col
title: Adding a new service to an application
categories: tutorials
order: 2
lead: "Adding a new service or component to an application"
legacy: false
tags: ["docker"]
permalink: /:collection/:path:output_ext
---

As your application grows in complexity and popularity, you may need to add new components. For example you may add a cache like Varnish or a new data store like MongoDB. 

This guide walks you through the process of adding a standard (“off the shelf”) component to an existing application using a public repository.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). You'll get free unlimited access to all products for 4 weeks.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting-started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using-formations.html) guide.

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides.</p></div>

## Overview

In this example you have decided to make your **Hello World** application dynamic by adding a [Redis](https://redis.io/) service. To do this, we need to do four things:

1. We need to add a standard Redis service to the application using a pre-built image from a public repository
2. We need to add a new `service.yml` Stencil to our existing Formations to define the Kubernetes service
3. We need to add a new `deployment.yml` Stencil to the same Formation to define the deployment of this new service
4. We need to deploy our updated application to see it working

## Adding a new component (service) to your application

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application to which you want to add a new service (“Hello World” in our case) 

2. Click on the edit icon in the top left-hand corner of the application detail panel to open the Service Editor.

3. Click on the ***+** Add Service* button and then give the new service a name (`redis` would be sensible) 

4. Next change the *service image* dropdown to “It’s in a Docker image repository”

5. Type `redis` into the *Docker image* field and click *Go* (be careful - capitalisation matters)

6. Once Skycap has successfully analysed the Redis image, click *Save Changes* 

<img src="/assets/skycap/tutorial-adding-service-1.gif" alt="Adding a service" />

You should now be able to see the Redis service below your original “Hello World” service.


## Adding stencils to configure the new service

Simply adding an image to Skycap won’t be enough to get your new service working on your cluster. You need to configure it so that it will be deployed, and will be able to start up and communicate with your existing service.

To do this, we need to add two new Stencils to your existing Formation. Just as we did with our original Hello World application, we need:

* A `service.yml` to define the service in Kubernetes
* A `deployment.yml` to populate and initialise the new service 

### Adding a second service.yml

Click on *Formations* in the right hand panel and then click on the name of the Formation we are going to edit (“Hello World”)
Click on the **+** at the top right of the Stencils panel and select `service.yml` from the available templates.
Select “redis” from the *Service* dropdown (on the right-hand side)
In the Stencil code change both `port` and `targetPort` to `6379` (the standard Redis port)
Add a commit message and click *Save changes*

<img src="/assets/skycap/tutorial-adding-service-2.gif" alt="Adding a second service"/>

You should now see a new Stencil called redis_service.yml in your Formation. Next, we need to define our Redis deployment.

### Adding a second deployment.yml

On the Formation detail page, click on the **+** at the top right of the Stencils panel and select `deployment.yml` from the available templates.
Select *redis* from the *Service* dropdown (on the right-hand side)
In the Stencil code change `containerPort` to `6379` 
Delete the `command` entirely - we don’t need it for this example
Add a commit message and click *Save changes*

<img src="/assets/skycap/tutorial-adding-service-3.gif" alt="Adding a deployment.yml"/>

We are now nearly ready to deploy our updated Hello World app. We just need to create a new Snapshot and render our enlarged Formation.

## Deploying the updated application

So far we have:

* Added a pre-built Redis image to our app
* Configured that Redis image as a new service to run alongside our Hello World service
* Configured a deployment for that Redis service to initialise it in our Minikube cluster

To see this new, improved app in action, we need to deploy it to Minikube. To do this we follow the now familiar steps from our [Getting started with Skycap Formations](/skycap/quickstarts/using-formations#deploying-it-all-to-your-cluster) guide.

A quick reminder:

1. Click on the green *Snapshot* button and choose *Snapshot all*
2. Once the build is complete, open the Formation detail page
3. Click on the *Render Formation” button
4. Copy the `cx` command and add `| kubectl apply -f -`
5. Paste the resulting command into your terminal (make sure Minikube is running)

Once `kubectl` has applied all the changes, you will be able to run the `minikube service helloworld -n hello-world` command. (Bear in mind your command may need to be slightly different depending on what you named your service and namespace.)

This will open up the Hello World web page, as usual, but this version of the page is different. If you have successfully deployed Redis, the page will say “(connected to Redis)” in the sub-headline and will have a green check mark next to it. 

<img src="/assets/skycap/tutorial-adding-service-final.jpg" alt="Final step"/>

If the command fails, double check that the pod has started up completely by using the `get pods` command. It will take slightly longer to start up than the previous example.

#### Note:
<div class="notice"><p>Normally the original application (Hello World) would need to be updated with code to enable it query Redis in this way. However, in order to keep our example simple, we wrote the original Hello World application to work both with and without Redis. If you can read Golang, check out the <code>main.go</code> file to see how we did this.</p></div>

## What’s next?

* Learn how to [update an existing service](/skycap/tutorials/updating-an-existing-service.html) in Skycap.
* Learn how to [roll back to an older version of your application](/skycap/tutorials/rolling-back-using-snapshots.html) using Snapshots.
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils
* Learn how to use your [Habitus build flow](/skycap/tutorials/using-habitus-with-skycap.html) within Skycap.
* Learn how to use [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 