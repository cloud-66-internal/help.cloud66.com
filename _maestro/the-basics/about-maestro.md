---
layout: post
template: one-col
title: About Maestro
categories: the-basics
order: 2
lead: "An introduction to the components of Maestro"
legacy: false
tags: ["operations", "docker"]
permalink: /:collection/:path
---


## Docker

[Docker](https://www.docker.com/) is an open-source project that helps developers publish applications inside containers. There are many benefits to using Docker: 

- **Separation of Dev and Ops**: It has previously been difficult to seperate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services** (multi-tenancy): Instead of running monolithic applications, we are now seeing an increasing amount of micro-services, whereby complex applications are composed of smaller components which speak with each other. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66. You will still benefit from the many features previously only available to Ruby stacks, as well as numerous features built specifically for Docker deployments.


### Cloud 66 Docker support

Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](/legacy_docker/references/build-grid.html) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack.


## Kubernetes



## Nginx


## Version 1 vs 2


### Ready?

Are you ready to build your first Docker stack?

Cloud 66 Docker includes the following:

- [Container life-cycle management](/maestro/quickstarts/getting_started.html)
- [BuildGrid](/legacy_docker/references/build-grid.html)
- [Networking layer and DNS](/maestro/how-to-guides/deployment/service-network-configuration.html)
- [Storage layer](/maestro/how-to-guides/deployment/service-storage.html)
- [Docker scaling](/maestro/how-to-guides/scaling/)

Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 

- [Deployed and managed databases](/maestro/how-to-guides/databases/database-customization.html)
- Database [backups](/maestro/how-to-guides/databases/shells/manage-backups.html)
- [Load balancing](/maestro/tutorials/load-balancing.html)
- Firewall management and brute force protection for web and SSH
- [Team and organisations](/maestro/account/team-accounts.html)
- Fast response 100% SLA DNS layer [failover groups](/maestro/tutorials/failover-groups.html) for quick traffic switch overs
- [Server vital sign metrics](/maestro/how-to-guides/deployment/setting-up-custom-livelogs.html)
- [Intuitive UI](https://app.cloud66.com/dashboard)
- [API](http://developers.cloud66.com) and [command line](/maestro/quickstarts/using-cloud66-toolbelt.html)
