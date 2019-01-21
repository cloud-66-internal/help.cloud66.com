---
layout: post
template: one-col
title: Migrate from Heroku to Cloud66
categories: quickstarts
lead: "Move your Rails application from Heroku over to your own servers"
legacy: false
tags: ["migration"]

permalink: /:collection/:path
---


## About migrating from Heroku

Migrating your application from Heroku to Cloud 66 involves deploying your code, importing your data and redirecting your traffic to the new endpoint. 


## What server size do I need?

Using Heroku, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your stack with Cloud 66. We also recommend that you have a seperate server for your database in production environments.


## Migrating


### 1. Code

Simply provide Cloud 66 the URL to your Git repository so that it can be analyzed. For more information, see [Accessing your Git repository](/{{page.collection}}/how-to-guides/common-tools/access-your-code.html).


### 2. Data

Once your code is deployed, it's time to migrate your data across. The process differs for PostgreSQL and MySQL databases:

**PostgreSQL**  

From your Heroku toolbelt, create a database backup URL by running `heroku pgbackups:url`. Next, visit your stack detail page and click the _Import Heroku data_ link. Paste the URL provided by the toolbelt into the field, and click _Import Heroku data_.

**MySQL**  

Start by dumping your existing database. Refer to the [ClearDB documentation for common problems](http://www.cleardb.com/blog/entry?id=common-problems-2).

{% highlight bash %}
$ mysqldump -u [username] -p[password] [dbname] > backup.sql 
{% endhighlight %}

Once you have a MySQL dump file, use the [Cloud 66 toolbelt](/{{page.collection}}/references/toolbelt.html#upload) to upload the file to your stack database server. Remember to replace the fields below with your values.

{% highlight bash %}
$ cx upload -s "[stack_name]" --server [database_server_name] backup.sql /tmp/backup.sql
{% endhighlight %}

Next, use the toolbelt to SSH to your server.

{% highlight bash %}
$ cx ssh -s "[stack_name]" [server_first_name]
{% endhighlight %}

Finally, use the command below to import your backup into the database. You can find the generated username, password and database name by visting your stack detail page and clicking into your database server (eg. _MySQL server_).

{% highlight bash %}
$ mysql -u [generated_user_name] -p [generated_password] "[database_name]" < /tmp/backupfile.sql 
{% endhighlight %}


### 3. Traffic

Once you're ready to serve traffic from your Cloud 66 stack, you need to redirect your traffic to it. For more information, see [Configure your DNS](/{{page.collection}}/tutorials/configure-dns.html).


## Useful pointers


### Web server and Procfile

By default, Cloud 66 will deploy your stack with Phusion Passenger, but you can also choose a [custom web server](/{{page.collection}}/how-to-guides/deployment/shells/nginx-modules.html#passenger) like Unicorn. You may have a `web` entry in your Procfile to do this on Heroku. Cloud 66 ignores this entry to avoid compatability issues.

To run a custom web server, we require a `custom_web` entry. It is important to set this before analyzing your stack, to avoid building the stack with Passenger.

You can also use the [Procfile](/rails/how-to-guides/deployment/bluepill.html) to define other background jobs.


### Dyno recyling

Heroku restarts all dynos at 24 hours of uptime, which may conceal possible memory leaks in your application. When you migrate to Cloud 66, these will become noticeable because we don't restart your workers (other than during a deployment), so the leak can grow to be bigger. A temporary solution is to re-create the Heroku restart behavior, for example with this script:

{% highlight bash %}
for OUTPUT in $(pgrep -f sidekiq); do kill -TERM $OUTPUT; done
{% endhighlight %}

This will send a TERM signal to any Sidekiq workers, giving them 10 seconds (by default) to finish gracefully. Any workers that don't finish within this time period are forcefully terminated and their messages are sent back to Redis for future processing. You can customize this script to fit your needs, and add it to your stack as a shell add-in.

Note that this is a temporary solution, and we recommend that you use a server monitoring solution to identify the source of your leak.


### Asset Pipeline Compilation

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation. Cloud 66 allows you to [specify whether or not to run this](/{{page.collection}}/how-to-guides/deployment/enable-disable-asset-pipeline.html) during deployment.

