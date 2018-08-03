---
layout: post
template: one-col
title: Using Stencil Groups
categories: how-to-guides/formations
lead: ""
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path
---

## How to define a Stencil Group

Defining a new StencilGroup is easy: click on the New Group button on the Formation detail page. This will open a form with 3 fields: Name, Tags and Rules. 

Name and Tags should be self explanatory. Rules are JSON objects that determine what's included in or excluded from your StencilGroup. For example the following rule, includes any Stencil named `setup.yml` in this group:

<pre class="prettyprint">
	{
		"include" : ["name:setup.yml"]
	}
	</pre>

...while the following rule includes any Stencil with the `production` tag in the group:

<pre class="prettyprint">
	{
		"include" : ["tag:production"]
	}
</pre>


## Defining StencilGroup Rules

Each StencilGroup JSON object (rule) must start with **one** of two possible keys: `"include"` or `"exclude"`. Each object (rule) is a JSON array of strings, each selecting Stencils by `name` or `tag`.

To select Stencils by name use the `name:foo.yml` format and to select Stencils by tag, use the `tag:foo` format. Selectors can be used together (as ANDs): `["name:foo.yml", "name:bar.yml", "tag:fuzz", "tag:buzz"]`

If both `include` and `exclude` keys exist, the list of Stencils is selected by first applying the `include` selectors and then removing the `exclude` ones.

Here is an example of a complete StencilGroup rule:

<pre class="prettyprint">
	{
		"include" : ["name:setup.yml", "tag:config"],
		"exclude" : ["tag:test", "tag:qa", "name:deployment.yml"]
	}
</pre>

As you can see, this includes the base set up for the application along with all its configurations, but excludes all the components tagged as "test" and "qa" as well as the Kubernetes Deployment definition.

## Using StencilGroups
Once you have a StencilGroup defined, you can select them in the Formations dropdown of your Snapshot timeline or on the right hand side Snapshot dropdown menu item on all pages, under their respective Formation name.

