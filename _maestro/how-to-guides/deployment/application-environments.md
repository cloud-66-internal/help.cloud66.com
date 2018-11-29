---
layout: post
template: one-col
title: Application Environments
categories: how-to-guides/deployment
order: 30
lead: "How to set up custom application environments in Maestro"
legacy: false
tags: ["Environments"]
permalink: /:collection/:path
---

## Overview

To reflect the different life stages of your software, you can deploy your applications in different environments. By default Maestro provides four standard environments:

* **Development**: Used during the development phase for rapid deployment and testing
* **QA**: Used for quality assurance - typically more stable than Development
* **Staging**: Mirrors the production environment but is only used for testing
* **Production**: For live applications

## Adding custom environments

In addition, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. 

Once the new environment is added, you will be able to see it in the list of supported environments when creating a new application. 

### Understanding custom environments

Custom environments don't influence anything on the application itself. They will simply result in relevant environment variables like `RAILS_ENV` and `RACK_ENV` having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. 

For example, a Ruby on Rails application has a directory in `config/environments` that contains settings for each environment.

There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.
