---
layout: post
template: one-col
title: Using Rails (Rack) deployment health checks
categories: how-to-guides/deployment
lead: "How to set up health checks to confirm that your application has been properly deployed"
order: 6
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Deployment health checks are a way to check whether your code has been deployed properly by checking on the status of your Rails application.

Cloud 66 offers two kinds of deployment health checks:

1. Automated health checks (custom webservers only)
2. Custom health checks

## Automated health checks

If your app uses a custom web server such as Puma, Unicorn or Thin (i.e. anything but Passenger, our default web server) then we offer automated deployment health checks. 

We use two metrics to ensure your application is healthy: 

- We check if Bluepill is reporting that your application is healthy
- We check that your application process IDs change in some way on redeployment.

If either of these two checks fail, we mark the deployment as failed.

### Enabling automated health checks

To enable automated health checks on an application:

1. Open your [Dashboard](https://app.cloud66.com/) and click on the application
2. Click on Settings & Information in the right-hand panel
3. Check the "Web Health" checkbox

## Custom health checks

Custom health checks allow you to define simple tests (in YAML format) to confirm whether your Rails (or Rack) application has been successfully deployed, and to mark a deployment as "failed" if any of these checks do not pass.

This can help to catch deployments that don't throw any errors, but are problematic for other reasons (such as issues at the code or database level). This is particularly useful for serial or rolling [deployment strategies](/rails/how-to-guides/deployment/parallel-deployment.html) to ensure that bad code doesn't bring your entire application down.

### Defining custom health checks

Custom health checks are defined in your application's [manifest file](/rails/quickstarts/getting-started-with-manifest.html). Health checks have the following options:

    rails/rack:
    	configuration:
    		health:
    			protocol: 'http'
    			host: 'localhost'
    			port: 80
    			endpoint: '/'
    			accept: ["200", "300-399"]
    			timeout: 30

The values above are the default values and are all optional. Any options that are excluded will simply use the defaults above. You can see a complete list of supported options in our [detailed manifest guide](/rails/how-to-guides/deployment/building-a-manifest-file.html).

To simply use all these defaults with no changes, you can set:

    rails/rack:
    	configuration:
    		health: default

## The limitations of health checks

As you can see these checks are quite simple - they confirm that the endpoints defined are returning acceptable HTTP response codes. They do this by running a `curl` command from the server itself once new code has been deployed.

If you have set up custom error handling for your application, be sure these checks account for that customisation.

In particular you should check that your application correctly reports response codes and does not mask them. This applies to both false positives (i.e. health checks that should fail but appear to pass) and to false negatives (failed checks of healthy deployments).

## Dealing with domain access controls

Some applications are set to only accept requests that originate from their own domain (or set of domains). In this case the health checks would always fail. The best way to work around this issue is to add an entry to your `/etc/hosts` file that maps your [localhost](http://localhost/) (127.0.0.1) to your primary domain.

## Need more detail?

- We have a [complete how-to guide](/rails/how-to-guides/deployment/building-a-manifest-file.html) to building Manifest files
- We have more info on [using deployment strategies](/rails/how-to-guides/deployment/parallel-deployment.html)