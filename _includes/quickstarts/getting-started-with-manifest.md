## What is a manifest file?

A manifest files allows you to be more explicit about your application composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that make up your application. If you're already familiar with manifest files, refer to [Building a manifest file](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).

These are just some examples of the settings you can control with a manifest file:

- Defining sizes and data center region for your servers
- Installing extra packages
- Specifying the version of a component
- Configuring application components to share a server
- Customizing component-specific configurations

{% if include.product == 'Rails' %}
## How do I use a manifest file?

Manifest settings are defined in a file called `manifest.yml`. For Rails/Rack applications the path for `manifest.yml` is:

```shell
<application-root>/.cloud66/manifest.yml
```

To get started: 

1. Add this file to your code 
2. Populate it with appropriate values (see below for examples)
3. Commit your changes to your repository 
4. Build your application

{% endif %}
{% if include.product == 'Node' %}

## Editing a manifest file

To access the manifest file for any Node application:

1. Navigate to the Application Overview for the app in question
2. Click on *Configuration Files* in the right-hand panel
3. Click on the *Manifest* tab at the top of the main panel

You can now edit the text of your manifest file directly.

#### Warning

<div class="notice notice-warning"><p>Be cautious when editing the manifest file for any application particularly if it is running in a production environment. A single stray character or space can cause the application to fail to deploy or to deploy in a degraded state.</p></div>

{% endif %}

#### Is my yaml valid?
<div class="notice"><p>The manifest file is YAML formatted. You can check its validity at <a href="http://www.yamllint.com/">YAML Lint</a> or with this command:<br/>
<code class="highlighter-rouge">$ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"</code>
</p></div>

## A working example

In this example we are going to modify the configuration of the simple application we used in our [Getting started](/{{page.collection}}/quickstarts/getting-started.html) guide.

### What you'll need

Before you start, please check you have the following:

- **A Cloud 66 Account** — If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
- **Application code**  — Application code should be hosted in a (secure) publicly accessible git repository and pre-built images should be hosted in image publicly accessible repositories.
- **A manifest file** - Create a file named `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
- **A Cloud account linked to Cloud 66 or your own servers set up** — See below.

{% include general/cloud_provider_or_own_server_tabs.html product = page.collection %}

### Setting up your first manifest file

To populate the `manifest.yml` for your application:

1. Follow the steps in the [Getting Started](/{{page.collection}}/quickstarts/getting-started.html) guide but *stop before* the **Defining your application** step.
2. Add the YAML below to your `manifest.yml` file:

{% if include.product == 'rails' %}
```yaml
rails:
  configuration:
    ruby_version: 3.0
```

You'll see that we're defining several things in this YAML:

- The component type we are configuring (`rails`)
- The version of Ruby that will be installed as part of this component ( `ruby_version`)
{% endif %}
{% if include.product == 'node' %}
```yaml
node:
  configuration:
    custom_log_files: ["/tmp/mylog/*/*.log"]
```

You'll see that we're defining several things in this YAML:

- The component type we are configuring (`node`)
- The location of our custom log files ( `["/tmp/mylog/*/*.log"]`)

{% endif %}

Once we have the latest version of our Manifest checked in, we can go back to the Getting Started guide and continue from **Defining your application** step. Now, when you deploy your application, it will use the settings defined in your manifest file. 

### Defining a server for your component

The Manifest file gives you a lot of control over your components. For example, you can use the `server` settings to specify the exact size and region for your application server. The YAML below is an example of this in action:

{% if include.product == 'rails' %}
```yaml
rails:
  configuration:
    ruby_version: 3.0
  servers:
  - server:
      unique_name: master
      size: s-2vcpu-2gb
      region: lon1
      vendor: digitalocean
      key_name: My_DO_Account # the name of your cloud provider in your Cloud66 account

```

This would install your Rails server on Digital Ocean, at their London data centre and on a 2CPU and 2GB cloud server. 
{% endif %}
{% if include.product == 'node' %}
```yaml
node:
  configuration:
    custom_log_files: ["/tmp/mylog/*/*.log"]
  servers:
  - server:
      unique_name: master
      size: s-2vcpu-2gb
      region: lon1
      vendor: digitalocean
      key_name: My_DO_Account # the name of your cloud provider in your Cloud66 account

```

This would install your Node application on Digital Ocean, at their London data centre and on a 2CPU and 2GB cloud server. 
{% endif %}

- You can find the available values for `size` and `region` in our [API documentation](https://developers.cloud66.com/#cloud-vendor-instance-names).
- You can find the `key_name` for your cloud provider(s) listed [on your Dashboard](https://app.cloud66.com/clouds).

### Caution

<div class="notice notice-warning"><p>Editing the manifest file of an existing application may not necessarily result in changes to the deployed instance(s) of that application, even if the application is subsequently redeployed. Read our <a href="/{{page.collection}}/references/manifest-structure.html#classes-of-manifest-file-settings">in-depth guide</a> to understand the complexities around this. </p></div>


## What's next?

* Understand the [structure of manifest files](/{{page.collection}}/references/manifest-structure.html).
{% if include.product != 'maestro' %}* Learn more about the power of manifest files with our [detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).{% endif %}{% if include.product == 'maestro' %}* Learn more about the power of manifest files with our [detailed how-to guide](/{{page.collection}}/how-to-guides/build-and-config/building-a-manifest-file.html).{% endif %}
* Learn how to use [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) - a powerful tool for configuring the components of your application.
