---
layout: post
template: one-col
title: Accessing your Kubernetes instance directly
categories: how-to-guides/common-tools
lead: "You can quickly access the cluster instance for any Maestro app. Here is how to do it."
order: 7
legacy: false
permalink: /:collection/:path:output_ext
tags: ["debugging"]
---

## Overview

Although Maestro is designed to make managing your clusters a hands-off experience, you still have full access to all the features of Kubernetes whenever you need them. If you'd like to access a Kubernetes instance directly (for example to perform in-depth debugging) you can easily access your cluster using one of the two methods below. 

#### Note
<div class="notice"><p>We don't recommend that users who are new to Kubernetes access their cluster directly on production environments until they're comfortable with doing so in testing environment (like minikube).</p></div>

## Method 1: Connect to the server

You can access you cluster directly by connecting to your cluster's master server via SSH in your terminal. The quickest and easiest way to do this is to use [Cloud 66 Toolbelt](/maestro/references/toolbelt.html). 

Once you have Toolbelt installed: 

1. Open your app in Cloud 66 Dashboard
2. Click through to your *master* server (click the *Servers* tab and then *master*)
3. Copy the command under "Connect with Toolbelt"  in the right-hand column and paste it into your terminal
4. You can now access your cluster and run whatever commands you need using the certificate on the server. For example:

```bash
sudo kubectl --kubeconfig=/etc/kubernetes/admin.conf get nodes
```

This method is best if you only need to access you cluster occasionally. If you need to access it regularly, we recommend using method 2 below. 

## Method 2: Connect from your own machine

This method downloads a `kubeconfig` file to your computer that allows you to run commands (such as `kubectl`) remotely.

To set this up, you first need to have Kubernetes installed on your local machine. Once that is done:

1. Open your app in Cloud 66 Dashboard
2. Click on *Network* in the right-hand panel
3. Set up firewall rule that allows access FROM your **own IP address** (or range) TO your **master** server using **TCP** and port **6443**. (If you need help, please read our [Firewall guide](/maestro/tutorials/firewall-rule.html))
4. Now click through to your master server (click the *Servers* tab on the application overview and then *master*)
5. Click on the *Download Kubeconfig* button and download the `kubeconfig` file somewhere sensible on your local machine
6. Set the environment variable using `export KUBECONFIG=/file/path`
7. You can now access your cluster and run whatever commands you need using the certificate on your computer. For example:

```bash
kubectl get nodes
```


#### Warning
<div class="notice notice-warning"><p>
Because this method gives a remote machine direct, super-admin-style access to a cluster, we recommend using it with caution and treating the <code>kubeconfig</code> file with care.</p></div>
