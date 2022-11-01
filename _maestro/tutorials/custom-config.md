---
layout: post
template: one-col
title: Using CustomConfig
categories: tutorials
order: 2
lead: "How to use CustomConfig to manage your configuration files"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

**CustomConfig** is a tool that allows you to standardise and replicate the configuration of non-containerized components, like proxies and databases, for use in your Maestro application(s). 

This guide will introduce you to the concept by showing you how to modify the configuration of an application's Nginx reverse proxy.

We also have a more [detailed guide](/maestro/references/custom-config-reference.html) to CustomConfig including which [components](/maestro/references/custom-config-reference.html#components-supported-by-customconfig) are supported and [Liquid templating language](/maestro/references/custom-config-reference.html#dynamic-templating).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Maestro** &mdash; To make the most of this tutorial you need to have an app already set up in Maestro. Follow our [Getting Started guide](/maestro/quickstarts/getting-started.html) if you're not sure how to do this.

#### Note
<div class="notice"><p>This tutorial uses the <a href="https://github.com/cloud66/maestro-demo.git">simple visit counter application</a> we've supplied on Github as a working example.</p></div>

## Editing a template

In this example we're going to modify the standard Nginx configuration template to increase the number of *worker connections* your reverse proxy will accept. 

To access the Nginx template for your application:

1. Open the Application Overview from your Dashboard
2. Click on *Application Settings* &rar; *Configuration files*  in the **Application** panel on the right of the screen
3. Click on the *NGINX* tab at the top of the **Configure Services** 

We will now use the built-in text editor to make our change to the template:

1. Look for the *worker_connections* variable in the file. It should be right near the top - in the first 8 or 10 lines.
2. Change the value of the variable from `1024` to `2048`
3. Click the green *Preview* button below the text editor
4. Check the preview of the file to ensure your change has been made correctly
5. Add a commit message
6. Click *Commit to Server*

## Applying configuration changes

Once you have committed your change, your new configuration file will be validated and then automatically applied to Nginx on your server(s). 

This works very much like it would do if you updated it manually - it changes the file and then restarts the Nginx process to enable that new configuration.

This process takes place in the background and might take some time to complete depending on the number of servers used by your application and the nature of the configuration change. 

Also, during the process, Maestro will update the contents of the [CustomConfig git repository](/maestro/tutorials/custom-config-git.html) for this application. This feature allows you to edit your config files via a git client if you prefer.

### Why do we need Preview?

The Preview step exists because CustomConfig files are dynamic - they use a templating language called [Liquid](/maestro/references/custom-config-reference.html#dynamic-templating) that renders different versions of your configuration files depending on the logic encoded in the template. Preview shows you the output of that logic - in other words, the "final" configuration produced by the template.

#### Important
<div class="notice"><p>Preview uses dummy data for some server variables (like the number of cores or the path for different binaries). Refer to our documentation to learn about how the size of your instance affects the number of <a href="/maestro/references/nginx.html">Nginx workers</a> on your server.</p></div>

## Testing your change

The best way to check whether your change has been applied to your server is to access it directly using SSH. [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) is the quickest way to do this. 

Once you are connected to your server, you can `cat` your config file. The command will look something like this: `cat /etc/nginx/cloud66_nginx.conf` and it will print the config file to screen for you to check.

## What's next?

* Learn how to use CustomConfig to configure [Nginx](/maestro/references/nginx.html), [HAProxy](/maestro/how-to-guides/build-and-config/haproxy.html) and [databases](/maestro/how-to-guides/databases/database-customization.html).
* Learn how to edit and maintain configuration templates via your favourite git client using [CustomConfig git](/maestro/tutorials/custom-config-git.html).
* Learn how to [patch your CustomConfig files](/maestro/references/custom-config-reference.html) when there is a change to the base template for a component.
