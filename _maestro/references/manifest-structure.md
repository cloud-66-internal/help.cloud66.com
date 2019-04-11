---
layout: post
template: one-col
title: Understanding manifest files
categories: references
order: 3
lead: Understanding the underlying principles of manifest files
tags: ['tags']
legacy: false
permalink: /:collection/:path:output_ext
---

## Classes of manifest file settings

Although manifest files are a powerful tool for defining the composition of an application, it is vital to understand their limits and exceptions. 

There are three broad classes of settings in manifest files:

1. Settings that only apply when an application is deployed for the first time (e.g. how much RAM your server should have)
2. Settings that only apply after a specific action is taken (e.g. using Toolbelt to force Nginx to refresh its configuration)
3. Settings that apply each time an application is redeployed

### Class 1: Once-off settings

These are almost exclusively confined to the `server` settings. For instance, changing the cloud vendor in your manifest will not automatically migrate your server to that provider. 

Class 1 settings include:

* Disk size 
* Disk type
* Vendor
* Region
* Size

### Class 2: Sticky settings

These are settings that require a specific action to trigger their roll-out. 

For example, in order to implement changes to cross-origin scripting (CORS) settings in Nginx, you need to use the `reconfigure.nginx` command in [Cloud 66 Toolbelt](/maestro/references/toolbelt.html) to force the settings to propagate.


### Class 3: Flexible settings

These are settings which will be applied as soon as the application is re-deployed following a change to its manifest file. This includes all the settings that don't fall into classes 1 or 2 above.


## Manifest file structure

Manifest files have a strict hierarchical structure that determines which part of an application is being addressed by the configuration variables. It's vital to ensure that each line of your configuration falls into the correct place in this hierarchy.

For a working example of this, follow our [Getting Started](/maestro/quickstarts/getting-started-with-manifest.html) guide.

### First level: Environment

The **optional** first level of `manifest.yml` is the application environment. This allows you to use the same `manifest.yml` for multiple applications with different environments. Some examples are:

- production
- staging
- development

You can also use custom environment names in your manifest file.

### Second level: Component type

*Component type* defines which component of the application is being configured by that section of `manifest.yml`. 

Available options are:

- rails
- docker
- elasticsearch
- gateway
- glusterfs
- load_balancer
- memcached
- mongodb
- mysql
- nginx
- postgis
- postgresql
- redis
- sinatra

### Third Level (1): Configurations

The third level of the manifest file determines the specific settings for the component specified in level 2. 

In our example above, this is the level at which we changed the Redis version and set our custom nameservers. 

### Third Level (2): Servers

You can also specify settings for your servers in your  `manifest.yml` by using the **servers** section. 

In our example below you can see that we're using Digital Ocean as our `vendor` and that we've opted for a 2GB instance in the London region. 

`key_name` is optional and is used to select the named vendor cloud key in the case where there are multiple accounts available for the same cloud provider.

## Example of manifest file

```
docker:
  configuration:
    version: 18.03.0-ce
    nameservers: ['8.8.8.8', '8.8.4.4']
  servers:
  - server:
      same_as: master
redis:
  configuration:
    version: 4.0.9
  servers:
  - server:
      unique_name: master
      size: s-2vcpu-2gb
      region: lon1
      vendor: digitalocean
      key_name: My_Key

```

