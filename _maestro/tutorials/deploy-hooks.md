---
layout: post
template: one-col
title: Adding a deploy hook
categories: tutorials
order: 5
lead: "How to add a deploy hook to an application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. This allows you to customise your deployments  by, for example, installing software packages or upgrading components. 

We will be looking at some simple examples in this tutorial, but for a deeper understanding please read the [full reference guide](/maestro/references/deploy-hooks-syntax.html).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting_started.html) if you're not sure how to do this.

## Creating a deploy hook

Deploy hooks can be added to an application via the Dashboard. Like most other configuration templates in Maestro, Deploy hooks are YAML-formatted.

A deploy hook needs, at a minimum: 

* a **hook point** i.e where in the deployment process the hook must be invoked
* a **hook type** - either a `command` or one of the two `script` types
* a **target** - defines which type(s) of servers will use this hook
* a **hook field** - the actual command or script being invoked

So, to write a deploy hook we must:

1.  Choose your environment - eg. example _production_, _development_, _staging_ and so on.
2.  Define your [hook point](/maestro/references/deploy-hooks-syntax.html#hook-points) - eg. _first_thing_
3.  Define your [hook type](/maestro/references/deploy-hooks-syntax.html#hook-fields) i.e. _snippet_, _command_ or _script_.
4. Define your target
5. Define the [hook fields](/maestro/references/deploy-hooks-syntax.html#hook-fields) you require.

### Writing the YAML

The simplest kind of hook is the `command`. This simply executes a command in the operating system as part of the deployment process.

We're going to add the hook below to our demo application:

```
production: # Environment
    first_thing: # Hook point
      - command: apt-get install nmap -y # Hook type
        target: any # Hook fields
        execute: true

```
This hook will install the `nmap` package on our server during the deployment process. We've added the `execute` hook field because we want the command to be executed during deployment. If you don't add this field, the code you're calling won't be executed. 

#### Important
<div class="notice notice-warning"><p>When automating the installation of packages, remember to use the <em>-y</em> flag to answer yes to all prompts.</p></div>

### Adding the hook to your app

Hooks can be added to an application in one of two ways:

* Via the *Configuration Files* section of the Dashboard.
* By pushing a file to the [CustomConfig git](/maestro/tutorials/custom-config-git.html) repo for the application

We're going to use the first method in our tutorial because it's quicker and simpler.

To add the hook:

1. Open the Application Overview from your Dashboard
2. Click on *Configuration files*  in the **Application** panel on the right of the screen
3. Click on the *Deploy Hooks* tab at the top of the **Configure Services** 
4. Copy and paste the example code above into the text area
5. Click *Preview* and then check there are no errors in the parsed template file
6. Add a commit message and click *Commit to server* 

### Deploying and testing

Now that our hook is in place, we need to re-deploy our application to see it in action. 

1. Navigate back to **Application Overview**
2. Click the *Build / Deploy* button
3. Watch the deploy log and you will see the "first _thing"  deploy hook being called as part of the process

The best way to check whether your change has been applied to your server is to access it directly using SSH. [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) is the quickest way to do this. 

Once you are connected to your server, type `nmap` into the terminal. If your deploy hook was set up correctly, you will see the usage / help text for the nmap utility. If not, Ubuntu will complain that nmap is not installed.  

## Using snippets

Snippets are pre-defined hook scripts hosted in a [Cloud 66 repository](https://github.com/cloud66/snippets). These are commonly used scripts that we provide for ease of use. Like scripts (see below) these snippets are written in `bash`.

For example the [Cloud 66 ImageMagick snippet](https://github.com/cloud66/snippets/blob/master/cloud66/imagemagick) installs ImageMagick, the popular image processing application. You can use the example below to test it in your *demo* app:

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/imagemagick # Hook type
        target: any # Hook fields
        execute: true
```

You can test this in the same way as you did with the `command` hook above.

## Using inline scripts

Script hooks allow you to add your own logic to a deploy hook, either by calling a separate file using `source` or by using `inline`. Both of methods use `bash` scripting (as do snippets above).

The hook below will create an arbitrary log file in /tmp using a simple inline script:

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

## What's next

* Read our detailed guide to available [hook points](/maestro/references/deploy-hooks-syntax.html#hook-points) and [fields](/maestro/references/deploy-hooks-syntax.html#hook-fields) for more ways to customize your hooks.


