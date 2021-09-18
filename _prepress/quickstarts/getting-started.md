---
layout: post
title: Deploying your first Prepress application
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: Deploy your first Prepress application
permalink: /:collection/:path:output_ext
---

## What you’ll need

Before you can deploy your app please check you have the following:

- **A Cloud 66 Account** — If you don't already have one **[Sign up for a free Cloud 66 account](https://app.cloud66.com/users/sign_up)**. You'll get free unlimited access to all products for 4 weeks.
- **A Git Repo containing your application code** — This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.
- **A Cloud Account** — at the moment we only support AWS S3 (we will be adding more cloud providers soon)

## 1. Choose your application type

New users will be shown the product selection wizard. For Prepress, click the Getting Started button in the block headed "Need to Deploy a Static Site?".

![Choose application type](/assets/prepress/app-type-prepress.png)

If you're already using Cloud 66 just click *New Application &rarr; Prepress* button on the dashboard.


## 2. Access your Git Repo

Cloud 66 supports both public and private Git repositories. If you’re using a private Git repository you’ll need to Add and approve the Cloud 66 public SSH key with your Git provider. 

Click the *How to link Cloud 66 with your git provider* link above the main panel - this will open up a yellow box that will allow you to configure access to your git provider.

<div class="Tabs">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#github-content" class="TabMini-link">
            Github
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#bitbucket-content" class="TabMini-link">
            Bitbucket
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#other-git-content" class="TabMini-link">
            Other git repositories
          </a>
        </li>
      </ul>
    </nav>

    <section id="github-content" class="Tabs-content js_tab_content">
        <h4>Public Repository</h4>
        <p>If your code is in a public repository, you don't need to do anything.</p>
        <h4>Private Repository</h4>
        <p>To grant access to a private Github repository, you need to add your public SSH key you see on the screen to your Github account. </p>
        <p>
            <img src="/assets/rails/rails_add_public_key.png" alt="Adding your Public Key to GitHub">
        </p>
        <p><em>Copy the public SSH Key</em> (starts with ssh-rsa and ends with the email address you used to sign up) and then <em>Click Go to GitHub</em>. The GitHub SSH keys page will open in a new browser tab. Click the <em>New SSH key</em> button and paste your public key.</p>
    </section>

    <section id="bitbucket-content" class="Tabs-content js_tab_content is-hidden">
        <h4>Public Repository</h4>
        <p>If your code is in a public repository, you don't need to do anything.</p>
        <h4>Private Repository</h4>
        <p>To grant access to a private Bitbucket repository, you need to add your public SSH key you see on the screen to your Bitbucket account.</p>
        <p>
            <img src="/assets/rails/rails_add_public_key_bitbucket.png" alt="Adding the Public Key to BitBucket">
        </p>
    </section>

    <section id="other-git-content" class="Tabs-content js_tab_content is-hidden">
        <h4>Private Repository</h4>
        <p>To grant access to your private git repository, add the public SSH key to the list of git users (refer to your git server manual) and make sure your git repository accepts connections on port 22, from Cloud 66 public IP addresses: {% include general/public_ips.html %}</p>
    </section>
</div>

## 3. Define your application

- Connect your Git provider (see above) and select one of your repos
    - *OR* click the link to switch to manual mode and then paste in the **Git repo URL for your app** (we support `http://`, `git://` and `git@` URL formats. **HTTPS isn’t supported**.)
- **Define the branch do you want to deploy** — This defaults to master but you can provide any branch you like.
- **Choose an Environment** — decide which environment you’re deploying to: Development, QA, Staging or Production.
- **Give your new application a name** — This is the name that will be used in the Cloud 66 Dashboard once your app is deployed.

Now click the *Analyze* button - the results will be displayed in a few seconds.

## 4. Configuring your application

Once the analysis is complete you’ll see a yellow Information box that you can use to verify the analysis is correct.

<img src="/assets/prepress/about_your_app.png" alt="Prepress application - analysis information">

If there are any problems you can make changes and click **Reanalyze my code**. If necessary, you can also add environment variables.

## 5. Choosing a deployment target

If you’re deploying for the first time you need to add your Cloud provider credentials. 

At the moment Prepress only supports S3 from Amazon Web Services. To add your AWS account: 

1. Click the *Add Cloud Provider* button 
2. Paste in the **AWS Access key ID** & **AWS Secret Access Key** (see below for how to generate these)
3. Give your deployment target a name  (this makes it easier to distinguish between multiple accounts)
4. Click *Add Cloud Provider*
5. Choose the region in which you want to host your app

### Setting up cloud & access keys on AWS S3

1. Log into the web interface for your AWS account
2. Click on the name of your account in the top right corner of your AWS account, and select *My Security Credentials*.
3. Click Access keys in the accordion to open the panel
4. Click Create New Access key 
5. Either download the key file or click *Show access key* and take note of your access key ID and secret access key. These are the credentials needed for Cloud 66 to access your account.

This gives Cloud 66 root access to your account. If you'd prefer to restrict access to the minimum needed, we suggest using Amazon's IAM. Please read our [full guide on setting up AWS](/prepress/how-to-guides/clouds/cloud-aws.html#option-b-identity-access-management-iam) for more info.

## 6. Deploy your app

Now everything is ready to go, hit the *Deploy site* button.

During the build and deployment process you can view the log to see what’s happening behind the scenes.

<img src="/assets/prepress/deploying.png" alt="Deploying Prepress application">

## What's Next?

- [Setting up DNS records](/prepress/tutorials/prepress-dns.html) for your Prepress app
- Setting up SSL for your Prepress app
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)


