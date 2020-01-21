## What is Cloud 66 for Rails?

Cloud 66 for Rails is a DevOps-automation service that allows you to easily build, deploy and maintain your Rack-based applications, and their supporting components, on any cloud or server. 

Cloud 66 for Rails allows you to centralize the provisioning and management of:

* Rack-based applications (and app servers)
* Databases 
* Load Balancers
* Caches 
* Message queues
* File storage
* Firewalls
* SSL certificates
* Monitoring and logging

...as well as all of the configuration files, settings and environment variables on which these components rely.

### How does this differ from other PaaS providers?

Unlike traditional PaaS offerings like Heroku or Google App Engine, Cloud 66 for Rails allows you to use your own servers - whether in the cloud, in a data center or even on your own premises. We support both public and private clouds, as well as hybrids and bare metal installations.

Cloud 66 for Rails is primarily developer-focused. It automates and standardizes the important but repetitive (and error-prone) tasks involved in configuring and deploying code to infrastructure. The platform is designed to work for both small teams without dedicated DevOps resources, and larger organizations with separate DevOps teams.

## How we define "application"

For the purposes of this documentation an application is the complete set of software, configuration and hardware components needed for your software to run. This includes all of the [components](#what-is-cloud-66-for-rails) described above.

## "Application" vs "Stack"

In previous versions of this documentation we used the concept of a "stack" to describe much the same concept as we now describe using "application". The two concepts are related but not identical.

In particular "stack" tends to focus more on the underlying infrastructure and the components running on that substrate, whereas "application" is more abstracted from the underlying infrastructure.

However, when reading any documentation or our forums, it will often be helpful to think of "stack" and "application" as effectively synonymous.

In a general sense, both these terms encapsulate the same thing: an interconnected collection of components, configurations and services that are presented to the world as a single, coherent piece of software.

## Application components

You have a great degree of freedom when choosing the different components of your application.

### Load balancer (optional)

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your application.

The type of  [load balancer deployed in your application](/{{page.collection}}/tutorials/load-balancing.html) is dependent on your cloud provider.


### Web servers

By default, your applications are served with Nginx{% if include.product == 'rails' %}, and you are also free to customize this selection for Rack-based applications{%endif%}. You can [scale your web server](/{{page.collection}}/how-to-guides/scaling/scaling.html) with the click of a button.


### Background workers (optional)

To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes. {% if include.product == 'rails' %}Cloud 66 makes it easy for you to control and monitor these processes, as well as [scale them](/{{page.collection}}/how-to-guides/deployment/proc-files.html) at the click of a button.{%endif%}


### Database servers (optional)

You can choose between any of four supported databases:

- MySQL
- PostgreSQL
- MongoDB
- Redis

Cloud 66 makes it easy for you to [backup your database]({% if page.collection == "maestro" %}/maestro/how-to-guides/add-ins/database-backup.html{% else %}/{{page.collection}}/how-to-guides/add-ins/database-backups.html{% endif %}){% if page.collection == "rails" %}, [verify the backup](/rails/how-to-guides/databases/backup-verifiers.html) {% endif %} and [replicate your databases](/rails/how-to-guides/databases/database-replication.html).


### Operating system

Your servers will be deployed with **Ubuntu 16.04 LTS**. On the operating system level, you can [monitor disk, CPU and memory](/{{page.collection}}/resources/technical-specifications.html) from the dashboard.


### Cloud vendor

You can either [deploy to your preferred cloud provider](/{{page.collection}}/resources/technical-specifications.html#supported-cloud-providers) or [deploy to your own server](/{{page.collection}}/how-to-guides/deployment/registered-servers.html).

* * *


## Application environments

To reflect the different stages of your software, you can deploy your application in different environments:

* **Development**: Use this when you're developing your application
* **Production**: For live applications
* **QA**: Used for quality assurance
* **Staging**: Mirrors the production environment but is only used for testing

In addition to these environments, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. Once the new environment is added, you will be able to see it in the list of supported environments when creating a new application. Custom environments don't influence anything on the application. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` (for Rack-based applications) having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` that contains settings for each environment.

There is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

* * *


## What is StackScore?

StackScore&trade; is a score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers. It consists of five key metrics that are graded from **A** to **F**, and the overall StackScore is the lowest of the scores across these five metrics.

- **Code:** Ensures your code does not have security issues by checking for known vulnerabilities.
- **Backups and data integrity:** This tracks whether or not you are backing up your databases (with managed and/or unmanaged backups), and whether or not you verify your backups.
- **Connectivity:** Checks whether or not you are sharing your front-end and back-end on the same server. This is affected by how much memory you have on your servers, among other factors.
- **Performance:** Checks if you have a load balancer, as well as different server configuration metrics.
- **Security:** Tracks your firewall settings for potential security issues.



### Suggestion

Always try to keep your stacks at an **A** StackScore&trade; level to ensure application health.

Cloud 66 constantly seeks to update and improve the StackScore algorithm to consider new data points as well as external conditions, which means that your StackScore will change over time.

