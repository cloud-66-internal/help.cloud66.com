---
layout: post
template: one-col
title: Reusing common environment variables
Order: 3
categories: how-to-guides/formations
lead: "How to import shared environment variables into Stencils"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path
---


## Overview

Most applications have a shared set of environment variables that need to be called by many different components. Rather than individually loading each environment variable in every Stencil, Skycap allows you to import whole lists of variables into Stencils, and to filter them by tags.

This guide assumes you already know how to use environment variables in Skycap. If you need help, run through the [tutorial](/skycap/tutorials/setting-environment-variables.html) first to get a kick-start.

## Tagging variables

Tagging your environment variables allows you to filter them during imports, so that only the variables each Stencil requires are imported. Tags are optional but can be useful for separating configurations for any set of arbitrary differences.

## Importing multiple variables into a Stencil

You already know how to pull an individual environment variable into a stencil using the `env` [placeholder](/skycap/references/stencil_placeholders.html). You can use another placeholder - `envlist` - to pull an entire list of variables into a Stencil.

The complete syntax for this placeholder is: `envlist(indent[, tag])`

* *Indent* specifies how many levels the output should be indented to
* *Tag* returns variables that match the specified tag (and ignored the rest)

Remember that all placeholders need to be wrapped in `${...}`

## A working example

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our <a href="/skycap/quickstarts/using_formations.html">Getting Started</a> guides.</p></div>

To add a set of environment variables to a Stencil in our Hello World application we need to:

1. Add a few dummy variables
2. Tag these variables
3. Create a new Snapshot
4. Add the `envlist` placeholder one of the Stencils to import the variables
5. Render the Formation to test the result

### Adding multiple variables

To add our variables, we:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the *Hello World* application
2. Click on *Environment Variables* in the right-hand panel
3. Add at least four new dummy Key Value pairs (for best results make them unique and memorable)
4. Click *Save Changes*

(If you need more help, follow our [tutorial](/skycap/tutorials/setting-environment-variables.html#adding-a-custom-variable
) on the subject)

### Tagging variables

On the *Environment Variables* page, look for the small tag icon next to each variable. Clicking this allows you to add one or more tags to each variable. For the purposes of this example, let’s just tag half our dummy variables with FOO and the other half with BAR.

Now that our variables are ready, we need to ensure they’re included in our application. To do this, we need to take a fresh Snapshot, so click the button and let Skycap rebuild the app.

### Adding the placeholder code

Environment variables typically belong inside the container definition, which in our case means we need to add it the `helloworld_deployment.yml` stencil. 

To do this:

1. Open the Hello World Formation and click the edit icon next to `helloworld_deployment.yml`
2. Find the `containers` field
3. Add a line break underneath the `name:` field
4. Type `env:` into the new line and then add another line break beneath that
5. Paste the following code into the new line `${envlist(10,”FOO”)}`
6. Add a commit message and save the changes

The placeholder code we’ve added tells the Stencil to import all of the variables tagged as FOO and then add them to the YAML with ten levels of indentation (i.e. ten spaces). This is important because YAML depends on spaces for structural markup.

### Testing our new Stencil 

To see the new placeholder in action we simply click the *Render Formation* button. When our Stencils have rendered we can check that the variables appear as expected in our expanded `helloworld_deployment.yml`.

