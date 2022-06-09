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

You can add one or more custom domains to any Prepress application. This allows your visitors to access your site via your own preferred web address (e.g. `www.mysite.com`) rather than your Cloud 66 address. See below for detailed instructions.

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

Before you enable your custom domain on your Prepress app, you need to set it up to point to Cloud 66. To do this you will need to **log into your domain provider** and navigate to the **DNS record manager** (or editor) which will allow you to add a record pointing to your new site.

The next step depends on the kind of domain record you want to use. There are two types:

- Standard subdomains (e.g. `www.mysite.com` or `store.mysite.com`)
- Apex domains (e.g. `mysite.com`)

### Adding a subdomain record

If you’d like your site to use a subdomain like `help.mysite.com` or `blog.mysite.com` then you will add a **CNAME** record pointing to `ct.cloud66content.com`

For example, to set up your site to use `https://blog.mysite.com`:

1. Log into your domain provider and open the DNS manager
2. Add a CNAME record with the **host** (or **name**) field set to `blog`
3. Point the record to `ct.cloud66content.com` (the field is often named **value** or **data**)
4. Use the default `TTL` (you don’t need to change it)
5. Save (or apply) your changes

It can take up to 24 hours for this change to propagate, so you may need to attempt Stage 2 several times.

If you’re not sure how to do any of the above, google your domain providers name (e.g. GoDaddy) and the phrase “add domain record”.

### Adding an apex record

If you’d like your site to use an apex domain like `mysite.com` or `my-other-site.com` then you will need to add an `A` record pointing to Cloud 66’s IP address (`35.211.152.218`)

For example, to set up your site to use http://mysite.com

1. Log into your domain provider and open the DNS manager
2. Add an A record with the **host** (or **name**) field set to `@` or `root`
3. Point the record to `35.211.152.218` (the field is often named **value** or **data**)
4. Use the default `TTL` (you don’t need to change it)
5. Save (or apply) your changes

It can take up to 24 hours for this change to propagate, so you may need to attempt Stage 2 several times.

If you’re not sure how to do any of the above, google your domain providers name (e.g. GoDaddy) and the phrase “add domain record”.


### Stage 2: Enable your custom domain

1. Log into your [Cloud 66 dashboard](https://app.cloud66.com/) and click on the app
2. Click *Settings & Information* in the right-hand column
3. Click the *Add a Custom Domain*  link in the main panel 
3. Enter the custom domain you want to use and click *SAVE*
4. We will now attempt to set up a SSL certificate for your domain. If your DNS record is not properly set up or has not propagated yet, this process will fail.
5. To retry the process, click the *View Certificate* link and then the *Request Renewal* button

## Adding multiple custom domains

You can point multiple custom domains at a Prepress site - including apex and subdomain records from the same domain. So, for example, you can set your site to work with both  `mysite.com` and `blog.mysite.com`. The only requirements for using multiple domains are:

1. That all of the required domain records have been configured with the domain provider
2. That all of the domains and subdomains are enabled on Cloud 66 (see Stage 2 above)

We will provision SSL certificates for each of these domains.

## Editing your custom domain

You can update your custom domain at any time by clicking the *Edit* button and then saving the update. However bear in mind that:

- You will need to update the DNS records for the new domain before this will work
- Editing your custom domain will trigger the creation of a new certificate for your app

## What's next?

- Configuring continuous deployment using [redeployment hooks](/prepress/how-to-guides/deployment/redeployment-hook.html)
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)