## Overview

You can instantly check the public, global availability of your application from your Cloud 66 Dashboard. You can also set your application to automatically check the availability of endpoints after each deployment. 

## Running an on-demand health check

To run an instant check on an application:

1. Log into your Dashboard
2. Click on the app you wish to check
3. Click the *Health Check* link at the top of the main panel (next to your application's name)

![Health Check link](/assets/shared/application-health-checks.png)

This will open a drawer from the left of the screen which will show you the results of the test.

## Post-deployment health checks

You can configure your application to run a health check after each deployment. There are two ways to configure these checks:

1. Via the Dashboard interface (documented below)
2. Via your Manifest file (please see the [Manifest reference guide](/{{page.collection}}/references/manifest-web-settings.html#post-deployment-health-checks))

Post-deployment health checks have the following options:

- A **health check path** - this allows you to query a specific endpoint within your application. This uses the app's Cloud 66 DNS name (see below for more info). Defaults to the root of your app (`/`)
- A list of **accepted HTTP status codes** - we will treat an HTTP response containing any of these status codes as a *pass*. You can also specify ranges of codes (`300-399`)
- A **timeout** value in seconds - if we don't get a response within this time we will treat the test as a *fail*. The maximum allowed is `10`.
- A **maximum redirects** limit - if the number of redirects exceeds this value we will treat the test as a *fail*. The maximum allowed is `10`.
- A post-deployment **cooldown** - this is how long we will wait (in seconds) after a deployment in completed before we check the endpoint. The maximum allowed is `1800`(30 minutes).

### Configuring a post-deployment check

To configure (or update) a post-deployment health check:

1. Log into your Cloud 66 Dashboard
2. Click on ⚙️*Settings & Information* in the right-hand column
3. Click on the *Health Check* tab at the top of the main panel
4. Click on the *Yes, Run a Post Deployment Health Check* radio button
5. Configure your settings (see above for details of each setting)
6. Click the *SAVE* button

To disable the check, click the *No Health Check will be run* radio button.

### Viewing results of post-deployment checks

The results of your post-deployment health checks will be displayed under ActiveProtect:

1. Log into your Cloud 66 Dashboard
2. Click on *ActiveProtect* in the right-hand column
3. Any failed checks will appear on the front page of ActiveProtect but you can click on the *Health Checks* tab to filter down to the checks.

## How the tests work

We send an `HTTP GET` from multiple datacenter regions to your application using its Cloud 66 DNS name (e.g.`your-app-name.c66.me`).

If your application redirects traffic using HTTP Redirect, we will follow the redirections up to 3 times. Your application should respond to the call within 1 second.

The datacenter regions that we check from are:

- US West (Los Angeles)
- US East (North Virginia)
- Europe West (Netherlands)
- Australia (Sydney)

This testing uses our open source project, **[Watchman](https://github.com/cloud66-oss/watchman)**, a light, multi-instance service in different geographical locations that provides a full picture of a web endpoint’s general health and global accessibility.