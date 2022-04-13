---
layout: post
title: Migrating from Netlify to Prepress
categories: quickstarts
order: 1
legacy: false
tags: ["getting started"]
lead: Migrating from Netlify to Prepress
permalink: /:collection/:path:output_ext
---

## Overview

You can migrate your application from Netlify to Cloud 66 Prepress in 3 steps:

1. Deploy your application via the Cloud 66 dashboard
2. Check your traffic rules
3. Change your DNS records to point to your new site

## What you’ll need

Before you begin migrating your application please check you have the following:

- **A Cloud 66 Account** — If you don’t already have one, **[sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up)**. You’ll get free unlimited access to all products for 4 weeks.
- **A Git repo containing your application code** — This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.
- **A Cloud Account with object storage enabled** — See below.

### Cloud providers supported

We need access to your cloud account in order to provision and manage applications on your behalf. How you configure that access differs from provider to provider. Click the link to your provider below if you need help.

- [Amazon Web Services (S3)](/prepress/how-to-guides/clouds/cloud-aws.html)
- [Microsoft Azure Cloud Storage](/prepress/how-to-guides/clouds/cloud-azure.html)
- [DigitalOcean (Spaces)](/prepress/how-to-guides/clouds/cloud-do.html)
- [Google Compute Engine](/prepress/how-to-guides/clouds/cloud-gce.html)
- [Linode Cloud Storage](/prepress/how-to-guides/clouds/cloud-linode.html)

### 1. Build and deploy your code

Using the **[Cloud 66 Dashboard](https://app.cloud66.com/dashboard)**, you can build your site directly from your Git repository and deploy it to your own cloud storage account in minutes.

If you need help getting started, please read our Deploying your first Prepress application guide.

We also have a guide to **[accessing your Git repository](/prepress/how-to-guides/common-tools/access-your-code.html)**.

### 2. Check your traffic rules

Prepress will automatically detect and import any Netlify redirect or rewrite rules. To see these rules:

1. Log in to your Cloud 66 Dashboard
2. Click on your application
3. Click on *Traffic Rules* in the right-hand column 
4. Review the Traffic Rules that were imported from Netlify

You can drag your rules to re-order them. They will be evaluated from top to bottom. For help understanding, editing and adding rules, please read our [how-to guide](/prepress/how-to-guides/deployment/using-traffic-rules-to-route-traffic.html). 

### 3. Update your DNS

Once you are comfortable that your Prepress site is ready to go live, you can update the DNS records of your domain to point at it. To do this:

1. Log in to your Cloud 66 Dashboard
2. Click on your application
3. Click on ⚙️*Settings & Information* in the right-hand column 
4. Click the Add Custom Domain link and follow the instructions

We have a guide to using [your own domain](https://help.cloud66.com/prepress/tutorials/prepress-dns.html) with Prepress if you need more help.

## What's next?

- Learn about the power of [Manifest files](/prepress/quickstarts/getting-started-with-manifest.html)
- Configuring [continuous deployment](/prepress/how-to-guides/deployment/continuous-deployment.html)
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)