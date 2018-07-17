---
layout: post
template: one-col
title: Stencil Groups
categories: how-to-guides/formations
lead: ""
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path
---

<h2>What are Stencil Groups?</h2>
<p>
	Usually a Formation contains all Stencils you need to deploy an entire application. This can include Kubernetes configuration files to create a namespace, storage classes, ConfigMaps, secrets or services and deployment specific to each one of your applications services. This lets you build an entire stack in a single rendering of your Formation against a Kubernetes cluster. However, this might not always be what you need. As often is the case, with every deployment of your application, you might want to render and apply only a subset of the Stencils available in a Formation. This for example could be a group of Stencils responsible for deploying a single service or running a database migration job. StencilGroups help you group Stencils of a Formation into dynamic or static sets so they can be rendered together.
</p>

<h2>How to define a Stencil Group</h2>
<p>
	Defining a new StencilGroup is easy: click on the New Group button on the Formation detail page. This will open a form with 3 fields: Name, Tags and Rules. Name and Tags should be self explanatory. Rules is a JSON text that determines what's included in or excluded from your StencilGroup. For example the following rule, includes any Stencil named <code>setup.yml</code> in this group:
	<pre class="prettyprint">
	{
		"include" : ["name:setup.yml"]
	}
	</pre>

	While the following rule, includes any Stencil with the <code>production</code> tag in the group:
	<pre class="prettyprint">
	{
		"include" : ["tag:production"]
	}
	</pre>
</p>

<h2>Defining StencilGroup Rules</h2>
<p>
	StencilGroup rule JSON can contain one or two keys: <code>include</code> and <code>exclude</code>. Each key is a JSON array of strings, each selecting Stencils by <code>name</code> or <code>tag</code>.
</p>
<p>
	To select Stencils by name use the <code>name:foo.yml</code> format and to select Stencils by tag, use the <code>tag:bar</code> format. Selectors can be used together (as ANDs): <code>["name:foo.yml", "name:bar.yml", "tag:fuzz", "tag:buzz"]</code>
</p>

<p>
	If both <code>include</code> and <code>exclude</code> keys exist, the list of Stencils is selected firstly by applying the <code>include</code> selectors and then removing the <code>exclude</code> ones.
</p>

<p>
	Here is an example for a complete StencilGroup rule:
	<pre class="prettyprint">
	{
		"include" : ["name:setup.yml", "tag:config"],
		"exclude" : ["tag:test", "tag:qa", "name:deployment.yml"]
	}
	</pre>
</p>

<h2>Using StencilGroups</h2>
<p>
	Once you have a StencilGroup defined, you can select them in the Formations dropdown of your Snapshot timeline or on the right hand side Snapshot dropdown menu item on all pages, under their respective Formation name.
</p>
