---
layout: post
template: one-col
title:  "Suggested specs for Kubernetes clusters"
categories: references
order: 1
lead: "We recommend the following minimum specs for Maestro servers."
tags: ['tags']
legacy: false
permalink: /:collection/:path:output_ext
---
## Overview

Kubernetes is an extremely flexible and powerful way to host applications, but this power means that the platform has some minimum requirements with regards to server resources. While frameworks like Rails and Node can comfortably fit on a relatively tiny server, Kubernetes (and thus Maestro) requires more headroom. Therefore we recommend the following minimum specs for Maestro servers: 

## Minimum specs for a Kubernetes cluster

These specifications apply to a cluster with a single master node - i.e. the simplest possible cluster setup. 

- 2 GB or more of RAM per machine (any less will leave little room for your apps)
- 2 CPUs or more (less than this will cause a deployment error)

These specs come directly from the Kubernetes project - please [review the full list](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin) if you're unsure about anything. 

In general all of the other nodes in your cluster should be at least this large. It is possible over time to tune your setup so that non-master nodes are less powerful but, particularly for new deployments, we recommend erring on the side of more capacity.

## Allowing headroom for your app

It is theoretically possible for you to run a cluster with less powerful servers, but we strongly recommend against it. It's also important to consider the resource needs of the application itself. For example if your app requires 2GB of RAM to work optimally, your cluster should have at least 4GB RAM.