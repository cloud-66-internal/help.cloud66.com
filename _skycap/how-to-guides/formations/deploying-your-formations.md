---
layout: post
template: one-col
title: Deploying your Formations
order: 1
categories: how-to-guides/formations
lead: "A guide to the different methods of deploying using Formations."
legacy: false
tags: ["formations", "toolbelt"]
permalink: /:collection/:path:output_ext
---

## Deploying Formations to Kubernetes

Formations are like deployment destinations: you can create one for every Kubernetes cluster in production, development or staging. 

They can also be used to set up different parts of the same cluster. For example: one Formation to set up the basics of the cluster like default http backends, RBAC and storage classes and another one for the deployment of the application itself. 

No matter how or why you create your Formations, deploying them to your Kubernetes cluster is the same.


## Deploying with Toolbelt

If you use Kubernetes, you probably use `kubectl`, the command line tool to interact with the cluster. To deploy a formation onto the cluster, you will need a working `kubectl`. You can test this by running a command like this: `$ kubectl get namespaces`

Once your `kubectl` is working, you can simply use the <a href="https://app.cloud66.com/toolbelt">Cloud 66 Toolbelt</a> in your terminal to render the resulting Formation Stencils. 

To render the Stencils of a Formation using the Toolbelt: 

1. Open the Formations page for the application you're planning to deploy.
2. Click on the Render Formation button and then copy the command you see at the top of the next page.
3. Pipe this command into `kubectl` using `| kubectl apply -f -`

### Understanding the cx command

The cx command includes everything you need to render the Stencils with the Toolbelt. Here is an example of what a command will look like:

```shell
$ cx snapshots render --stack 'My Stack' --snapshot 'sn-xivam-nymip-tobor-hasif-migyv-hytob-lanun-hotif-cixox' --formation 'fm-4556aff7cfbe1fc2419b414360167e24'
```

This will render all of your Stencils as a single yaml file, arranged in the same order as the Stencils are sorted on the Formation detail page.

[Learn more about the Cloud 66 Toolbelt](/skycap/quickstarts/using-cloud66-toolbelt.html)


### Deploying StencilGroups
You can also use <a href="/skycap/how-to-guides/formations/stencil_groups.html">StencilGroups</a>, with the Toolbelt. 

From the Formations detail page, select the StencilGroup you want to render and click on the *Render Group* link. This will take you to the page where you can see the group's rendered Stencils and the Toolbelt command for them. Copy the command and use it in your terminal.

As you can see in the example below, the command has an additional parameter that defines the StencilGroup to be used:

```shell
$ cx snapshots render --stack 'Central Test' --snapshot 'sn-xivam-nymip-tobor-hasif-migyv-hytob-lanun-hotif-cixox' --formation 'fm-4556aff7cfbe1fc2419b414360167e24' --stencil-group 'stg-54a733469be013c2aa535b4e1bc86c2a'
```

This will render the Stencils in this Group as a single yaml file, arranged in the same order as the Stencils are sorted on the Formation detail page. As in our first example above, you can pipe this output to `kubectl` now.

## Using individual files

Rendered Stencil files can be downloaded as individual files. You can click on the download icon (top right of each rendered file) to download them to your local machine and then apply them using `kubectl`:

```shell
$ kubectl apply -f foo.yml
```


## Using tarballs

You can select some or all of the rendered Stencils to download as a tarball. All files will be placed in a single tarball with their names prefixed with a 3 digit number representing their order so they can be applied in the right order. For example:

```shell
$ kubectl apply -f 001_foo.yml
$ kubectl apply -f 002_bar.yml
```

