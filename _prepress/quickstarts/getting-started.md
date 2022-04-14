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
- **A Cloud Account with object storage enabled** — [see below](#a-set-up-your-cloud-provider).


## 1. Connect your Git Repo

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

## 2. Define your application

- **Select one of your repos** *OR* click *Enter repo link* to switch to manual mode and then paste in the Git repo URL for your app (we support `http://`, `git://` and `git@` URL formats.)
- **Set the branch** — This defaults to master but you can provide any branch you like.
- **Choose an Environment** — decide which environment you’re deploying to: Development, QA, Staging or Production.
- **Give your application a name** — This is the name that will be used in the Cloud 66 Dashboard once your app is deployed.

Now click the *Analyze* button - the results will be displayed in a few seconds.

## 3. Configuring your application

Once the analysis is complete you’ll see a yellow information box that you can use to verify the analysis is correct.

<img src="/assets/prepress/about_your_app.png" alt="Prepress application - analysis information">

If there are any problems you can make changes and click **Reanalyze my code**. If necessary, you can also add environment variables.

## 4. Adding a cloud provider

### A. Set up your cloud provider 

We need access to your cloud account in order to provision and manage applications on your behalf. How you configure that access differs from provider to provider. Click the link to your provider below if you need help.

* [Amazon Web Services (S3)](/prepress/how-to-guides/clouds/cloud-aws.html)
* [Microsoft Azure Cloud Storage](/prepress/how-to-guides/clouds/cloud-azure.html)
* [DigitalOcean (Spaces)](/prepress/how-to-guides/clouds/cloud-do.html)
* [Google Compute Engine](/prepress/how-to-guides/clouds/cloud-gce.html)
* [Linode Cloud Storage](/prepress/how-to-guides/clouds/cloud-linode.html)

### B. Add your cloud provider to Cloud 66

Once you have set up your cloud storage account:

1. Click the *Add Cloud Provider* button (a drawer will slide out from the left)
2. Choose your preferred cloud provider
3. Give your cloud account a name (this makes it easier to distinguish between multiple accounts)
4. Fill in your cloud crednetials
4. Click *Add Cloud*
5. Choose the region in which you want to host your app

## 5. Deploy your app

Now everything is ready to go, hit the *Deploy site* button.

During the build and deployment process you can view the log to see what’s happening behind the scenes.

<img src="/assets/prepress/deploying.png" alt="Deploying Prepress application">

## What's Next?

- [Setting up DNS records](/prepress/tutorials/prepress-dns.html) for your Prepress app
- Configuring [continuous deployment](/prepress/how-to-guides/deployment/continuous-deployment.html) 
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)


