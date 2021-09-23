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

Cloud 66 creates unique DNS hostnames for each site you deploy with Prepress. These are based on the name and environment of your site. For example:

```shell
gatsbydemo.development.c66.me
myjekyll.production.c66.me
```

You can point your own (custom) domain at your Prepress application but, because Prepress uses object storage rather than standard web servers, **its domain setup is different from a standard web application**. 

In order to use a custom domain you need to verify that you own the domain and update your DNS with specific records. Follow the steps below and you will be up and running in minutes.

### Note
<div class="notice"><p>We automatically enable SSL on your domain when we set up your DNS. We will also automatically redirect any visits to HTTP to HTTPS. See our guide to SSL for more information.</p></div>

## What you'll need

Before you start, please check you have the following:

- **A Cloud 66 Account** — If you don't already have one, <a href="[https://app.cloud66.com/users/sign_up](https://app.cloud66.com/users/sign_up)" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
- **An existing Prepress application set up in Cloud 66** — To make the most of this tutorial you need to have an app already set up in Cloud 66. Follow our [Getting Started guide](http://127.0.0.1:4000/prepress/quickstarts/getting-started.html) if you're not sure how to do this.
- **A registered domain** — You need to have full administration rights to the domain and access to the interface that allows you to change its DNS records.

## Setting up a Custom Domain 

To set up a custom domain for your Prepress app:

1. Log into your [Cloud 66 dashboard](https://app.cloud66.com/) and click on the app
2. Click *Settings & Information* in the right-hand column
3. Click the *Add a Custom Domain*  link in the main panel 
4. Enter the full custom domain you want to use and click *SAVE*
5. Add the two CNAME records to your DNS records
6. Click the *Done, I've Updated My DNS* records button

It may take some time for your DNS records to propagate (this can take up to 24 hours), so you can also wait a few hours and try again. Come back to the page above and click the *Verify* button to retry the confirmation process. 

When the process is complete, a green tick and the word "verified" will appear below your Custom Domain in the main Settings panel.

## What's next?

- Configuring continuous deployment using [redeployment hooks](/prepress/how-to-guides/deployment/redeployment-hook.html)
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)