---
layout: post
template: one-col
title: Using Deployment History
categories: how-to-guides/deployment
lead: "How to use the deployment history to track and roll back deployments"
legacy: false
tags: ["operations"]
permalink: /:collection/:path
---

Whether working in a team or by yourself, it's always useful to have an overview of your deployment history. This history includes
information about who deployed, when they deployed, what code revision was deployed and how the deployment was triggered (web, [API](http://developers.cloud66.com) or [redeployment hook](/maestro/how-to-guides/deployment/redeployment-hook.html). In addition to this, you can also revert back to previous commits if need be.

Reverting to a previous commit will only affect your code - you might still need to restore a [database backup](/maestro/how-to-guides/add-ins/database-backup.html). If you wish, you can [switch off your database migrations](/maestro/how-to-guides/databases/database-customization.html), roll back your database and then roll back your code.

## Deployment Status
A "Live" status indicates that the code in that commit is live on your servers.

A <font color="green">green</font> deployment indicates that it has been successful, whereas a <font color="red">red</font> one indicates failure.

A reverted deployment is one that is no longer on your servers (the application was rolled back to an earlier deployment).


## Usage
Accessing your application page, click _Deployment history_ in the right sidebar. On this page, you can see your previous commits, and revert back to previous commits. Any code revisions that have not been deployed will have a hollow circle.

