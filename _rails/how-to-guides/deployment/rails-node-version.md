---
layout: post
template: one-col
title: Setting your Node version 
categories: how-to-guides/deployment
order: 9
lead: "Choosing which version of Node is installed with your Rack/Rails applications"
tags: ["debugging"]
legacy: false

permalink: /:collection/:path:output_ext
---

## Controlling the Node version for your Rails application

We automatically install the latest release of Node version 16.x.x when we set up your Rack/Rails application servers. You can control which version is installed by editing the [manifest file](/rails/how-to-guides/deployment/building-a-manifest-file.html) for the Rails application. 

```yaml
rails:
  configuration:
    node_version: "18"       # will install latest v18.x.x
    node_version: "18.1"    # will install latest v18.1.x
```

#### Applying changes
<div class="notice notice-warning"><p>To apply changes to the Node version you need to update your manifest file, then <a href="/rails/how-to-guides/deployment/applying-upgrades.html#types">deploy-with-options</a> and select the <em>Apply Ruby/Node upgrades</em> option.</p></div>
