---
layout: post
template: one-col
title: Creating your own Stencil Template Repositories
categories: how-to-guides/formations
lead: ""
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path
---

<p>
	Once you are familiar with Base Templates, you might need to add your own Stencil templates into a public or private repository and use it with Formations. To achieve this, simply create a git repository and connect it to your Skycap account under Accounts / External Services / Stencil Template Repos. Enter the repository URL and branch and give it a name. Skycap then pulls the contents of the repository down and makes it available to use in your Formations.
</p>
<p>
	A Stencil Template Repo should include a single <code>templates.json</code> file that holds meta-data about the templates you have in the repo. Here is a sample <code>templates.json</code> <a href="https://github.com/cloud66/stencils/blob/production/templates.json">take from this repository</a>:
	<pre class="prettyprint">
{
	"version": "v1",
	"templates": [
		{
			"name": "Service",
			"filename_pattern": "${service}_service.yml",
			"filename": "service.yml",
			"description": "Defines a service",
			"context_type": "service",
			"tags": ["service"],
			"preferred_sequence": 2
		},
		{
			"name": "Deployment",
			"filename_pattern": "${service}_deploy.yml",
			"filename": "deploy.yml",
			"description": "Defines a deployment",
			"context_type": "service",
			"tags": ["deployment"],
			"preferred_sequence": 1
		}
	]
}
	</pre>
	<ul>
		<li><code>version</code> is always <code>v1</code> at the moment.</li>
		<li><code>templates</code> is an array, listing all template files in the repo</li>
	</ul>
	Under <code>templates</code>, you can find the following attributes
	<ul>
		<li><code>name</code> is the name you can give your template</li>
		<li><code>filename_pattern</code> is used to generate the rendered template's filename. You can use <code>${service}</code> in the name if the stencil context is <code>service</code></li>
		<li><code>filename</code> is the name of the file in the repo.</li>
		<li><code>description</code> is a short description for what this template is and will be shown in the dropdown</li>
		<li><code>context_type</code> can be either <code>service</code> or <code>stack</code>. This is the render context of the template.</li>
		<li><code>tags</code> is an array of default tags for this template</li>
		<li><code>preferred_sequence</code> determines the suggested sequence of this template amongst the other templates in the Formation when rendered as a single file. This can be changed by the user of the template by dragging and dropping the Stencil on the Formation page.</li>
	</ul>
</p>

<p>
	Following reusability of Stencils, operators or developers can generate base Stencil templates (Base Templates) and make them available to the rest of the team.
	<br/>These Stencils are usable by anyone with the appropriate permissions and can be enforced by the operators of the cluster to ensure good governance of the infrastructure.
</p>

<div class="notice">
	<h3>Note</h3>
	<p>Once a Stencil Template Repo is synchronized with Skycap, a copy of it is held on Skycap. You can update this copy either by setting up a Webhook from your git repository to resync it with the repository after each commit, use the CX Toolbelt or press the Sync icon on the Stencil Template Repo manually to update it on Skycap based on the latest commit in the git repository.</p>
</div>
