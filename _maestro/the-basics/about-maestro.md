---
layout: post
template: one-col
title: About Maestro
categories: the-basics
order: 1
lead: "An introduction to the components of Maestro"
legacy: false
tags: ["operations", "docker"]
permalink: /:collection/:path:output_ext
search_title: About Maestro
search_description: Maestro is a Complete Solution using Docker &amp; Kubernetes for Building and Managing Containerized Infrastructure, on any Cloud or your own Servers.
product: Maestro  
---

## What is Maestro?

Maestro is a service for configuring and managing the infrastructure required to serve and support containerized applications.

Maestro uses **Docker** and **Kubernetes** for container and application management, but it also supports many of the non-containerized services used by a typical application including components like **databases** and **load-balancers**.

Maestro is designed as a complete solution - it can manage every aspect of your container infrastructure - but it can also be integrated with other services.

Maestro is server-agnostic - it supports both physical and virtual servers and both public and private clouds.

### Version 1 vs Version 2

There are two versions of Maestro:

* *Version 1* uses the Cloud 66 scheduler and Docker to manage fleets of containers
* *Version 2* uses Kubernetes and Docker to do the same thing

Version 1 (also called CSv1) is a *legacy product* and is only available by special request. We have many customers who are perfectly happy using Version 1, but our default option is Version 2 (CSv2) because it uses Kubernetes which is fast becoming the global standard in containerized application management.

Throughout this documentation, you will find references to these versions. If you’re in any doubt, you should rely on the information for Version 2.

## Maestro architecture

### Version 2

In order to manage containerized applications, Maestro Version 2 (CSv2) relies on three core components:

* A container runtime (Docker)
* A container orchestration platform (Kubernetes)
* A reverse proxy (Nginx)

The **Docker runtime** supports the elements that make up a container, and acts as a broker between those elements and the underlying infrastructure. It is the engine that makes containers “work”.

The **Kubernetes** platform orchestrates the entire lifecycle of a containerized application including deployment, grouping, container-to-container networking and service discovery. It also facilitates the deployment of native components directly to servers, where required. This is often done with stateful components (like databases), although these can also be containerized if necessary.

In the context of CSv2, **Nginx** is mainly used for SSL termination and load balancing. In the case of applications that span across different Kubernetes clusters, Nginx is used for communication between those clusters.

### Version 1

In order to manage containerized applications, Maestro Version 1 (CSv1) relies on three core components:

* A container runtime (Docker)
* Cloud 66’s proprietary container management service
* A reverse proxy (Nginx)

The **Docker runtime** supports the elements that make up a container, and acts as a broker between those elements and the underlying infrastructure. It is the engine that makes containers “work”.

The **Cloud 66 container management service** performs much the same task as Kubernetes does in CSv2 (see above) - it manages the lifecycle of containers in your environments. This includes container-to-container networking, as well as container-to-non-container (e.g. DBs) networking. It also includes DNS based service discovery

In the context of CSv1, **Nginx** is responsible for managing Layer-7 (HTTP/HTTPS) traffic from outside of the application into the containers and facilitates functions like SSL termination and load balancing.

## Maestro vs Skycap

**Skycap** is a **Container Deployment Pipeline** (CDP) that automates the building and deployment of software as **containerized** applications. Skycap is focussed on configuring and building your application into containers, and their deployment to (existing) Kubernetes clusters.

**Maestro** is a **Container Lifecycle Management Service** - a complete solution for configuring, building and operating containerized applications based on Kubernetes. Maestro is an end-to-end solution that takes you from code to cluster, as well as managing all the other components and resources required to support containerized applications (such as databases, storage, backups and load balancers).

So, in a nutshell, Skycap helps you to containerize, configure and deploy your application to an *existing* cluster, while Maestro allows you to build a containerized application, and cluster on which to host it, from scratch.

## About Docker

[Docker](https://www.docker.com/) is an open-source project that helps developers publish applications inside containers. There are many benefits to using Docker:

- **Separation of Dev and Ops**: It has previously been difficult to separate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services**: Instead of running monolithic applications, complex systems can be built from collections of small, loosely coupled components. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66.

### Cloud 66 Docker support

Cloud 66 builds Docker containers in two ways:

1. **Pulling code from Git**: This option uses Cloud 66 BuildGrid to automatically build a Docker image from your code. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is deployed to your servers and managed. We also version the image and allow you to download it if needed.
2. **Pre-built image**: You provide a Docker image that you've built or one from a public repo. We deploy that image to your servers and manage its lifecycle.

## Maestro features

Maestro includes the following:

- [Container life-cycle management](/maestro/quickstarts/getting_started.html)
- [Networking layer and DNS](/maestro/how-to-guides/deployment/service-network-configuration.html)
- [Storage layer](/maestro/how-to-guides/deployment/service-storage.html)
- [Scaling](/maestro/how-to-guides/scaling/)

Maestro applications also enjoy the same benefits as other Cloud 66 applications, including:

- [Deployed and managed databases](/maestro/how-to-guides/databases/database-customization.html)
- Database [backups](/maestro/how-to-guides/databases/shells/manage-backups.html)
- [Load balancing](/maestro/tutorials/load-balancing.html)
- Firewall management and brute force protection for web and SSH
- [Team and organisation management](/maestro/account/team-accounts.html)
- Fast-response 100% SLA DNS layer [failover groups](/maestro/tutorials/failover-groups.html) for quick traffic switch overs
- [Server monitoring tools](/maestro/how-to-guides/deployment/setting-up-custom-livelogs.html)
- [Intuitive UI](https://app.cloud66.com/dashboard)
- [API](http://developers.cloud66.com) and [command line Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html)
