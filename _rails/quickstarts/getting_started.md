---
layout: post
title: Deploying Your First Rails App
categories: quickstarts
legacy: false
tags: ["getting started"]
lead: Deploy your first Rails app to any cloud
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

<div class="Tabs">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#cloud_content" class="TabMini-link">
            Using a Cloud Provider
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#no_cloud_content" class="TabMini-link">
            Using Your Own Server
          </a>
        </li>
      </ul>
    </nav>

    <section id="cloud_content" class="Tabs-content js_tab_content">
        <p>An account with your cloud provider of choice. Cloud 66 supports {% include general/supported_clouds.html %}</p>
    </section>

    <section id="no_cloud_content" class="Tabs-content js_tab_content is-hidden">
        <p>An SSH key and IP address for your server. Your server should run {% include general/supported_os.html %} and allow SSH connection on port 22 from Cloud 66 public IP addresses: {% include general/public_ips.html %}</p>
    </section>
</div>

<p>
    Lets get started &mdash; Log into Cloud 66 website, if you're a new user you'll see four panels on your Apps Dashboard. In the Rails panel click the <strong>Start Trial</strong>.
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
    </section>

    <section id="bitbucket_content" class="Tabs-content js_tab_content is-hidden">
        <h4>Public Repository</h4>
        <p>If your code is in a public repository, you don't need to do anything.</p>
        <h4>Private Repository</h4>
        <p>To grant access to a private Bitbucket repository, you need to add your public SSH key you see on the screen to your Bitbucket account. </p>
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

<p>Now click the <strong>Analyze</strong> button. Hang tight &mdash; the results will be displayed in a few seconds...</p>

<h2 id="App-Configuration">
    <a href="#Configuring-Your-Stack" class="headerlink" title="About your app Summary"></a>
    Configuring Your Stack
</h2>

<p>Once the analysis is complete you'll see a yellow Information Box that you can use to verify the analysis is correct. If there are any problems you can make changes and Reanalyze at this point. If necessary you can also <a href="#">Add Environment Variables</a>.</p>
<p>Here you can make changes to some of Stack configration parameters.</p>

<ul>
    <li>
        <p><strong>Ruby Version</strong> &mdash; That your app is using.</p></li>
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

<div class="accordion">
    <h4 class="accordion-toggle active">AWS</h4>
    <div class="accordion-content open">
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
    </div>
    <h4 class="accordion-toggle">Google Cloud</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Microsoft Azure</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">DigitalOcean</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Linode</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Packet</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Rackspace</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Cloud A</h4>
    <div class="accordion-content">
    </div>
    <h4 class="accordion-toggle">Your Own Servers</h4>
    <div class="accordion-content">
    </div>
</div>

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
    That's it! Now just click <strong>Deploy Stack</strong>.
</p>