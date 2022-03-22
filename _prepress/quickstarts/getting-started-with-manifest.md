---
layout: post
template: one-col
title: Getting started with manifest files
categories: quickstarts
order: 3
lead: "Creating your first manifest file"
legacy: false
tags: ["manifest", "customization"]
permalink: /:collection/:path:output_ext
---

## What is a manifest file?

A manifest files allows you to be more explicit about your application composition and control settings that are not usually available through the user interface. The file describes the setup of the components that make up your application. The manifest file is **completely optional** - you can use Prepress without ever creating a manifest file.

## How do I use a manifest file? 

Manifest settings are defined in a file called `manifest.yml`. For Prepress applications the path for `manifest.yml` is:

```shell
<application-root>/.cloud66/manifest.yml
```

To get started: 

1. Add this file to your code 
2. Populate it with appropriate values (see below for examples)
3. Commit your changes to your repository 
4. Deploy your application

#### Is my yaml valid?
<div class="notice"><p>The manifest file is YAML formatted. You can check its validity at <a href="http://www.yamllint.com/">YAML Lint</a> or with this command:<br/>
<code class="highlighter-rouge">$ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"</code>
</p></div>


## A working example

In this example we are going to modify the configuration of the simple application we used in our [Getting started](/prepress/quickstarts/getting-started.html) guide.

### What you'll need

Before you start, please check you have the following:

- **A Cloud 66 Account** — If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. You'll get free unlimited access to all products for 4 weeks.
- **Application code**  — Application code should be hosted in a (secure) publicly accessible git repository and pre-built images should be hosted in image publicly accessible repositories.
- **A Cloud account linked to Cloud 66 or your own servers set up** 

### Setting up your first manifest file

To set up a `manifest.yml` file for your application:

1. Create a file named `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
2. Add YAML from one of the samples below to your `manifest.yml` file.
3. Save the file and check that the YAML is valid. 
4. Commit the file to your repo & [deploy your application](/prepress/quickstarts/getting-started.html)

### YAML sample: Jekyll

You'll see that we're defining several things in this YAML:

- The language your site generator is written in (`ruby`)
- The version of Ruby that it's using ( `2.5`)
- The framework (`jekyll`) and version (`1.2.3`) 
- Your custom build command (`jekyll build --config _alt_config.yml`)

```YAML
prepress:
  configuration:
    language: ruby
    language_version: 2.7
    framework: jekyll
    framework_version: 1.2.3
    build_command: jekyll build --config _alt_config.yml
```

### YAML sample: Gatsby

You'll see that we're defining several things in this YAML:

- The language your site generator is written in (`nodejs`)
- The version of NodeJS that it's using ( `12.13`)
- The framework (`gatsby`) and version ( 
- Your custom build command (`gatsby build --profile --prefix-paths`)

```YAML
prepress:
  configuration:
    language: nodejs
    language_version: 12.13
    framework: gatsby
    framework_version: 3.14.0
    build_command: gatsby build --profile --prefix-paths
```

### YAML sample: Hugo

You'll see that we're defining several things in this YAML:

- The language your site generator is written in (`go`)
- The framework (`hugo`) 
- Your custom build command (`hugo --gc --minify --config debugconfig.toml`)

```YAML
prepress:
  configuration:
    language: go
    framework: hugo
    build_command: hugo --gc --minify --config debugconfig.toml
```

### YAML sample: Next.js

We’re defining several things in this YAML:

- The language your site generator is written in (`node`)
- The version of Node.js that it’s using (`12.13`)
- The framework (`next`) and version (`12.1`)
- Your custom build command (`next build --profile`)

```yaml
prepress:
  configuration:
    language: node
    language_version: 12.13
    framework: next
    framework_version: 12.1
    build_command: next build --profile
```

### YAML sample: Vue.js

We’re defining several things in this YAML:

- The language your site generator is written in (`node`)
- The version of Node.js that it’s using (`12.13`)
- The framework (`vue`) and version (`3.0`)
- Your custom build command (`npm run build`)

```yaml
prepress:
  configuration:
    language: node
    language_version: 12.13
    framework: vue
    framework_version: 3.0
    build_command: npm run build
```

### YAML sample: Nuxt.js

We’re defining several things in this YAML:

- The language your site generator is written in (`node`)
- The version of Node.js that it’s using (`12.13`)
- The framework (`nuxt`) and version (`3.0`)
- Your custom build command (`npm run build`)

```yaml
prepress:
  configuration:
    language: node
    language_version: 12.13
    framework: nuxt
    framework_version: 3.0
    build_command: npm run build
```

### YAML sample: Svelte

We’re defining several things in this YAML:

- The language your site generator is written in (`node`)
- The version of Node.js that it’s using (`12.13`)
- The framework (`svelte`) and version (`3.0`)
- Your custom build command (`npm run build`)

```yaml
prepress:
  configuration:
    language: node
    language_version: 12.13
    framework: svelte
    framework_version: 3.0
    build_command: npm run build
```

### YAML sample: Middleman

We’re defining several things in this YAML:

- The language your site generator is written in (`ruby`)
- The version of Ruby that it’s using (`3.0.3`)
- The framework (`middleman`) and version (`4.2`)
- Your custom build command (`middleman build --clean`)

```yaml
prepress:
  configuration:
    language: ruby
    language_version: 3.0.3
    framework: middleman
    framework_version: 4.2
    build_command: middleman build --clean
```

### YAML sample: Docusaurus (V1 & V2)

We’re defining several things in this YAML:

- The language your site generator is written in (`node`)
- The version of Node.js that it’s using (`12.13`)
- The framework (`docusaurus_v1`) and version (`1.14.7`)
- Your custom build command (`npm run build`)

```yaml
prepress:
  configuration:
    language: node
    language_version: 12.13
    framework: docusaurus_v1
    framework_version: 1.14.7
    build_command: npm run build
```

For Docusaurus Version 2 use the value `docusaurus_v2`


## What's next?

* For more detailed information on the compostion of your Manifest, please read our [How-To Guide](/prepress/how-to-guides/deployment/building-a-manifest-file.html). 
* [Setting up DNS records](/prepress/tutorials/prepress-dns.html) for your Prepress app
* Configuring continuous deployment using [redeployment hooks](/prepress/how-to-guides/deployment/redeployment-hook.html)
* Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)