---
layout: post
template: one-col
title: CustomConfig in-depth
categories: references
lead: "Reference guide for CustomConfig"
legacy: false
order: 2
tags: ["shell"]
permalink: /:collection/:path:output_ext
---

## What is CustomConfig?

Maestro applications are typically made up of several components, some containerized and some "native" components running directly on the operating system of your servers. 

Examples of native components include databases and proxy servers, which are often impractical to containerize or that aren't improved by doing so.

Naturally, these all have their own component-specific configuration files. Whenever you install or deploy a component, whether directly or via Maestro, that component will use a standard template for its configuration files. 

**CustomConfig** is a tool that gives you access to the most commonly used of these configuration templates, and allows you to dynamically define your own values for those templates. 

## Components supported by CustomConfig

CustomConfig templates are available for the following components:

* HAproxy
* Nginx
* MongoDB    
* MySQL
* PostgreSQL
* Redis

## Accessing CustomConfig

You can access and modify CustomConfig files in two different ways:

1. Using your [Cloud 66 Dashboard](https://app.cloud66.com/)
2. Using CustomConfig git repository

### Using the Dashboard

You can find all the CustomConfig templates for your application by:

1. Logging into your Cloud 66 Dashboard
2. Clicking on your app to open the Overview 
3. Clicking on *Configuration* in the right-hand column
4. Clicking on the *Configuration Files* tab at the top of the main panel

You will now see all your configuration files as sub-tabs (as well as your Manifest and other config files depending on your app's particular features).

#### Note
<div class="notice"><p>You first need to add a component to your app using the generic configuration before you can set up CustomConfig for it. The system does not support pre-emptive configuration.</p></div>

### Using git

**CustomConfig git** is a private git repository that allows you manage changes to CustomConfig files the way you do with code. For more information please read our [CustomConfig git guide](/{{page.collection}}/tutorials/custom-config-git.html).

## Dynamic templating

CustomConfig uses the [Liquid templating language](http://www.liquidmarkup.org/) developed by [Shopify](http://www.shopify.com/) and used by many websites. 

Liquid allows you to make your templates truly dynamic by incorporating features like variables, logical flow, and operators.

The team at Shopify has written two handy beginners guides to Liquid - one for [designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) and one for [developers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers). 

For most Maestro users the **designer** guide will probably be a better starting point since it is focussed on using Liquid syntax within existing templates rather than building new templates from scratch.

## Patching configuration files

Every so often, Cloud 66 needs to update the base configuration files used by your application components. 

When a patch is released, having customized configurations introduces complexities due to the differences in settings. (If you don’t have customized content, the patch will be automatically applied.) 

If we cannot automatically apply a patch, you will be notified and provided with a patch archive. This contains two files - the updated configuration and a patch file. 

Extract the contents of the archive and download your current configuration file from the Cloud 66 Dashboard. Then run the following command:

`patch <current_configuration> -i <patch_file> -o merged_configuration`

This will result in a *merged_configuration* file being created. Please ensure that there are no merge errors at this point. 

Unfortunately, there are no generic answers for specific configuration issues, so it is your responsibility to ensure that the new file conforms to your requirements.

If there are no merge errors, you can copy and paste the contents of the *merged_template* into CustomConfig and commit it.

#### Warning
<div class="notice notice-warning"><p>Failure to apply configuration updates may lead to unexpected behaviour by your server(s) and application(s).</p></div>
