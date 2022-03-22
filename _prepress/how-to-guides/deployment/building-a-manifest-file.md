---
layout: post
template: one-col
title: Configuring frameworks via manifest
categories: how-to-guides/deployment
order: 2
lead: "How to build a manifest file that defines your application"
legacy: false
tags: ["operations"]
permalink: /:collection/:path:output_ext
---

## Overview 

A manifest file allows you to be more explicit about your application composition and control settings that are not usually available through the user interface. See [Getting started with manifest files](/prepress/quickstarts/getting-started-with-manifest.html) for an introduction.

For Prepress applications the path for `manifest.yml` is:

```shell
<application-root>/.cloud66/manifest.yml
```

The `.cloud66` folder must in the root of your source code & repo.

### Problems upgrading?

If you explicitly set the version of any component in your manifest file, we will respect that setting even if it conflicts with other system changes or upgrades. If you are having trouble upgrading any component of your application, remember to check your manifest file to ensure you have not previously locked the version of that component or one of its dependents.

## The structure of a Manifest file

Manifest files are made up of blocks of settings that define the elements of your application.

A typical block of settings will contain some combination the following:

- A configuration block configuring the framework of your Prepress site (e.g. versions)
- A list of Linux dependencies that will be installed when the app is built

## Framework configurations

For each application generator supported by Prepress you can explicitly define:

- The **language** it's written in
- The **version** of that language that your app generator uses
- The **framework** being used
- The **version of that framework**
- The **build command** used to build the application

The examples below illustrate these configurations.

### Jekyll example

```yaml
prepress:
  configuration:
    language: ruby
    language_version: 2.5
    framework: jekyll
    framework_version: 1.2.3
    build_command: jekyll build --config _alt_config.yml
```

### Gatsby example

```yaml
prepress:
  configuration:
    language: nodejs
    language_version: 12.13
    framework: gatsby
    framework_version: 3.14.0
    build_command: gatsby build --profile --prefix-paths
```

### Hugo example

Note that because Hugo uses a precompiled binary of Go, you cannot change the version of either the language or the framework. 

```yaml
prepress:
  configuration:
    language: go
    framework: hugo
    build_command: hugo --gc --minify --config debugconfig.toml
```

## Dependency configurations

If your application's build process relies on specific Linux packages you can specify that these packages be automatically installed as part of the build workflow . These will be installed via `apt`. For example: 

```yaml
prepress:
  configuration:
    dependencies:
      linux: ["nano", "htop", "zip"]
```

### Combined example

You can combine configurations in a single block of YAML as follows:

```yaml
prepress:
  configuration:
    framework: jekyll
    framework_version: 1.2.3
    build_command: jekyll build --config _alt_config.yml
    dependencies:
      linux: ["nano", "htop", "zip"]
```

In this case we have not defined our version of Ruby, so our application will use the default version offered by Prepress.

## What's next?

- [Setting up DNS records](/prepress/tutorials/prepress-dns.html) for your Prepress app
- Configuring continuous deployment using [redeployment hooks](/prepress/how-to-guides/deployment/redeployment-hook.html)
- Setting up [preview deployments](/prepress/how-to-guides/deployment/preview-deployments.html)