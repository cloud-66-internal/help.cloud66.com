---
layout: post
title: Deploying your first Rails App
categories: Rails
legacy: false
lead: This guide will take you through the process of deploying a Rails or Rack framework app with Cloud 66 for the first time.

keywords: []
permalink: /:collection/:path
---


<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you can deploy your app please check you have access to the following items:</p>

<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one <a target="_blank" href="https://app.cloud66.com/users/sign_up">head over to the app and sign up!</a> There is a free community plan and you'll get full access to all products Free for 14 days.</p>
    </li>
    <li>
        <p><strong>A Git Repo containing your application code</strong> &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.</p>
    </li>
    <li>
        <p><strong>An account with a Cloud provider</strong>  &mdash; For example if your deploying to Amazon you'll need your AWS Access key.
           <!--  <a href="#">Read more about Cloud Providers supported by Cloud 66</a> -->
        </p>
    </li>
    <li>
        <p><strong>An SSH key and IP address for your server</strong>  &mdash; If you're deploying <strong>to your own server</strong>. If you're using a public Cloud provider like AWS you don't need to worry about this.</p>
    </li>
</ul>

<p>
    Log into Cloud 66 website, if you're a new user you'll see four panels on your Apps Dashboard. In the Rails panel click the <strong>Start Trial</strong>.
</p>

<h2 id="Access-your-Git-repository">
    <a href="#Access-your-Git-repository" class="headerlink" title="Access your Git repository"></a>
    Accessing your Git Repo
</h2>

<p>
    Both Public and Private Git repos are supported. If you're using a private Git repo you'll need to Add and approve the Cloud 66 public SSH key with your Git provider.
</p>

<h3 id="Using-a-Public-Git-Repo">
    <a href="#Using-a-Public-Git-Repo" class="headerlink" title="Using a Public Git Repo"></a>
    Using a Public Git Repo
</h3>

<p>
    <a href="#Tell-us-about-your-app">You can skip to the next step &mdash; <em>Tell us about your app</em>.</a>
</p>

<h3 id="Using-a-Private-Git-Repo">
    <a href="#Using-a-Private-Git-Repo" class="headerlink" title="Using a Private Git Repo"></a>
    Using a Private Git Repo
</h3>

<p>Lets add the Cloud 66 public key. This allows us to connect to your Git repo (with read only access) and deploy your app.</p>

<ul>
    <li>
        <p><strong>Copy the Public SSH key</strong> &mdash; this is provided in the form, it starts with <em>ssh-rsa</em> and ends with <em>your email address</em>.</p>
    </li>
    <li>
        <p><strong>Who is your Git Provider?</strong> &mdash; Make a selection from the drop down list and then hit the <strong>GO</strong> button. This should take you to the page in your Git provider where you can add the key.</p>
    </li>
    <li>
        <p><strong>E.g. in GitHub</strong> &mdash; Click the <strong>New SSH Key</strong> button and fill in the <em>title field</em>. Now paste the Cloud 66 key into the <em>Key field</em>. Click the <strong>Add SSH Key</strong> button. That's it! GitHub will send you a confirmation email.</p>
    </li>
</ul>

<h2 id="Tell-us-about-your-app">
    <a href="#Define-your-application-properties" class="headerlink" title="Define your application properties"></a>
    About your App
</h2>
<p>
    Now you need to tell us a bit of info about your app. Then we can deploy, Please fill in the following fields:
<p>

<ul>
    <li>
        <p>
            <strong>Git repo URL for your app</strong> &mdash; We support <strong><kbd>http://</kbd>, <kbd>git://</kbd> or <kbd>git@</kbd></strong> URL formats. Please note that HTTPS <strong>isn't</strong> currently supported.
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

<p>Now click the <strong>Analyze</strong> button. Hang tight&mdah;the results will be displayed in a few seconds...</p>

<h2 id="About-your-app-Summary">
    <a href="#About-your-app-Summary" class="headerlink" title="About your app Summary"></a>
    Review your App
</h2>

<p>Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct. If there are any problems you can make changes and Reanalyze at this point. If necessary you can also <a href="#">Add Environment Variables</a>.</p>

<h2 id="App-Configuration">
    <a href="#App-Configuration" class="headerlink" title="About your app Summary"></a>
    App Configuration
</h2>

<ul>
    <li>
        <p><strong>Ruby Version</strong> &mdash; That your app is using.</p></li>
    <li>
        <p><strong>Framework Info</strong> &mdash; This allow you alter information about Asset Pipeline precompilation and weather you want to run <code>rake db:schema:load</code>.</p>
    </li>
</ul>

<h2 id="Where-are-you-deploying-to">
    <a href="#Where-are-you-deploying-to" class="headerlink" title="Where are you deploying to?"></a>
    Where are you deploying to?
</h2>

<p>
    If you're deploying for the first time you need to add your Cloud provider credentials. For example, if you're deploying to AWS you would add the following:
</p>

<ul>
    <li>
        <p>
            <strong>Give this cloud key a name</strong> &ndash; This is to give you the option of deploying to multiple accounts with the same cloud provider. If you only have 1 account you can leave it as default.
        </p>
    </li>
    <li>
        <p>
            <strong>AWS Access key ID</strong>  &ndash; You get this info from your AWS account Dashboard.
        </p>
    </li>
    <li>
        <p>
            <strong>AWS Secret Access Key</strong>  &ndash; You get this info from your AWS account Dashboard.
        </p>
    </li>
</ul>

<p>Once you've added your Cloud Provider Credentials you need to choose the following: </p>

<ul>
    <li>
        <p>
            <strong>Server Region</strong>  &ndash; For example <em>US East (Northern Virginia)</em>, <em>Europe (London)</em>
        </p>
    </li>
    <li>
        <p>
            <strong>Server Size</strong>  &ndash; For example <em>Compute optimized (C4.large)</em>
        </p>
    </li>
    <li>
        <p>
            <strong>AWS platform</strong>  &ndash; EC2 Classic or EC2-VPC (<a href="#">Learn more about AWS Platforms</a>)
        </p>
    </li>
</ul>

<p>These field names will vary a little depending on what Cloud your provider you're using.</p>

<h2 id="Deployment-Details">
    <a href="#Deployment-Details" class="headerlink" title="Deployment Details"></a>
    Deployment Details
</h2>

<p>
    Now you can decide how you want for configure your Front-end (Web) and Database Servers.
    They can be shared or deployed to separate servers.
</p>

<p>
    For production environments we always recommend separate servers. If you need fine grained control for more advanced deployments  you can use a <a href="#">manifest file</a>.
</p>

<p>
    That's it! Now just click <strong>Deploy Stack</strong>.
</p>