---
layout: post
template: one-col
title: Enabling Deployment Authorization
categories: how-to-guides/deployment
order: 10
lead: "How to restrict which users can deploy your application(s)"
legacy: false
tags: ["security", "operations"]
permalink: /:collection/:path:output_ext
---


## About Deployment authorization

For applications where you want additional control over deployment authorizations, you can now go to the application settings page an choose a deployment lockdown strategy. There are currently three deployment strategies available:

 -  **No Deployment Lockdown:**
   This is the default behavior and means that deployments will go through without any additional approval.
 - **Anyone on your team:**
   This setting implies that deployments will only happen if *at least* two members on your project with deploy permissions agree to deploy your application. This is commonly known as "four-eyes authorization".
 - **Specific team members:**
   This setting implies that only a specific user (or users in this group) will have permissions to approve deployment requests.

## Enabling deployment lockdown

To lock down deployment for an application:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Settings & Information*  in the **Application** panel on the right of the screen
3. In the **Application Update Lockdown** panel, select the level of lockdown you require
4. Click *Save Lockdown Settings*

## How lockdown works

If a deployment lockdown strategy is in place, then the "Deploy" button will be replaced with a "Request Deploy" button. Users with approval rights can then go to the application's Deployment Timeline on the "Build & Deployment right navigation option". There they can approve or deny deployment requests. Note that the person who raised the request can also cancel that request here.

Once a deployment request is approved, the deployment will take place. The audit log and deployment history pages will list who raised the deployment request and who approved it.


## Cloud Lockdown

For larger organizations with multiple cloud keys and multiple departments requiring access to different cloud keys, we now allow deployment "targets" to be locked down at a user permission level for all users in your team. 

To assign and edit permissions:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Teams* in the **Account** panel on the left.
4. Click on the edit icon next to any user to edit their permissions and roles.

To specifically limit the deployment targets for any user, find the *Restrict deployment targets* field and select the  targets for which the user has rights.

