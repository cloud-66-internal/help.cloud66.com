---
layout: post
title: Getting started with Maestro
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: A step by step tutorial that walks you through deploying an application with Maestro. The best place to get started!
permalink: /:collection/:path:output_ext
---
{% assign product = 'maestro' %}

Maestro is an end-to-end solution for building, deploying and managing containerized applications. We build your code into Docker images and/or fetch pre-built images from your repostitories. We also take care of deploying and managing your containers and infrastructure (servers, load balancers, etc).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **Application code and/or pre-built images** &mdash; Application code should be hosted in a (secure) publicly accessible git repository and pre-built images should be hosted in image publicly accessible repositories.
* **A Cloud account linked to Cloud 66 or your own servers set up** &mdash; See below.

<div class="notice"><p>If you don't have images or code ready, you can use this <a href="https://github.com/cloud66/maestro-demo.git">simple visit counter application</a> we've supplied on Github. (You can also use this project with our next tutorial on Clusters.)
</p></div>

{% include general/cloud_provider_or_own_server_tabs.html product = product %}

## Step 1: Choose a source

The first thing we need is access to your code, so that we can build and deploy it for you. The easiest option is to give us (read-only) access to a Github repo. To do this:

1. Click *Get Started*
2. On the next page click *Link with Github*
3. We'll send you to our app on Github (you'll need to sign in) 
4. Once you're signed in, click *Configure* & then select the account you wish to link to Cloud 66
5. Install and authorize our Github app (you can restrict our access to specific repos if needed)
6. You will be redirected back to your Cloud 66 dashboard and you can move on to Step 2.

### Using a non-Github host

If you'd prefer to use another git host, or your own self-hosted repository: 

1. Click *I'd rather enter a git repo URL.* 
2. Copy the SSH key 
3. Open your repo and add the key to the settings (usually found under *SSH* or *SSH keys*)
4. Come back to Cloud 66 and click the green *Next...* button

### Using a prebuilt image

If you already have your code built into images and stored in a registry: 

1. Click *I'm deploying Docker images* 
- If you're using the Docker public image repo, enter the name of the Docker image (be sure to spell it correctly)
- If you're using a private image repo, click the *Add your credentials* link, choose your provider and your credentials, then click Save and enter the full image name (including the repository) in the form.
2.  Move to **Step 3** below

## Step 2: Add repo details

Now that we have access to your code, we can set up your app's container images. These contain all the code that makes your application work. To add:

1. Choose the repo you want to deploy and set the branch
2. Choose an environment for your application
3. Give your application a name (this will be used to label your application throughout the Cloud 66 dashboard, and will not be visible to public users.)
4. Click *Analyze* 

![Maestro Step 2 - add repo details](/assets/maestro/step-2-new-onboarding.gif "Adding repo details")

## Step 3: Add, validate and build images

You can now **validate your code repo** to ensure we can access it, and that it has a valid Docker file: 

1. Click the *Validate repo access and Dockerfile* link
2. Check the details in the form and update if needed (you can also inspect and update the YAML that underlies your image definition by clicking the YAML tab). 
3. Click the *Validate* button
4. We will now analyze the details and report any issues. Once you have successfully validated, click *Save*.

Note that you can skip this step, but we will still need to validate your repo before you can deploy.

![Maestro Step 3 - validate your image](/assets/maestro/step-3-validate-new-onboarding.gif "Validating your image")

If needed, you can also **add additional Docker images** to your application as needed: 

1. Click the *+ Add Image* 
2. Name the service this image will support 
3. *S*upply the details of the image (see Using a pre-built image above if you need more help)
4. Click *Validate*. We will check the image exists and is valid.

Once all your images (services) are added - click *Next →* at the bottom of the main panel.

## Step 4: Configure services

Next we need to configure network access and (where needed) storage for each of your app's services. You can also specify how many instances of each service you'd like to run and a variety of other custom settings.

### A. Configure ports

To configure the internal and external ports for a service: 

1. Click the *Configure Ports* link in the **Network** column 
2. Set the **Container Port**, **HTTP Port** and **HTTPS port**
3. You can also add traffic matching arguments if needed
4. Click *Save Service*

If you're using our sample application you should set the HTTP port to `80` and the Container port to `5000`.

![Maestro Step 4 - configure ports](/assets/maestro/step-4-ports-maestro-onboarding.gif "Configuring ports")

<div class="notice"><p>💡 This settings panel is used for both networking and storage options - so you can configure them simultaneously if you'd prefer.</p></div>

### B. Configure storage (optional)

To configure storage volumes for a service: 

1. Specify the path inside the container where the storage will be mounted
2. Specify the path on the host server where the data will actually be stored
3. You can use the Add Volume button to specify additional storage volumes

Once all your storage volumes are configured, click *Save Service*.

### C. Set the desired number of instances (optional)

To add instances of a service: 

1. Click on the number in the **Desired instances** column 
2. Change the number in the **Desired Count** input box
3. You can also add a start command to your service if required
4. Click *Save Service*

Once all your services are configured, click the *Next →* button. 

## Step 5: Configure servers for deployment

### A. Specify servers

Now that your application is configured, we can link your cloud provider and roll it out on your servers (if you need to use your own servers follow our guide to add them). To do this:

1. Choose your provider from the list 
2. Choose a region
3. We will suggest servers for your app you can customise them by clicking the ⚙️ *Configure Server* link at the top of its panel
4. You can add additional servers by clicking the button
5. You can add a data source to a newly created server using *Configure Server* (Note: doing so turns a server into a standalone database server)

You can also add a data source to your cluster server, but we do not recommend you do so in a production environment. 

If you're using our sample application you will need to set up a Redis instance at this point.

![Maestro Step 5 - configure servers](/assets/maestro/step-5-deploy-maestro-onboarding.gif "Configuring servers")

### B. Add deployment target

We need access to your cloud account in order to provision and manage servers on your behalf. How you configure that access differs from provider to provider. Click the link to your provider below if you need help. 

{% include general/clouds_accordion.html %}

To add cloud credentials, ensure you have the right provider selected (at the top of the form) and then click *Start Deployment*. This will open a panel that will let you configure access to your provider.

Click *Add Deployment Target* once complete.

## Step 6: Deploy your app

When you're satisfied with your servers, click the *Start Deployment* button. During the build and deployment process you can view the log to see what’s happening behind the scenes.

<div class="notice notice-warning"><p>The full build and deployment process may take 15 minutes or more because Maestro needs to provision the new servers from the ground up. You can close the window and Cloud 66 will send you an email when the deployment is complete.</p></div>

## Step 7: Test your app

Once deployment is complete, you can test your application by visiting your app’s detail page and clicking on the *Visit Site* link in the panel at the top of the Services tab.


## What's next?

* Containers can also serve non-HTTP traffic. TCP and UDP protocols are also supported. Learn more about Container Port Mapping in our [detailed tutorial](/maestro/tutorials/container-ports.html)

* Your deployment configuration is stored in a *manifest.yml* file. Learn how to [edit your manifest file](/maestro/how-to-guides/build-and-config/building-a-manifest-file.html) to access advanced deployment features.
