---
layout: post
template: one-col
title: Concepts & terminology
order: 2
categories: the-basics
lead: "Defining the concepts and terms used in this documentation"
legacy: false
tags: ["concepts,terms"]
permalink: /:collection/:path
search_title: Maestro Concepts and terminology
search_description: The key concepts of Maestro including Containerization, Orchestration, Services, Kubernetes, Scaling your app and BuildGrid
product: Maestro  
---

## Containers & containerization

Containers, at their most basic, are pieces of software (or “code”) bundled together with the other components they require to function (such as system libraries and configuration files). This bundle (or “container”) is treated as a standalone executable file.

There are many benefits to treating software applications this way. Containers are:

* **Self-contained ---** Each container runs as an independent process or thread. This greatly reduces the chance of conflict with other applications using the same infrastructure.
* **Less resource intensive ---** Because they only contain the minimum components required to function they do not consume unnecessary resources. This saves on infrastructure costs and can make applications faster for end users.
* **Highly portable ---**  Containers are not dependent on specific server or environmental variables, so they can be quickly and easily deployed or moved between different server environments.
* **Easily scalable ---** Containers can be initialised in milliseconds, so adding, moving or removing them is close to instant. And because they are self-contained, the need for time-consuming configuration changes is greatly reduced.
* **Secure ---** Containers are highly abstracted and isolated from their environments as well as from other applications sharing those environments. This makes securing applications and implementing policies easier and cleaner.

Apart from these technical benefits, containers also make it easier for **development** and **operations** teams to work together more efficiently. Because the containers are abstracted from the underlying server environment, they allow developers to focus on writing good code, and operations engineers to focus on managing environments. This clean division of responsibility paradoxically allows for more flexibility and easier collaboration between teams.

These benefits have led many large technology firms to adopt containers as their default approach to shipping and deploying their software. Examples include Netflix, PayPal and Expedia.

Many of these firms began by taking existing software and repackaging it into containers. This process is called **containerization**, and it affects the entire technology team from developers to devops and infrastructure teams.

Containerization is made possible by **container engines** - systems that allow containers to be developed, packaged and run on your infrastructure. At Cloud 66 we support [Docker](https://www.docker.com/) which is the market leading container engine (or “runtime”).

If you’d like to learn more about this concept, we have an in-depth guide in our Skycap documentation.

## Orchestration

Software orchestration is a way to automate the routine management of your applications and the infrastructural environments on which those applications run.

One of the challenges of containerization is that, instead of deploying and managing a single, monolithic application, you need to deploy and manage dozens, hundreds or even thousands of containers. This quickly makes manual management of many operational tasks, like scaling or migration, effectively impossible.

Container orchestration platforms provide the framework to systematise and automate the entire lifecycle of a containerized and distributed application. In other words, these platforms allow you to define the way you want any management task to work - for example rolling back code - and then let the platform handle that task with little to no human intervention required.

At Cloud 66 we rely on Kubernetes - the market leading solution - to orchestrate containers and applications in clustered environments. Maestro streamlines and extends Kubernetes to allow for the centralised management of your entire application - including the non-containerized components.

## Applications and services

### What is an application?

In the context of Maestro, an **application** is a complete and discrete piece of software, usually made up of several components, not all of which are necessarily containerized.

For example, a simple application might consist of:

* A container with all the business logic of the application written in Python
* A standalone MySQL database to which the container connects
* An instance of Memcached running on the host alongside the container

A Maestro application is distinct from the physical (or virtual) infrastructure - it describes the components required for the software to function, and not the substrate on which those components happen to be running.

### Application vs service

In Maestro an **application** is typically made up of several different services. These can include:

* Containers
* Databases
* A message queue
* A caching service
* A filestore or CDN

…and many more. Services are encapsulated by applications - they don’t operate independently.

NOTE
A Maestro service is not necessarily equivalent to a Kubernetes service. Containers hosted using Maestro will, by definition, become Kubernetes services, but Maestro services can also be non-containerized components (see above).

### Application vs stack

In previous versions of Maestro, and this documentation, we used the concept of a “stack” to describe much the same concept as we now describe using “application”. The two concepts are related but not identical.

In particular “stack” tends to include both underlying infrastructure and the components running on that substrate, whereas “application” is more abstracted from the underlying infrastructure.

However, when reading any documentation or our forums, it will often be helpful to think of “stack” and “application” as effectively synonymous.

In a general sense, both these terms encapsulate the same thing: an interconnected collection of components, configurations and services that are presented to the world as a single, coherent piece of software.

### What is StackScore?

StackScore&trade; is a score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers. It consists of five key metrics that are graded from **A** to **F**, and the overall StackScore is the lowest of the scores across these five metrics.

- **Code:** Ensures your code does not have security issues by checking for known vulnerabilities.
- **Backups and data integrity:** This tracks whether or not you are backing up your databases (with managed and/or unmanaged backups), and whether or not you verify your backups.
- **Connectivity:** Checks whether or not you are sharing your front-end and back-end on the same server. This is affected by how much memory you have on your servers, among other factors.
- **Performance:** Checks if you have a load balancer, as well as different server configuration metrics.
- **Security:** Tracks your firewall settings for potential security issues.

#### Suggestion
Always try to keep your stacks at an **A** StackScore&trade; level to ensure application health.

Cloud 66 constantly seeks to update and improve the StackScore algorithm to consider new data points as well as external conditions, which means that your StackScore will change over time.

## Container lifecycle management

Containers have, in a very real sense, a lifecycle. They are “born” by being built from images and deployed onto infrastructure. They “live” on that host, performing their functions and then, when they are obsolete or no longer needed, they are removed and “die”.

This ability to spawn new containers to handle additional load, to retire them when they are no longer needed and to replace fleets of obsolete containers with new ones, is what makes them so flexible and powerful.

Maestro’s job is to streamline and automate the management of this lifecycle. This includes:

* Managing Kubernetes clusters
* Configuration management
* Monitoring
* Provisioning and managing databases
* Providing persistent storage
* Security and firewalling
* Failover and high-availability

## Service networking

It's likely that some services inside your application will need to respond to queries from the public internet.

For a service to be available to anyone outside the container, we need to bridge it from inside to outside of the container. In the context of Kubernetes (and thus Maestro), this is called “service networking”.

For example, a container with a web application might be set to listen on port 3000 within the internal (Kubernetes) cluster network, and that port could then be exposed to port 80 on the public network attached to the cluster.

This is not limited to HTTP or web traffic. The same concepts apply if a container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).

If you’d like to understand this concept better, read this [excellent in-depth explainer](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/) by Kevin Sookocheff.

<div class="notice"><p>
In this context, <em>outside world</em> is used for any client of your service that's not inside the container. This includes any of your other services running on other environments.</p></div>

## Nodes, masters & workers

### Overview

In Kubernetes nomenclature, each server (whether physical or virtual) running Kubernetes-related tasks is called a “node”. There are two main types of nodes:

1. **Masters** which provide the control plane for a cluster
2. **Workers** which run the application containers (AKA workloads)

It’s quite common for nodes to be shared between Masters and Workers. This is useful for smaller and less complex Kubernetes environments but is not recommended for applications with significant traffic.

### Shared vs dedicated Master nodes

In a purist Kubernetes setup, Master nodes are kept separate from Worker nodes, but it’s often more efficient to allow your Master node to run workloads. This is particularly useful in development environments because it reduces the number of servers required by the cluster.

The first time Cloud 66 provisions a new Kubernetes cluster, we default to the **shared master** architecture. This can be changed via the [Dashboard](/maestro/how-to-guides/scaling/scaling.html#kubernetes-cluster-servers) or [manifest.yml](/maestro/how-to-guides/deployment/building-a-manifest-file.html).

## High availability & multiple masters

### High availability for Worker nodes

One of the benefits of using Kubernetes is its inherent capacity for high availability. Because pods and containers are ephemeral, workloads can easily be shifted between nodes. This makes achieving high availability for workloads very similar to scaling: by adding more Worker nodes you can achieve both scale and redundancy.

### High availability for Master nodes

Unlike Workers, Master nodes don’t automatically benefit from being scaled horizontally. This is because Kubernetes masters use a **majority consensus** algorithm to resolve any disputes that might occur. This means that the minimum number of Masters required for high availability is **three**.

To understand why this is, consider the following example: You create a cluster with 10 Workers and 2 dedicated Masters. The cluster runs fine until there’s a network disruption and the Masters disagree about the state of one of the Workers. Since the replication algorithm relies on a majority consensus, the Masters will be unable to come to a majority “decision” (because there is a 50:50 split in “opinion”). So a cluster with two Masters is actually **less highly available** than a cluster with a single master.

So, in order for a Kubernetes to be truly highly available, it needs to have **an odd number of Masters that is greater than 1**.

## Scaling

As your application gains users, it may require more resources to support its functions. In the context and Kubernetes (and thus Maestro) there are three main ways to scale an application:

1. Add new hosts / servers to a cluster (“horizontal” scaling)
2. Increase the capacity of existing hosts / servers in the cluster (“vertical” scaling)
3. Adding more containers to the cluster to make more efficient use of resources

The third method above is predicated on the fact that node resources are often underutilised by the applications running on them. Internal system limitations and user-imposed caps can leave significant room for more intensive CPU or RAM usage per node. For example a less processor-intensive container may work equally well with a 25% share of CPU as it does with 50%, effectively doubling the carrying capacity of a node.

It is also possible, with some advanced configuration, to scale applications across entirely different clusters in different data centres or regions.

## Load balancing

Maestro supports several levels and methods of balancing the load on an application:

1. External load balancing via cloud services / providers
2. Load balancing across your application’s own hosts via Nginx or HAproxy
3. Load balancing across the containers and Pods running within the application via Kubernetes

All of these methods share the same goal - ensuring that your application is able to cope with the influx of users and traffic without degrading in performance or running out of resources completely.

This documentation addresses the configuration of cloud-based load balancers, Nginx and HAproxy, but there are dozens of other platforms and methods that can help you manage the load on your application.

If you are interested in learning more about this subject, Matt Klein has written [an excellent introduction](https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236) to load balancing.

### Proxies and SSL / TLS termination

Both of the load balancers that are natively supported by Maestro (Nginx and HAproxy) are also *reverse proxy servers*. There are some minor technical differences between dedicated load balancers and these reverse proxy servers, but they are essentially identical for almost all purposes.

Both Nginx and HAproxy can be set up to handle SSL / TLS termination - in other words, they act as the public face of an application and provide a route to your SSL certificates. This saves you from having to set up multiple instances of your certificates throughout your infrastructure and allows for more advanced load balancing features like X-Forwarded HTTP headers (XFF).

## BuildGrid and Build Minutes

BuildGrid is Maestro’s integrated Docker image builder. Whenever you build images from source code, or retag existing images, you make use of a metered resource called Build Minutes. All Maestro accounts have a number of “free” Build Minutes per month.

Learn more about Build Minutes, monthly allowances and overages in our [detailed guide](/maestro/references/build-minutes.html).
