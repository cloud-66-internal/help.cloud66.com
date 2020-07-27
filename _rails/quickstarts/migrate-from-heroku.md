---
layout: post
template: one-col
title: Migrating from Heroku to Cloud 66
categories: quickstarts
order: 2
lead: "Move your Rails application from Heroku to your own servers using Cloud 66"
legacy: false
tags: ["migration"]

permalink: /:collection/:path:output_ext
---
{% assign product = 'rails' %}

## Overview

You can migrate your application from Heroku to Cloud 66 in 3 steps: 

1. Build and deploy your application's code via the Cloud 66 dashboard
2. Import your data to your new environment
3. Redirect traffic to the new endpoint

<div class="notice"><p>Cloud 66 does not host applications. We automate the build and deployment of your application to the cloud provider of your choice, or your own servers (virtual or physical).
</p></div>


## What you’ll need

Before you begin migrating your application please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **A Git repo containing your application code** &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.
* **A Cloud Account or Your Own Servers** &mdash; See below.

{% include general/cloud_provider_or_own_server_tabs.html product = product %}


#### What server size do I need?
<div class="notice"><p>
Using Heroku, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your application via Cloud 66. We also recommend that you have a separate server for your database in production environments.
</p></div>


## Migrating

### 1. Build and deploy your code

Using the [Cloud 66 Dashboard](https://app.cloud66.com/dashboard), you can pull your code directly from your Git repository and build it into a new version of your application on your own servers. 

If you need help getting started, please read our [Deploying your first Rails app](/rails/quickstarts/getting_started.html) guide.

We also have a guide to [accessing your Git repository](/{{page.collection}}/how-to-guides/common-tools/access-your-code.html).


### 2. Data

Once your code is deployed, you'll need to migrate your data across. The process differs for PostgreSQL and MySQL databases:

**PostgreSQL**  

From your Heroku toolbelt, create a database backup URL by running `heroku pgbackups:url`. Next, visit your Application Overview and click the _Import Heroku data_ link. Paste the URL provided by the toolbelt into the field, and click _Import Heroku data_.

**MySQL**  

Start by dumping your existing database. Refer to the [ClearDB documentation for common problems](http://www.cleardb.com/blog/entry?id=common-problems-2).

```bash
$ mysqldump -u [username] -p[password] [dbname] > backup.sql 
```

Once you have a MySQL dump file, use the [Cloud 66 toolbelt](/{{page.collection}}/references/toolbelt.html#upload) to upload the file to your application database server. Remember to replace the fields below with your values.

```bash
$ cx upload -s "[app_name]" --server [database_server_name] backup.sql /tmp/backup.sql
```

Next, use the toolbelt to SSH to your server.

```bash
$ cx ssh -s "[app_name]" [server_first_name]
```

Finally, use the command below to import your backup into the database. You can find the generated username, password and database name by visiting your Application Overview and clicking into your database server (e.g. _MySQL server_).

```bash
$ mysql -u [generated_user_name] -p [generated_password] "[database_name]" < /tmp/backupfile.sql 
```


### 3. Traffic

Once you're ready to serve traffic from your Cloud 66 application, you need to direct your traffic to it. For help doing this, see [Configure your DNS](/{{page.collection}}/tutorials/configure-dns.html).


## Useful pointers


### Web server and Procfile

By default, Cloud 66 will deploy your application with Phusion Passenger, but you can also choose a [custom Rack server](/{{page.collection}}/how-to-guides/deployment/shells/nginx-modules.html#passenger) like [Puma](/rails/how-to-guides/rack-servers/puma-rack-server.html), [Thin](/rails/how-to-guides/rack-servers/thin-rack-server.html) or [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html). You may have a `web` entry in your Procfile to do this on Heroku. Cloud 66 ignores this entry to avoid compatibility issues.

To run a custom web server, we require a `custom_web` entry. It is important to set this before analyzing your application, to avoid building the application with Passenger.

You can also use the [Procfile](/rails/how-to-guides/deployment/systemd.html) to define other background jobs.


### Dyno recycling

Heroku restarts all dynos at 24 hours of uptime, which may conceal possible memory leaks in your application. When you migrate to Cloud 66, these will become noticeable because we don't restart your workers (other than during a deployment), so the leak can grow to be bigger. A temporary solution is to re-create the Heroku restart behavior, for example with this script:

```bash
for OUTPUT in $(pgrep -f sidekiq); do kill -TERM $OUTPUT; done
```

This will send a TERM signal to any Sidekiq workers, giving them 10 seconds (by default) to finish gracefully. Any workers that don't finish within this time period are forcefully terminated and their messages are sent back to Redis for future processing. You can customize this script to fit your needs, and add it to your application as a shell add-in.

Note that this is a temporary solution, and we recommend that you use a server monitoring solution to identify the source of your leak.


### Asset Pipeline Compilation

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation. Cloud 66 allows you to [specify whether or not to run this](/{{page.collection}}/how-to-guides/deployment/enable-disable-asset-pipeline.html) during deployment.


## What's next?

* Get started with [manifest files](/rails/quickstarts/getting-started-with-manifest.html) - a powerful tool for defining your application's components
* Learn about [CustomConfig](/rails/tutorials/custom-config.html) - a tool for defining and managing configuration templates
* Learn how to use [Toolbelt](/rails/quickstarts/using-cloud66-toolbelt.html) - a powerful command-line interface for managing your Cloud 66 applications.
