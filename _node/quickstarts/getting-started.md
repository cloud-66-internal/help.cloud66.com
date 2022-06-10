---
layout: post
template: one-col
title: Deploying Your First Node App
categories: quickstarts
order: 1
lead: "Deploy your first Node app to any cloud"
legacy: false
tags: ["getting started"]
permalink: /:collection/:path:output_ext
---
{% assign product = 'node' %}


## What you’ll need


Before you can deploy your app please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [Sign up for a free Cloud 66 account](https://app.cloud66.com/users/sign_up){:target="_blank"}. You'll get free unlimited access to all products for 4 weeks.
* **A Git Repo containing your application code** &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.
* **A Cloud Account or Your Own Servers** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html product = product %}

## Accessing your Git Repo

The first thing we need is access to your code, so that we can build and deploy it for you.  

<div class="Tabs">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#github-content" class="TabMini-link">
            GitHub
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#other-git-content" class="TabMini-link">
            Other git repos
          </a>
        </li>
      </ul>
    </nav>

    <section id="github-content" class="Tabs-content js_tab_content" markdown="1">

The easiest option is to give us (read-only) access to a GitHub repo. To do this:

1. Click Get Started
2. On the next page click *Link with Github*
3. We’ll send you to our app on Github (you’ll need to sign in)
4. Once you’re signed in, click *Configure* & then select the account you wish to link to Cloud 66
5. Install and authorize our Github app (you can restrict our access to specific repos if needed)
6. You will be redirected back to your Cloud 66 dashboard and you can move on to Step 2.

**Public Github Repositories**

If your code is in a public GitHub repository then you can add it using its public link without installing our GitHub app. To do so, follow the instructions under the *Other git repos* tab (above).

</section><section id="other-git-content" class="Tabs-content js_tab_content is-hidden" markdown="1">

### Using a non-Github host

If you’d prefer to use another git host, or your own self-hosted repository:

1. Click *I’d rather enter a git repo URL*.
2. Click *View SSH key*
3. Open your repo and add the key to its settings (usually found under *SSH* or *SSH keys*)
4. Come back to Cloud 66 and click the green *Next…* button

Make sure your git repository accepts connections on port 22, from Cloud 66 public IP addresses: {% include general/public_ips.html %}

</section></div>

## Defining your application

Now that we have access to your code, we can set up your application:

1. Choose the repo you want to deploy and set the branch
2. Choose an environment for your application
3. Give your application a name (this will be used to label your application throughout the Cloud 66 dashboard, and will not be visible to public users.)
4. Click *Analyze*

Hang tight, the results will be displayed in a few seconds...

## Configuring your application

Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct.

<img src="/assets/node/node_about_your_app.png" alt="Rails Stack - analysis information">

If there are any problems you can make changes and click *Reanalyze my code*. If necessary, you can also Add [Environment Variables](/node/tutorials/env-vars.html).

<div class="notice">
    <h3>Advanced Configurations</h3>
    <p>You can configure many aspects of your Stack using the Toolbelt or a <a href="/node/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

## Choosing a deployment target

If you're deploying for the first time you need to add your Cloud provider credentials:

{% include general/clouds_accordion.html %}

## Finalizing deployment details

Now you can decide how you want to configure your frontend (web) and Database Servers.

They can be shared or deployed to separate servers.

<div class="notice">
    <h3>Deploying to Production</h3>
    <p>For production environments we always recommend separate servers. If you need fine grained control for more advanced deployments  you can use a <a href="/node/quickstarts/getting-started-with-manifest.html">manifest file</a>.</p>
</div>

<img src="/assets/node/node_deployment_details.png" alt="Choose where to deploy your database">

That's it! Now just click **Deploy**.

### Server build states

In order to allow you to start working with your new app as soon as possible, there are two build states (or stages) for application servers:

1. [Ready](/node/references/server-build-states.html#ready-servers) - server is available to use, with the minimum required configuration 
2. [Optimized](/node/references/server-build-states.html#optimized-servers) - all the latest packages are installed & optimized

![Build state progress bars](/assets/shared/server-build-state-bars.png "Build state progress")

Servers will automatically progress from "ready" to "optimized".