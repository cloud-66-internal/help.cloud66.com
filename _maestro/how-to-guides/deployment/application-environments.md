---
layout: post
template: one-col
title: Application Environments
categories: how-to-guides/deployment
order: 30
lead: "How to set up custom application environments in Maestro"
legacy: false
tags: ["Environments"]
permalink: /:collection/:path:output_ext
---

## Overview

To reflect the different life stages of your software, you can deploy your applications in different environments. By default Maestro provides four standard environments:

* **Development**: Used during the development phase for rapid deployment and testing
* **QA**: Used for quality assurance - typically more stable than Development
* **Staging**: Mirrors the production environment but is only used for testing
* **Production**: For live applications

## Adding custom environments

In addition, you can define your own environments. To do so:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Custom Environments* in the **Settings** panel on the left.
4. Click on *Add a new environment*
5. Give your environment a name and click *Save changes*

Once the new environment is added, you will be able to see it in the list of supported environments when creating a new application. 

### Understanding custom environments

Custom environments don't influence anything in the application itself. They will simply result in relevant environment variables having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment.  There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.
