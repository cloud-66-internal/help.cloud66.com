---
menuheaders: [ "What is Passenger Enterprise?", "Deploy with Passenger Enterprise", "Important" ]
layout: post
template: one-col
title: Passenger Enterprise
categories: Deployment
lead: ""
legacy: false
recommendedName: [ "Nginx" ]
recommendedLinks: ["https://help.cloud66.com/rails/deployment/nginx.html"]
permalink: /:collection/:path
---








## What is Passenger Enterprise?

Passenger is an open-source, popular multi-language (Ruby, Python, Node) web & app server which can integrate into Apache and Nginx. Cloud 66 offers enterprise customers the ability to deploy stacks with Passenger Enterprise, which has several key benefits:

- Rolling restarts
- Concurrency and multi-threading
- Deployment error resistance
- Mass deployment
- Live IRB console
- Resource control and limiting
- Ruby debugger support

See the [Passenger Enterprise website](https://www.phusionpassenger.com/enterprise) for more information about benefits.






## Deploy with Passenger Enterprise

We require two simple steps to deploy with Passenger Enterprise:

1. Place your `passenger-enterprise-license` file into your .cloud66 folder, which in turn is located in the root of your repository.

2. Add a `PASSENGER_ENTERPRISE_DOWNLOAD_TOKEN` [environment variable](/deployment/environment-variables) which contains the value of your Passenger Enterprise download token.

If both these conditions are met, any Passenger-based server is deployed with the Enterprise edition installed. Ensure that Passenger Enterprise is displayed in the _About your app_ section of your analysis before deploying.









## Important

We recommend that you choose Passenger Enterprise as your web server at the time of initial build of the stack. If you already have a stack, please [scale up]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %}) to a new application server and scale down the old one to add Passenger Enterprise.




