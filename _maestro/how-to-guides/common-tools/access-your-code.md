---
layout: post
template: one-col
title: Using Git repositories with Maestro
categories: how-to-guides/common-tools
lead: "Using git repositories like Github to manage and deploy code via Maestro"
tags: ["Git"]
legacy: false
order: 200

permalink: /:collection/:path
---

## Overview

Maestro natively supports building container images by pulling code directly from Git repositories. These can be public, private-cloud (e.g. a private Github repo) or self-hosted.

## Public repositories

For public Git repositories, you don't need to add the SSH key provided to your Git account. You simply need to provide the Git URL as either:

`http://<git provider>/<username>/<repository>.git`  

or   

`git://<git provider>/<username>/<repository>.git`


#### Notice
<div class="notice notice-warning"><p>We do not support the use of HTTPS URLs.</p></div>


## Accessing private repositories

For Maestro to access your private repositories (with read-only access), you first need to add the SSH key provided by Cloud 66 to your Git account. To find this key:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Git Repo SSH Keys* in the **Settings** panel on the left
4. Copy the **Git public SSH Key** and add it to your Git repo provider

You can add this SSH key globally to your Git account by adding it to your **Account settings**, or allow access to a specific repository by adding it to that repository as a **Deploy key**.

### GitHub example

#### Adding the SSH key globally

To add the SSH key globally: 

* Click your account avatar in the top right hand corner and then *Settings*
* Click *SSH and GPG* keys in the left menu
* Click *New SSH key* 
* Give the key a useful title (e.g. Maestro) 
* Paste the key you copied from Maestro and click *Add SSH Key*

#### Adding the SSH key to a specific repository
    
* Access the Settings menu for that repository using the tab at the top of the main panel.  
* Click *Deploy keys* 
* Click *Add deploy key* 
* Give your key a useful title 
* Paste the key you copied from Maestro and click *Add Key*

### BitBucket example

#### Adding the SSH key globally
   
To add the SSH key globally: 

* Go to *View Profile*
* Click on *SSH keys* and then *Add key*. 
* Paste the key you copied from Maestro into the text box
* Click *Add key*

#### Adding the SSH key to a specific repository

To add the SSH key to a specific repository: 

* Access the Settings menu for that repository (top right)
* Click Deployment keys 
* Paste the key you copied from Maestro into the text box
* Click *Add key*

## Using Github with Maestro

For a tutorial on how to build code from Github into an application for use with Maestro, please follow our [Getting Started](/skycap/quickstarts/getting_started.html) guide for Skycap which walks you through the process.

Skycap is the companion peroduct to Maestro. You can read more about it [here](/maestro/the-basics/about-maestro.html#maestro-vs-skycap). 

