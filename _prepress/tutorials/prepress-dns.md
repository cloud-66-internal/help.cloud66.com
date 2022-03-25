---
layout: post
template: one-col
title: Configuring DNS with Prepress
categories: tutorials
order: 3
lead: "How to set up Prepress to use a custom domain name"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

You can add a custom domain to any Prepress application. Because Prepress uses object storage rather than standard web servers, **its domain setup is slightly different from a standard web application**. You need to point your domain at `ct.cloud66content.com` using a CNAME record. See below for detailed instructions.

### Note
<div class="notice"><p>We automatically enable SSL on your domain when we set up your DNS. We will also automatically redirect any visits to HTTP to HTTPS.</p></div>

## What you'll need

Before you start, please check you have the following:

- **A Cloud 66 Account** — If you don't already have one, [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). You'll get free unlimited access to all products for 4 weeks.
- **An existing Prepress application set up in Cloud 66** — To make the most of this tutorial you need to have an app already set up in Cloud 66. Follow our [Getting Started guide](/prepress/quickstarts/getting-started.html) if you're not sure how to do this.
- **A registered domain** — You need to have full administration rights to the domain and access to the interface that allows you to change its DNS records.

## Setting up a Custom Domain 

Setting up a custom domain for your Prepress app has two stages - setting up a DNS record for your domain and then enabling it in Cloud 66.

### Stage 1: Add a CNAME to your DNS records

Before you enable your custom domain on your Prepress app, you need to set it up to point to Cloud 66. To do this:

1. Log into your domain provider 
2. Navigate to the DNS record manager (or editor)
3. Add `ct.cloud66content.com` as a CNAME record 

If you’re not sure how to do any of the above, google your domain providers name (e.g. GoDaddy) and the phrase “add CNAME record”.

It can take up to 24 hours for this change to propagate, so you may need to attempt Stage 2 several times.

### Stage 2: Enable your custom domain

1. Log into your [Cloud 66 dashboard](https://app.cloud66.com/) and click on the app
2. Click *Settings & Information* in the right-hand column
3. Click the *Add a Custom Domain*  link in the main panel 
3. Enter the custom domain you want to use and click *SAVE*
4. We will now attempt to set up a SSL certificate for your domain. If your DNS record is not properly set up or has not propagated yet, this process will fail.
5. To retry the process, click the *View Certificate* link and then the *Request Renewal* button

## Editing your custom domain

You can update your custom domain at any time by clicking the *Edit* button and then saving the update. However bear in mind that:

- You will need to update the DNS records for the new domain before this will work
- Editing your custom domain will trigger the creation of a new certificate for your app

## What's next?

- Configuring continuous deployment using [redeployment hooks](/prepress/how-to-guides/deployment/redeployment-hook.html)
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)