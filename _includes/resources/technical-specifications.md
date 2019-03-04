
## Operating system

Your servers are deployed with **Ubuntu 16.04 LTS**.

## Supported cloud providers

Cloud 66 currently supports the following cloud providers:
*   [Amazon Web Services](/{{page.collection}}/how-to-guides/clouds/cloud-aws.html)
*   [Digital Ocean](/{{page.collection}}/how-to-guides/clouds/cloud-do.html)
*   [Google Compute Engine](/{{page.collection}}/how-to-guides/clouds/cloud-gce.html)
*   [Linode](/{{page.collection}}/how-to-guides/clouds/cloud-linode.html)
*   [Microsoft Azure](/{{page.collection}}/how-to-guides/clouds/cloud-azure.html)
*   [Rackspace](/{{page.collection}}/how-to-guides/clouds/cloud-rackspace.html)
*   [CloudA](/{{page.collection}}/how-to-guides/clouds/cloud-clouda.html)


## Supported platforms

Broadly, we support three types of applications:  

1. Ruby applications running on Rails (or variants like Sinatra)
2. Javascript applications running on NodeJS
3. Docker applications running on Kubernetes clusters

The first two platforms are best suited to traditional "monolithic" application types where all of the components run on a common framework. 

The third platform is best suited to containerized applications with a strong service orientation. Since Docker effectively supports virtually every programming language and framework, it is possible to use it to host any type of application. 

We support end-to-end Docker deployments. You can either let us build your Docker image (with a Dockerfile), or provide your own.

## Component versions

Cloud 66 servers have two types of components with differing policies on versioning.

### 1. Components built via apt-packages

We default the latest stable major version available from the maintainers of that package.

### 2. Components built from source

Cloud 66 maintains an internal list of versions for most components built from source, which is updated periodically after testing.

You are free to specify a version for a number of components in your [manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html).

<table class='table table-bordered table-striped'>
<thead>
<th width="30%">Component</th>
<th>Default version</th></thead>
<tr><td>Docker</td><td>17.12.0-ce (as per Kubernetes guidelines)</td></tr>
<tr><td>ElasticSearch</td><td>5.1.2</td></tr>
<tr><td>GlusterFS</td><td>3.7.2</td></tr>
<tr><td>MongoDB</td><td>2.6.11</td></tr>
<tr><td>MySQL</td><td>5.7</td></tr>
<tr><td>Phusion Passenger</td><td>5.3.7</td></tr>
<tr><td>PostGIS</td><td>2.4</td></tr>
<tr><td>PostgreSQL</td><td>10</td></tr>
<tr><td>Redis</td><td>4.0.12</td></tr>
<tr><td>Ruby</td><td>2.5.3</td></tr>
<tr><td>Weave</td><td>1.9.8</td></tr>
</table>


#### Warning
<div class="notice notice-danger"><p>We cannot take responsibility for issues arising from non-recognized or incompatible versions.</p></div>

### Suggest version changes

Would you like to suggest a version change? [Email us](mailto:support@cloud66.com?subject=Version update)!


