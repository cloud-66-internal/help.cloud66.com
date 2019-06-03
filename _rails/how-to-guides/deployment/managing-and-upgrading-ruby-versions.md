---
layout: post
template: one-col
title:  "Managing and upgrading Ruby versions"
categories: how-to-guides/deployment
order: 4
legacy: false
lead: Upgrading the base Ruby version of your Cloud 66 application
tags: ['upgrade', 'update']
permalink: /:collection/:path:output_ext
---

## Overview

Ruby applications have multiple way to define which version of Ruby they are using, including the default `.ruby_version` file, the `Gemfile` if you use Gems (and related package managers like `Bundler`) and platform-specific version managers offered by cloud or PaaS providers.

Cloud 66's default method for defining package versions is via a `manifest.yml` file and we strongly recommend using that method for all your deployments via our system. See below for detailed instructions on using this method. 

## How we determine the version to use

When you configure a new Ruby application in Cloud 66 we set the version based on one of the following (in order of preference):

1. The version defined in `manifest.yml` (if present)
2. The version in your `Gemfile` (if present)

If neither of these are present, we present you with a screen in which you can select the Ruby version to use. 

When you scale up a new server for an existing Ruby application we set the version based on one of the following (in order of preference):

1. The version defined in manifest.yml (if present)
2. The version previously chosen when the application was created

You can check the latest version of Ruby we currently support on our [technical specifications](/rails/resources/technical-specifications.html#component-versions) page.

#### Warning
<div class="notice notice-warning"><p>
If your <kbd>manifest.yml</kbd> specifies a different version to your Gemfile, this will cause problems when you deploy your code. The safest option is to remove the Ruby version declaration from everything except the Manifest file.</p></div> 

## Defining your Ruby version via the Manifest file

If you've never used a Manifest file before, please read through our [Getting Started guide](/rails/quickstarts/getting-started-with-manifest.html) to familiarise yourself with the concept. 

Ruby version is defined in `manifest.yml` as follows:

    rails:
       configuration:
         ruby_version: x.y.z

This is obviously for applications using Rails, but you can do something similar for other Rack frameworks using this format:

    rack:
        configuration:
          ruby_version: x.y.z

If you'd like more context, we have a detailed guide to all the settings available via Manifest files for both [Rails](/rails/how-to-guides/deployment/building-a-manifest-file.html#rails) and [Rack](/rails/how-to-guides/deployment/building-a-manifest-file.html#rack) applications.

#### Note
<div class="notice"><p>
If you're currently defining your Ruby version in a Gemfile or a <kbd>.ruby_version</kbd> file, we strongly recommend moving to using a Manifest file whenever you deploy code. The alternative is likely to result in significant conflicts and issues between servers and applications. Gemfile version declarations can cause problems when upgrading, because your application will no longer run unless the version declared is the same as the underlying version of Ruby.</p></div>

## Deployment strategies for Ruby version upgrades

As with any upgrade, please ensure that the upgrades and patches work with your code before applying them. Upgrade and patch your development and test environments first to ensure there are no issues. Backup your environment via your cloud provider where possible.

There are two main ways to deploy upgrades to Ruby for your application, in decreasing magnitude of risk:

1. Set up and deploy a completely new version of your application that uses the new version of Ruby
2. Create a new server ("scale up") with the new version of Ruby
3. Upgrade Ruby in place (which risks downtime and can possibly fail completely)

#### Note
<div class="notice"><p>
Although Option 1 is technically the safest option with the least risk to your live application, we also recognise that a complete rebuild may have too many other moving parts to be practical when just upgrading Ruby. In those cases we recommend Option 2. </p></div>

### Building a new application

In this approach you build another completely separate version of your application in parallel, deploy it to new servers and then switch traffic over to to your new version. This is the safest option of all because there is no impact on your existing production environment. However this is not always practical, so the next best option is to scale up (see below).

### Scaling up

The second safest option to use when upgrading Ruby is to "scale up" a new server within the same application that uses the new version and, once you tested the new setup, drop the old one. 

First specify your new Ruby version in your manifest file (see above for details). Make sure you have also removed any Ruby version declarations from your Gemfile. 

Once you've pushed this change to your repo, you can scale up a new web server which will use this version of Ruby. To do this:

1. Open your application on the Cloud 66 Dashboard
2. Click on the name of a server in the main panel
3. Click on the green + next to the server you want to replicate (scale up) and confirm the action
4. Wait for the new server to come online and test that it is working

<div class="notice notice-warning">
<p>Make sure you redeploy before you scale up, otherwise the new Manifest settings will not be taken to account. </p>
</div>

The previous server will remain on the old version of Ruby. You can then scale-down your older web server to ensure all your web servers are the correct version. 

Bear in mind that if you don't scale down your old server, you'll have servers in your application using different versions of Ruby. If you enforce a Ruby version in your Gemfile, your application will stop working on any of the servers that do not match the version defined in the Gemfile.

Also, if you have background jobs running on your old server, ensure that you gracefully shut these down before switching everything to the new server.

### In-place upgrades

Performing in-place Ruby upgrades on your application carries the most risk out of these options. Installing Ruby on a server requires server resources, and in the unlikely event that this process fails (ie. server runs out of resource, or upstream package becomes temporarily unavailable for example) your server could be left in a broken state.

To run an in-place upgrade:

1. Update your manifest.yml to use the preferred version of Ruby
2. Open your application on the Cloud 66 Dashboard
3. Click the *Deploy* button and then choose *Deploy with options* and select *Apply Ruby upgrades.*

We will now attempt to upgrade Ruby without disrupting your application but, as mentioned, there is some risk that the server becomes unavailable. Please be sure that you have not specified a Ruby version in your Gemfile, or your application will stop working after the upgrade. 

#### Warning
<div class="notice notice-danger">
<p>If you are upgrading your Ruby base version then you should put your application into maintenance mode first as Passenger-based stacks (and possibly others) will have some down-time during the upgrade.</p>
</div>