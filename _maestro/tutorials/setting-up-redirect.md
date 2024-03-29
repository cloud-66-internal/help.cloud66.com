---
layout: post
template: one-col
title: Setting up a redirect
categories: tutorials
order: 10
lead: "How to set up redirects in Maestro"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview

All Maestro applications come with a built-in tool to quickly enable commonly-used redirects. This includes:

* Redirecting traffic from HTTP to HTTPS
* Adding or removing the `www` subdomain from URLs

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting-started.html) if you're not sure how to do this.

## Accessing redirect settings

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network*  in the **Application** panel on the right of the screen
3. Click on the *Redirects* tab at the top of the main panel

You can now use this page to set (or remove) redirects.

## Redirect HTTP to HTTPS

If you have <a href="/maestro/how-to-guides/add-ins/ssl.html">added SSL certificates</a> to an application, you can redirect all traffic to use HTTPS instead of HTTP.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

To enable this: 
* Check the *Redirect HTTP to HTTPS* box 
* Click *Apply Redirects*. 

Remember to give your application a few minutes to enable this change. Then open your app in a browser and ensure the URL starts with `http`. The URL should immediately redirect to `https`. 

Bear in mind that if you haven't set up SSL certificates on your application that your browser will probably refuse to open the page as it appears to be insecure. 

## WWW or non-WWW

Some sites serve traffic on `www.domain.com`, while others use the bare `domain.com`. 

By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to `www.domain.com` to `domain.com`, or vice-versa. (You can also choose to not redirect at all)

This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.

To enable this, choose the required option under *WWW or No-WWW in your URL* and click *Apply Redirects*. Remember to give your application a few minutes to enable this change.


