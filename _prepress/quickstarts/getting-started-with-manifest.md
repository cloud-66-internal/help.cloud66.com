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

A manifest files allows you to be more explicit about your application composition and control settings that are not usually available through the user interface. The file describes the setup of the components that make up your application. If you're already familiar with manifest files, refer to [Building a manifest file](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).

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

- The component type we are configuring (`rails`)
- The version of Ruby that will be installed as part of this component ( `ruby_version`)



### YAML sample: Gatsby




### YAML sample: Hugo

