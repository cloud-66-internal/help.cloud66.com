---
layout: post
template: one-col
title: Stack notifications
categories: stack-management
lead: ""
legacy: true

permalink: /:collection/:path
---


## About receiving stack notifications

You can control when and how you would like to receive notifications from Cloud 66. There is a range of events that trigger notifications, which can be sent as emails, Hipchat, via iOS push, Slack or Webhooks. Each stack can have its own notification settings and channels.


## Viewing your stack notifications

_Stack notifications_ can be accessed from the right sidebar of your stack page, and feature notifications for events such as failed backups or jobs, stack deployments and many more.


## Setting up your notification types


### Browser notifications

Browser notifications use HTML5 to notify you of your selected events directly in supported browsers. Once enabled, your browser will ask your permission for these notifications to be shown.


### Emails

Email notifications are enabled by default for all users. By default, you will get an email for a number of events, with the exception of _deployment start_ notifications. You can easily turn email notifications _on_ or _off_ for each type by clicking on the email icon.


### Hipchat

[Hipchat](http://hipchat.com/) is a hosted realtime chat service by Atlassian, and you can link your account to Cloud 66 to receive notifications on Hipchat.

From the Hipchat _Account settings_ menu, click _API access_, and then the link for _API version 1_. Once on the API v1 page, create an API token. By selecting the Hipchat icon on the _Stack notifications_ page, you can add this token and select which room you would like your notifications to appear in.


### iOS

Download the [Cloud 66 iOS application](https://itunes.apple.com/us/app/cloud-66/id642299804?mt=8&uo=4) to get iOS push notifications on your phone.


### Slack

[Slack](https://slack.com/) is a real-time messaging, archiving and search application developed by Tiny Speck.

Visit the Slack [Integrations page](https://slack.com/integrations) and select the Cloud 66 integration. Choose the channel you would like to receive notifications in (or create a new one), and click _Add Cloud 66 Integration_. You will then receive a URL, which you can provide in Cloud 66 integration modal.


### Webhooks

The [Webhooks](http://www.webhooks.org/) standard uses HTTP POST to connect different systems, and is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook. To setup your webhook, click on the _Webhook_ icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

Each event type has its own payload that is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: _timestamp_ and _event_type_:
|		Attribute 		   |   Description    |
|--------------------------| ----------------:|
|timestamp				   | Epoch timestamp of when the event was sent |
|event_type 			   | Type of the event, see below |
The following event types are available:
|		Event Type 		   |   Description    |
|--------------------------| ----------------:|
|stack.provision.ok		   | Stack provisioned succesfully |
|stack.provision.fail	   | Stack provision failed |
|stack.redeploy.ok		   | Stack redeployed succesfully |
|stack.redeploy.fail	   | Stack redeploy failed |
|server.stopped		   	   | Server heartbeat stopped |
|server.backon			   | Server heartbeat restored |
|job.fail				   | Job run failed |
|job.backon 			   | Job run succeeded (after fail) |
|process.down			   | Process is down |
|app.auth				   | App authorized to access the account |
|app.deauth				   | App deauthorized from accessing the account |
|stack.redeploy.hook.fail  | Stack redeployment hook failed |
|stack.deploy.started	   | Stack deployment started |
|container.down	 		   | Container is down |

