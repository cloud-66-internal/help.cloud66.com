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

## What you’ll need

<p>Before you can deploy your app please check you have the following:</p>
<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one <a href="https://app.cloud66.com/users/sign_up" target="_blank">Sign up for a free Cloud 66 account</a>. There is a free community plan and you'll get full access to all products Free for 14 days.</p>
    </li>
    <li>
        <p><strong>A Git Repo containing your application code</strong> &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.</p>
    </li>
    <li>
        <p><strong>A Cloud Account or Your Own Servers</strong> &mdash; See below.</p>
    </li>
</ul>

{% include general/cloud_provider_or_own_server_tabs.html %}


## Choosing application type

New users will be show the product selection wizard. For Skycap, choose "I have a native Ruby or Node app" and then "Deploy Rails & Rack Frameworks" (*Deploy a Ruby App*). 

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <h4>Step 1</h4>
        <img src="/assets/product_choice_1.png" alt="Product choice wizard - step 1">
    </div>
    <div class="Grid-cell">
        <h4>Step 2</h4>
        <img src="/assets/product_choice_3.png" alt="Product choice wizard - step 2">
    </div>
</div>

If you're already using Cloud 66 just click *New Application &rarr; Rails (Rack frameworks)* button on the dashboard.

<img src="/assets/skycap/skycap_new_dropdown_update.png" alt="Start a new Skycap build pipeline" width="200">

## Accessing your Git Repo

Cloud 66 supports both public and private Git repositories. If you're using a private Git repository you'll need to Add and approve the Cloud 66 public SSH key with your Git provider.

<div class="Tabs">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#github_content" class="TabMini-link">
            Github
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#bitbucket_content" class="TabMini-link">
            Bitbucket
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#other_git_content" class="TabMini-link">
            Other git repositories
          </a>
        </li>
      </ul>
    </nav>

    <section id="github_content" class="Tabs-content js_tab_content">
        <h4>Public Repository</h4>
        <p>If your code is in a public repository, you don't need to do anything.</p>
        <h4>Private Repository</h4>
        <p>To grant access to a private Github repository, you need to add your public SSH key you see on the screen to your Github account. </p>
        <p>
            <img src="/assets/rails/rails_add_public_key.png" alt="Adding your Public Key to GitHub">
        </p>
        <p><em>Copy the public SSH Key</em> (starts with ssh-rsa and ends with the email address you used to sign up) and then <em>Click Go to GitHub</em>. The GitHub SSH keys page will open in a new browser tab. Click the <em>New SSH key</em> button and paste your public key.</p>
    </section>

    <section id="bitbucket_content" class="Tabs-content js_tab_content is-hidden">
        <h4>Public Repository</h4>
        <p>If your code is in a public repository, you don't need to do anything.</p>
        <h4>Private Repository</h4>
        <p>To grant access to a private Bitbucket repository, you need to add your public SSH key you see on the screen to your Bitbucket account.</p>
        <p>
            <img src="/assets/rails/rails_add_public_key_bitbucket.png" alt="Adding the Public Key to BitBucket">
        </p>
    </section>

    <section id="other_git_content" class="Tabs-content js_tab_content is-hidden">
        <h4>Private Repository</h4>
        <p>To grant access to your private git repository, add the public SSH key to the list of git users (refer to your git server manual) and make sure your git repository accepts connections on port 22, from Cloud 66 public IP addresses: {% include general/public_ips.html %}</p>
    </section>
</div>

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

## What's next?

* Get started with [manifest files](/rails/quickstarts/getting-started-with-manifest.html) - a powerful tool for defining your application's components
* Learn about [CustomConfig](/rails/tutorials/custom-config.html) - a tool for defining and managing configuration templates
* Learn how to use [Toolbelt](/rails/quickstarts/using-cloud66-toolbelt.html) - a powerful command-line interface for managing your Cloud 66 applications.