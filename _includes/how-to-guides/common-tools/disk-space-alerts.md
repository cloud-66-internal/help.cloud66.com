## Overview

Disk space alerts will send you a (single) alert via your preferred notification channel(s) when the disk of a server crosses the space usage threshold you have set. The default threshold is **80% usage** but you can choose any value from `0` - `100`.  Setting a threshold value of `100` will disable alerts for that server.

## Changing the disk space alert threshold on a server

By default, servers have their disk usage threshold set to 80%. To change this:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on the application in question
2. Click on the server group and then the name of the server for which you want to set the alert threshold
3. Click on the bell icon (🔔) at the top right of the *Disk Information* panel
4. Set the percentage at which you'd like to be alerted and click *Save Alert*

You will now be alerted when the server's root disk exceeds that level of usage. The method by which you will be alerted depends on your **notification settings** (see below)**.**

We will also display a red warning symbol in your server detail page next to any server filesystem that has breached its disk space threshold.

### Important
<div class="notice"><p>We will only send you a single notification when your disk crosses its threshold (and when it crosses back). We won't repeat this notification if you server continues to stay above the threshold. Be sure to monitor your disk space notifications as low disk space availability will cause unpredictable errors.</p></div>

## Managing your notification channel(s)

To choose the channel(s) through which you'll receive your disk space alerts:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on the application in question
2. Click *Settings & Information* in the right-hand panel
3. Click the *Notifications* tab at the top of the main panel
4. Click on the icon(s) of your preferred channel(s) next to *Disk Space Alerts* 

For more detailed help on notification settings please read our [full guide](/{{page.collection}}/account/notifications.html)on the subject. 

## Disabling disk space alerts on a server

There are two ways to disable the disk space alert for a server:

1. Set the alert threshold to `100` (100%)
2. Turn off notifications for disk space alerts in your notification settings

In general we **don't** recommend the second method because it will disable disk space notifications for *all* the servers in an application.

## How to diagnose why your disks are full

If your disk is filling up, a great tool to find the culprit is `ncdu`. Cloud 66 installs `ncdu` on your servers automatically, and you can run it using the command:

```bash
sudo ncdu /
```

This will give you a breakdown of what files/folders are using up the most disk space.

## How to mitigate disk space issues

There are three main approaches to ensuring your servers have enough disk space available:

1. Identify and (manually) delete unused or extraneous files (e.g. older logs, packages, backups) - see `ncdu` above for more help
2. Provision cloud storage with your provider and then mount this storage on your server(s) - this is an advanced topic that we suggest only for experienced users
3. Deploy a new instance of your server(s) or your entire application with extra disk space provisioned via your [manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html).  

## More help

- [Managing notifications](/{{page.collection}}/account/notifications.html) for your entire account
- [Enabling Slack notifications](/{{page.collection}}/how-to-guides/common-tools/slack-notifications.html) on your account
- Using [Service Accounts](/{{page.collection}}/account/service-accounts.html) to centralise notifications