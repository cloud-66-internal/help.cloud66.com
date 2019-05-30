---
layout: post
template: one-col
title: Setting up access control on Skycap
categories: tutorials
order: 6
lead: "How to create access control policies in Skycap"
legacy: false
tags: ["security,access control,ACL"]
permalink: /:collection/:path:output_ext
---

If you are working in a team, you will probably need to control who has access to Formations, and how much they can do with that access (i.e. their permissions). This guide walks you through the process of creating and maintaining access control policies in Skycap Formations.

## What you’ll need

Before you start, please check you have the following:

* **A Cloud 66 Account** &mdash; If you don't already have one [sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up). There's a free community plan and you'll get full unlimited access to all products free for 14 days.

* **An existing application set up in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap](/skycap/quickstarts/getting_started.html) guide.

* **An existing Formation defined in Skycap** &mdash; You can learn how to do that with our [Getting started with Skycap Formations](/skycap/quickstarts/using_formations.html) guide.

* **At least two team members on Cloud 66** (including yourself) &mdash; You can add team members using the [Teams section](/skycap/account/team-accounts.html#add-a-team-member) of the [Account Settings](https://app.cloud66.com/me) interface.

## Overview

Skycap supports two interrelated security policies for Formations and Stencils:
**Access control** which defines which assets a user can access
**Permissions** which defines what the user can do with that access

If you'd like more a detailed explanation on how access control policies work, including hierarchy and inheritance, you can [find it here](/skycap/references/more-about-access-control-policies.html).

## Creating a Formation access policy for a user

In order to set up an access policy for a Formation within any application:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question.
2. Click on *Formations* in the right-hand panel
3. Hover your mouse next to the edit icon for the Formation in question - a small padlock icon will appear. Click it.
4. Under the first section (permissions for the *specific* Formation in the *specific* app), click the “**+** Add Permissions for a user” button
5. Select the user in question from the dropdown and check any of the boxes to permit that user to perform those actions.
6. Click the *Save Permissions* button

<img src="/assets/skycap/tutorial-ACL-add-permissions.gif" alt="Screencast of process of creating an access policy for a Formation">

You can repeat steps 4 - 6 to add policies for any number of team members.

### Giving users higher levels of access
If you’d like to give team members permissions to edit *all* of the Formations in *one* application, or *all* the Formations in *all* of your applications, you can simply follow the steps above, but add the user’s permissions to the second or third section, respectively. 

## Creating a Stencil access policy for a user

In order to set up an access policy for a Stencil within any application:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application in question
2. Click on *Formations* in the right-hand panel
3. Click on the name of the Formation which contains the Stencil in question
4. Hover your mouse next to the edit icon for the Stencil in question - a small padlock icon will appear &emdash; click it
5. Under the first section click the “**+** Add Permissions for a user” button
6. Select the user in question from the dropdown and check any of the boxes to permit that user to perform those actions.
7. Click the *Save Permissions* button

## Editing or revoking access

In order to edit an existing access policy for any Formation:

1. Open your [Cloud 66 dashboard](https://app.cloud66.com/dashboard) and click on the name of the application which contains the Formation.
2. Click on *Formations* in the right-hand panel
Hover your mouse next to the edit icon for the 
3. Formation in question - a small padlock icon will appear. Click it.
4. Find the user in question and add or remove permissions by checking or unchecking the appropriate boxes.
5. Click the *Save Permissions* button

You can **revoke** a user’s access completely by following the above steps but, at Step 4, clicking on the red delete icon to the right of that user’s entry in any section.

You can do the same for any *Stencil* by first navigating to the Formation in which it lives, then clicking the padlock next to that Stencil, and then following steps 4 & 5 above. 


## What’s next?

* Learn more about advanced use cases for [access control policies](/skycap/references/more-about-access-control-policies.html)
* Learn how to [update an existing service](/skycap/tutorials/updating-an-existing-service.html) in Skycap.
* Learn how to [add new services or components](/skycap/tutorials/adding-a-new-service.html) to a service.
* Learn how to [roll back to an older version of your application](/skycap/tutorials/rolling-back-using-snapshots.html) using Snapshots.
* Learn how to add [custom environment variables](/skycap/tutorials/setting-environment-variables.html) to your application.
* Learn how to use your [Habitus build flow](/skycap/tutorials/using-habitus-with-skycap.html) within Skycap.
* Learn how to use [validation policies](/skycap/tutorials/using-validation-policies.html) to ensure your Stencils adhere to your standards and conventions. 





