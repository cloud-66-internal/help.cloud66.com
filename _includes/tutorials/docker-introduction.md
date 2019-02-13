

## Introduction to Docker

[Docker](https://www.docker.com/) is an open-source project that helps developers publish applications inside containers. There are many benefits to using Docker: 

- **Separation of Dev and Ops**: It has previously been difficult to separate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services** (multi-tenancy): Instead of running monolithic applications, we are now seeing an increasing amount of micro-services, whereby complex applications are composed of smaller components which speak with each other. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66. You will still benefit from the many features previously only available to Ruby stacks, as well as numerous features built specifically for Docker deployments.


## Cloud 66 Docker support

Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](/legacy_docker/references/build-grid.html) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack.



### Ready?

Are you ready to [build your first Docker stack](/{{page.collection}}/concepts/stack-definition.html)?

Cloud 66 Docker includes the following:
   {% if page.collection == "maestro" %}- [Container life-cycle management](/maestro/quickstarts/getting_started.html){% else %}- [Container life-cycle management](/maestro/quickstarts/getting_started.html){% endif %}
   - [BuildGrid](/legacy_docker/references/build-grid.html)
   - [Networking layer and DNS](/{{page.collection}}/tutorials/service-network-configuration.html)
   {% if page.collection == "maestro" %}- [Storage layer](/maestro/how-to-guides/deployment/service-storage.html){% else %}- [Storage layer](/{{page.collection}}/how-to-guides/deployment/service-storage.html){% endif %}
   - [Docker scaling]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#scaling-services)
Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 
   - [Deployed and managed databases]({% if page.collection == "maestro" %}/maestro/how-to-guides/databases/database-customization.html{% else %}/{{page.collection}}/how-to-guides/databases/database-customization.html{% endif %})
   - Database [backups]({% if page.collection == "maestro" %}/maestro/how-to-guides/add-ins/database-backup.html{% else %}/{{page.collection}}/how-to-guides/add-ins/database-backups.html{%endif%}) and [replication](/rails/how-to-guides/databases/database-replication.html)
   - [Load balancing]({% if page.collection == "maestro" %}/maestro/tutorials/load-balancing.html{% else %}/{{page.collection}}/tutorials/load-balancing.html{% endif %})
   - [Firewall management and brute force protection for web and SSH]({% if page.collection == "maestro" %}/maestro/how-to-guides/deployment/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %})
   - [Team and organisations](/{{page.collection}}/references/account/team-accounts.html)
   - Fast response 100% SLA DNS layer [failover groups]({% if page.collection == "maestro" %}/maestro/tutorials/failover-groups.html{% else %}/{{page.collection}}/tutorials/failover-groups.html{% endif %}) for quick traffic switch overs
   - [Server vital sign metrics]({% if page.collection== 'skycap' %}/maestro/how-to-guides/deployment/setting-up-custom-livelogs.html{%else%}/{{page.collection}}/how-to-guides/deployment/setting-up-custom-livelogs.html{%endif%})
   - [Intuitive UI](https://app.cloud66.com/dashboard)
   - [API](http://developers.cloud66.com) and [command line](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html)

