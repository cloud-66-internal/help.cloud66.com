---
menuheaders: [ "Operating system", "Supported cloud providers", "Supported frameworks", "Component versions", "Components built via apt-packages", "Components built from source", "Warning", "Important" ]
layout: post
template: one-col
title: Technical specifications
categories: resources
lead: ""
legacy: false

permalink: /:collection/:path
---


## Operating system

Your servers are deployed with **Ubuntu 16.04 LTS**.


## Supported cloud providers

Cloud 66 currently supports the following cloud providers:

*   [Amazon Web Services](/deployment/amazon-web-services-cloud)
*   [Digital Ocean](/deployment/digitalocean-cloud)
*   [Google Compute Engine](/deployment/google-compute-engine-cloud)
*   [Linode](/deployment/linode-cloud)
*   [Microsoft Azure](/deployment/microsoft-azure-cloud)
*   [Rackspace](/deployment/rackspace-cloud)
*   [CloudA](/deployment/cloud-a-cloud)


## Supported frameworks

We support end-to-end Docker deployments, meaning that we support any type of application. You can either let us build your Docker image (with a Dockerfile), or provide your own.


## Component versions

Cloud 66 servers have two types of components with differing policies on versioning.


### Components built via apt-packages

We don't have fine-grain control over the version, and use the latest version available via the apt source.


### Components built from source

Cloud 66 maintains an internal list of versions for most components built from source, which is updated periodically after testing.

You are free to specify a version for a number of components in your [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html).



### Warning

We cannot take responsibility for issues arising from non-recognized or incompatible versions.
| Component           | Default version  |
| ------------------- |-----------------:|
| Docker      		  |			 17.06.0 |
| ElasticSearch       |   		   5.1.2 |
| GlusterFS 		  |    		   3.7.2 |
| MongoDB      		  |			  2.6.11 |
| MySQL		          |   		     5.7 |
| Phusion Passenger	  |    		   5.1.3 |
| PostGIS      		  |			     2.3 |
| PostgreSQL          |   		     9.6 |
| Redis				  |    		   3.2.7 |
| Ruby      		  |	           2.4.1 |
| Weave			      |   		   1.9.8 |

### Important

Would you like to suggest a version change? [Email us](mailto:support@cloud66.com?subject=Version update)!


