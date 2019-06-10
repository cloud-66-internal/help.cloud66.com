---
layout: post
template: one-col
title: Adding a deploy hook
categories: tutorials
order: 2
lead: "How to add a deploy hook to an application to customize your deployment process"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. This allows you to customize your deployments by, for example, installing software packages or upgrading components.

We will be looking at some simple examples in this tutorial, but for a deeper understanding please read the [full reference guide](/rails/references/deploy-hooks-syntax.html).

## How to use deploy hooks

To make use of deploy hooks, your application should have a file called *deploy_hooks.yml*.

For **Rails/Rack** applications this file should be present within a folder named _.cloud66_, which is in turn located in the root of your source code.

```
/.cloud66/deploy_hooks.yml
```

This file should be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate it.

To create a deploy hook:

1.  Choose your environment - e.g. _production_
2.  Choose your hook point - e.g. _first_thing_
3.  Choose your deploy hook type - _snippet_, _command_ or _script_.
4.  Select any additional hook fields you require

## Understanding hook points and ordering

Hook points are used to define the point in your deployment process at which a hook should be invoked. This is obviously critical when there are tight dependencies between the components of your application (i.e. one component relies on another component being installed first), but it is also important in terms of what actions and commands are possible. For example, running tasks against a database before the database server is installed will not work!

It's important to understand the order in which hook points will occur in the flow of deployment. The simplified deployment process below shows where each deploy hook is triggered. Hooks are marked in ***bold italic***. Some hooks have several possible values (`x`, `y`, `z`). Click on the hook name to see a list of available options:

### Deployment process (simplified)

1. Server is fired up
2. Operating system and standard system components installed → ***first_thing***
3. ***before_agent*** → Cloud 66 Agent is installed → ***after_agent***
4. [***before_x***](/rails/references/deploy-hooks-syntax.html#beforex) → Database is installed → [***after_x***](/rails/references/deploy-hooks-syntax.html#beforex)
5. [***before_y***](/rails/references/deploy-hooks-syntax.html#beforey) → Database replication is configured → [***after_y***](/rails/references/deploy-hooks-syntax.html#beforey)
6. ***before_data_mount*** → Data is mounted → ***after_data_mount (GlusterFS specific)***
7. ***custom_server*** (runs on custom servers only)
8. ***before_node* →** Node is installed → ***after_node***
9. ***before_nginx* →** NGINX is installed → ***after_nginx***
10. [***before_z***](/rails/references/deploy-hooks-syntax.html#beforez)
11. Application framework is installed 
12. ***after_checkout*** 
13. ***after_bundle*** 
14. ***after_symlink*** 
15. [***after_z***](/rails/references/deploy-hooks-syntax.html#afterz)
16. ***before_processes* →** processes are handled → **after_processes**
17. **last_thing**

### Notes

- `x`, `y` and `z` represent `database & storage engine installation` , `replication configuration` and `application framework installation` respectively.
- For the ***after_checkout*** and ***after_bundle*** hook points, the `$STACK_PATH` points to the latest code, even though **after_symlink** has not run yet.
- The source of the checkout hooks is the version of the code being deployed **at all times**
- The **last_thing** hook runs only when ALL servers reach that point

## Debugging deploy hooks

Automating deploy hooks can sometimes be tricky. To avoid issues, it's good practice to run each of your commands manually to see that they complete successfully. 

If a specific command doesn't show any output, you can use the `echo $?` command after issuing your command to see its exit code. If it returns a _zero_, your command was successful, whereas a _one_ means it has failed.


## Using snippet deploy hooks

Below is a bare-bone example of using a snippet with the required fields. It will execute the [Cloud 66 Node snippet](https://github.com/cloud66/snippets/blob/master/cloud66/node) as the first thing on all production servers.

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/node # Hook type
        target: any # Hook fields
        execute: true
```

You can also run multiple snippets at the same hook point:

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


## Using command deploy hooks

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

#### Important
<div class="notice notice-warning"><p>
When automating the installation of packages, remember to use the <em>-y</em> flag to answer yes to all prompts.</p></div>

### Custom Rake task command

The example below can be used to run custom rake tasks during server build. If you need to run it more than once, consider using the [rake task add-in](/rails/how-to-guides/deployment/running-rake-tasks.html).

```
production: # Environment
    last_thing: # Hook point
      - command: cd $APP_PATH && bundle exec rake dev:setup # Hook type
        target: rails # Hook fields
        run_on: single_server
        apply_during: build_only
```

This will run our rake task on one Rails server and only during the initial build. We run this as a last_thing hook because if we ran it earlier the application wouldn't exist on the server and be usable.

## Using existing script deploy hooks 

The hook below will copy a file from your repository to your *tmp* folder and execute it during build.

```
production: # Environment
    after_rails: # Hook point
      - source: /.cloud66/script.sh # Hook type
        destination: /tmp/script.sh
        target: rails # Hook fields
        execute: true
        apply_during: build_only
```

## Using inline script deploy hooks

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


### Example: env_vars parameter

This example shows how to use the env_vars parameter.

```
before_nginx:
   snippet: cloud66/download
   target: {{page.collection}}
   execute: true
   apply_during: build_only
   run_on: all_servers
   env_vars:
     SOURCE_URL: "https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz"
     TARGET_PATH: /usr/local/build/nginx-modules/headers-more-nginx-module
     UNTAR: true
```

## What's next?

* Learn how to use [Manifest files](/rails/quickstarts/getting-started-with-manifest.html) to customize the components of your application 
* Learn how to add custom [environment variables](/{{page.collection}}/tutorials/env-vars.html) to your application
* Learn how to use [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) - a powerful tool for configuring the components of your application.