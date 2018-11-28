---
layout: post
template: one-col
title: Adding a firewall rule
categories: tutorials
order: 9
lead: "How to add a firewall rule to your application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path
---

## Overview

All Maestro applications come with a built-in firewall. This firewall is automatically updated to allow traffic from ports and IP addresses as you add different components to your application.

However, you may want to use a service or component hosted outside of Maestro. The **Firewall** interface allows you to check existing (and default) rules and to set up (or edit) custom rules.

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting_started.html) if you're not sure how to do this.


## Adding a custom firewall rule

### Gathering the required info

Imagine you need to SSH directly into your servers from an external IP address, and for whatever reason, you can't use the [Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) to do so.

By default, the firewall will block any attempts to SSH from a foreign IP address. You can test this by copying the IP address of your server and trying to SSH into it using your desktop terminal. It will simply time out.

(To find the IP of a server, visit the **Application Overview** page, click the *Server* tab and look for the IP next to each server)

In this example, we're going to add a rule that allows you to SSH into your server from your own desktop. There is actually a [quicker way to do this temporarily](/maestro/tutorials/firewall-rule.html#enabling-temporary-access) but we will be adding a permanent rule instead. 

Before we start you need to look up your current public IP. You can simply google this, or use a site like [WhatsMyIp](https://www.whatismyip.com/).

### Adding and applying the rule

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network Settings*  in the **Application** panel on the right of the screen
3. The page will open on the Firewall tab (but note that you can also reach the **Traffic** and **Redirects** pages this way
4. Click the *Add a new firewall rule* button
5. This will add a set of input fields that allow you to configure your first rule.
6. Paste or type your own **IP address** into the *From* field 
7. Choose the **server** you're going to access from the *To* dropdown (*master* is a good choice)
8. Choose the **protocol** of allowed connections (this should be *TCP*)
9. Choose the **port** you will open
10. Click *Apply Rules*


<div class="notice notice-warning">
<h3>Microsoft Azure notice</h3>
<p>If you want to open a custom port to you server in Microsoft Azure, you must add an endpoint for that VM in your Azure management portal after adding the rule in your Cloud 66 dashboard.</p>
</div>

### Testing the rule

Now give your application 5 to 10 minutes to reconfigure itself, and try to SSH into the server again. The server should now respond, rather than timing out.

Note that, unless you have set up an authentication key, your login attempt will fail - but the server should still respond with the details of the denial.

## Removing a custom firewall rule

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network Settings*  in the **Application** panel on the right of the screen
3. Click the small red icon next to the rule you want to remove
4. Click *Apply Rules*

Remember to give your application a few minutes to apply the new setting(s).


## Enabling temporary access

If you need to access your server (via SSH or another protocol), there is a quick way to do this without setting a permanent rule:

1. . Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network Settings*  in the **Application** panel on the right of the screen
3. Click the small plug icon at the top right of the Application Firewall Rules panel
4. This will automatically fetch your current IP address, but you can also manually enter any IP address
5. Choose how long the port should be open (10 or 20 mins)
6. Define the **port** you're using (the default is 22)
7. Click *Let me in now*

<img alt="Open a temp SSH connection" src="/assets/maestro/maestro-firewall-temp-SSH.png">

## Default firewall rules

By default, Cloud 66 gateway servers (eg. 54.84.166.97) are the only servers allowed SSH (port 22) access to stack servers. 

The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications. 

Editing and removing the default firewall rules is disabled to ensure that your servers remain secure at all times.


