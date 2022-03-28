## Overview

This reference doc details all the Manifest settings for **webserver**, **proxy** and **framework** components. If you're unfamiliar with Manifest files and how they work, please follow our [getting started guide](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) and {% if include.product != 'maestro' %}[detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).{% endif %}{% if include.product == 'maestro' %}[detailed how-to guide](/{{page.collection}}/how-to-guides/build-and-config/building-a-manifest-file.html).{% endif %}

If you're looking for the Manifest settings for [data, caching & storage components](/{{page.collection}}/references/manifest-database-settings.html) or [load balancers](/{{page.collection}}/references/manifest-loadbalancer-settings.html), please see our respective reference documents for those components.

### Key to table headings

* **Option** - the name of the setting as used in the YAML of your Manifest file
* **Applied on** - the type of deployment required to update this setting. In many cases settings only apply when an application is first built, or when new servers are created or it is cloned. Hover over the names of each condition to see more info.
* **Clouds** - the cloud providers on which a setting can be used.

{% if include.product == 'maestro' %}

## Docker

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="32%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
   <tr>
    <td><code>activeprotect</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The parent node for ActiveProtect settings (see <code>whitelist</code> and <code>http_ban_rate</code> below)</td>
    <td>All</td>
  </tr>
    <tr>
    <td><code>activeprotect / whitelist</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>A comma-separated whitelist of IPs that should be ignored by your ActiveProtect configuration. Must be nested under <code>activeprotect</code>.</td>
    <td>All</td>
  </tr> 
 <tr>
    <td><code>activeprotect / http_ban_rate</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Set the threshold of *requests per minute* from a single IP address. The default is <code>2000</code>. Must be nested under <code>activeprotect</code>.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>docker_version</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Specify the version of Docker you want to install.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>firewall / create_web_rules</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Cloud 66 automatically creates firewall rules to expose your web application to the outside world. You can configure this via your <a href="/{{page.collection}}/references/network-configuration.html#firewall">Traffic settings</a>, or disable it completely by setting this value to <code>false</code>. Default is <code>true</code>.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>iam_instance_profile_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">IAM instance profile</a> that should be used when provisioning this server. <a href="/{{page.collection}}/how-to-guides/clouds/cloud-aws.html#using-iam-instance-profiles-with-your-servers">Read our guide</a>.</td>
    <td>AWS</td>
  </tr>
  <tr>
    <td><code>image_keep_count</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Set the number of old images to save on your servers (besides the running image). Defaults to <code>2</code>.</td>
    <td>All</td>
  </tr>
<tr>
    <td><code>instance_service_account_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the <a href="/{{page.collection}}/how-to-guides/clouds/cloud-gce.html#using-gce-service-accounts-with-cloud-66">GCE Service Account</a> that should be used when provisioning this server.</td>
    <td>GCE</td>
  </tr>
  <tr>
    <td><code>nameservers</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Set DNS servers for your application.  Note that if you specify empty array i.e <strong>[ ]</strong>, it won't add any nameserver to your servers. Default is an empty array: <code>[ ]</code>
</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>network</code> / <code>mode</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
<td>
Specifies whether your servers should communicate over <code>private</code> or <code>public</code> IP addresses. Defaults to <code>private</code> if your servers are <em>either</em> all cloud <em>or</em> all <a href="/{{page.collection}}/how-to-guides/deployment/registered-servers.html">Registered</a>. If your application uses a <em>mix</em> of cloud and Registered servers, the default will be <code>public</code>.    
</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>operating_system</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The version of Ubuntu to install on the server that hosts your app. Accepted values: <code>ubuntu1804</code> or <code>ubuntu2004</code></td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>root_disk_size</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Default size of root disk (in GB) for servers used by application. Default value is 50.</td>
    <td>AWS, Azure, GCE</td>
  </tr>
  <tr>
    <td><code>root_disk_type</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Disk type, accepted values being <code>ssd</code> and <code>magnetic</code>. Default is <code>ssd</code>.</td>
    <td>AWS, GCE</td>
  </tr>
  <tr>
    <td><code>vn_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the Virtual Network in which you would like to create your servers.</td>
    <td>Azure</td>
  </tr>
  <tr>
    <td><code>vpc_id</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>ID of the AWS VPC in which you would like to create your servers. Note that you must provide subnet_id for all servers in your application.</td>
    <td>AWS</td>
  </tr>
  <tr>
    <td><code>weave_version</code> <br/>(Maestro V1 only)</td>
        <td><div class="tooltip">Deploy-with-upgrades &#9432;<span class="tooltiptext">Changes to this setting will only be applied if you choose the "Deploy with upgrades" option</span></div></td>
    <td>Specify the version of Weave you want to install. Maestro V1 only.</td>
    <td>All</td>
  </tr>  
</tbody>
</table>

### Examples YAML for Docker

```yml
docker:
  configuration:
    iam_instance_profile_name: docker-perms
    docker_version: 1.7.0
    weave_version: 1.0.3
    vpc_id: vpc-64872001
    root_disk_size: 100
    root_disk_type: ssd
    image_keep_count: 5
    nameservers: ['8.8.8.8', '8.8.4.4']
```

```yml
docker:
  configuration:
    docker_version: 1.12.0
    weave_version: 1.0.3
    vn_name: your_vn_name
    root_disk_size: 100
    root_disk_type: ssd
    image_keep_count: 15
```
{% endif %}


## Gateway

#### Note
<div class="notice">
<p>The gateway should be defined and open before you can use it in manifest.</p>
</div>

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="32%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>name</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Specify the name of gateway you want to use for your application.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>username</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Specify the username which should be used to connect to Bastion server.</td>
    <td>All</td>
  </tr>
</tbody>
</table>


### Example YAML for gateway


```yml
gateway:
  name: aws_bastion
  username: ec2-user
```

## Nginx

Nginx is the default webserver & reverse proxy for applications managed by Cloud 66.

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="26%">Option</th>
    <th width="15%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>cors</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Enable Cross Origin Resource Sharing</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>nginx/precompiled_url</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>A URL pointing to a file in <code>tar.gz</code> format that contains a custom version of Nginx that will be used with your application. This Nginx package <strong>MUST be compiled using our <a href="https://github.com/cloud66-oss/nginx-compiler" target="_blank">Cloud 66 compiler</a></strong>. Please read the <a href="https://github.com/cloud66-oss/nginx-compiler#readme">docs on the Github page</a> for more details.</td>
    <td>All</td>
  </tr>
{% if include.product == 'rails' %}<tr>
    <td><code>extra_build_arguments</code> (<em>deprecated</em>)</td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Extra build argument string that will be added to the <code>nginx build</code> command. If you require additional modules that themselves require specific source to be present, you should use a <code>BEFORE_NGINX</code> <a href="/{{page.collection}}/references/deploy-hooks-syntax.html#hook-points">deploy hook</a> to ensure that source is present. You can use the <code>cloud66/download</code> snippet to achieve this easily. The following build arguments are currently always added: <code>--with-http_realip_module --with-ipv6 --with-http_v2_module</code> regardless of this value.</td>
    <td>All</td>
  </tr>{% endif %}
  <tr>
    <td><code>perfect_forward_secrecy</code> (<em>deprecated</em>)</td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Enable Perfect Forward Secrecy</td>
    <td>All</td>
  </tr>
</tbody>
</table>

{% if include.product == 'maestro' %}
### Customizing Nginx in Maestro

Nginx uses the `docker` node in `manifest.yml`. See below for examples.

{% endif %}

### Example YAML for Nginx

{% if include.product == 'rails' %}
```yml
rails:
  configuration:
    nginx:
      extra_build_arguments: "--add-module=/path/to/module"
      perfect_forward_secrecy: true # deprecated
```
{% endif %}
{% if include.product == 'maestro' %}
```yml
docker:
  configuration:
    nginx:
      perfect_forward_secrecy: true # deprecated
```

{% endif %}

### CORS configuration

If required, you can also specify the allowed origin (as '\*' or a single origin) and methods. You can also specify a comma-separated list of origins, headers, and whether to allow credentials for CORS.

{% if include.product == 'rails' %}
```yml
rails:
  configuration:
    nginx:
      cors:
        origin: '*'
        methods: 'GET, OPTIONS'
        headers: 'Custom-Header, Another-Header'
        credentials: true
```
{% endif %}
{% if include.product == 'maestro' %}
```yml
docker:
  configuration:
    nginx:
      cors:
        origin: '*'
        methods: 'GET, OPTIONS'
        headers: 'Custom-Header, Another-Header'
        credentials: true
```
{% endif %}
{% if include.product == 'rails' %}

## Node version (for Rails applications)

We automatically install the latest release of Node version 16.x.x when we set up your Rack/Rails application servers. You can control which version is installed by editing the manifest file for any Rails application as follows:

```yml
rails:
  configuration:
    node_version: "18"       # will install latest release of v18.x.x
```

```yml
rails:
  configuration:
    node_version: "18.1"  # will install latest v18.1.x
```

If you need a newer version of Node, you can install one using the same method above. We support any version of Node that is supported by our [version manager](https://github.com/tj/n) (which itself supports the [Node distribution list](https://nodejs.org/dist/)).

#### Applying changes
<div class="notice notice-warning"><p>To apply changes to the Node version you need to update your manifest file, then <a href="/rails/how-to-guides/deployment/applying-upgrades.html#types">deploy-with-options</a> and select the <em>Apply Ruby/Node upgrades</em> option.</p></div>

{% endif %}

## Post-deployment availability checks

You can configure your application to automatically run [global availability checks](/{{page.collection}}/how-to-guides/security/application-health-checks.html) against an HTTP endpoint each time it is deployed. Results of these checks are available on your Cloud 66 dashboard under *ActiveProtect*. 

<div class="notice"><p>Note that all of the Health Check settings must be nested under the <code>configuration</code> &rarr; <code>activeprotect</code> &rarr; <code>health_check</code> sub-node.</p></div>

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="18%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>endpoint</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The endpoint to that will be queried during the check</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>accept</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The set of HTTP codes we will accept as valid from the endpoint (as an array)</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>timeout</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The timeout limit in seconds of the endpoint (limit: <code>10</code>)</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>max_redirects</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The number of acceptable HTTP redirects (limit: <code>10</code>)</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>cooldown</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The delay between the end of the deployment process and the start of the test, in seconds. (limit: <code>1800</code>)</td>
    <td>All</td>
  </tr>
</tbody>
</table>

### Example YAML for post-deployment global availability checks

{% if include.product == 'maestro' %}
```yaml
docker:
  configuration:
    activeprotect:
      health_check:
        endpoint: '/' # Default is root '/'
        accept: ["200", "300-399"] # Default is 200
        timeout: 2 # Default is 5
        max_redirects: 5 # Default is 3
        cooldown: 120 # Default is 0 
```
{% endif %}

{% if include.product == 'rails' %}

```yaml
rails:
  configuration:
    activeprotect:
      health_check:
        endpoint: '/' # Default is root '/'
        accept: ["200", "300-399"] # Default is 200
        timeout: 2 # Default is 5
        max_redirects: 5 # Default is 3
        cooldown: 120 # Default is 0 
```

## Rails

A Rails application type in the manifest file gives you fine control over things like the Ruby version or the server the rails application is deployed on.

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="32%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
   <tr>
    <td><code>activeprotect</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The parent node for ActiveProtect settings (see <code>whitelist</code> and <code>http_ban_rate</code> below)</td>
    <td>All</td>
  </tr>
    <tr>
    <td><code>activeprotect / whitelist</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>A comma-separated whitelist of IPs that should be ignored by your ActiveProtect configuration. Must be nested under <code>activeprotect</code>.</td>
    <td>All</td>
  </tr> 
 <tr>
    <td><code>activeprotect / http_ban_rate</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Set the threshold of *requests per minute* from a single IP address. The default is <code>2000</code>. Must be nested under <code>activeprotect</code>.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>asset_pipeline_precompile</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Specify whether to use asset pipeline compilation - this will be taken into account during redeployment. NOTE: <strong>Rails only</strong> - does not apply to other Rack servers.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>bundler / options</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Customise your <code>bundle install</code> command by specifying options. <a href="#examples-of-bundle-install-options-railsrack">See below</a> for some example options and defaults.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>do_initial_db_schema_load</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies the first time the app is built,</span></div></td>
    <td>Specify whether to perform <code>rake db:schema:load</code> on a new application build.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>firewall / create_web_rules</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Cloud 66 automatically creates firewall rules to expose your web application to the outside world. You can configure this via your <a href="/{{page.collection}}/references/network-configuration.html#firewall">Traffic settings</a>, or disable it completely by setting this value to <code>false</code>. Default is <code>true</code>.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>iam_instance_profile_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">IAM instance profile</a> that should be used when provisioning this server. <a href="/{{page.collection}}/how-to-guides/clouds/cloud-aws.html#using-iam-instance-profiles-with-your-servers">Read our guide</a>.</td>
    <td>AWS</td>
  </tr>
  <tr>
    <td><code>include_submodules</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Set this to <code>false</code> to exclude any Git submodules from being pulled during a build. Default is <code>true</code>
</td>
    <td>All</td>
  </tr>
 <tr>
    <td><code>instance_service_account_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the <a href="/{{page.collection}}/how-to-guides/clouds/cloud-gce.html#using-gce-service-accounts-with-cloud-66">GCE Service Account</a> that should be used when provisioning this server.</td>
    <td>GCE</td>
  </tr>
  <tr>
    <td><code>keep_releases</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Specify the number of releases to keep on your server(s). Default is <code>5</code>.
</td>
    <td>All</td>
  </tr>
   <tr>
    <td><code>locked_passenger_version</code></td>
    <td><div class="tooltip">Deploy-with-upgrades &#9432;<span class="tooltiptext">Changes to this setting will only be applied if you choose the "Deploy with upgrades" option</span></div></td>
    <td>Force the app to use a specific version of Passenger. This is not supported on Passenger Enterprise applications.</td>
    <td>All</td>
  </tr> 
    <tr>
    <td><code>memory_allocator</code></td>
    <td><div class="tooltip">Deploy-with-upgrades &#9432;<span class="tooltiptext">Changes to this setting will only be applied if you choose the "Deploy with upgrades" option</span></div></td>
    <td>The memory allocation library that will be used for your Ruby installation. Options are <code>malloc</code> or <code>jemalloc</code>. Defaults to <code>malloc</code>.
</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code><a id="definition-operating-system"></a>nameservers</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Set DNS servers for your application.  Note that if you specify empty array i.e <strong>[ ]</strong>, it won't add any nameserver to your servers. Default is an empty array: <code>[ ]</code>
</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>network</code> / <code>mode</code></td>
        <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
<td>
Specifies whether your servers should communicate over <code>private</code> or <code>public</code> IP addresses. Defaults to <code>private</code> if your servers are <em>either</em> all cloud <em>or</em> all <a href="/{{page.collection}}/how-to-guides/deployment/registered-servers.html">Registered</a>. If your application uses a <em>mix</em> of cloud and Registered servers, the default will be <code>public</code>.    
</td>
    <td>All</td>
  </tr>
<tr>
    <td><code>operating_system</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The version of Ubuntu to install on the server that hosts your application. Accepted values: <code>ubuntu1804</code> or <code>ubuntu2004</code></td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>passenger_process_memory</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>A value (in MB) that Cloud 66 will use for each Passenger process. This is also used to calculate the value of the <code>passenger_pool_max</code> variable in your <a href="/rails/references/nginx.html#pool-max">Nginx configuration</a> which in turn sets <code>passenger_max_pool_size</code>.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>reserved_server_memory</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values.</td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>root_disk_size</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Default size of root disk (in GB) for servers used by application. Default value is 50.</td>
    <td>AWS, Azure, GCE</td>
  </tr>
  <tr>
    <td><code>root_disk_type</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>Disk type, accepted values being <code>ssd</code> and <code>magnetic</code>. Default is <code>ssd</code>.</td>
    <td>AWS, GCE</td>
  </tr>
    <tr>
    <td><code>ruby_version</code></td>
     <td><div class="tooltip">Deploy-with-upgrades &#9432;<span class="tooltiptext">Changes to this setting will only be applied if you choose the "Deploy with upgrades" option</span></div></td>
    <td>Specify the version of Ruby to use. Also applies when you want to upgrade your Ruby version. We recommend that you use this and *remove the Ruby version declaration from your Gemfile* to avoid situations where your application will not run on every server during an upgrade.</td>
    <td>All</td>
  </tr>   
  <tr>
    <td><code>vn_name</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>The name of the Virtual Network in which you would like to create your servers.</td>
    <td>Azure</td>
  </tr>
  <tr>
    <td><code>vpc_id</code></td>
    <td><div class="tooltip">Build-only &#9432;<span class="tooltiptext">This setting only applies when the app is first built (or cloned) or when new servers are added.</span></div></td>
    <td>ID of the AWS VPC in which you would like to create your servers. Note that you must provide subnet_id for all servers in your application.</td>
    <td>AWS</td>
  </tr>
</tbody>
</table>


#### Important
<div class="notice notice-warning">
<p>In order to use a <em>vpc_id</em>, you must provide <em>subnet_id</em> for all servers used by your application.</p>
</div>

### Example YAML for Rails

```yml
rails:
  configuration:
    ruby_version: 2.7.2
    asset_pipeline_precompile: true
    bundler:
      options:
        without: ["development", "test", "custom"]
    do_initial_db_schema_load: false
    reserved_server_memory: 0 #default value
    passenger_process_memory: 200 #default value
    memory_allocator: jemalloc # malloc is default
    locked_passenger_version: 4.0.59
    activeprotect:
      whitelist: 123.123.123.123,234.234.234.234
      http_ban_rate: 2000 # Default
    vpc_id: vpc-64872001
    root_disk_size: 100
    root_disk_type: ssd
    nameservers: ['8.8.8.8', '8.8.4.4']
    iam_instance_profile_name: rails-perms
```

### Examples of Bundle Install options (Rails/Rack)

This allows you to customise your `bundle install` command by specifying options in your Manifest. We've listed some common examples below. 

#### Note
<div class="notice notice-warning"><p>This is an advanced feature for expert users of Bundler.</p></div>

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="40%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
   <tr>
    <td><code>bundler / options / without</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>An array of environments you want to exclude during bundle install e.g. <code>["development", "test", "custom"]</code> Default: <code>[]</code> if Rails env is development, or <code>["development", "mock", "test"]</code> otherwise.</td>
    <td>All</td>
  </tr>
   <tr>
    <td><code>bundler / options / deployment</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Default: <code>true</code></td>
    <td>All</td>
  </tr>
     <tr>
    <td><code>bundler / options / quiet</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Default: <code>true</code></td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>bundler / options / full-index</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Default: <code>false</code></td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>bundler / options / ...</code></td>
    <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>Any other valid <code>bundle install</code> options you want to apply</td>
    <td>All</td>
  </tr>
</tbody>
</table>

### Example YAML for Bundle Install options in Rails

```yaml
rails:
    configuration:
      bundler:
        options:
          without: ["development", "test", "custom"]
          deployment: true
          quiet: true
```

* * *

## Rack

For Rack you should use the same settings as [Rails](#rails) but the top node in your YAML **must** be `rack` (see below). Also note that `asset_pipeline_precompile` only applies to Rails servers. 

### Example YAML for Rack

```yml
rack:
  configuration:
    ruby_version: 2.7.2
    do_initial_db_schema_load: false
    reserved_server_memory: 0 #default value
    passenger_process_memory: 200 #default value
    memory_allocator: jemalloc # malloc is default
    locked_passenger_version: 4.0.59
    activeprotect:
      whitelist: 123.123.123.123,234.234.234.234
    vpc_id: vpc-64872001
    root_disk_size: 100
    root_disk_type: ssd
    nameservers: ['8.8.8.8', '8.8.4.4']
    iam_instance_profile_name: rack-perms
```

## Deployment Success Checks

These checks define tests to confirm whether your application has been successfully deployed, and to mark a deployment as "failed" if any do not pass. For more details on health checks please read our [how-to guide](/rails/how-to-guides/security/application-health-checks.html#deployment-success-checks). Health Checks have the following Manifest options:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="32%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
    <th width="10%">Clouds</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>protocol</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The protocol(s) to use when running the check(s). Acceptable values are <code>http</code> or <code>https</code>.</td>
    <td>All</td>
  </tr> 
  <tr>
    <td><code>host</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The hostname or IP address that will we called during the check.</td>
    <td>All</td>
  </tr> 
  <tr>
    <td><code>port</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The port number that must be used when submitting the request. The default is <code>80</code> if you set <code>http</code> as your protocol and <code>443</code> if you set it to <code>https</code></td>
    <td>All</td>
  </tr>
  <tr>
    <td><code>endpoint</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The URL, path or endpoint that should be checked. This can be any URL in the application.</td>
    <td>All</td>
  </tr>  
  <tr>
    <td><code>accept</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>A comma separated list of the HTTP response codes that should be considered as a "pass" of this check. All values must be enclosed in quotes.  Ranges can be defined with dashes and both the first and last port numbers must be included. For example <code>["200-201", "300-305"]</code></td>
    <td>All</td>
  </tr>  
  <tr>
    <td><code>timeout</code></td>
     <td><div class="tooltip">Redeploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The wait, in seconds, before the check will time out. The max is 120.</td>
    <td>All</td>
  </tr>  
</tbody>
</table>

### Example YAML for Rails Health Checks

{% if include.product == 'rails' %}
```yml
  rails:
    configuration:
      health:
        protocol: 'https'
        host: '127.0.0.1'
        port: 4430
        endpoint: '/'
        accept: ["200", "300-399"]
        timeout: 30
```
{% endif %}

## Sinatra

For Sinatra use [Rack](#rack)

{% endif %}

## More on Manifest files

- [Getting started guide](/{{page.collection}}/quickstarts/getting-started-with-manifest.html){% if include.product != 'maestro' %}
- [Detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html){% endif %}{% if include.product == 'maestro' %}
- [Detailed how-to guide](/maestro/how-to-guides/build-and-config/building-a-manifest-file.html){% endif %}
- [Understanding manifest files](/{{page.collection}}/references/manifest-structure.html) 
