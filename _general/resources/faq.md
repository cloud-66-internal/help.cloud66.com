---
menuheaders: [ "What is Cloud 66?", "Where is it hosted?", "How can I use Cloud 66?", "What is a stack?", "Can I use Cloud 66 with my own servers?", "Why do you need my server SSH key?", "Are their any requirements for the user on my servers?", "Can I deploy multiple apps on a single server?", "How can I change my Git repository?", "Which Clouds are supported?", "Which distributions of Linux are supported?", "How much does it cost?", "Who pays for the physical servers?" ]
layout: post
template: one-col
title: FAQs
categories: resources
lead: ""
legacy: false

permalink: /:collection/:path
---


## What is Cloud 66?

Cloud 66 provides container management as a service - it builds the servers needed to run your full stack, deploys your application to your servers and manages them for you. You can use it to deploy your app in your cloud or your own servers.

* * *


## Where is it hosted?

Cloud 66 is hosted in the cloud and is available as a service. You don't need to install, deploy or configure anything on your servers to use it.

* * *


## How can I use Cloud 66?

[Sign up](http://app.cloud66.com/users/sign_up) for an account and start by building your first stack. Specify a Git repository that contains a Dockerfile, or provide your own Docker image(s) to base your stack on. A few seconds later you can configure your app deployment and point your stack to the servers you would like to run your app on.

* * *


## What is a stack?

A Cloud 66 stack is an application environment. Your stack could consist of one or many individual servers, all working together to serve a particular environment, for example production. Cloud 66 supports end-to-end Docker deployments with various database backends.

* * *


## Can I use Cloud 66 with my own servers?

Yes! Cloud 66 configures and deploys your code to your servers in the cloud or your own dedicated server.

* * *


## Why do you need my server SSH key?

Cloud 66 uses remote SSH keys to set up an SSH tunnel to your server and execute remote bash scripts. For additional security we only use remote SSH keys to connect to your server, never username and password access.

* * *


## Are their any requirements for the user on my servers?

Yes. As Cloud 66 will be provisioning services on your servers from scratch, the server must meet a number of requirements outlined in the [Registered servers](/deployment/registered-servers) documentation.

* * *


## Can I deploy multiple apps on a single server?

Yes - you can have any number of Docker services running on a single server at any point in time.

* * *


## How can I change my Git repository?

You can change your Git repository through the user interface or by using the Cloud 66 Toolbelt, **Stack settings** section.

* * *


## Which Clouds are supported?

Currently we support Amazon Web Services, Digital Ocean, Google Compute Engine, Linode, Microsoft Azure, Rackspace, and CloudA clouds.

* * *


## Which distributions of Linux are supported?

We currently only support Ubuntu - the officially supported version is 16.04.

* * *


## How much does it cost?

Please see our [pricing page](http://www.cloud66.com/pricing) for more information.

* * *


## Who pays for the physical servers?

You do. Cloud 66 helps you with configuring and deploying your app to the servers. It can take care of your load balancing, monitoring, backups and so on.

