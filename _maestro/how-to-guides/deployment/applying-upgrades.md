---
layout: post
template: one-col
title:  "Applying system upgrades"
categories: how-to-guides/deployment
legacy: false
lead: Applying upgrades and updates to your application components
tags: ['upgrade', 'update']
permalink: /:collection/:path
---

## Maestro Package Update Policy

Maestro aims to make it easier to build immutable infrastructure. Building (or re-building) servers and applications from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

This is commonly accepted as best practice, but it's often difficult, time consuming and can be unpredictable. That's why we make building applications from scratch as easy and as quick as possible. 

So, when an upgrade is available, our first recommendation is to build a new application and redirect your traffic to the new application using your [Failover Address](/maestro/tutorials/failover-groups.html).

When a new server is created we automatically update all the packages to the latest. After the server is created we only auto-install packages that are marked as `security updates`. Maestro doesn't typically update other packages because it doesn't want to risk disrupting your existing application.

If rebuilding is impractical or impossible, there are three approaches to dealing with the issue:

*  Ignore the package updates &mdash; this is safest bet if you're concerned about app stability.
* Manually update the packages by logging into the servers and using `sudo apt-get -y upgrade` or `dist-upgrade` package
* Update the packages indirectly through scaling up a new server, and then dropping the old one (the new server will always have the latest packages installed on it)

#### Note
<div class="notice"><p>Some package updates require server-reboot. When scaling up we restart your new servers automatically to ensure everything works correctly. Alternatively you can reboot your servers manually or via the Toolbelt.</p></div>

## Upgrade package types

### Security updates

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches.

### Ubuntu

To manually trigger security upgrades:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Clicking on the *Build / Deploy* button and choose *Deploy with Options*
3. Click on the *More Options* tab
4. Check *Apply Security Upgrades* and *Yes, reboot my servers if required*
5. Click *Run Now*

This will perform operating system security package upgrades and also set up <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">unattended upgrades</a> for your application. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

Note that some security packages may require a server restart. We don't automatically restart your server, and it is at your discretion to do so. 

If the file `/var/run/reboot-required` exists, that means your server requires a restart. To see which packages contributed to the requirement for a restart, read `/var/run/reboot-required.pkgs`.

### Docker and Weave

It is best to keep your Docker and Weave versions up to date as they are released quite frequently with bug/security fixes.

1. Update your manifest file (Configuration Files -> Manifest.yml) and change the Docker and Weave version to the [latest ones](/maestro/resources/technical-specifications.html#component-versions).

2. Click on **DEPLOY** and choose **Deploy with options**
3. Go to the **More options** tab and tick the **Apply Docker upgrades** check box.

#### Warning
<div class="notice notice-danger"><p>Upgrading in-place involves downtime as the Docker engine and local files are all upgraded. To maintain zero down-time you should clone your application and use <a href="/maestro/tutorials/failover-groups.html">failover groups</a> to switch to the new instance.</p></div>
