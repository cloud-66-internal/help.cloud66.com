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
We support every version of Rails from 2.6.3 and upwards, including version 6.0.0. The version installed during deployment is based on the requirements of your application. Versions earlier than 2.6.3 <em>may</em> work but will have some compatibility issues with Ubuntu 18.04 and 20.04.
</p></div>


If you're already using Cloud 66 just click *New Application &rarr; Rails (Rack frameworks)* button on the dashboard.

<img src="/assets/shared/new_app_dropdown.png" alt="Deploy a new Rails app">




## Defining your application

Before we can deploy, we need some basic info about your application. Please fill in the following fields:

<img src="/assets/rails/rails_about_app.png" alt="Fill in the information about your app: Git repo, name and environment">


* **Git repo URL for your app** &mdash; We support `http://`, `git://` and `git@` URL formats. Please note that **HTTPS isn't currently supported**.

* **What branch do you want to deploy** &mdash; This defaults to master but you can provide any branch you like.

* **Give your new application a name** &mdash; This is the name that will be used in the Cloud 66 Dashboard once your app is deployed.

* **Choose an Environment** &mdash; Choose the Environment that you're deploying to: Development, QA, Staging or Production.

Now click the *Analyze* button - the results will be displayed in a few seconds.

## Configuring your application

Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct.

<img src="/assets/rails/rails_about_your_app.png" alt="Rails application - analysis information">

If there are any problems you can make changes and click **Reanalyze my code**. If necessary, you can also add environment variables.

In App Configuration you can make changes to application configuration parameters.

<img src="/assets/rails/rails_config_ruby_framework.png" alt="Rails application - Ruby version and Framework configuration">

* **Ruby Version** &mdash; That your app is using.
* **Framework Info** &mdash; This allows you alter information about asset pipeline precompilation and whether you want to run `rake db:schema:load`.

### Advanced Configurations

<div class="notice">
<p>You can configure many aspects of your application using <a href="/rails/quickstarts/using-cloud66-toolbelt.html">Cloud 66 Toolbelt</a> or a <a href="/rails/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

## Choosing a deployment target

If you're deploying for the first time you need to add your Cloud provider credentials:

{% include general/clouds_accordion.html %}

## Finalizing Deployment Details

Now you can decide how you want to configure your Front end (Web) and Database Servers. They can be shared or deployed to separate servers.

### Deploying to Production

<div class="notice">
<p>For production environments we always recommend separate servers. If you need fine grained control for more advanced deployments  you can use a <a href="/rails/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

<img src="/assets/rails/rails_deployment_details.png" alt="Choose where to deploy your database">

That's it! Now just click *Deploy application* and watch your app roll out to your new servers.

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