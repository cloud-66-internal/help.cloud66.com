---
layout: post
template: one-col
title: Deploying and managing Faye
categories: how-to-guides/deployment
order: 14
lead: "How to set up the Faye publish-subscribe messaging system with Cloud 66 for Rails"
tags: ["websocket"]
legacy: false
permalink: /:collection/:path:output_ext
---


## Introduction

[Faye](http://faye.jcoglan.com/) is a publish-subscribe messaging system that provides messaging services. At Cloud 66, we recommend running Faye as a [background process](/rails/how-to-guides/deployment/systemd.html) on your application behind a [Thin rack server](http://code.macournoyer.com/thin/).


## Implementation

We will use four files containing the following commands to accomplish this setup. In addition to these, be sure to open the port on which your Faye server is running to the relevant servers.


### 1. RAILS_ROOT/.cloud66/deploy_hooks.yml

[Deploy hooks](/{{page.collection}}/tutorials/deploy-hooks.html) allow you to take action at various points during a build and/or deployment on Cloud 66. This one will run the bash script that we will create in the next step before Rails is installed on your server.

```
production:
    before_rails:
      - source: /.cloud66/files/add_thin_and_faye.sh
        destination: ~/add_thin_and_faye.sh
        target: rails
        execute: true
        sudo: true
        apply_during: build_only
        run_on: all_servers
```

If you are adding Faye to an **existing application**, you should temporarily change the deploy hook `apply_during: build_only` to `apply_during: all`. Failing to do this would not apply the changes to your existing application - but once you have got it running for the first time you can change it back as you don't need to run the script on every deploy.


### 2. RAILS_ROOT/.cloud66/files/add_thin_and_faye.sh
This bash script ensures that Thin and Faye are installed on your server during deployment.

```
!/bin/bash
sudo gem install thin --no-ri --no-rdoc
sudo gem install faye --no-ri --no-rdoc
```


### 3. RAILS_ROOT/Procfile
Here we are creating a [background process](/rails/how-to-guides/deployment/systemd.html) for Faye so that we can control and monitor it from the Cloud 66 dashboard.

```
$ faye: thin -R $STACK_PATH/faye/config.ru start
```




### 4. RAILS_ROOT/faye/config.ru
These are settings specific to your Faye setup, which will vary depending on your requirements. You will need to insert the port that your Faye setup is running on in the last line.

```
require 'faye'
faye_server = Faye::RackAdapter.new(:mount => '/your_faye_mount', :timeout => 45)
Faye::WebSocket.load_adapter('thin')
faye_server.listen(<<PUT-YOUR-PORT-HERE>>)
```




## Troubleshooting
Should you need to do any troubleshooting, you can find your Faye logs in `$STACK_PATH/log/user_faye_1.log` on your server.

