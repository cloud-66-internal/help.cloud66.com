---
menuheaders: [ "What is Memcached?", "Add Memcached", "Customize Memcached", "Note", "Check Memcached" ]
layout: post
template: one-col
title: Memcached
categories: addins
lead: ""
legacy: false

permalink: /:collection/:path
---


### What is Memcached?
[Memcached](http://memcached.org/) is an open source, high-performance, distributed memory object caching system, and it's easy to add to your stack as an add-in.


## Add Memcached
To add Memcached to your stack, access the add-ins menu, click _Memcached_ and confirm the installation. This will install Memcache on your servers for use with your application - you just need to ensure that your app is configured accordingly.


## Customize Memcached
To customize Memcached, use the below syntax in your [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files) and redeploy the stack with `Apply security upgrades` option.


```
production:
    memcached:
        shared_group: db
        configuration:
            memory: 1024
            port: 11215
            listen_ip: 127.0.0.1
```


### Note

For docker stacks this will be added to the host not as a container.



## Check Memcached

You can find the details about Memcached under your `Settings & Information`, `Information` tab. Since having Memcached as a separate server will not improve performance, Cloud66 will install it on each web server, not as a standalone server. [More info:](http://community.cloud66.com/articles/memcached)

