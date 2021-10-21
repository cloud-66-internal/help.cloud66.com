---
layout: post
template: one-col
title: Concepts &amp; Terminology
categories: the-basics
lead: "Defining the concepts and terms used in this documentation"
legacy: false
tags: ["getting-started"]
permalink: /:collection/:path:output_ext
---

## What is Cloud 66 for Node?

Cloud 66 for Node is a DevOps-automation service that allows you to easily build, deploy and maintain your node.js applications, and their supporting components, on any cloud or server. 

Cloud 66 for Node allows you to centralize the provisioning and management of:

* node.js applications
* Databases
* Load Balancers
* Caches 
* Message queues
* File storage
* Firewalls
* SSL certificates
* Monitoring and logging

...as well as all of the configuration files, settings and environment variables on which these components rely.

### How does this differ from other PaaS providers?

Unlike traditional PaaS offerings like Heroku or Google App Engine, Cloud 66 for Node allows you to use your own servers - whether in the cloud, in a data center or even on your own premises. We support both public and private clouds, as well as hybrids and bare metal installations.

Cloud 66 for Node is primarily developer-focused. It automates and standardizes the important but repetitive (and error-prone) tasks involved in configuring and deploying code to infrastructure. The platform is designed to work for both small teams without dedicated DevOps resources, and larger organizations with separate DevOps teams.

## How we define "application"

For the purposes of this documentation an application is the complete set of software, configuration and hardware components needed for your software to run. This includes all of the [components](#what-is-cloud-66-for-node) described above.

## "Application" vs "Stack"

In previous versions of this documentation we used the concept of a "stack" to describe much the same concept as we now describe using "application". The two concepts are related but not identical.

In particular "stack" tends to focus more on the underlying infrastructure and the components running on that substrate, whereas "application" is more abstracted from the underlying infrastructure.

However, when reading any documentation or our forums, it will often be helpful to think of "stack" and "application" as effectively synonymous.

In a general sense, both these terms encapsulate the same thing: an interconnected collection of components, configurations and services that are presented to the world as a single, coherent piece of software.

## Application components

You have a great degree of freedom when choosing the different components of your application.

### Load balancer (optional)

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your application.

The type of  [load balancer deployed in your application](/{{page.collection}}/tutorials/load-balancing.html) is dependent on your cloud provider.


### Web servers

By default, your applications are served with Nginx. You can [scale your web server](/{{page.collection}}/how-to-guides/scaling/scaling.html) with the click of a button.


### Background workers (optional)

To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes.


### Database servers (optional)

You can choose between any of four supported databases:

- MySQL
- PostgreSQL
- MongoDB
- Redis

Cloud 66 makes it easy for you to [backup your database](/node/how-to-guides/add-ins/database-backups.html) and [replicate your databases](/node/how-to-guides/databases/database-replication.html).


### Operating system

Your servers will be deployed with **Ubuntu 20.04 LTS**.


### Cloud vendor

You can either [deploy to your preferred cloud provider](/node/resources/technical-specifications.html#supported-cloud-providers) or [deploy to your own server](/{{page.collection}}/how-to-guides/deployment/registered-servers.html).

* * *


## Application environments

To reflect the different stages of your software, you can deploy your application in different environments:

* **Development**: Use this when you're developing your application
* **Production**: For live applications
* **QA**: Used for quality assurance
* **Staging**: Mirrors the production environment but is only used for testing

In addition to these environments, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. Once the new environment is added, you will be able to see it in the list of supported environments when creating a new application. Custom environments don't influence anything on the application. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` (for Rack-based applications) having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. For example, a Ruby on Rails application has a directory in `config/environments` that contains settings for each environment.

There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

* * * 

## The principle of immutability

At Cloud 66 we believe in the principle that application components should be treated as **immutable** whenever possible. This means that, if a configuration change is required, **it is always preferable to build a new version of that component** from scratch, and swap it with an existing component than to manually modify the configuration of that component. 

That's why we focus our efforts on making the building and deploying of components as quick, reliable and automated as possible. If spinning up a new version of an existing component takes ten minutes, why bother trying to fiddle with configurations, or upgrade in place - actions that could easily break your application?

## Automation and repeatability

Whether upgrading, building from scratch or scaling horizontally, we focus on making the roll-out of components as automated, consistent and repeatable as possible. We have many features that support this, including:

- The [Manifest file](/node/quickstarts/getting-started-with-manifest.html) captures settings for infrastructural components in a simple YAML format, making it quick and easy to roll out additional instances of a component without any manual intervention
- [CustomConfig](/node/tutorials/custom-config.html) gives you a powerful, version-controlled interface for customizing the configuration files for components like databases and Nginx
- [Deploy Hooks](/node/tutorials/deploy-hooks.html) allow you to automate the customization of components during your build and deployment process - for example installing a custom package, or a series of packages that depend on one another.


* * *

## What is StackScore?

StackScore&trade; is a score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers. It consists of five key metrics that are graded from **A** to **F**, and the overall StackScore is the lowest of the scores across these five metrics.

- **Code:** Ensures your code does not have security issues by checking for known vulnerabilities.
- **Backups and data integrity:** This tracks whether or not you are backing up your databases (with managed and/or unmanaged backups), and whether or not you verify your backups.
- **Connectivity:** Checks whether or not you are sharing your front-end and back-end on the same server. This is affected by how much memory you have on your servers, among other factors.
- **Performance:** Checks if you have a load balancer, as well as different server configuration metrics.
- **Security:** Tracks your firewall settings for potential security issues.



### Suggestion

Always try to keep your stacks at an **A** StackScore&trade; level to ensure application health.

Cloud 66 constantly seeks to update and improve the StackScore algorithm to consider new data points as well as external conditions, which means that your StackScore will change over time.

