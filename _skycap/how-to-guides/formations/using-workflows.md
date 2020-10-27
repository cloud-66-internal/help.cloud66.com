---
layout: post
template: one-col
title: Using Workflows in Skycap
order: 6
categories: how-to-guides/formations
lead: "How to define and use Skycap Workflows to automate deployment operations"
legacy: false
tags: ["formations", "workflows"]
permalink: /:collection/:path:output_ext
---

## Overview

Skycap Workflows are a simple way to automate sequences of commands issued to your application. A good example is deploying new code to a cluster. A workflow can turn this into a single click rather than a whole series of commands.

## How Workflows function

Workflows are organised into "steps" which can depend on previous "steps" and can also run in parallel or asynchronously. They can also run preflight checks and check each step for success. Workflows are based on [Trackman](https://github.com/cloud66-oss/trackman/blob/master/README.md) - one of Cloud 66's many open source projects.

Workflows are essentially YAML-formatted templates which specify the details of the steps you want to run. Here's an example of the simplest Workflow possible:

```yaml
version: 1
steps:
  - name: list
    command: ls -la
```

All this Workflow does is to check the contents of a directory in "long list" format, and including any hidden files. As you can see, the commands for Workflows are not restricted to Skycap or Kubernetes commands. You can make a Workflow for literally any command(s) that your servers will accept.

Here's a more complex example of a Skycap deployment workflow:

```yaml
version: 1
steps:
  - name: setup
    command: bash -c 'cx snapshots render --stack "${application.display_name}" --snapshot ${snapshot.uuid} --formation ${formation.uuid} --filter "setup" --ignore-warnings | kubectl apply -f - '
    preflights:
      - command: "cx version"
        message: "It looks like you don't have cx installed! This page can help you install it https://help.cloud66.com/skycap/quickstarts/using-cloud66-toolbelt.html"
      - command: "kubectl version"
        message: "It looks like you don't have kubectl installed! This page can help you install it https://kubernetes.io/docs/tasks/tools/install-kubectl/"
${repeat_inline("_helm_upgrade@cloud66.yml", 2, fetch(concat("$.stack.helm.releases[?(@.formation.uuid==",formation.uuid,")]")))}
```

As you can see, it has a single step called `setup` that runs a Toolbelt (`cx`) command to deploy a new release to a cluster. However, before running this step, the Worflow will check that CX and kubectl are installed on the target machine (or container). It also appends the deploy command with any applicable Helm charts currently in use by the application. 

In Skycap, Workflows follow the same syntax and flow as Formation files, like [Stencils](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil). As such they also support [Placeholders](/skycap/references/stencil-placeholders.html) and use the same dot notation (`${directive.attribute}`). You can find a full list of the available [Workflow attributes](https://github.com/cloud66-oss/trackman/blob/master/README.md#workflow-attributes) and [step attributes](https://github.com/cloud66-oss/trackman/blob/master/README.md#step-attributes) in the Trackman docs. 

## Why use Workflows?

Skycap is designed to systematise the configuration of your Kubernetes-based application by treating that process more like code. Workflows allow you to apply the same principles to the commands issued to your cluster. 

Running commands manually is time consuming and error-prone. You could automate tasks using simple Bash files, but Workflows are much more flexible and powerful. The Placeholders feature, for example, makes it possible to deploy a new branch of your application code without having to rewrite any commands. 

Workflows also allow you to run these commands directly from your Cloud 66 Dashboard without having to SSH into your cluster. You can also trigger Workflows.

## Adding a Workflow on Skycap

In Skycap, Workflows are a feature of [Formations](/skycap/quickstarts/using-formations.html). Each Formation has its own set of Workflows. To add a Workflows for a Formation:

1. Open your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on the Skycap application in question
2. Click on the name of the Formation 
3. Click on the *More ∙∙∙* above the Services panel (next to the *Stencils* tab) and then click the *Workflows* tab.
4. Click on the green + and then choose a template
5. Paste or type in your YAML-formatted workflow steps
6. Add a commit message and click *Save Workflow*

You will now see your new workflow listed under your Formation, ready to be used. 

## Understanding Run Steps

All applications have discrete life stages:

- Setup
- Deploy
- Teardown

In the context of Skycap, **Setup** applies when a Formation is deployed to a "blank" cluster (without a namespace etc), while **Deploy** applies when a Formation is deployed to an existing namespace already running on a cluster. **Teardown** applies when a Formation is being scrubbed from a cluster.

Run Steps allow you to specify different Workflows for each life stage of an application. Skycap will then only run the Workflows appropriate to that life stage.

## Running a Workflow

There are three main ways to run a Workflow in Skycap:

- You can manually enqueue a Workflow from the Dashboard
- You can set a Run Step for a Workflow that will trigger it whenever that condition is reached
- You can trigger a workflow via a [redeployment hook](/skycap/how-to-guides/deployment/redeployment-hook.html) (please read our separate how-to document that describes this in detail)

### Manual enqueuing

To manually run (enqueue) a Workflow: 

1. Open the Workflow tab under its parent Formation (see above for instructions for finding the tab), 
2. Click the down arrow ⌄ next to the Workflow you wish to run
3. Choose *Enqueue Workflow* from the dropdown menu

This will add the Workflow action to the queue and it will be processed as soon as it reaches the top (which will be immediately, assuming this is the first workflow you have ever run).

### Setting Run Steps for a Workflow

Run Steps are contextual triggers for Workflows - they set a Workflow to run at one of three points in the lifecycle of a Formation's deployment to a cluster:

- Setup
- Deploy
- Teardown

See above for more details on this. You can also set a Workflow to have no Run Step (this is the default).