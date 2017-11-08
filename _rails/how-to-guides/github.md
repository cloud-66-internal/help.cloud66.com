---
layout: post
template: one-col
title: Use GitHub with Cloud 66
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "common" %}





GitHub is a great resource for developers, and using it with Cloud 66 couldn't be easier. While you use GitHub for the revision control of your code,
you can use Cloud 66 to deploy and manage your app in any cloud at all stages of your development.

For this demonstration, we'll be using a Cloud 66 sample Rails app with a MySQL backend that is conveniently [hosted on GitHub](https://github.com/cloud66-samples/rails-mysql).

Once we're ready to deploy this app, we simply copy the Git URL provided by GitHub into the Cloud 66 _New stack_ page. We're using the SSH URL, because we've added the SSH key provided to our GitHub account.

Here you can choose your branch, your stack name and which environment you'd like to deploy. Hit _Analyze_ and we'll take you to the next step.

Having analyzed your code, Cloud 66 will give you a brief summary of your application.

In addition to this, you'll be able to define which Ruby version you'd like to deploy, as well as other framework configurations. You can then decide where you'd like to deploy.

You can also determine details about your deployment, such as where to deploy the MySQL server. Once you hit _Deploy_, we'll set up your servers and deploy your app to them. You'll see exactly what's happening at every step of the way, and once it's done, you'll be able to manage your stack.

When you push code changes to your GitHub repository, you can simply click _Deploy stack now_ to push this code to your servers. You can also set up continuous deployment by adding a Cloud 66 [redeployment hook](http://help.cloud66.com/deployment/redeployment-hooks) to your GitHub repository.

Visiting the URL or IP of the server, you can see your application running.

The _Deployment history_ page gives you great insight into which code revision has been deployed and by who. You can also revert back to previous commits if need be.


