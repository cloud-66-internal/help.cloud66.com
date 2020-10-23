---
layout: post
template: one-col
title: Using CustomConfig Git
categories: tutorials
order: 3
lead: "How to use CustomConfig Git to edit and track configuration files"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

CustomConfig git is a private git repository available for every application in your Cloud 66 account. This git repository is hosted by Cloud 66 and allows you to modify [CustomConfig](/maestro/tutorials/custom-config.html) files for your application using familiar git commands.

If you have completed our [CustomConfig tutorial](/maestro/tutorials/custom-config.html) you know how it can be a powerful tool to customise configuration for "native" components like proxies and databases. 

The easiest way to modify CustomConfig files is through the [Cloud 66 Dashboard](https://app.cloud66.com/). However if you would prefer to edit CustomConfig files in a desktop editor or use git's merge and flow control features you can use CustomConfig git.

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting-started.html) if you're not sure how to do this.

## Accessing your CustomConfig git repo

You can acces the CustomConfig repo for any application using its git URL. To find this:

1. Open the Overview page for the application 
2. Click *Settings & Information* in the **Application** panel on the right of the screen
3. Click the *Information* tab at the top of the Settings page
4. You'll find the git URL under *CustomConfig git* It will look something like this:
`git@git1.cloud66.com:warmhearted-wondrous-tiger-9262.git`

### Uploading your SSH public key

Like any other git repository, CustomConfig git requires a public SSH key for authentication. If you are not familiar with how git SSH key authentication works or how to generate your own SSH keys, you can read this great guide by Github: [Git SSH key setup](https://help.github.com/articles/generating-ssh-keys/).

You can upload your public SSH key by:

1. Clicking your avatar / account icon at the top right of the screen and choosing *Account settings*
2. Clicking *Git Repo SSH Keys* in the left-hand navigation panel
3. Clicking the *CustomConfig* tab at the top of the page
4. Paste your public SSH key into the text box and click *Add Public Key*

You will now be able to access your CustomConfig git repos using a git client.

## Editing CustomConfig files

To make a change to a CustomConfig file you need to first clone the application's CustomConfig git repository locally. Using git commandline this is possible with something like this:

```shell
$ git clone git@git1.cloud66.com:warmhearted-wondrous-tiger-9262.git
```

This will clone the CustomConfig git repository for the first time to your disk under a folder called `warmhearted-wondrous-tiger-9262`.

Now you can open to that folder and see the list of files available to edit. By default, each CustomConfig git repository contains all the CustomConfig files that are relevant to an application. 

For example, if you are using HAProxy as load balancer, you will see `haproxy.conf` as one of the files there. You will also see `nginx.conf` since every Maestro application uses it as a reverse proxy server by default.

Now open the file you want to change in your favourite text editor. Once done, save the file and commit your changes as you would for any normal git workflow. For example:

```shell
$ git commit -m "increase nginx pool size"
$ git push origin master
```

Done!

## CustomConfig git workflow

It’s important to understand how and when these configuration changes are pushed to your servers.

### Changes made in CustomConfig UI

Any changes made to CustomConfig files via the [Dashboard](https://app.cloud66.com/) will be applied to the CustomConfig git repository as well.

Changing a CustomConfig file in the UI will be pushed to your servers immediately unless there is a merge conflict with what’s already in the repository.

### Changes made through CustomConfig git

Changes made to CustomConfig git files will NOT be pushed to your servers until the next application deployment. This is to prevent unwanted changes going live during your normal git workflow.

## Automatic updates

One of the most powerful features of CustomConfig is the automatic updates that are applied to your applications. For example if there is an improvement in the way nginx is configured or a security patch is released to HAProxy which requires configuration change, Maestro will automatically make those changes to your CustomConfig files.

This is done by committing the changes to the CustomConfig git repository by Cloud 66. Those changes are visible on your git history and are performed by `git@cloud66.com` user.

## What's next?

* Learn how to use CustomConfig to configure [Nginx](/maestro/references/nginx.html), [HAProxy](/maestro/how-to-guides/build-and-config/haproxy.html) and [databases](/maestro/how-to-guides/databases/database-customization.html).
* Learn how to [patch your CustomConfig files](/maestro/references/custom-config-reference.html) when there is a change to the base template for a component.
