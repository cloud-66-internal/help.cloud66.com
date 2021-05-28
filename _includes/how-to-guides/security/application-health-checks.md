## Overview

You can instantly check the public, global availability of your application from your Cloud 66 Dashboard. 

## Running a check

To run a check on an application:

1. Log into your Dashboard
2. Click on the app you wish to check
3. Click the *Health Check* link at the top of the main panel (next to your application's name)

![Health Check link](/assets/shared/application-health-checks.png)

This will open a drawer from the left of the screen which will show you the results of the test.

## How the tests work

We send an `HTTP GET` from multiple datacenter regions to your application using its Cloud 66 DNS name (e.g.`your-app-name.c66.me`).

If your application redirects traffic using HTTP Redirect, we will follow the redirections up to 3 times. Your application should respond to the call within 1 second.

The datacenter regions that we check from are:

- US West (Los Angeles)
- US East (North Virginia)
- Europe West (Netherlands)
- Australia (Sydney)

This testing uses our open source project, **[Watchman](https://github.com/cloud66-oss/watchman)**, a light, multi-instance service in different geographical locations that provides a full picture of a web endpoint’s general health and global accessibility.