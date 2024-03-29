
## What is Cloud 66?

Cloud 66 is a service that automates and streamlines the building, deployment and lifecycle management of web applications. The service supports three types of applications:

* Containerized applications (Docker running on Kubernetes)
* Native Ruby and Node applications (non-containerized)
* Prebuilt (pre-rendered) sites (based on the Jamstack architecture)

Cloud 66 builds the infrastructural components needed to run your application, deploys your application to those components and manages them for you. You can use it to deploy your app to the cloud or your own infrastructure.

* * *

## Where is Cloud 66 hosted?

Cloud 66 is hosted in the cloud and is available as a service. You don't need to install, deploy or configure anything to use it.

* * *


## How can I use Cloud 66?

[Sign up](https://app.cloud66.com/users/sign_up) for an account and start by building your first application. Specify a Git repository containing your application code, or provide a Docker image. A few seconds later you can configure your deployment and point your application to the infrastructure on which you would like it run.

* * *

{% if include.product != 'prepress' %}
## Can I use Cloud 66 with my own servers?

Yes! Cloud 66 configures and deploys your code to your servers in the cloud or to your own dedicated servers.

* * *


## Why do you need my server SSH key?

Cloud 66 uses remote SSH keys to set up an SSH tunnel to your server and execute remote bash scripts. For additional security we only use remote SSH keys to connect to your server, never username and password access.

* * *

{% endif %}

{% unless include.product != 'skycap' or include.product != 'prepress'  %}
## Are their any requirements for the user on my servers?

Yes. As Cloud 66 will be provisioning services on your servers from scratch, the server must meet a number of requirements outlined in the [Registered servers](/{{page.collection}}/how-to-guides/deployment/registered-servers.html) documentation.

* * *

{% endunless %}

{% if include.product != 'prepress' %}
## Can I deploy multiple apps on a single server?

Yes - you can have any number of applications running on a single server at any point in time. (Of course this is naturally limited by the amount of load that server can support.)

* * *

{% endif %}

## How can I change my Git repository?

You can change your Git repository through the user interface {% if include.product != 'prepress' %}or by using [Cloud 66 Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html){% endif %}.

* * *

## Which Clouds are supported?

{% if include.product != 'prepress' %}
Currently we support Amazon Web Services, Digital Ocean, Google Compute Engine, Linode, Microsoft Azure, and Rackspace clouds.
{% endif %}

{% if include.product == 'prepress' %}
Currently Prepress supports AWS (S3), Google Compute Engine, DigitalOcean Spaces, Microsoft Azure, and Linode.
{% endif %}
* * *


{% if include.product != 'prepress' %}
## Which distributions of Linux are supported?

We currently support Ubuntu versions 18.04 and 20.04.

* * *

{% endif %}

## How much does it cost?

Please see our [main site](https://www.cloud66.com/) for more information.


* * *

{% if include.product != 'prepress' %}
## Who pays for the servers?

You do. Cloud 66 helps you with configuring and deploying your application to the servers. It can help take care of your load balancing, monitoring, backups and so on.
{% endif %}
{% if include.product == 'prepress' %}
## Who pays for the cloud storage?

You do. Cloud 66 helps you with configuring and deploying your application to your cloud provider.
{% endif %}

