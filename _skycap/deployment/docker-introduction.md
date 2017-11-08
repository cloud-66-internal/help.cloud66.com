---
menuheaders: [ "Introduction to Docker", "Cloud 66 Docker support", "Ready?" ]
layout: post
template: one-col
title: Introduction to Docker deployments
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---









## Introduction to Docker

[Docker](https://www.docker.com/) is an open-source project that helps developers publish applications inside containers. There are many benefits to using Docker: 

- **Separation of Dev and Ops**: It has previously been difficult to seperate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services** (multi-tenancy): Instead of running monolithic applications, we are now seeing an increasing amount of micro-services, whereby complex applications are composed of smaller components which speak with each other. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66. You will still benefit from the many features previously only available to Ruby stacks, as well as numerous features built specifically for Docker deployments.






## Cloud 66 Docker support

Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](https://help.cloud66.works/skycap/deployment/building-your-service.html) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack.









### Ready?

  Are you ready to [build your first Docker stack](https://help.cloud66.works/general/introduction/cloud66-introduction.html)?

Cloud 66 Docker includes the following:
   {% if include.product == "skycap" %}- [Container life-cycle management](https://help.cloud66.works/maestro/stack-management/service-lifecycle-management.html){% else %}- [Container life-cycle management](https://help.cloud66.works/{{ include.product }}/stack-management/service-lifecycle-management.html){% endif %}
   - [BuildGrid](https://help.cloud66.works/skycap/deployment/buildgrid/)
   - [Networking layer and DNS](https://help.cloud66.works/{{ include.product }}/deployment/service-network-configuration.html)
   {% if include.product == "skycap" %}- [Storage layer](https://help.cloud66.works/maestro/stack-management/service-storage.html){% else %}- [Storage layer](https://help.cloud66.works/{{ include.product }}/stack-management/service-storage.html){% endif %}
   - [Docker scaling]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %})
Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 
   - [Deployed and managed databases]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-management.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-management.html{% endif %})
   - Database [backups]({% if include.product == "skycap" %}https://help.cloud66.works/skycap/databases/database-backup.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-backup.html{% endif %}), [verification](https://help.cloud66.works/rails/databases/backup-verifiers.html) and [replication]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %})
   - [Load balancing]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/load_balancing.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/load_balancing.html{% endif %})
   - [Firewall management and brute force protection for web and SSH]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %})
   - [Team and organisations](https://help.cloud66.works/general/teams/team-accounts.html)
   - Fast response 100% SLA DNS layer [failover groups]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/failover-groups/failover-groups.html{% else %}https://help.cloud66.works/{{ include.product }}/failover-groups/failover-groups.html{% endif %}) for quick traffic switch overs
   - [Server vital sign metrics](https://help.cloud66.works/{{ include.product }}/stack-management/server-monitoring.html)
   - [Intuitive UI](https://app.cloud66.com/dashboard)
   - [API](http://developers.cloud66.com) and [command line](https://help.cloud66.works/{{ include.product }}/toolbelt/introduction.html)

