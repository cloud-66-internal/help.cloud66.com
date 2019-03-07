---
layout: post
template: one-col
title: Using validation policies with Skycap
categories: tutorials
order: 6
lead: "How to add validation policies to Stencils"
legacy: false
tags: ["stencils,copper,policies"]
permalink: /:collection/:path
---

## Overview 

Skycap allows you to specify validation policies for any of your Formations. These are essentially tests that Stencils within a Formation need to pass before they can be rendered and used for deploying to your cluster(s).

These policies are a powerful tool for enforcing standards and patterns in your application. For example policies can ensure that a [standard sidecar container](/skycap/tutorials/adding-and-enforcing-sidecar-containers.html) is deployed with every service, or that third party components (e.g. MySQL) don't automatically upgrade and break your code.

Validation policies in Skycap are written in [Copper DSL](https://copper.sh/docs/getting-started/), a domain specific language we created to make validating Kubernetes configuration files easier and more reliable. ([Copper](https://copper.sh/) is open-source, so you can use it regardless of whether you use Skycap or not.)

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting_started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using_formations.html) guide.

<div class="notice"><p>In this example we’re using the same <a href="https://github.com/cloud66-samples/helloworld.git">simple "hello world" project</a> that we used in our Getting Started guides.</p></div>

## Understanding Copper DSL rules

Copper’s DSL is focussed on doing two things:

1. Fetching values from your configuration files (i.e. Stencils)
2. Checking they are valid (according to the rules you have specified)

Copper DSL has [extensive documentation](https://copper.sh/docs/copper-dsl/) that will help you write your own rules when you are more comfortable with the process. 

We also have [another guide](/skycap/how-to-guides/formations/writing-and-debugging-copper-rules.html) to help you more easily test and debug your rules.

For now we’re just going to use a single simple example rule:

```
rule NoPort5000 ensure {
    fetch("$.spec.ports[?(@.port == 80)].targetPort").first == 5000
}

```
This rule tells Copper to check that none of the stencils specified should be using port 5000 as a `targetPort` and refuses to render the Formation if it finds a stencil that breaks this rule.

## Creating a validation policy 

In order to create a validation policy within any Formation:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question
2. Click on *Formations* in the right-hand panel
3. Click on the name of the Formation which you want to validate (in our case “Hello World”)
4. Click the “Policies” tab at the top of the main panel
5. Click on the green **+** and then give the new policy a name (`NoPort5000` would be sensible) 
6. Paste our demo rule into the code area.
7. Type `kind: Service` into the *Selector* field (we’ll explain more about this later)
8. Add a commit message and click *Save policy*

## Using Selector field

The Selector field allows you to specify which Stencils will use a verification policy by matching on a specified key-value pair. This allows you to use a single policy to check multiple Stencils of the same type within a Formation.

In our example above we used the Selector `kind: Service`, so the validation will be applied only to Stencils containing that value. You can define any key-value pair as a Selector using the same `key: value` notation. 

## Testing a validation policy

Validation policies are called each time you render a Formation. To test that our new *NoPort5000* policy is working, we simply visit the Formation detail page and click *Render Formation*.

Since our Hello World Formation does use Port 5000 in the `helloworld_service.yml` our Render process will warn us about this issue when we try to download our stencils.


## Managing multiple policies

You can add as many validation policies as you need. The policies will be validated in the order in which they appear on the *Policies* tab (on the **Formations** detail page). This means you can insert a more generic policy first and then add more detailed and specific policies later in the list. 

You can change the load order of policies by dragging and dropping them in the list. Once you’re satisfied with your policies you can render your formation by simply visit the Formation detail page and clicking *Render Formation*.


## What’s next?

* A guide to [writing and debugging Copper rules](/skycap/how-to-guides/formations/writing-and-debugging-copper-rules.html)
* Learn how to [update an existing service](/skycap/tutorials/updating-an-existing-service.html) in Skycap.
* Learn how to [add new services or components](/skycap/tutorials/adding-a-new-service.html) to a service.
* Learn how to [roll back to an older version of your application](/skycap/tutorials/rolling-back-using-snapshots.html) using Snapshots.
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to set up [access control and permissions](/skycap/tutorials/setting-up-access-control.html) on your Formations and Stencils
* Learn how to use your [Habitus build flow](/skycap/tutorials/using-habitus-with-skycap.html) within Skycap.





