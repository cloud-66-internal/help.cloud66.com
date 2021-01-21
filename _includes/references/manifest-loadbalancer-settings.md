## Overview

This reference doc details all the Manifest settings for **load balancers** . If you're unfamiliar with Manifest files and how they work, please follow our [getting started guide](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) and [detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html). 

If you're looking for the Manifest settings for [webservers & frameworks](/{{page.collection}}/references/manifest-web-settings.html) or [data, caching & storage components](/{{page.collection}}/references/manifest-loadbalancer-settings.html), please see our respective reference documents for those components.

### Key to table headings

* **Option** - the name of the setting as used in the YAML of your Manifest file
* **Applied on** - the type of deployment required to update this settings. In many cases settings only apply when an application (and associated load balancer) is first built, or when it is cloned. Hover over the names of each condition to see more info.

## AWS load balancer

You can use your Manifest file to customize the AWS load balancer deployed by Cloud 66.

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>alb_ssl_policy</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The SSL policy to associate with your ALB when performing SSL termination. See the official AWS docs for <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">available ALB SSL policies.</a> (Applies only to Application Load Balancers)</td>
  </tr>
  <tr>
    <td><code>elb_ssl_policy</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The SSL policy to associate with your ELB when performing SSL termination. See the official AWS docs for <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-policy-table.html">available ELB SSL policies</a>. (Applies only to Classic Load Balancers)</td>
  </tr>
  <tr>
    <td><code>httpchk</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The URL visited to check your server health</td>
  </tr>
  <tr>
    <td><code>wait_after_adding_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
  <tr>
    <td><code>wait_after_removing_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>  
</tbody>
</table>

### Example YAML for AWS load balancers

```yml
load_balancer:
  configuration:
    httpchk: /
    wait_after_adding_servers: 30 # default is 0
    wait_after_removing_servers: 10 # default is 0         
    alb_ssl_policy: ELBSecurityPolicy-FS-1-2-2019-08 # default
    elb_ssl_policy: ELBSecurityPolicy-TLS-1-2-2017-01 # default  
```
---

## GCE load balancer

You can use your Manifest file to customize any GCE load balancers deployed by Cloud 66.

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>balance</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The load balancing strategy. Valid values: <code>NONE</code>, <code>CLIENT_IP</code> or <code>CLIENT_IP_PROTO</code></td>
  </tr>
  <tr>
    <td><code>httpchk</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The URL visited to check your server health</td>
  </tr>
  <tr>
    <td><code>wait_after_adding_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
  <tr>
    <td><code>wait_after_removing_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
</tbody>
</table>

Refer to the [GCE documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) for more detail on these settings.

### Example YAML for GCE load balancers

```yml
load_balancer:
  configuration:
    httpchk: /
    balance: CLIENT_IP_PROTO
    wait_after_adding_servers: 30 # default is 0
    wait_after_removing_servers: 10 # default is 0
```
---

## HAProxy

You can use your Manifest file to configure and define any HAProxy load balancers deployed by Cloud 66. These changes will be either be applied when you redeploy an application with more than one server, rebuild HAProxy or edit [HAProxy CustomConfig](/{{page.collection}}/how-to-guides/security/multi-cert_haproxy.html). 

Because HAProxy load balancers are not "cloud native", you will need to specify the **server configuration** in the same YAML node as your HAproxy settings. The server configuration settings are :

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Server options</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td><code>key_name</code></td>
  <td><div class="tooltip">Build only &#9432;<span class="tooltiptext">This setting only applies when the app is first built or cloned.</span></div></td>
  <td>Default</td>
  </tr>
  <tr>
  <td><code>region</code></td>
  <td><div class="tooltip">Build only &#9432;<span class="tooltiptext">This setting only applies when the app is first built or cloned.</span></div></td>
  <td>Digital Ocean’s region</td>
  </tr>
  <tr>
  <td><code>size</code></td>
  <td><div class="tooltip">Build only &#9432;<span class="tooltiptext">This setting only applies when the app is first built or cloned.</span></div></td>
  <td>The size of the instance</td>
  </tr>
  <tr>
  <td><code>unique_name</code></td>
  <td><div class="tooltip">Build only &#9432;<span class="tooltiptext">This setting only applies when the app is first built or cloned.</span></div></td>
  <td>Name of the instance</td>
 </tr>
</tbody>
</table>

The following **HAproxy settings** are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>balance</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The load balancing strategy. Valid values: <code>roundrobin</code>, <code>leastconn</code> or <code>source</code></td>
  </tr>
  <tr>
    <td><code>errorfile_*ERROR_CODE*</code></td>
    <td><div class="tooltip">Build only &#9432;<span class="tooltiptext">This setting only applies when the app is first built or cloned.</span></div></td>
    <td>Location of your own custom error page(s) to serve in the case of receiving a HTTP error code on the load balancer. You can configure one page per error code.</td>
  </tr>
  <tr>
    <td><code>httpchk</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The URL visited to check your server health</td>
  </tr>
  <tr>
    <td><code>wait_after_adding_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
  <tr>
    <td><code>wait_after_removing_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
</tbody>
</table>

Refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt) for more information


### Example YAML for HAproxy load balancers

```yml
load_balancer:
  servers:
  - server:
    unique_name: bananana
    size: 1gb
    region: ams2
    vendor: digitalocean
    key_name: Default
  configuration:
    httpchk: HEAD / HTTP/1.1\\r\\nHost:haproxy  #default value
    balance: roundrobin #default value
    errorfile_400: /etc/haproxy/errors/400.http
    errorfile_403: /etc/haproxy/errors/403.http
    errorfile_500: /etc/haproxy/errors/500.http
    errorfile_504: /etc/haproxy/errors/504.https
    wait_after_adding_servers: 30 # default is 0
    wait_after_removing_servers: 10 # default is 0
```
---

## Linode Nodebalancer

You can use a manifest file to configure Linode Nodebalancers deployed by Cloud 66.

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>balance</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The load balancing strategy. Valid values: <code>roundrobin</code>, <code>leastconn</code> or <code>source</code></td>
  </tr>
  <tr>
    <td><code>httpchk</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The URL visited to check your server health</td>
  </tr>
  <tr>
    <td><code>wait_after_adding_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
  <tr>
    <td><code>wait_after_removing_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
</tbody>
</table>

Refer to the [Linode documentation](https://www.linode.com/docs/platform/nodebalancer/nodebalancer-reference-guide) for more detail on these settings.

### Example YAML for Linode Nodebalancer

```yml
load_balancer:
  configuration:
    httpchk: /
    balance: leastconn
    wait_after_adding_servers: 30 # default is 0
    wait_after_removing_servers: 10 # default is 0
```
---

## Rackspace load balancer

Use a manifest file to customize the Rackspace load balancer deployed by Cloud 66.

The following settings are available via the Manifest file:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="34%">Option</th>
    <th width="16%">Applied on</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>balance</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The load balancing strategy. Valid values: <code>ROUND_ROBIN</code>, <code>RANDOM</code> or <code>LEAST_CONNECTIONS</code></td>
  </tr>
  <tr>
    <td><code>wait_after_adding_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
  <tr>
    <td><code>wait_after_removing_servers</code></td>
    <td><div class="tooltip">Deploy &#9432;<span class="tooltiptext">Changes to this setting will be applied when you next deploy your application</span></div></td>
    <td>The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our <a href="/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag">in-depth guide on configuration lag</a> for more details.</td>
  </tr>
</tbody>
</table>

Refer to the [Rackspace documentation](http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Algorithms-d1e4367.html) for more detail on these settings.

### Example YAML for Rackspace load balancer

```yml
load_balancer:
  configuration:
    balance: LEAST_CONNECTIONS
    wait_after_adding_servers: 30 # default is 0
    wait_after_removing_servers: 10 # default is 0
```

## More on Manifest files

- [Getting started guide](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) 
- [Detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html)
- [Understanding manifest files](/{{page.collection}}/references/manifest-structure.html) 