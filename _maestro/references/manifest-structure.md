---
layout: post
template: one-col
title: Manifest file structure
categories: references
lead: Tags reserved for use by Maestro and Cloud 66
tags: ['tags']
legacy: false
permalink: /:collection/:path
---

## Understanding manifest file structure

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

In our example above, this is the level at which we changed the Redis version, and set our custom nameservers. 

### Third Level (2): Servers

You can also specify setting for your servers in your  `manifest.yml` by using the **servers** section. 

In our example above you can see that we're using Digital Ocean as our `vendor`, and that we've opted for a 2GB instance in the London region. 

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

