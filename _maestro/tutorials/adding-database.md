---
layout: post
template: one-col
title: Adding a database to your application
categories: tutorials
order: 4
lead: "How to add a database to your application in Maestro"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Maestro natively supports the following databases and datastores:

* MySQL
* PostgreSQL
* Redis
* MongoDB
* InfluxDB

#### Note
<div class="notice"><p>It's perfectly feasible to manually install and use other database engines or datastores as part of your Maestro application. We've simply automated management of the engines listed above because they are the most popular choices.</p></div>

There are two main routes to add a database to a Maestro application:

1. As part of the [initial build and deploy process](/maestro/quickstarts/getting_started.html)
2. After the app has already been deployed 

This guide deals with the second of these cases. For the first, please consult our [Getting Started](/maestro/quickstarts/getting_started.html) guide.

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting_started.html) if you're not sure how to do this.

## Adding a database to an existing app

Let's assume that your application was previously completely stateless, but now requires a data layer. As such you've decided to add a traditional relational database and have chosen to use MySQL.

There are two ways to add a database to an existing app:
1. Using Add-ins
2. Building a new completely new version of the app, and adding the database [during the build process](/maestro/quickstarts/getting_started.html#adding-a-data-source).

#### Note
<div class="notice"><p>Although option 2 might seem extreme, it follows the principle of "immutability". It is always more reliable and more manageable to deploy an updated application as though it were new, rather than trying to patch an existing setup.</p></div>

## Configure a database using add-ins

To add MySQL to your application:

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **MySQL**
4. A pop-up window will appear, asking whether to install MySQL on a new virtual server, or on an existing server. Either will work, although beware of overloading a single server.
5. Click *Add* to start the process

You can now watch the logs, as usual to see the progress of the process.

### Testing your new database

Once MySQL has been deployed, you can test it by logging directly into the server on which it is running via SSH. [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) is the quickest way to do this. 

When you are connected to your MySQL server you can run the following command to check it is running properly: `/etc/init.d/mysql status` - this will give you a brief status report on the state of MySQL.

You can also use this opportunity to log into your database. You can find the username and password for MySQL by clicking on the name of the server on the **Server Overview** page. The login details are available on the next page.

To log in use the following command format: `mysql -u*username* -p*yourpassword*` replacing the values with your own username and password. Note that there are no spaces after the `-u` and `-p` commands.

You now have a fully functional MySQL database running as part of your application.





