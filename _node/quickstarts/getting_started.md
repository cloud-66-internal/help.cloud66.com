---
layout: post
title: Deploying Your First Node App
categories: quickstarts
legacy: false
tags: ["getting started"]
lead: Deploy your first Node app to any cloud
permalink: /:collection/:path
---
<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

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

<p>
    Lets get started &mdash; Log into Cloud 66 website, if you're a new user you'll see four panels on your Apps Dashboard. In the Node panel click the <strong>Start Trial</strong>.
</p>

<h2 id="Access-your-Git-repository">
    <a href="#Access-your-Git-repository" class="headerlink" title="Access your Git repository"></a>
    Accessing your Git Repo
</h2>
<p>
    Cloud 66 supports both public and private Git repositories. If you're using a private Git repository you'll need to Add and approve the Cloud 66 public SSH key with your Git provider.
</p>

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

<h2 id="Tell-us-about-your-app">
    <a href="#Define-your-Stack" class="headerlink" title="Define your application properties"></a>
    Defining Your Stack
</h2>
<p>
    Now you need to tell us a bit of info about your app, then we can deploy, Please fill in the following fields:
<p>
    <img src="/assets/node/node_about_app.png" alt="Fill in the information about your app: Git repo, name and environment">
</p>
<ul>
    <li>
        <p>
            <strong>Git repo URL for your app</strong> &mdash; We support <strong><kbd>http://</kbd>, <kbd>git://</kbd> or <kbd>git@</kbd></strong> URL formats. Please note that <strong>HTTPS isn't currently supported</strong>.
        </p>
    </li>
    <li>
        <p>
            <strong>What branch do you want to deploy</strong> &mdash; This defaults to master but you can provide any branch you like.
        </p>
    </li>
    <li>
        <p><strong>Give your new application a name</strong> &mdash; This is the name that will be used in the Cloud 66 Dashboard once your app is deployed.</p>
    </li>
    <li>
        <p><strong>Choose an Environment</strong> &mdash; Choose the Environment that you're deploying to: Production, Development, QA, Staging or Production.</p>
    </li>
</ul>

<p>Now click the <strong>Analyze</strong> button. Hang tight, the results will be displayed in a few seconds...</p>

<h2 id="App-Configuration">
    <a href="#Configuring-Your-Stack" class="headerlink" title="About your app Summary"></a>
    Configuring Your Stack
</h2>

<p>Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct.
<p>
     <img src="/assets/node/node_about_your_app.png" alt="Node Stack - analysis information">
</p>
<p>If there are any problems you can make changes and click <strong>Reanalyze my code</strong>. If necessary, you can also <a href="#">Add Environment Variables</a>.</p>

<p>In App Configuration you can make changes to Stack configuration parameters.</p>

<p>
    <img src="/assets/node/node_config_node_framework.png" alt="Node Stack - Node version and Framework configuration">
</p>

<ul>
    <li>
        <p><strong>Node Version</strong> &mdash; That your app is using.</p></li>
    <li>
        <p><strong>Framework Info</strong> &mdash; This allow you alter information about Asset Pipeline precompilation and weather you want to run <code>rake db:schema:load</code>.</p>
    </li>
</ul>

<div class="notice">
    <h3>Advanced Configurations</h3>
    <p>You can configure many aspects of your Stack using the Toolbelt or a manifest file.</p>
</div>

<h2 id="Where-are-you-deploying-to">
    <a href="#Where-are-you-deploying-to" class="headerlink" title="Where are you deploying to?"></a>
    Choosing a Deployment Target
</h2>

<p>
    If you're deploying for the first time you need to add your Cloud provider credentials:
</p>

{% include general/clouds_accordion.html %}

<h2 id="Deployment-Details">
    <a href="#Deployment-Details" class="headerlink" title="Deployment Details"></a>
    Finalizing Deployment Details
</h2>

<p>
    Now you can decide how you want to configure your Frontend (Web) and Database Servers.
    They can be shared or deployed to separate servers.
</p>

<div class="notice">
    <h3>Deploying to Production</h3>
    <p>For production environments we always recommend separate servers. If you need fine grained control for more advanced deployments  you can use a <a href="#">manifest file</a>.</p>
</div>

<p>
    <img src="/assets/rails/rails_deployment_details.png" alt="Choose where to deploy your database">
</p>

<p>
    That's it! Now just click <strong>Deploy Stack</strong>.
</p>