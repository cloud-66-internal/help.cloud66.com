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

#### Note
<div class="notice"><p>If you're looking for details on updating your version of Bundler, you can <a href="/rails/how-to-guides/deployment/applying-upgrades.html#bundler">find them here</a>. Essentially we update Bundler whenever you update your version of Ruby.</p></div>

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
If your <code>manifest.yml</code> specifies a different version to your Gemfile, this will cause problems when you deploy your code. The safest option is to remove the Ruby version declaration from everything except the Manifest file.</p></div> 

## Defining your Ruby version via the Manifest file

If you've never used a Manifest file before, please read through our [Getting Started guide](/rails/quickstarts/getting-started-with-manifest.html) to familiarise yourself with the concept. 

Ruby version is defined in `manifest.yml` as follows:

```yaml
    rails:
       configuration:
         ruby_version: x.y.z
```

This is obviously for applications using Rails, but you can do something similar for other Rack frameworks using this format:

```yaml
    rack:
        configuration:
          ruby_version: x.y.z
```

If you'd like more context, we have a detailed guide to all the settings available via Manifest files for both [Rails](/rails/how-to-guides/deployment/building-a-manifest-file.html#rails) and [Rack](/rails/how-to-guides/deployment/building-a-manifest-file.html#rack) applications.

#### Note
<div class="notice"><p>
If you're currently defining your Ruby version in a Gemfile or a <code>.ruby_version</code> file, we strongly recommend moving to using a Manifest file whenever you deploy code. The alternative is likely to result in significant conflicts and issues between servers and applications. Gemfile version declarations can cause problems when upgrading, because your application will no longer run unless the version declared is the same as the underlying version of Ruby.</p></div>

## Deployment strategies for Ruby version upgrades

As with any upgrade, please ensure that the upgrades and patches work with your code before applying them. Upgrade and patch your development and test environments first to ensure there are no issues. Backup your environment via your cloud provider where possible.

There are three main ways to deploy upgrades to Ruby for your application, in decreasing magnitude of risk:

1. Set up and deploy a completely new version of your application that uses the new version of Ruby
2. Add a new server with the new version of Ruby and then drop the old server
3. Upgrade Ruby in place (which risks downtime and can possibly fail completely)

#### Note
<div class="notice"><p>
Although Option 1 is technically the safest option with the least risk to your live application, we also recognise that a complete rebuild may have too many other moving parts to be practical when just upgrading Ruby. In those cases we recommend Option 2. </p></div>

### Building a new application

In this approach you build another completely separate version of your application in parallel, deploy it to new servers and then switch traffic over to to your new version. This is the safest option of all because there is no impact on your existing production environment. However this is not always practical, so the next best option is to scale up (see below).

### Scaling up

### Building a new application

In this approach you build another completely separate version of your application in parallel, deploy it to new servers and then switch traffic over to to your new version. This is the safest option of all because there is no impact on your existing production environment. However this is not always practical, so the next best option is to add a new server (see below).

### Adding a new server

The second safest option to use when upgrading Ruby is to add a new server within the same application that uses the new version of Ruby and, once you haved tested the new setup, drop the old one.

First specify your new Ruby version in your Manifest file (see above for details). Make sure you have also removed any Ruby version declarations from your Gemfile.

Once you’ve pushed this change to your repo, you can add a new web server which will use this version of Ruby. To do this:

1. Open your application on the Cloud 66 Dashboard
2. Deploy the new code by clicking the green *Deploy* button and selecting *Deploy application* (don't worry, this won't affect the version of Ruby running on your existing servers)
3. Once the redeployment has completed, click on *Rails Servers* in the main panel
4. Click on the green *+ Add Web Server* button (Note: you will need to have a load balancer set up before you can add multiple servers - [read our guide](/rails/tutorials/load-balancing.html) if you need help adding one)
5. Wait for the new server to come online and test that it is working

#### Note
<div class="notice notice-warning">
<p>Make sure you both commit <strong>and</strong> redeploy your code before you add a new server, otherwise the new Manifest file will not be taken to account. Your existing servers will not change their Ruby version unless you force them to using <em>Deploy with options</em> (which you should <strong>not</strong> do in this case). </p>
</div>

Your older servers will remain on the previous version of Ruby. Once you have thoroughly tested your new servers, you can then delete older web servers to ensure all of them use the correct version.

Bear in mind that if you don’t remove your old server, you’ll have servers in your application using different versions of Ruby. If you enforce a Ruby version in your Gemfile, your application will stop working on any of the servers that do not match the version defined in the Gemfile.

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