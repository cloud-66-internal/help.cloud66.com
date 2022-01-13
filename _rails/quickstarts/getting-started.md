---
layout: post
title: Deploying your first Rails app
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: Deploy your first Rails app to any cloud
permalink: /:collection/:path:output_ext
---
{% assign product = 'rails' %}

## What you’ll need

<p>Before you can deploy your app please check you have the following:</p>
<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one <a href="https://app.cloud66.com/users/sign_up" target="_blank">Sign up for a free Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.</p>
    </li>
    <li>
        <p><strong>A Git Repo containing your application code</strong> &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.</p>
    </li>
    <li>
        <p><strong>A Cloud Account or Your Own Servers</strong> &mdash; See below.</p>
    </li>
</ul>

{% include general/cloud_provider_or_own_server_tabs.html product = product %}

### Rails version support
<div class="notice"><p>
We support every version of Rails from 2.6.3 and upwards, including versions 6.x.x The version installed during deployment is based on the requirements of your application. Versions earlier than 2.6.3 <em>may</em> work but will have some compatibility issues with Ubuntu 18.04 and 20.04.
</p></div>

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

## Step 2: Add repo details

Now that we have access to your code, we can set up your application:

1. Choose the repo you want to deploy and set the branch
2. Choose an environment for your application
3. Give your application a name (this will be used to label your application throughout the Cloud 66 dashboard, and will not be visible to public users.)
4. Click *Analyze*

## Step 3: Configure app

Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct.

<img src="/assets/rails/about-app.png" alt="Rails application - analysis information">

If there are any problems you can make changes and click **Reanalyze my code**. If necessary, you can also add environment variables.

In App Configuration you can make changes to application configuration parameters.

<img src="/assets/rails/rails_config_ruby_framework.png" alt="Rails application - Ruby version and Framework configuration">

* **Ruby Version** &mdash; That your app is using.
* **Framework Info** &mdash; This allows you alter information about asset pipeline precompilation and whether you want to run `rake db:schema:load`.

### Advanced Configurations

<div class="notice">
<p>You can configure many aspects of your application using <a href="/rails/quickstarts/using-cloud66-toolbelt.html">Cloud 66 Toolbelt</a> or a <a href="/rails/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

## Step 4: Configure servers for deployment

### A. Add deployment target

We need access to your cloud account in order to provision and manage servers on your behalf. How you configure that access differs from provider to provider. Click the link to your provider below if you need help.

{% include general/clouds_accordion.html %}

To add cloud credentials click the *Add a Deployment Target* button. This will open a panel that will let you configure access to your provider.

Click the green *Add Deployment Target* button once complete.

### B. Specify servers

Next you need to specify where your servers will be situated, how large they should be, and where your data will be stored:

1. Choose a **Server Region**
2. We will suggest a size for your application server - you can change it as needed
3. Specify whether your datastore will share the app server (not recommended for Production), or have its own server. (You can also use an existing [external database server](/rails/how-to-guides/databases/database-management.html#no-database-external) if you prefer)

<img src="/assets/rails/rails_deployment_details.png" alt="Choose where to deploy your database">

<div class="notice">
<p>For production environments we always recommend separate servers. If you need fine grained control for more advanced deployments  you can use a <a href="/rails/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

## Step 5: Deploy your app

When you're satisfied with your servers, click the *Start Deployment* button. During the build and deployment process you can view the log to see what’s happening behind the scenes. 

You can also close the window and come back later. We will email you once the application is deployed (or if it fails).

### Server build states

In order to allow you to start working with your new app as soon as possible, there are two build states (or stages) for application servers:

1. [Ready](/rails/references/server-build-states.html#ready-servers) - server is available to use, with the minimum required configuration 
2. [Optimized](/rails/references/server-build-states.html#optimized-servers) - all the latest packages are installed & optimized

![Build state progress bars](/assets/shared/server-build-state-bars.png)

Servers will automatically progress from "ready" to "optimized".

## What's next?

* Get started with [manifest files](/rails/quickstarts/getting-started-with-manifest.html) - a powerful tool for defining your application's components
* Learn about [CustomConfig](/rails/tutorials/custom-config.html) - a tool for defining and managing configuration templates
* Learn how to use [Toolbelt](/rails/quickstarts/using-cloud66-toolbelt.html) - a powerful command-line interface for managing your Cloud 66 applications.