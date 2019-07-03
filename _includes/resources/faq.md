
## What is Cloud 66?

Cloud 66 is a service that automates and streamlines the building, deployment and lifecycle management of web applications. The service supports two types of applications:

* Containerized applications (Docker running on Kubernetes)
* Native Ruby and Node applications (non-containerized)

Cloud 66 builds the servers needed to run your application, deploys your application to your servers and manages them for you. You can use it to deploy your app to the cloud or your own servers.

* * *


## Where is it hosted?

Cloud 66 is hosted in the cloud and is available as a service. You don't need to install, deploy or configure anything on your servers to use it.

* * *


## How can I use Cloud 66?

[Sign up](http://app.cloud66.com/users/sign_up) for an account and start by building your first application. Specify a Git repository containing your application code, or provide a Docker image. A few seconds later you can configure your deployment and point your application to the servers on which you would like it run.

* * *


## Can I use Cloud 66 with my own servers?

Yes! Cloud 66 configures and deploys your code to your servers in the cloud or to your own dedicated servers.

* * *


## Why do you need my server SSH key?

Cloud 66 uses remote SSH keys to set up an SSH tunnel to your server and execute remote bash scripts. For additional security we only use remote SSH keys to connect to your server, never username and password access.

* * *

{% if page.collection == "maestro" or page.collection == "skycap" %}

## Are their any requirements for the user on my servers?

Yes. As Cloud 66 will be provisioning services on your servers from scratch, the server must meet a number of requirements outlined in the [Registered servers](/maestro/how-to-guides/deployment/registered-servers.html) documentation.

{%else%}

## Are their any requirements for the user on my servers?

Yes. As Cloud 66 will be provisioning services on your servers from scratch, the server must meet a number of requirements outlined in the [Registered servers](/{{page.collection}}/how-to-guides/deployment/registered-servers.html) documentation.

{%endif%}

* * *


## Can I deploy multiple apps on a single server?

Yes - you can have any number of applications running on a single server at any point in time. (Of course this is naturally limited by the amount of load that server can support.)

* * *


## How can I change my Git repository?

You can change your Git repository through the user interface or by using [Cloud 66 Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html).

* * *


## Which Clouds are supported?

Currently we support Amazon Web Services, Digital Ocean, Google Compute Engine, Linode, Microsoft Azure, Rackspace, and CloudA clouds.

* * *


## Which distributions of Linux are supported?

We currently support Ubuntu versions 16.04 and 18.04.

* * *


## How much does it cost?

Please see our [pricing page](http://www.cloud66.com/pricing) for more information.

* * *


## Who pays for the servers?

You do. Cloud 66 helps you with configuring and deploying your application to the servers. It can help take care of your load balancing, monitoring, backups and so on.

