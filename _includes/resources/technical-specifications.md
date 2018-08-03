
## Operating system

Your servers are deployed with **Ubuntu 16.04 LTS**.


{% if include.product != 'skycap' %}
## Supported cloud providers

Cloud 66 currently supports the following cloud providers:
*   [Amazon Web Services](/{{page.collection}}/references/clouds/cloud-aws.html)
*   [Digital Ocean](/{{page.collection}}/references/clouds/cloud-do.html)
*   [Google Compute Engine](/{{page.collection}}/references/clouds/cloud-gce.html)
*   [Linode](/{{page.collection}}/references/clouds/cloud-linode.html)
*   [Microsoft Azure](/{{page.collection}}/references/clouds/cloud-azure.html)
*   [Rackspace](/{{page.collection}}/references/clouds/cloud-rackspace.html)
*   [CloudA](/{{page.collection}}/references/clouds/cloud-clouda.html)
{% endif %}

## Supported frameworks

We support end-to-end Docker deployments, meaning that we support any type of application. You can either let us build your Docker image (with a Dockerfile), or provide your own.


## Component versions

Cloud 66 servers have two types of components with differing policies on versioning.


### Components built via apt-packages

We don't have fine-grain control over the version, and use the latest version available via the apt source.


### Components built from source

Cloud 66 maintains an internal list of versions for most components built from source, which is updated periodically after testing.

You are free to specify a version for a number of components in your [manifest file](/{{page.collection}}/tutorials/getting-started-with-manifest.html).



### Warning

<div class="notice notice-danger"><p>We cannot take responsibility for issues arising from non-recognized or incompatible versions.</p></div>


<table class='table table-bordered table-striped'>
<thead>
<th>Component</th>
<th>Default version</th></thead>
<tr><td>Docker</td><td>17.12.0-ce</td></tr>
<tr><td>ElasticSearch</td><td>5.1.2</td></tr>
<tr><td>GlusterFS</td><td>3.7.2</td></tr>
<tr><td>MongoDB</td><td>2.6.11</td></tr>
<tr><td>MySQL</td><td>5.7</td></tr>
<tr><td>Phusion Passenger</td><td>5.2.1</td></tr>
<tr><td>PostGIS</td><td>2.4</td></tr>
<tr><td>PostgreSQL</td><td>10</td></tr>
<tr><td>Redis</td><td>4.0.8</td></tr>
<tr><td>Ruby</td><td>2.5.0</td></tr>
<tr><td>Weave</td><td>1.9.8</td></tr>
</table>

### Important

Would you like to suggest a version change? [Email us](mailto:support@cloud66.com?subject=Version update)!


