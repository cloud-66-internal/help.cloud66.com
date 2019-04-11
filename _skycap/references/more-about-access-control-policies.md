---
layout: post
template: one-col
title: More about access control policies
categories: references
lead: "Understanding access control policies"
legacy: false
tags: ["git"]
permalink: /:collection/:path:output_ext
---

## Overview

When working in teams or with external partners, controlling access to your application’s configuration files is just as important as controlling access to your code or your infrastructure. 

Skycap Policies give you fine-grained control over both **who** can access your Stencils and Formations, and **what** those people can do with their access (e.g. read-only). 

## Advanced use cases

Apart from the obvious use cases, such as limiting the access of external contractors or junior staff members, Skycap Policies allows you to:

* Restrict who has read-access to secrets and other sensitive variables (like keys and tokens). For example you can allow your developers to write Stencils, but restrict rendering to your operations team.
* Control access for separate teams working on different applications, but with some shared components
* Restrict access based on environment - e.g. only one person has “render” privileges for Production.

## Access control principles

Access and permissions policies in Skycap are *additive* and *positive*. In other words they work by *granting* access and permissions to users, not by excluding access. 

So if a user needs access to something, you will grant them access to that component (or set of components) which will not affect their access (or lack thereof) to any other components.

## Hierarchy and inheritance

Permissions are hierarchical and have cascading inheritance. For example if you have access to a Formation and there are no permissions set for the Stencils within that Formation, you will by extension also have the same kind of permissions on those Stencils. 

In general if there are two or more levels of restriction in place, the “stricter” and more specific rule will be used. For example if you grant someone full access to a Formation but read-only access to the Stencils within that Formation, they will not be able to edit them.

### Warning
<div class="notice notice-warning"><p>Unless you specify an access policy for your Formations and/or Stencils, any team members with “Developer” level (or above) access to your application will, by default, have full permissions on all of the Formations for that application.</p></div>

## Levels of access control

Skycap offers several different tiers of access to cater for teams and applications of different sizes and complexities:

### Formations

You can control whether users can access an entire Formations at three levels:

1. Access to a *specific* (single) Formation within a *specific* application
2. Access to *all* the Formations within a *specific* application
3. Access to *all* Formations across *all* your applications

### Stencils

You can also control whether users can access the Stencils within your Formations. This has four levels:

1. Access to a *specific* (single) Stencil within a *specific* Formation
2. Access to *all* the Stencils within a *specific* Formation
3. Access to *all* the Stencils in *all* your Formations for a *specific* application
4. Access to *all* the Stencils in *all* your Formations for *all* your applications

### Warning
<div class="notice notice-warning"><p>These access control settings allow for a degree of overlap. For example level 4 access to Stencils is very similar to level 3 access to Formations. Be cautious when assigning higher levels of access.</p></div>

## Assigning Permissions

You can control the permissions per user at any of the levels described above. You can allow users to perform any combination of the following actions within the specified *Formation*:

* View
* Edit
* Delete
* Create stencil
* Create policy

The available permissions within *Stencils* are:

* View
* Edit
* Delete
* Render
