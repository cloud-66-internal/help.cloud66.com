---
layout: post
template: one-col
title: Deploy to your cloud
categories: Deployment
lead: ""
legacy: true
permalink: /:collection/:path
---


## About deploying to the cloud

By providing Cloud 66 with your unique cloud provider API keys, Cloud 66 can connect to your cloud and build your full stack. Once your stack is deployed, you still have full root access and control over your servers. The servers are, and will always be yours.


## Cloud providers

Cloud 66 currently supports the following cloud providers:

*   [Amazon Web Services](cloud-aws.html)
*   [Digital Ocean](cloud-do.html)
*   [Google Compute Engine](cloud-gce.html)
*   [Linode](cloud-linode.html)
*   [Microsoft Azure](cloud-azure.html)
*   [Packet](cloud-packet.html)
*   [Rackspace](cloud-rackspace.html)
*   [CloudA](cloud-clouda.html)

### Notice

Should you wish to delete your stack on Cloud 66, your servers **will not** be deleted on your cloud provider unless [physical server deletion](https://help.cloud66.works/{{ include.product }}/stack-management/server-deletion.html) is turned on.

If you don't want to use a cloud provider with Cloud 66, you can [deploy to your own server](https://help.cloud66.works/{{ include.product }}/deployment/registered-servers.html).

## Deploy to your cloud

To deploy to your cloud, visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked for your cloud API keys. Refer to the links above for more information about retrieving the keys from your cloud provider.


## Edit or delete cloud keys

You can edit or delete your cloud keys on your _Account_ page, through the _Settings_ -> _Your Keys_ menu. You can't delete cloud keys for a cloud that is currently used by a stack.

