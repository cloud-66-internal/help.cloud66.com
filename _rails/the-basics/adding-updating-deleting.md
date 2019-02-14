---
layout: post
template: one-col
title: Editing, cloning & deleting apps
order: 2
categories: the-basics
lead: "Adding, updating & deleting apps"
legacy: false

permalink: /:collection/:path
---

## Building an application

To build your first application, see our [Getting Started guide](/{{page.collection}}/quickstarts/getting_started.html). If you have existing application(s), simply click _New Application_ from your Cloud 66 [Dashboard](https://app.cloud66.com/dashboard).

## Updating application properties

You can access your _Settings & Information_ page from the right sidebar of your Application Overview. This page shows you general information about your application. For more detailed info, click the **Information tab**.

It also allows you to edit your application name, and you can edit your Docker service configuration under the _Configuration_ menu on the Application Overview. For Rack-based applications, you can edit your Git repository and branch by clicking the _Edit_ button next to each field on the _Settings & Information_ page. Editing your application name has an important implication.

## Clone an application

There are various reasons for cloning an existing application - for example, you may want to deploy a production environment of an existing development application, or migrate across regions or data centers.

To clone an application, visit your Application Overview and click _Clone this application_ at the bottom of the right-hand panel. This will prompt you to choose a new application name and environment. 

Cloning your application will preserve any environment variables from the existing application, and also allows you to define where to deploy the clone, to along with other settings.

## Deleting an application

#### Important
<div class="notice notice-warning"><p>
Deleting an application will not delete your cloud servers - remember to delete the servers from your cloud account.
</p></div>

To delete an application, visit your Application Overview and click _Delete Application_ in the right sidebar. You will have to confirm this action.

