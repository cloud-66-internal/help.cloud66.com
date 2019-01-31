---
layout: post
template: one-col
title: Adding a deploy hook
categories: tutorials
order: 8
lead: "How to add a deploy hook to an application to customize your deployment process"
legacy: false
tags: ["operations"]
permalink: /:collection/:path
---

## Overview

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. This allows you to customise your deployments by, for example, installing software packages or upgrading components.

We will be looking at some simple examples in this tutorial, but for a deeper understanding please read the [full reference guide](/rails/references/deploy-hooks-syntax.html).

## How to use deploy hooks

To make use of deploy hooks, your stack should have a file called _deploy_hooks.yml_.

For **Rails/Rack** stacks this file should be present within a folder named _.cloud66_, which is in turn located in the root of your source code.

```
/.cloud66/deploy_hooks.yml
```

For **Docker stacks** this file should be pushed into [CustomConfig git](/rails/tutorials/custom-config-git.html) Repository of the stack. This repository will be created after the stack is analysed, so you can push your deploy hooks before deployment started.

This file should be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate it.

Creating a deploy hook from scratch consists of a number of steps:

1.  Choose your environment - eg. example _production_, _development_, _staging_ and so on.
2.  Choose your hook point - eg. _first_thing_, _after_rails_ and so on.
3.  Choose your deploy hook type - eg. _snippet_, _command_ or _script_.
4.  Select any additional hook fields you require

Automating deploy hooks can sometimes be tricky. To avoid issues, it's good practice to run each of your commands manually to see that they complete successfully. 

If a specific command doesn't show any output, you can use the `echo $?` command after issuing your command to see its exit code. If it returns a _zero_, your command was successful, whereas a _one_ means it has failed.


## Use a snippet deploy hook

Below is a bare-bone example of using a snippet with the required fields - it will execute the [Cloud 66 Node snippet](https://github.com/cloud66/snippets/blob/master/cloud66/node) as the first thing on all production servers.

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/{% if page.collection == 'maestro' or page.collection =='legacy_docker' %}docker{%else%}{{page.collection}}{%endif%} # Hook type
        target: any # Hook fields
        execute: true
```

You can also run several snippets at the same hook point like follows:

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/{% if page.collection == 'maestro' or page.collection =='legacy_docker' %}docker{%else%}{{page.collection}}{%endif%} # Hook type
        target: any # Hook fields
        execute: true
      - snippet: cloud66/bower
        target: any
        execute: true
```

See the available hook points and fields for more ways to customize this.


## Use a command deploy hook

The hook example below can be used to install anything from packages to fonts on your server, and you can nest different hooks for the same hook point like follows:

```
production: # Environment
    first_thing: # Hook point
      - command: apt-get install curl -y # Hook type
        target: any # Hook fields
        execute: true
      - command: apt-get install ncdu -y # Hook type
        target: any # Hook fields
        execute: true
```


### Important

When automating the installation of packages, remember to use the _-y_ flag to answer yes to all prompts.

The example below can be used to run custom rake tasks during server build. If you need to run it more than once, consider using the [rake task add-in](/rails/how-to-guides/deployment/running-rake-tasks.html).

```
production: # Environment
    last_thing: # Hook point
      - command: cd $STACK_PATH &amp;&amp; bundle exec rake dev:setup # Hook type
        target: rails # Hook fields ↓
        run_on: single_server
        apply_during: build_only
```

This will run our rake task on one Rails server and only during the initial build. We run this as a last_thing hook because if we ran it earlier the application wouldn't exist on the server and be usable.

## Use an existing script deploy hook 

The hook below will copy a file from your repository to your _tmp_ folder and execute it during build.

```
production: # Environment
    after_rails: # Hook point
      - source: /.cloud66/script.sh # Hook type
        destination: /tmp/script.sh
        target: rails # Hook fields ↓
        execute: true
        apply_during: build_only
```



## Use an inline script deploy hook

The hook below will create an arbitrary log file in /tmp

```
first_thing: # Hook point
 - inline: |

     #!/usr/bin/env bash
     echo "script called!" >> /tmp/inline_script.log
   target: any
   execute: true
   apply_during: all
   owner: root:root
```

### Other examples

The example shows how to use the env_vars parameter.

```
before_nginx:
   snippet: cloud66/download
   target: {%if page.collection=='rails' or page.collection == 'node' %}{{page.collection}}{%else%}docker{%endif%}
   execute: true
   apply_during: build_only
   run_on: all_servers
   env_vars:
     SOURCE_URL: "https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz"
     TARGET_PATH: /usr/local/build/nginx-modules/headers-more-nginx-module
     UNTAR: true
```
