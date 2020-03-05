---
layout: post
template: one-col
title: Configuring asset pipeline compilation
categories: how-to-guides/deployment
order: 2
lead: "How to configure asset pipeline compilation (APC) and precompilation for Rails / Rack applications"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

[Asset Pipeline Compilation](https://guides.rubyonrails.org/asset_pipeline.html) (APC) is the process that Rails uses to consolidate and optimise assets like JavaScript and CSS, and to automate the compilation of embedded languages. For more information about this.

Cloud 66 gives you complete control over your asset pipeline: 

- We will automatically run APC on each of your deploys. You can choose to disable this.
- You can nominate one of your servers to handle the APC workload, leaving your other servers free to run your application as usual.

## Enable or disable APC

You can manually enable/disable APC either:  

- When you first deploy your app (after the analysis step)
- In your manifest file (for apps that are already deployed)

### Manifest.yml

You can use a [manifest file](/rails/quickstarts/getting-started-with-manifest) to enable/disable the APC using the following parameters with a true or false:

{% highlight yaml %}
development:
 rails:
  configuration:
  asset_pipeline_enabled: true
  asset_pipeline_precompile: true
{% endhighlight %}

Note that we must enable the pipeline *and also* set precompile to true (this is the default).

Any conflicts or gaps in APC settings will be resolved in the following order of priority:

1. Application.rb
2. Cloud 66 manifest file
3. The Cloud 66 dashboard

(i.e. the settings in your `application.rb` will overrule anything in your manifest)

## Nominating a dedicated compilation server

Compilation is a resource intensive process that can congest your servers. To mitigate this issue, you can nominate one of your application servers to act as a **dedicated compiler.** When you enable this feature, the compilation process changes as follows:

1. Code is deployed to the dedicated server 
2. Assets are compiled on that server (using your settings)
3. Code is deployed to the rest of your servers
4. Assets are synched to the rest of your servers

We strongly recommend choosing your most powerful and/or least busy server to handle this load. 

### Enabling dedicated compilation

In order to designate a application server as your dedicated compiler, you need to:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/) and click through to your Rails app
2. Click through to the overview page for the server you plan to use as a compiler
3. Click on the *Tags* icon and then *Add Tags*
4. Add a tag named `c66.compilation.run` and *Save*

The next time you redeploy your application assets will be compiled on the nominated server.