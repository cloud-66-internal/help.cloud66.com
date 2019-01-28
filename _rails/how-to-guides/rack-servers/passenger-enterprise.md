---
layout: post
template: one-col
title:  "Using Passenger Enterprise"
categories: how-to-guides/rack-servers
lead: Cloud 66 supports deploying with Passenger Enterprise
legacy: false
tags: ['Web server']
permalink: /:collection/:path
---

Passenger is an open-source, popular multi-language (Ruby, Python, Node) web & app server which can integrate into Apache and Nginx. Cloud 66 offers enterprise customers the ability to deploy stacks with Passenger Enterprise, which has several key benefits:

- Rolling restarts
- Concurrency and multi-threading
- Deployment error resistance
- Mass deployment
- Live IRB console
- Resource control and limiting
- Ruby debugger support

See the [Passenger Enterprise website](https://www.phusionpassenger.com/enterprise) for more information about benefits.

<h2 id="deploy">Deploy with Passenger Enterprise</h2>
We require two simple steps to deploy with Passenger Enterprise:

1. Place your `passenger-enterprise-license` file into your .cloud66 folder, which in turn is located in the root of your repository.

2. Add a `PASSENGER_ENTERPRISE_DOWNLOAD_TOKEN` [environment variable](/rails/tutorials/env-vars.html) which contains the value of your Passenger Enterprise download token.

If both these conditions are met, any Passenger-based server is deployed with the Enterprise edition installed. Ensure that Passenger Enterprise is displayed in the _About your app_ section of your analysis before deploying.

<div class="notice">
    <h3>Important</h3>
    <p>We recommend that you choose Passenger Enterprise as your web server at the time of initial build of the stack. If you already have a stack, please <a href="/rails/how-to-guides/scaling/scaling.html">scale up</a> to a new application server and scale down the old one to add Passenger Enterprise.</p>
</div>