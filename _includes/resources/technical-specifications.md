
## Operating system

Your servers are deployed with **Ubuntu 20.04 LTS**.

## Supported cloud providers

Cloud 66 currently supports the following cloud providers:
* [Amazon Web Services](/{{page.collection}}/how-to-guides/clouds/cloud-aws.html){% if include.product != 'prepress' %}
* [Digital Ocean](/{{page.collection}}/how-to-guides/clouds/cloud-do.html)
* [Google Compute Engine](/{{page.collection}}/how-to-guides/clouds/cloud-gce.html)
* [Hetzner Cloud](/{{page.collection}}/how-to-guides/clouds/cloud-hetzner.html){%endif%}{% if include.product != 'maestro' and include.product != 'prepress' %}
* [Linode](/{{page.collection}}/how-to-guides/clouds/cloud-linode.html){%endif%}{% if include.product != 'prepress' %}
* [Maxihost](/{{page.collection}}/how-to-guides/clouds/cloud-maxihost.html)
* [OVHcloud](/{{page.collection}}/how-to-guides/clouds/cloud-ovh.html)
* [Microsoft Azure](/{{page.collection}}/how-to-guides/clouds/cloud-azure.html)
* [Rackspace](/{{page.collection}}/how-to-guides/clouds/cloud-rackspace.html)
* [Vultr](/{{page.collection}}/how-to-guides/clouds/cloud-vultr.html){% endif %}

## Supported platforms

Broadly, we support four types of applications:  

1. Ruby applications running on Rails (or variants like Sinatra)
2. Javascript applications running on NodeJS
3. Prebuilt or "static" websites built in Jekyll, Hugo or Gatsby
4. Docker applications running on Kubernetes clusters

The first two platforms are best suited to traditional "monolithic" application types where all of the components run on a common framework. 

The third platform is specifically designed to build and host [Jamstack](https://jamstack.org/what-is-jamstack/)-style preprocessed application on object storage services.

The fourth platform is best suited to containerized applications with a strong service orientation. Since Docker effectively supports virtually every programming language and framework, it is possible to use it to host any type of application. We support end-to-end Docker deployments. You can either let us build your Docker image (with a Dockerfile), or provide your own.

{% if include.product != 'prepress' %}
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

<tr><td>CAdvisor</td><td>0.0.3</td></tr>
<tr><td>Docker</td><td>18.09.9-ce (as per Kubernetes guidelines)</td></tr>
<tr><td>ElasticSearch</td><td>7.1.0</td></tr>
<tr><td>GlusterFS</td><td>8.5</td></tr>
<tr><td>Gotty</td><td>1.0.0</td></tr>
<tr><td>Kubernetes</td><td>1.21.4</td></tr>
<tr><td>MongoDB</td><td>4.4.x</td></tr>
<tr><td>MySQL</td><td>8.0</td></tr>
<tr><td>Nginx</td><td>We deploy a custom release of Nginx. <a href="#nginx-release">See below</a> for details.</td></tr>
<tr><td>Phusion Passenger</td><td>6.0.5</td></tr>
<tr><td>Passenger Enterprise</td><td>6.0.5</td></tr>
<tr><td>PostGIS</td><td>3.1</td></tr>
<tr><td>PostgreSQL</td><td>13</td></tr>
<tr><td>Rails*</td><td>All versions from 2.6.3 and up</td></tr>
<tr><td>Redis</td><td>6.2.3</td></tr>
<tr><td>Ruby</td><td>3.0.1</td></tr>
<tr><td>Scaleio</td><td>2.0.7120</td></tr>
<tr><td>Stack</td><td>1.4.6</td></tr>
<tr><td>Weave</td><td>1.9.8</td></tr>
<tr><td>White Rabbit (client)</td><td>0.1.5</td></tr>
</table>

\* We **don't** install a default version of Rails - the version installed is based on the requirements of your application. Versions earlier than 2.6.3 *may* work but have some compatibility issues with Ubuntu 18.04 and 20.04.

#### Warning
<div class="notice notice-danger"><p>If you're using different (non-default) versions of components, we strongly recommend testing your application thoroughly in a non-production environment before deploying.</p></div>

### Nginx release

Cloud 66 maintains our own self-contained release of Nginx which includes all of the modules listed below. For more info please read the [Releases page on our Github project](https://github.com/cloud66-oss/nginx-compiler/releases). 

### Nginx modules

We install the Nginx modules listed below by default. These are used to provide additional features and functions to applications managed by Cloud 66. You can see the latest versions of all of these modules on the [Releases page](https://github.com/cloud66-oss/nginx-compiler/releases) of our Nginx project on Github.

<table class='table table-bordered table-striped'>
    <thead>
      <tr>
        <th width="25%">Module</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td><a href="https://github.com/FRiCKLE/ngx_cache_purge">Cache Purge</a></td>
         <td>Adds ability to purge content from FastCGI, proxy, and uWSGI caches</td>
      </tr>
      <tr>
         <td><a href="https://github.com/vision5/ngx_devel_kit">Devel kit</a></td>
         <td>Nginx Development Kit (NDK)</td>
      </tr>
      <tr>
         <td><a href="https://github.com/openresty/echo-nginx-module">Echo</a></td>
         <td>ngx_echo - Brings "echo", "sleep", "time", "exec" and more shell-style goodies to Nginx config file</td>
      </tr>
      <tr>
         <td><a href="https://github.com/aperezdc/ngx-fancyindex">Fancy Index</a></td>
         <td>Like the built-in autoindex module, but fancier</td>
      </tr>
      <tr>
         <td><a href="https://github.com/openresty/headers-more-nginx-module">Headers More</a></td>
         <td>Set and clear input and output headers more than just "add!"</td>
      </tr>
      <tr>
         <td><a href="https://github.com/leev/ngx_http_geoip2_module">GeoIp2</a></td>
         <td>ngx_http_geoip2_module - creates variables with values from the maxmind geoip2 databases based on the client IP (default) or from a specific variable (supports both IPv4 and IPv6)</td>
      </tr>
      <tr>
         <td><a href="https://github.com/yaoweibin/ngx_http_substitutions_filter_module">HTTP Substitutions</a></td>
         <td>nginx_substitutions_filter is a filter module which can do both regular expression and fixed string substitutions on response bodies</td>
      </tr>
      <tr>
         <td><a href="https://github.com/openresty/lua-nginx-module">Lua</a></td>
         <td>Embed the power of Lua into Nginx HTTP Servers</td>
      </tr>
      <tr>
         <td><a href="https://github.com/spiderlabs/modsecurity/">ModSecurity</a></td>
         <td>Web application firewall</td>
      </tr>
      <tr>
        <td><a href="https://github.com/matsumotory/ngx_mruby">mruby</a></td>
        <td>Embedded mruby script language for nginx-module</td>
     </tr>
      <tr>
         <td><a href="https://github.com/slact/nchan">Nchan</a></td>
         <td>Pubsub server for Websockets, Long-Poll, EventSource etc.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/sto/ngx_http_auth_pam_module">PAM Authentication</a></td>
        <td>HTTP Basic Authentication using PAM</td>
     </tr>
      <tr>
         <td><a href="https://github.com/arut/nginx-rtmp-module">RTMP</a></td>
        <td>RTMP protocol support. Live streaming and video on demand</td>
      </tr>
      <tr>
         <td><a href="https://github.com/masterzen/nginx-upload-progress-module">Upload Progress</a></td>
         <td>nginx_upload_progress_module is an implementation of an upload progress system, that monitors RFC1867 POST upload as they are transmitted to upstream servers</td>
      </tr>
      <tr>
         <td><a href="https://github.com/gnosek/nginx-upstream-fair">Upstream Fair Balancer</a></td>
         <td>Distributes incoming requests to least-busy servers</td>
      </tr>
      <tr>
        <td><a href="https://github.com/arut/nginx-dav-ext-module">WebDAV</a></td>
        <td>nginx WebDAV PROPFIND, OPTIONS, LOCK, UNLOCK support</td>
     </tr>
    </tbody>
    </table>

### Suggest version changes

Would you like to suggest a version change? [Email us](mailto:support@cloud66.com?subject=Version update)!
{% endif %}