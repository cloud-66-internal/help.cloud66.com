
## Operating system

Your servers are deployed with **Ubuntu 18.04 LTS**.

## Supported cloud providers

Cloud 66 currently supports the following cloud providers:
* [Amazon Web Services](/{{page.collection}}/how-to-guides/clouds/cloud-aws.html)
* [Digital Ocean](/{{page.collection}}/how-to-guides/clouds/cloud-do.html)
* [Google Compute Engine](/{{page.collection}}/how-to-guides/clouds/cloud-gce.html)
* [Hetzner Cloud](/{{page.collection}}/how-to-guides/clouds/cloud-hetzner.html){% if include.product != 'maestro' %}
* [Linode](/{{page.collection}}/how-to-guides/clouds/cloud-linode.html){%endif%}
* [OVHcloud](/{{page.collection}}/how-to-guides/clouds/cloud-ovh.html)
* [Microsoft Azure](/{{page.collection}}/how-to-guides/clouds/cloud-azure.html)
* [Rackspace](/{{page.collection}}/how-to-guides/clouds/cloud-rackspace.html)
* [Vultr](/{{page.collection}}/how-to-guides/clouds/cloud-vultr.html)

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

<tr><td>BX</td><td>0.0.25</td></tr>
<tr><td>CAdvisor</td><td>0.0.3</td></tr>
<tr><td>Delphi</td><td>2.0.4</td></tr>
<tr><td>Docker</td><td>18.09.9-ce (as per Kubernetes guidelines)</td></tr>
<tr><td>ElasticSearch</td><td>7.1.0</td></tr>
<tr><td>GlusterFS</td><td>3.12.6</td></tr>
<tr><td>Gotty</td><td>1.0.0</td></tr>
<tr><td>Kubernetes</td><td>1.18.8</td></tr>
<tr><td>MongoDB</td><td>2.6.11</td></tr>
<tr><td>MySQL</td><td>8.0</td></tr>
<tr><td>Phusion Passenger</td><td>6.0.5</td></tr>
<tr><td>Passenger Enterprise</td><td>6.0.5</td></tr>
<tr><td>PostGIS</td><td>2.5</td></tr>
<tr><td>PostgreSQL</td><td>11</td></tr>
<tr><td>Rails*</td><td>All versions from 2.6.3 and up</td></tr>
<tr><td>Redis</td><td>6.2.3</td></tr>
<tr><td>Ruby</td><td>2.6.3</td></tr>
<tr><td>Scaleio</td><td>2.0.7120</td></tr>
<tr><td>Stack</td><td>1.4.6</td></tr>
<tr><td>Telegraf</td><td>0.10.4</td></tr>
<tr><td>Teleport</td><td>4.0.6</td></tr>
<tr><td>Weave</td><td>1.9.8</td></tr>
<tr><td>White Rabbit (client)</td><td>0.1.5</td></tr>
</table>

\* We **don't** install a default version of Rails - the version installed is based on the requirements of your application. Versions earlier than 2.6.3 *may* work but have some compatibility issues with Ubuntu 16.04 and 18.04.


#### Warning
<div class="notice notice-danger"><p>If you're using different (non-default) versions of components, we strongly recommend testing your application thoroughly in a non-production environment before deploying.</p></div>

### Suggest version changes

Would you like to suggest a version change? [Email us](mailto:support@cloud66.com?subject=Version update)!


