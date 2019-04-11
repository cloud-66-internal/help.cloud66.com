---
layout: post
template: one-col
title: Creating Stencil Template Repos
Order: 3
categories: how-to-guides/formations
lead: "A guide to creating and updating a custom template repository"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path:output_ext
---

Once you are familiar with base templates, you might need to add your own Stencil templates into a public or private repository and use them with Formations. 

To achieve this, simply create a git repository and connect it to your Skycap account. You can do this by visiting *[Accounts Settings](https://app.cloud66.com/me)* > *External Services* and then clicking on the *Stencil Template Repos* tab. 

To add a new repo click on the **+** button and then enter the URL of the repo, the branch you are using and give your repo a distinctive name. Skycap then pulls the contents of the repo down and makes it available to use in your Formations.

A Stencil Template Repo should include a single `templates.json` file that holds meta-data about the templates you have in the repo. Here is a sample `templates.json` taken from [this repository](https://github.com/cloud66/stencils/blob/production/templates.json):

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
	
* `version` is always `v1` at the moment.
* `templates` is an array, listing all template files in the repo
	
Under `templates`, you can find the following attributes
	
* `name` is the name you can give your template
* `filename_pattern` is used to generate the rendered template's filename. You can use `${service}` in the name if the stencil context is `service`
* `filename` is the name of the file in the repo.
* `description` is a short description for what this template is and will be shown in the dropdown
* `context_type` can be either `service` or `stack`. This is the render context of the template.
* `tags` is an array of default tags for this template
* `preferred_sequence` determines the default sequence of this template amongst the other templates in a Formation when rendered as a single file. This can be changed by the user of the template by dragging and dropping the Stencil on the Formation page.

Because Stencils are designed to be reusable, operators or developers can generate these Stencil templates ("base templates") and make them available to the rest of the team via this feature.

These Stencils are usable by anyone with the appropriate permissions and can be enforced by the operators of the cluster to ensure good governance of the infrastructure.

## Updating Templates within Skycap

Once a Stencil Template Repo is synchronized with Skycap, a copy of it is held on Skycap. 

You can update this copy either by setting up a Webhook from your git repository to resync it with the repository after each commit, using the CX Toolbelt or clicking the *Sync* icon on the Stencil Template Repo page. This will manually update your templates in Skycap based on the latest commit in your git repository.
