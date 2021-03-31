---
layout: post
template: one-col
title: Using Application Update Lockdown
categories: how-to-guides/deployment
order: 10
lead: "How to restrict which users can deploy your application(s)"
legacy: false
tags: ["security", "operations"]
permalink: /:collection/:path:output_ext
---


## About Application Update Lockdown

For applications where you want additional control over deployment you can use Application Update Lockdown (AUL) to set a deployment lockdown strategy. There are currently three lockdown strategies available:

 -  **No Deployment Lockdown:**
   This is the default behavior and means that deployments will go through without any additional authorization.
 - **Anyone on your team:**
   This setting implies that deployments will only happen if *at least* two members on your project with deploy permissions agree to deploy your application. This is commonly known as "four-eyes authorization".
 - **Specific team members:**
   This setting implies that only a specific user (or users in this group) will have permissions to authorize (approve) deployment requests.

## Enabling Application Update Lockdown

To lock down deployment for an application:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Settings & Information*  in the **Application** panel on the right of the screen
3. In the **Application Update Lockdown** panel, select the level of lockdown you require, and select authorized team members where needed.
4. Click *Save Lockdown Settings*

## How lockdown works

If a deployment lockdown strategy is in place, then the "Deploy" button will be replaced with a "Request Deploy" button. Users with approval rights can then visit the application's Deployment Timeline (click *Build & Deploy* in the right-hand panel), and approve or deny requests. The person who raised the request can also cancel that request here.

Once a deployment request is approved, the deployment will take place. The audit log and deployment history pages will list who raised the deployment request and who approved it.


## Cloud Lockdown

For larger organizations with multiple cloud keys and multiple departments requiring access to different cloud keys, we now allow deployment "targets" to be locked down at a user permission level for all users in your team. 

To assign and edit permissions:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Teams* in the **Account** panel on the left.
4. Click on the edit icon next to any user to edit their permissions and roles.

To specifically limit the deployment targets for any user, find the *Restrict deployment targets* field and select the  targets for which the user has rights.

