---
layout: post
template: one-col
title: Adding custom environment variables
categories: tutorials
order: 6
lead: "How to use environment variables in Maestro"
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---

## Overview

Environment variables contain a name and value, and provide a simple way to share configuration settings between multiple applications and processes in Linux. For example, Cloud 66 creates environment variables for your database server address, which can be referenced in your code. This has numerous benefits:

- Your environments can use different environment-specific configurations with less manual intervention
- These values may change, so setting them as variables makes updating them simpler to update
- You don't need to commit sensitive information to your Git repository

By default Maestro creates and manages the minimum environment variables required to run your application. This guide will walk you through how to add custom environment variables to your Maestro application, and how to edit existing variables.

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting_started.html) if you're not sure how to do this.

## Adding an environmental variable

To add a custom environment variable to your application:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Environment Variables*  in the **Application** panel on the right of the screen
3. Scroll down to the **Your Custom Variables** section
4. Add the key `FOO` and the value `BAR` (don't worry these are dummy entries and won't actually do anything)
5. Click *Save Changes*
6. New environment variables are only applied to your application server(s) when you deploy. Do that now by clicking the *Build / Deploy* button.

### Testing your change

The best way to check whether your new variable has been applied to your server is to log into it via SSH. [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) is the quickest way to do this. 

Once you are connected to your server, enter this command `printenv FOO`. The server will responed with `BAR`. If it does not, check you have followed all the steps above.

## Editing an existing variable

You can edit / update any custom variables you have added to Maestro, as well as some of the default variables created by Maestro. A good example would be changing the password for your [database server](/maestro/tutorials/adding-database.html). 

To do this:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Environment Variables*  in the **Application** panel on the right of the screen
3. Find the key you'd like to change, for example `MYSQL_PASSWORD` and update the value
5. Save and redeploy as you did above

You can test this by accessing your server via SSH using [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) and logging into MySQL with the new password.  

#### Caution
<div class="notice notice-warning"><p>Updating default environment variables can cause an application to break unless it has been coded to cope with such changes. Proceed carefully!</p></div>

## What's next?

* Learn more about [managing environment variables](/maestro/how-to-guides/deployment/env-vars-advanced.html) via Maestro, including how to reference variables in other applications.
* Learn how to [customise the configuration](/maestro/tutorials/custom-config.html) of your application's components.
* Learn more about [application environments](/maestro/how-to-guides/deployment/application-environments.html)


