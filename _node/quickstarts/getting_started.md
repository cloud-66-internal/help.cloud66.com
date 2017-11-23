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

<div class="accordion">
    <h4 class="accordion-toggle">Amazon Web Services</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Give this cloud key a name</strong> &mdash; This is to give you the option of deploying to multiple AWS accounts. If you are deploying to a single account only, you can leave it as default.
                </p>
            </li>
            <li>
                <p>
                    <strong>AWS Access key ID</strong>  &mdash; You get this info from your AWS account Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>AWS Secret Access Key</strong>  &mdash; You get this info from your AWS account dashboard, when you create your AWS account.
                </p>
            </li>
        </ul>
        <p>Once you've added your AWS Cloud credentials you need to choose the following:</p>
        <ul>
            <li>
                <p>
                    <strong>Server Region</strong>  &mdash; For example <em>US East (Northern Virginia)</em>, <em>Europe (London)</em>
                </p>
            </li>
            <li>
                <p>
                    <strong>Server Size</strong>  &mdash; For example <em>Compute optimized (C4.large)</em>
                </p>
            </li>
            <li>
                <p>
                    <strong>AWS platform</strong>  &mdash; EC2 Classic or EC2-VPC (<a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html">Learn more about AWS Platforms</a>)
                </p>
            </li>
        </ul>
        <p>
            <img src="/assets/rails/rails_deploying_to_aws.png" alt="Deploying to AWS">
        </p>
    </div><!--/.accordion-content-->

    <h4 class="accordion-toggle">Google Compute Engine</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>GCE Client Email</strong> &mdash; You get this info from your GCE account Dashboard. Under <em>Service Accounts</em> &rarr; <em>API's</em> &rarr; <em>Credentials</em>
                </p>
            </li>
            <li>
                <p>
                    <strong>GCE Project Id</strong> &mdash; You get this info from your GCE Dashboard. It's located at the top of the <em>Overview</em> page.
                </p>
            </li>
            <li>
                <p>
                    <strong>GCE Key</strong> &mdash; This is a JSON file you need to upload, you get this from your GCE Dashboard.
                </p>
            </li>
        </ul>
    </div>

    <h4 class="accordion-toggle">Microsoft Azure</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Azure Subscription ID</strong> &mdash; You get this info from your Azure cloud Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>Client ID</strong> &mdash; You get this info from your Azure Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>Client Secret</strong> &mdash; You get this info from your Azure Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>Tenant ID</strong> &mdash; You get this info from your Azure Dashboard.
                </p>
            </li>
        </ul>
    </div>

    <h4 class="accordion-toggle">DigitalOcean</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Give this cloud key a name</strong> &mdash; this is to give you the option of deploying to multiple accounts with the same cloud provider. If you only have 1 account you can leave it as default.
                </p>
            </li>
            <li>
                <p>
                    <strong>Click Add Cloud</strong>  &mdash; this will redirect you to the DigitalOcean dashboard. You'll need to login to DigitalOcean to finish adding the key.
                </p>
            </li>
        </ul>
        <p>Once the DigitalOcean key is validated you'll need to choose the following:</p>
        <ul>
            <li>
                <p>
                    <strong>Server Region</strong>  &mdash; For example <em>Amsterdam 2, Netherlands</em>
                </p>
            </li>
            <li>
                <p>
                    <strong>Server Size</strong>  &mdash; For example <em>2GB - 2 CPU (Standard)</em>
                </p>
            </li>
        </ul>
        <p>
            <img src="/assets/rails/rails_deploying_to_do.png" alt="Deploying to DigitalOcean Servers">
        </p>
    </div>

    <h4 class="accordion-toggle">Linode</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Give this cloud key a name</strong> &mdash; this is to give you the option of deploying to multiple Linode different Linode accounts. If you only have one account you can leave it as default.
                </p>
            </li>
            <li>
                <p>
                    <strong>Linode API Key</strong>  &mdash; You get this information from your Linode Cloud Dashboard. <em>my profile</em> &rarr; <em>API Keys</em> tab.
                </p>
            </li>
        </ul>
        <p>Once the Linode key is validated you'll need to choose your deployment options:</p>
        <ul>
            <li>
                <p>
                    <strong>Server Region</strong>  &mdash; For example <em>Dallas, TX, USA</em>
                </p>
            </li>
            <li>
                <p>
                    <strong>Server Size</strong>  &mdash; For example <em>Linode 2048</em>
                </p>
            </li>
        </ul>
        <p>
            <img src="/assets/rails/rails_deploying_to_linode.png" alt="Deploying to DigitalOcean Servers">
        </p>
    </div>
    <h4 class="accordion-toggle">Packet</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Packet API Key</strong> &mdash; You get this info from your Packet Cloud Dashboard.
                </p>
            </li>
        </ul>
    </div>
    <h4 class="accordion-toggle">Rackspace</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Rackspace Username</strong> &mdash; You get this info from your Rackspace Cloud Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>Rackspace API Key</strong> &mdash; You get this info from your Rackspace Cloud Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>Rackspace user base </strong> &mdash; Select either UK or US.
                </p>
            </li>
        </ul>
    </div>
    <h4 class="accordion-toggle">Cloud A</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>CloudA Username</strong> &mdash; You get this info from your CloudA Dashboard.
                </p>
            </li>
            <li>
                <p>
                    <strong>CloudA API Key</strong> &mdash; You get this info from your CloudA Dashboard.
                </p>
            </li>
        </ul>
    </div>
    <h4 class="accordion-toggle">Your Own Servers</h4>
    <div class="accordion-content">
        <ul>
            <li>
                <p>
                    <strong>Registered Servers</strong> &mdash; First you need to Register your server as a deployment target with Cloud 66. Click on the <em>Add Registered Servers</em> link. You can also navigate to the Registered Servers page from the right hand menu of the Cloud 66 Stacks Dashboard.
                </p>
            </li>
            <li>
                <strong>Copy &amp; run the command</strong> &mdash; Run the provided command in the terminal on your server. Once this has successfully completed you can then approve the server and it will become available as a Cloud 66 deployment target.
            </li>
        </ul>
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
    <img src="/assets/rails/rails_deployment_details.png" alt="Choose where to deploy your database">
</p>

<p>
    That's it! Now just click <strong>Deploy Stack</strong>.
</p>