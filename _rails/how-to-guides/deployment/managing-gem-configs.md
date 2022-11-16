---
layout: post
template: one-col
title:  "Managing configuration of gems"
categories: how-to-guides/deployment
order: 7
lead: Managing configuration of gems in Cloud 66 for Rails
tags: ['Logs']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

Gems (and other libraries) often have their own configuration schemes and requirements, and these can occasionally conflict with Cloud 66 configurations. This article will help you understand and eliminate these conflicts. 

## Configuration of gems

There are many different ways to configure gems. The most common configuration schemes are: 

- Embedding configurations in the Ruby code of your application (usually in `config/application.rb`)
- Setting configurations in the Ruby code of the gem itself
- Separate configuration files (which come in a whole variety of formats)

Since it is possible for gems to be configured in multiple places, this can create conflicts. You should always check that your intended configuration is not being overwritten by another (higher priority) file. 

If you're unsure about any of this, please read the [Rails documentation](https://guides.rubyonrails.org/configuring.html) on the subject, and please be sure to check the documentation for the gem you're using. 

## Linux users and permissions

A common cause of issues with gems is that they either explicitly set their own file and folder permissions rather than respecting the system configuration, or they assume a standard set of users and/or permissions are present and fail if they are not. 

In most cases gems have the option to use alternative user and permissions. These should be set to follow the configuration pattern described below. 

### Cloud 66 permissions

When Cloud 66 configures your servers, we create two Linux users:

- `nginx` which handles the front-end
- `cloud66-user` which handles the backend

These users are intentionally kept separate for security reasons (you generally don't want front-end processes to have full access to your back-end). 

In order to bridge the (intentional) gap between these users, we place them both in the same Linux group called `app_writers` - this allows for use cases where a process needs access to both frontend and backend processes. 

### Permissions errors

If your application is spitting out "permission denied" errors ensure that the permissions for your gems are set as follows:

- file permissions should be set to `0660`
- directory permissions should be set to `0770`

You can usually do this inside your application's Ruby file, but please read the docs for the Gem in question to check the preferred method for setting permissions. 

## Environment variables

Many gems use (or set) system environment variables in Linux. Cloud 66 manages environment variables centrally, and allows you to configure them as required, so you should always check that the gem's env_vars are not in conflict with Cloud 66's settings. 

To see a full list of the environment variables currently in use by your application:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Configuration files* in the **Application** panel on the right of the screen

This will show you a list of the **editable** env_vars - to see a list of r**ead only** variables, click the tab at the top of the panel. 

If your gem needs any custom environment variable you can set them in a number of ways. Please read [our full guide to env-vars](https://help.cloud66.com/rails/tutorials/env-vars.html) to learn more.

## How to install password protected gems

If your application relies on a password protected gem (such as Sidekiq Pro) you can configure your app to fetch the gem securely without adding your password to your repo. This will fix any `unable to install` errors for those gems.

To do this:

1. Add a new [environment variable](/rails/tutorials/env-vars.html) to your application with an appropriate name (e.g `SIDEKIQ_USER_PASS`) - the value of the variable must use the format `username:password` 
2. Update your Gemfile to use the ENV VAR you created above when it pulls the gem. For example: 

```ruby
gem "sidekiq-pro", source: "https://#{ENV['SIDEKIQ_USER_PASS']}@gems.contribsys.com"
```

Finally, redeploy your application and the gem will be fetched correctly.