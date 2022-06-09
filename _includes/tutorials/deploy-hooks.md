## Overview

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. This allows you to customise your deployments  by, for example, installing software packages or upgrading components. 

We will be walking through a simple example in this tutorial. For more detailed examples please read the in-depth [How-to Guide](/{{page.collection}}/how-to-guides/deployment/using-deploy-hooks.html). For a full list of every available option please read our [reference guide](/{{page.collection}}/references/deploy-hooks-syntax.html).

## What you'll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
* **An existing application set up in Cloud 66** &mdash; To make the most of this tutorial you need to have an app already set up in Cloud 66. Follow our [Getting Started guide](/{{page.collection}}/quickstarts/getting-started.html) if you're not sure how to do this.

## Creating a deploy hook

{% if include.product == 'rails' or include.product == 'node' %}
To make use of deploy hooks, your application should have a file called *deploy_hooks.yml*.

For **Rails/Rack** applications this file should be present within a folder named _.cloud66_, which is in turn located in the root of your source code.

```bash
/.cloud66/deploy_hooks.yml
```

This file should be YAML formatted, and you can use a service like [YAML Validator](https://codebeautify.org/yaml-validator) to validate it.
{% endif %}
{% if include.product == 'maestro' %}
Deploy hooks can be added to an application via the Dashboard. Like most other configuration templates in Maestro, Deploy hooks are YAML-formatted.
{% endif %}

A deploy hook needs, at a minimum:

- a **hook point** - where in the deployment process the hook must be invoked
- a **hook type** - either a `command` or one of the two `script` types
- a **target** - which type(s) of servers will use this hook
- a **hook field** - the command or script being run (or invoked)

### Note
<div class="notice notice-warning"><p>If you choose a specific server type as your target (i.e. anything <em>other than</em> <code>any</code>) then your <strong>run_on</strong> field will default to <code>single_server</code> unless you explicitly set it to <code>all_servers</code>. If you set your <strong>server_type</strong> to <code>any</code>, then this field is ignored.</p></div>

So, to write a deploy hook you must:

1. Choose your [**hook point**](/{{page.collection}}/references/deploy-hooks-syntax.html#hook-points) - e.g. `first_thing`
2. Choose your [**hook type**](/{{page.collection}}/references/deploy-hooks-syntax.html#hook-types) - e.g. `command`
3. Set a [**target**](/{{page.collection}}/references/deploy-hooks-syntax.html#targets) server-type for the hook - e.g. `mysql`
4. If your **target** is *not* `any` then set the **run_on** to either `single_server` or `all_servers`.
5. Configure the [**hook fields**](/{{page.collection}}/references/deploy-hooks-syntax.html#hook-fields) you require

While this is the bare minimum required to write a functional deploy hook, there are extensive options available for customization. Please read our [reference guide](/{{page.collection}}/references/deploy-hooks-syntax.html) to understand all the possibilities.

### Writing the YAML

The simplest kind of hook is the `command`. This simply executes a command in the operating system as part of the deployment process.

We're going to add the hook below to our demo application:

```yaml
    first_thing: # Hook point
      - command: apt-get install nmap -y # Hook type
        target: any # Hook fields
        execute: true
```

This hook will install the `nmap` package on our server during the deployment process. We've added the `execute` hook field because we want the command to be executed during deployment. If you don't add this field, the code you're calling won't be executed. 

#### Important
<div class="notice notice-warning"><p>When automating the installation of packages, remember to use the <em>-y</em> flag to answer yes to all prompts.</p></div>

{% if include.product == 'maestro' %}
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
{% endif %}
{% if include.product == 'rails' or include.product == 'node' %}
### Adding the hook to your app

To add a hook to your app:

1. Create (or, if it exists, open) a file named *deploy_hooks.yml* in a folder named _.cloud66_ in the root of your source code repo.
2. Paste in your (validated) YAML
3. Commit the file to your repo
{% endif %}

### Deploying and testing

Now that our hook is in place, we need to re-deploy our application to see it in action. 

1. Navigate back to **Application Overview**
2. Click the *Build / Deploy* button
3. Watch the deploy log and you will see the "first _thing"  deploy hook being called as part of the process

(As always, we recommend testing your hooks in a non-production environment before using on your live application.)

The best way to check whether your change has been applied to your server is to access it directly using SSH. [Cloud 66 Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html#access-your-servers-via-toolbelt) is the quickest way to do this. 

Once you are connected to your server, type `nmap` into the terminal. If your deploy hook was set up correctly, you will see the usage / help text for the nmap utility. If not, Ubuntu will complain that nmap is not installed.

## What's next?

* Get to grips with some [advanced examples of deploy hooks](/{{page.collection}}/how-to-guides/deployment/using-deploy-hooks.html) to set up the exact hooks your app needs.
* Use the [detailed reference guide for deploy hooks](/{{page.collection}}/references/deploy-hooks-syntax.html) to set up the exact hooks your app needs.
* Learn how to use [Manifest files](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) to customize the components of your application
* Learn how to add custom [environment variables](/{{page.collection}}/tutorials/env-vars.html) to your application
* Learn how to use [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) - a powerful tool for configuring the components of your application.
