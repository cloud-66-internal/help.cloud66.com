## Overview

All applications managed by Cloud 66 automatically have their own separate virtual private network. We call these **Application Private Networks** (APNs for short). The safest way to directly access any of your servers, whether via SSH, TCP, HTTP or another protocol, is through your app's APN.

This guide explains how to connect to an application's APN from your desktop machine and your mobile phone. If you need a help with connecting your application servers to one another, check out our [How-To Guide](/{{page.collection}}/how-to-guides/security/using-application-private-networks.html) on that subject. 

## What you'll need

- **A Cloud 66 Account** — If you don’t already have one, **[sign up for a Cloud 66 account](https://app.cloud66.com/users/sign_up)**. You’ll get free unlimited access to all products for 4 weeks.
- **An existing application set up in Cloud 66** — To make the most of this tutorial you need to have an app already set up. Follow our **[Getting Started guide](/{{page.collection}}/quickstarts/getting-started.html)** if you’re not sure how to do this.
- **A WireGuard client on your device** - your APN runs on WireGuard, a [very simple but very secure](/{{page.collection}}/references/understanding-application-private-networks.html) virtual private network (VPN) tunnel. [Install the client](https://www.wireguard.com/install/) that best suits your device.

## 1. Configure your APN client

Your APN is automatically configured at account-level. This means that, if you have multiple apps, **the same configuration file gives you access to all of them**.

To access your APN configuration file:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/)
- Click on your avatar (top-right) and choose *Account Settings*
- Click on the *Application Private Network* tab
- Click *App Private Network* in the **Account** panel on the left

The way to apply a configuration depends on the platform you're using:

### Configuring a computer

- Scroll down to *Connecting your Computer to the APN*
- Download the WireGuard configuration file (by clicking on the link)
- Open your WireGuard client and select "Import tunnel(s) from file"
- Choose the config file you just downloaded

### Configuring a mobile device

- Scroll down to *Connecting Mobile Devices to the APN*
- Scan the QR code using the WireGuard app
- This will create a new tunnel - be sure to accept or save the config

#### Notes
<div class="notice"><p>
- If your app has more than 10 servers then you won't be able to use a QR code (the config file is too long to fit into such a code). You will need to download the config file and apply it as you would do for a computer. <br/>
- If you add servers to an application, you will need to download a new config file in order to access your APN.
</p>
</div>

## 2. Allow access via your application firewall

You need to allow WireGuard access via your application's firewall. To do this:

- Open the Application Overview page for the application in question
- Click on *Network* in the right-hand column
- Click on the *Application Private Network* tab
- Click the *Lease Now* button

This gives you 24 hours of APN access which you will need to renew, unless you create a [firewall rule](/{{page.collection}}/tutorials/firewall-rule.html).

## 3. Connect to your APN

You can now use the WireGuard to connect to your APN. 

- Select your APN tunnel from the list the Wireguard client
- Click *Activate*

You are now connected to your APN via the IP listed in the WireGuard client. 

## 4. Connect to your servers

Your servers are allocated to a specific IP range in the APN. For example:

`172.16.10.45/32`

You can find the APN-specific IP address of a server on your Dashboard:

- Open your Application Overview page
- Click on *Network* in the right-hand column
- Click on the *Application Private Network* tab

You can use this IP connect to your servers directly from your device using your preferred method (SSH, HTTP etc).

## Giving team members access to the APN

If your team members need access via the APN:

1. Open the *Account Settings* page
2. Click Teams on the account panel 
3. Ensure the team member has **Developer or HIGHER** role permissions for the application.

### Note
<div class="notice notic-warning"><p>
If you change access levels for a user, they should download and re-apply the configuration.</p></div>

## More help

- How to [configure APN access between servers](/{{page.collection}}/how-to-guides/security/using-application-private-networks.html)
- A [reference guide to APNs](/{{page.collection}}/references/understanding-application-private-networks.html) (including security specifications)