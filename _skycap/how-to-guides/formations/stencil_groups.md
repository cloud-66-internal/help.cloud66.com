---
layout: post
template: one-col
title: Using Stencil Groups
order: 4
categories: how-to-guides/formations
lead: "How to define and use StencilGroups and StencilGroup rules"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path:output_ext
---

## How to define a StencilGroup

<div class="notice"><p>If you aren't already familiar with the concept of StencilGroups, they are <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-are-stencil-groups">explained here</a>.</p></div>

To define a StencilGroup click on the New Group button on the Formation detail page. This will open a form with three fields: Name, Tags and Rules. 

Name and Tags should be self explanatory. Rules are logical statements that determine what's included in or excluded from your StencilGroup. For example the following rule, includes any Stencil named `setup.yml` in this group:

```
(name == setup.yml)
```

...while the following rule includes any Stencil with the `production` tag in the group:

```
(tag == "production")
```

You can also *exclude* any stencils based on either tag or name. For example:

```
(tag != "production")
```
...will explicitly exclude all stencils tagged with `production` from a group.

In this demonstration we create a group that contains only the namespace definition (setup.yml) and excludes anything tagged as "production":

<img src="/assets/skycap/StencilGroups.gif">

## Complex StencilGroup rules

Each StencilGroup rule must have at least *one* selector - either `name` or `tag`. You can also create more complex rules using logical operators (`||` and `&&`).

For example this rule will include all templates that are named `setup.yml` as long as they also tagged either `production` or `version_5`: 

```
(name == "setup.yaml" && (tag == "production") || (tag == "version_5")
```

Rules within a group should separated by line breaks. In the case of any logical conflicts, a rule will default to the last complete statement.

## Rendering StencilGroups

After you have defined a StencilGroup, you can click on the cog icon for that group at the top of the Formation detail page, and then click "Render group".

Once you have rendered the group you can apply it to your Kubernetes cluster(s) as needed by either downloading the stencils or by using Cloud66 Toolbelt.

<div class="notice"><p>If you need help using Formations with your cluster, check out our "<a href="/skycap/quickstarts/using_formations.html">Getting Started with Skycap Formations</a>" guide.</p></div>
