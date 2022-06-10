---
layout: post
template: one-col
title: Using Transformations with Skycap
categories: tutorials
order: 7
lead: "How to use transformation scripts with Stencils in Skycap"
legacy: false
tags: ["stencils,alterant,transformations"]
permalink: /:collection/:path:output_ext
---

## Overview

Transformations allow you to automatically modify configuration files based on custom scripts. Skycap Transformations read configuration files in yaml or json and modify them based on scripts written in Javascript.

Transformations can make a wide range of changes to configuration files, but they are most useful for systematising additions or changes that need to be applied to multiple different configuration files each time you set up or deploy an application. Transformations save you from repetitive, manual editing of files and all the risks and issues associated with that practice. 

Skycap Transformations are based on [Alterant](https://github.com/cloud66-oss/alterant), our open-source Descriptive Configuration Modifier project. 

## What you’ll need

Before you start, please check you have the following:

- **A Cloud 66 Account** — If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). You'll get free unlimited access to all products for 4 weeks.
- **An existing application set up in Skycap** — You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting-started.html) guide.
- **An existing Formation defined in Skycap** — You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using-formations.html) guide.

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides.</p></div>

## Understanding Transformations

The best way to understand the power of Transformations is with an example. Let's imagine that you want to add the current date to each Service configuration file when you deploy it, so that you have an easy way to check the last time a configuration was updated in Kubernetes. Rather than editing each configuration file by hand every time you deploy, you can use a Transformation to update the files automatically.

The script for that Transformation would look something like this:

```js
    $$.forEach(function($){
        if ($.kind === 'Service') {
            $.metadata.annotations = [{ "cloud66.com/deployed-at": Date.now() }];
        }
    });
```

As you can see, the script looks for templates that match "kind: Service" and injects the current date (in Unix format) into the YAML as an `annotation`

For more detailed help on writing your own Transformations, please refer to our detailed Alterant documentation.

## Adding a Transformation to Skycap

In order to add a Transformation to any Formation:

1. Open your **[Cloud 66 dashboard](https://app.cloud66.com/dashboard)** and click on the name of the application in question
2. Click on the name of the Formation which you want to Transform (in our case “Hello World”)
3. Click the *Transformations* tab at the top of the main panel
4. Click on the green **+** and then give the new Transformation a name (`date_stamper` would be good)
5. Paste our demo rule into the code area.
6. Type `kind: Service` into the *Selector* field (we’ll explain more about this later)
7. Add a commit message and click *Save Transformation*

## Using the Selector field

The Selector field allows you to specify which Stencils will use a Transformation by matching on a specified key-value pair. This allows you to apply a single Transformation to multiple Stencils of the same type within a Formation.

In our example above we used the Selector `kind: Service`, so the validation will be applied only to Stencils containing that value. You can define any key-value pair as a Selector using the same `key: value` notation.

## Testing a Transformation

Transformations are applied each time you render a Formation. To test that our `date_stamper` script is working, we visit the Formation detail page and click *Render Formation*.

If our Transformation is working correctly, our `helloworld_service.yml` will have a couple of extra lines that look simmilar to this:

```yaml
    annotations:
      - cloud66.com/deployed-at: 1558616203485
```

## Managing multiple Transformations

You can add as many Transformations as you need to a Formation. The Transformations will be executed in the order in which they appear on the *Transformations* tab (under the **Formations** detail page). This means you can insert a more generic Transformation first and then add more specific Transformations later in the list.

You can change the execution order of Transformations by dragging and dropping them in the list. Once you’re satisfied with your Transformations you can render your formation by visiting the Formation detail page and clicking *Render Formation*.

## What’s next?

- A guide to adding Transformations to [Base Template Repositories](/skycap/how-to-guides/formations/adding-transformations-to-btrs.html)
- Learn how to add **[custom environment variables](/skycap/tutorials/setting-environment-variables.html)** to your application.
- Learn how to use your **[Habitus build flow](/skycap/tutorials/using-habitus-with-skycap.html)** within Skycap.


