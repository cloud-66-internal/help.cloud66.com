---
layout: post
template: one-col
title: Creating a Template Library
Order: 3
categories: how-to-guides/formations
lead: "A guide to creating and updating a custom Template Library for Skycap"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path:output_ext
---

## Overview

Once you are familiar with our default Template Library, you might want to create your own library in a public or private repository and use it with Formations. This guide walks you through that process.

Because Stencils are designed to be reusable, operators or developers can generate these Libraries and make them available to the rest of the team via this feature.

These Stencils are usable by anyone with the appropriate permissions and can be enforced by the operators of the cluster to ensure good governance of the infrastructure.

## Setting up a Template Library

A Template Library is simply a collection of YAML-formatted Kubernetes configuration templates (i.e. Stencils) in a Git repository.  

A Template Library must include a single `templates.json` file that holds meta-data about the templates you have in the repo. Here is a sample `templates.json` that describes a Template Library for a Ruby-based application:

{% highlight json %}
    {
       "version": "v1",
       "public": true,
       "name": "stencils-ruby-rails",
       "long_name": "Ruby on Rails Base Template Repository",
       "description": "Base Template Repository for Ruby on Rails applications",
       "templates": {
          "stencils": [
             {
                "name": "Service",
                "filename_pattern": "${service}_service.yml",
                "filename": "service.yml",
                "description": "Defines a service",
                "context_type": "service",
                "tags": ["service"],
                "preferred_sequence": 2,
                "suggested": true,
                "min_usage": 1,
                "max_usage": 9999
             },
             {
                "name": "Deployment",
                "filename_pattern": "${service}_deploy.yml",
                "filename": "deploy.yml",
                "description": "Defines a deployment",
                "context_type": "service",
                "tags": ["deployment"],
                "preferred_sequence": 1,
                "suggested": true,
                "min_usage": 1,
                "max_usage": 9999
             },
             {
                "name": "Setup",
                "filename_pattern": "setup.yml",
                "filename": "setup.yml",
                "description": "Setup namespace, etc",
                "context_type": "stack",
                "tags": ["setup"],
                "preferred_sequence": -9999,
                "suggested": true,
                "min_usage": 1,
                "max_usage": 1
             },
             {
                "name": "Event Relay",
                "filename_pattern": "event-relay.yml",
                "filename": "event-relay.yml",
                "description": "Notify when formations deployed",
                "context_type": "stack",
                "tags": ["config", "setup"],
                "preferred_sequence": -9996,
                "suggested": false,
                "min_usage": 0,
                "max_usage": 9999
             },
             {
                "name": "Custom",
                "filename_pattern": "blank.yml",
                "filename": "blank.yml",
                "description": "Blank custom file",
                "context_type": "stack",
                "tags": [],
                "preferred_sequence": 9998,
                "suggested": false,
                "min_usage": 0,
                "max_usage": 9999
             }
          ],
          "policies": [
             {
                "name": "No Port in Services",
                "filename": "no-port-num.cop",
                "description": "Block a port",
                "selector": "kind: Service",
                "tags": [],
                "preferred_sequence": 0
             },
          ],
          "transformations": [
             {
                "name": "Insert Sidecar",
                "filename": "sidecar.js",
                "description": "Insert sidecar in all of your services",
                "selector": "kind: Service",
                "tags": [],
                "preferred_sequence": 0
             },
          ]
       }
    }
{% endhighlight %}

### Components of the JSON definition

The Template Library itself has the following attributes:

- `version` is always `v1` at the moment.
- `templates` is an array, listing all template files in the repo
- `name` is the unique name of the base template repo, usually in the format *stencils-language-framework*
- `public` is a boolean value that specifies if the Template Library is public
- `long_name` is the name that will appear in the Skycap UI
- `description` is a brief description to remind you of which Template Library you are using

Each entry under `templates` has the following attributes:

- `name` is the name for the template as it will appear in the Skycap UI
- `description` is a short description of the template that will be shown in the Skycap UI
- `filename` is the name of the Stencil (template) file in the repo.
- `filename_pattern` is used to dynamically generate the rendered template's filename. You can use `${service}` in the name if the stencil context is `service`
- `context_type` can be either `service` or `stack`. This is the render context of the template.
- `tags` is an array of default tags that will be added to any configuration files generated by this template
- `preferred_sequence` determines the default sequence of this template amongst the other templates in a Formation when rendered as a single file. This can be changed by the user of the template by dragging and dropping the Stencil on the Formation page.
- `suggested` is a boolean value that will determine whether any template is suggested to a Skycap user (e.g. the setup.yml which is the minimum required template)
- `min-usage` is an integer that governs the minimum number of times a Stencil should be used in a Formation (can be zero)
- `min-usage` is an integer that governs the maximum number of times a Stencil should be used in a Formation (must be greater than zero)

### Directory structure for Template Libraries

Template Libraries must be organized as follows:

- The `templates.json` must be placed in the root directory
- The YAML files for templates must be placed in a directory named `templates`

#### Note
<div class="notice"><p>
The example Template Library above also includes definitions for Policies and Transformations. To find our more about those features, please read the separate guides. </p></div>

## Adding a Base Template Repository to your Cloud 66 account

Once you have set up your Template Library, you will need to connect it to your Skycap account. To do this: 

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click *External Services* in the **Settings** panel on the left
4. Click the *Base Template Repos* tab at the top of the page
5. Click the green **+** button at the top right of the **Base Template Git Repos** panel
6. Give your new repo a distinctive name, and add the Git URL (change the branch if needed)
7. Click the *Add Template Repository* button

Skycap will now pull the contents of the Template Library down, validate them and make the repo available to use in your Formations.

## Updating Template Libraries in Skycap

Once a Base Template Repo is added to Skycap, a copy of it is stored in a private repo on your Cloud 66 account.

To update this copy:  

- Set up a webhook from your git repository to resync it with the repository after each commit (click the globe icon next to the repo's name in the dashboard)
- Click the synch (green arrows) icon on the **Base Template Repos** page. This will manually update your templates in Skycap based on the latest commit in your git repository.