---
layout: post
template: one-col
title: Setting Node Version 
categories: how-to-guides/deployment
lead: ""
tags: ["debugging"]
legacy: false

permalink: /:collection/:path
---

## Controlling the Node version for your Rails Stack

We automatically install the latest release of Node version 6.x.x when we set up your Rack/Rails stack servers. You can control which version is installed by editing the [manifest file](/rails/how-to-guides/deployment/building-a-manifest-file.html) for the Rails stack. 

``` 
rails:
  configuration:
    node_version: "6"       # will install latest v6.x.x
    node_version: "6.14"    # will install latest v6.14.x
    node_version: "6.14.4"  # will install specific v6.14.4
```

#### Applying changes
<div class="notice notice-warning"><p>To apply changes to the Node version you need to update your manifest file, then <a href="/rails/tutorials/applying-upgrades.html#types">deploy-with-options</a> and select the <em>Apply Ruby/Node upgrades</em> option.</p></div>
