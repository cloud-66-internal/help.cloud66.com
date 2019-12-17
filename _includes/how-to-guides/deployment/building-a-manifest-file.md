## Overview

A manifest file allows you to be more explicit about your application composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. 

The file describes the setup of the components that run your application. See [Getting started with manifest files](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) for an introduction.

{% if include.product == 'rails' %}

For _Rails/Rack_ applications, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.

{% endif %}

{% if include.product == 'maestro' %}

In Maestro there are two opportunities to edit your manifest file:

* After your application code has been analyzed (and before you deploy it) by using the _advanced_ tab. 
* After your application has been deployed, by clicking on *Configuration Files* and then the *Manifest* tab in the Dashboard

#### Important
<div class="notice notice-warning"><p>It is vital that you understand the limits and caveats of manifest settings. Please read our <a href="/maestro/references/manifest-structure.html#classes-of-manifest-file-settings">reference guide</a> before you start creating your own manifest files.</p></div>

{% endif %}

Once you're ready, start by going through each section below to build your manifest file.

#### Problems upgrading?
<div class="notice"><p>
If you explicitly set the version of any component in your manifest file, we will respect that setting even if it conflicts with other system changes or upgrades (for example upgrading Ubuntu). If you are having trouble upgrading any component of your application, remember to check your manifest file to ensure you have not previously locked the version of that component or one of its dependents. </p></div>

## Which environment?

The first level of your manifest file is the **environment** - this allows you to use the same `manifest.yml` for multiple applications with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.


## Which component?

Next, select which component you would like to specify settings for. You can choose from the following:

{% if include.product == "maestro" %}
*   [Docker](#docker){% endif %}
*   [ElasticSearch](#elasticsearch)
*   [Gateway](#gateway)
*   [GlusterFS](#glusterfs)
*   [Load balancers](#load-balancers)
*   [Memcached](#memcached)
*   [MongoDB](#mongodb)
*   [MySQL](#mysql) 
*   [Nginx](#nginx) {% if include.product == "rails" %}
*   [Node version](#node-version) {% endif %}
*   [PostGIS](#postgis)
*   [PostgreSQL](#postgresql)
*   [Redis](#redis) {% if include.product == "rails" %}
*   [Sinatra](#sinatra)
*   [Rails](#rails) 
*   [Rails health checks](#rails-rack-deployment-health-checks){% endif %}

{% if include.product == 'maestro' %}
### Docker

- **version**: Specify the version of Docker you want to install.
- **operating_system** (_Optional_): `ubuntu1604` or `ubuntu1804`
- **weave_version** (_Optional_): Specify the version of Weave you want to install.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.   
 <span style="background-color: #FFFF00"> Note that you must provide [**subnet_id**](#servers) for all servers in your application.</span>
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **image_keep_count** (_Optional, defaults to 5_): Set the number of old images to save on your servers (besides the running image).
- **nameservers** (_Optional, defaults to [ 8.8.8.8, 8.8.4.4 ]_): Set DNS servers for your application.  
  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>

#### Examples

```
production:
  docker:
    configuration:
      version: 1.7.0
      weave_version: 1.0.3
      vpc_id: vpc-64872001
      root_disk_size: 100
      root_disk_type: ssd
      image_keep_count: 5
      nameservers: ['8.8.8.8', '8.8.4.4']
```

```
production:
  docker:
    configuration:
      version: 1.12.0
      weave_version: 1.0.3
      vn_name: your_vn_name
      root_disk_size: 100
      root_disk_type: ssd
      image_keep_count: 15
```
* * *
{% endif %}

### ElasticSearch

- **version**: Specify the version of ElasticSearch you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.

```
production:
  elasticsearch:
    configuration:
      version: 0.90.7
      root_disk_size: 100
      root_disk_type: ssd
```

* * *


### Gateway

- **name**: Specify the name of gateway you want to use for your application.
- **username** (_Optional_) Specify the username which should be used to connect to bastion server.

### Note
<div class="notice">
<p>The gateway should be defined and open before you can use it in manifest.</p>
</div>


```
production:
  gateway:
    name: aws_bastion
	username: ec2-user
```


### GlusterFS

<div class="notice notice-warning"><p>
The version of GlusterFS currently offered via the Cloud 66 Add-in is not supported by Ubuntu 18.04. To use this add-in please ensure that all of your application components are installed on servers running <strong>Ubuntu 16.04</strong>. 
</p></div>

- **version**: Specify the version of GlusterFS you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is `ssd`.
- **replica_count** : Number of nodes in _GlusterFS cluster_ which a data will be replicated on it(i.e replica count 2 means your data exist on two nodes). Default value is 1.
- **mount_targets** : List of _Servers_ and _Server Groups_ you need GlusterFS mounted on them. You can specify the name of the _server_ or _server group_ (i.e rails,docker,mysql,...). You can also use `app` and `db` keywords, `app` is your main app server group (i.e docker, rails, ...)  and `db` is your db server groups (i.e mysql,redis,postgresql,... ). Default value is `app`.
- **volumes**: List of volumes you want in your GlusterFS Cluster.  By default we are creating a volume called `cloud66-vol`  and mounted to `/mnt/data-store`.

Available settings for a volume are:

- **name**: Specify the name of volume.
- **mount**: Specify the mount point of the volume on clients.

After you change the volume list, you need to redeploy your application for new configuration be applied to your application.

#### Notes
<div class="notice">
<p>
- You can not change replica_count after GlusterFS added to your application. <br/>
- You can not use glusterfs group or any of its servers in mount_targets.</p>
</div>

#### Warning
<div class="notice notice-danger">
<p>Renaming a volume will actually delete that volume and create a new one.</p>
</div>


```
production:
  glusterfs:
    configuration:
      version: 3.7
      replica_count: 2
      mount_targets: ['app','redis']
      volumes:
      - volume:
        name: images-data
        mount: "/mnt/images"
        access_control:
          read: ['web', 'api']
          write: ['web']
      - volume:
        name: videos
        mount: /mnt-data/videos
        access_control:
          read: ['web']
          write: ['web']
```

* * *


### Memcached

- **memory**: Specify maximum memory (in MB) that can be used (default value is 64).
- **port**: Specify connection port (default value is 11211).
- **listen_ip**: Specify which IP address to listen on (default value is 0.0.0.0).

```
production:
  memcached:
    configuration:
      memory: 1024
      port: 11211
      listen_ip: 127.0.0.1
```

* * *


### MongoDB

- **version**: Specify the version of MongoDB you want to install (can only be set during application build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **tamper_with_yml** (*Optional*): Determines whether Cloud 66 can automatically update your database configuration (username, password and server address). Default is *yes*.

```
production:
  mongodb:
    configuration:
      version: 2.4.8
      root_disk_size: 100
      root_disk_type: ssd
```

* * *


### MySQL

- **version**: Specify the version of MySQL you want to install. Valid values are 5.7 or 8.0 (can only be set during application build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **engine**: Specify the MySQL engine you want to install. Valid values are 'mysql' and 'percona' (can only be set during application build).
- **tamper_with_yml** (*Optional*): Determines whether Cloud 66 can automatically update your database configuration (username, password and server address). Default is *yes*.

```
production:
  mysql:
    configuration:
      version: 5.7
      root_disk_size: 100
      root_disk_type: ssd
      engine: percona
```

* * *


### Nginx

- **cors**: Enable [Cross Origin Resource Sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) - this will be taken into account when your Nginx configuration is reloaded.
- **extra-build-arguments**: (applies to Rack/Passenger applications only). Extra build argument string to be added the nginx build command. Note: if you require additional modules that themselves require specific source to be present, you should use a `BEFORE_NGINX` [deploy hook](/{{page.collection}}/references/deploy-hooks-syntax.html#hook-points) to ensure that source is present. You can use the `cloud66/download` snippet to achieve this easily. The following build arguments are currently always added: `--with-http_realip_module --with-ipv6 --with-http_v2_module` regardless of this value.
- **perfect_forward_secrecy** (_deprecated_): Enable [Perfect Forward Secrecy](http://en.wikipedia.org/wiki/Perfect_forward_secrecy) - this will be taken into account when your Nginx configuration is reloaded.

```
production:
  rails:
    configuration:
      nginx:
        cors: true
        extra-build-arguments: "--add-module=/path/to/module"
        perfect_forward_secrecy: true # deprecated
```

#### CORS configuration

If required, you can also specify the allowed origin (as '\*' or a single origin) and methods. For applications created since 21st September 2016, you can also specify a comma-seperated list of origins, headers, and whether to allow credentials for CORS.

```
production:
  rails:
    configuration:
      nginx:
        cors:
          origin: '*'
          methods: 'GET, OPTIONS'
          headers: 'Custom-Header, Another-Header'
          credentials: true
```

{% if include.product == 'rails' %}

* * *

### Node version (for Rails applications)

We automatically install the latest release of Node version 6.x.x when we set up your Rack/Rails application servers. You can control which version is installed by editing the manifest file for any Rails application as follows: 

``` 
rails:
  configuration:
    node_version: "6"       # will install latest release of v6.x.x
```
``` 
rails:
  configuration:
    node_version: "6.14.4"  # will install specific v6.14.4
```

If you need a newer version of Node, you can install one using the same method above. We support any version of Node that is supported by our [version manager](https://github.com/tj/n) (which itself supports the [Node distribution list](https://nodejs.org/dist/)).

#### Applying changes
<div class="notice notice-warning"><p>To apply changes to the Node version you need to update your manifest file, then <a href="/rails/how-to-guides/deployment/applying-upgrades.html#types">deploy-with-options</a> and select the <em>Apply Ruby/Node upgrades</em> option.</p></div>

{% endif %}

* * *

### PostgreSQL

- **version**: Specify the version of PostgreSQL you want to install (can only be set during application build).
- **postgis**: Specify whether to include PostGIS (can be added after initial application build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **tamper_with_yml** (*Optional*): Determines whether Cloud 66 can automatically update your database configuration (username, password and server address). Default is *yes*.

```
production:
  postgresql:
    configuration:
      version: 9.3.4
      postgis: true
      root_disk_size: 100
      root_disk_type: ssd
```

* * *


### PostGIS

- **version**: Specify the version of PostGIS you want to install.
```
production:
  postgresql:
    configuration:
      postgis:
        version: 2.1.1
```

* * *

{% if include.product == 'rails' %}

### Rails

A Rails application type in the manifest file gives you fine control over things like the Ruby version or the server the rails application is deployed on.

- **ruby_version**: Specify the version of Ruby to use. Also applies when you want to upgrade your Ruby version. We recommend that you use this and *remove the Ruby version declaration from your Gemfile* to avoid situations where your application will not run on every server during an upgrade.
- **operating_system** (_Optional_): `ubuntu1604` or `ubuntu1804`
- **asset_pipeline_precompile**: Specify whether to use asset pipeline compilation - this will be taken into account during redeployment.
- **do_initial_db_schema_load**: Specify whether to perform `rake db:schema:load` on a new application build.
- **reserved_server_memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger_process_memory**: A value (in MB) that Cloud 66 will use for each Passenger process. This is also used to calculate the value of the `passenger_pool_max` variable in your [Nginx configuration](/rails/references/nginx.html#pool-max) which in turn sets `passenger_max_pool_size`.
- **locked_passenger_version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on Passenger Enterprise applications.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers. <span style="background-color: #FFFF00">Note that you must provide  [**subnet_id**](#servers) for all servers in your application.</span>
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your application.  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>
- **include_submodules** (Optional, default is true): Set this to false to exclude any Git submodules from being pulled during a build.
- **keep_releases** *(Optional, Defaults to 5)* Specify the number of releases to keep on your server(s).
- **activeprotect**:
    - **whitelist:** Specify a comma-separated whitelist of IPs that should be ignored by your ActiveProtect configuration.
    - **http_ban_rate:** Set the threshold of *requests per minute* from a single IP address. The default is 2000.

#### Important
<div class="notice notice-warning">
<p>In order to use a <em>vpc_id</em>, you must provide <em>subnet_id</em> for all servers used by your application.</p>
</div>

```
production:
  rails:
    configuration:
      ruby_version: 2.2.0
      asset_pipeline_precompile: true
      do_initial_db_schema_load: false
      reserved_server_memory: 0 #default value
      passenger_process_memory: 200 #default value
      locked_passenger_version: 4.0.59
      activeprotect:
        whitelist: 123.123.123.123,234.234.234.234
        http_ban_rate: 2000 # Default
      vpc_id: vpc-64872001
      root_disk_size: 100
      root_disk_type: ssd
      nameservers: ['8.8.8.8', '8.8.4.4']
```

* * *

### Rack

The manifest file gives you fine control over things like the Ruby version or which server the application is deployed on.

- **ruby_version**: Specify the version of Ruby to use. Also applies when you want to upgrade your Ruby version. We recommend that you use this and *remove the Ruby version declaration from your Gemfile* to avoid situations where your application will not run on every server during an upgrade.
- **operating_system** (_Optional_): `ubuntu1604` or `ubuntu1804`
- **do_initial_db_schema_load**: Specify whether to perform `rake db:schema:load` on new application build.
- **reserved_server_memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger_process_memory**: A value (in MB) that Cloud 66 will use for each Passenger process. This is also used to calculate the value of the `passenger_pool_max` variable in your [Nginx configuration](/rails/references/nginx.html#boolean-variables) which in turn sets `passenger_max_pool_size`.
- **locked_passenger_version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on Passenger Enterprise applications.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your application. <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>
- **include_submodules** (Optional, default is true): Set this to false to exclude any Git  submodules  from being pulled during a build.
- **keep_releases** *(Optional, Defaults to 5)* Specify the number of releases to keep on your server(s).
- **activeprotect**:
    - **whitelist:** Specify a comma-separated whitelist of IPs that should be ignored by your ActiveProtect configuration.
    - **http_ban_rate:** Set the threshold of *requests per minute* from a single IP address. The default is 2000.

#### Important
<div class="notice notice-warning">
<p>In order to use a <em>vpc_id</em>, you must provide <em>subnet_id</em> for all servers used by your application.</p>
</div>

```
production:
  rack:
    configuration:
      ruby_version: 1.9.3
      do_initial_db_schema_load: false
      reserved_server_memory: 0 #default value
      passenger_process_memory: 200 #default value
      locked_passenger_version: 4.0.59
      activeprotect:
        whitelist: 123.123.123.123,234.234.234.234
      vpc_id: vpc-64872001
      root_disk_size: 100
      root_disk_type: ssd
      nameservers: ['8.8.8.8', '8.8.4.4']
```

### Rails (Rack) deployment health checks

These checks define tests to confirm whether your application has been successfully deployed, and to mark a deployment as "failed" if any do not pass. They have the following options:

- **protocol**: which protocol(s) to use when running the check. Acceptable values are `http` or `https`
- **host**: The hostname or IP address that will we called during the check
- **port**: The port number that must be used when submitting the request. The default is `80` if you set `http` as your protocol and `443` if you set it to `https`
- **endpoint**: The URL, path or endpoint that should be checked. This can be any URL in the application.
- **accept**: A comma separated list of the HTTP response codes that should be considered as a "pass" of this check. All values must be enclosed in quotes.  Ranges can be defined with dashes and both the first and last port numbers are included.
- **timeout**: The wait, in seconds, before the check will time out. The max is 120.

All of these are optional. For more details on health checks please read our [how-to guide](/rails/how-to-guides/deployment/deployment-health-checks.html).

#### Example:

    rails/rack:
    	configuration:
    		health:
    			protocol: 'https'
    			host: '127.0.0.1'
    			port: 4430
    			endpoint: '/'
    			accept: ["200", "300-399"]
    			timeout: 30


{% endif %}

### Redis

- **version**: Specify the version of Redis you want to install (defaults to 5.0).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.

```
production:
  redis:
    configuration:
      version: 5.0.5
      root_disk_size: 100
      root_disk_type: ssd
```

{% if include.product == 'rails' %} 

### Sinatra

For Sinatra use [Rack](#rack)

{% endif %}

* * *


## Load balancers

### AWS load balancer

You can use your Manifest file to customize the AWS load balancer deployed by Cloud 66. 

Available settings:

- **httpchk**: The URL visited to check your server health (applies to newly created load balancers only).
- **wait_after_adding_servers**: The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)
- **wait_after_removing_servers**: The time (in seconds) we will wait after removing a server from the load balancer before we begin deploying to it. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)

```
    production:
      load_balancer:
        configuration:
          httpchk: /
          wait_after_adding_servers:30 # default is 0
          wait_after_removing_servers:10 # default is 0
```
---

### GCE load balancer

You can use your Manifest file to customize the GCE load balancer deployed by Cloud 66. 

Available settings (refer to the [GCE documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) for more information):

- **httpchk**: The URL visited to check your server health (applies to newly created load balancers only).
- **balance**: The load balancing strategy. Valid values: `NONE`, `CLIENT_IP` or `CLIENT_IP_PROTO` (applies to newly created load balancers only).
- **wait_after_adding_servers**: The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)
- **wait_after_removing_servers**: The time (in seconds) we will wait after removing a server from the load balancer before we begin deploying to it. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)

```
    production:
      load_balancer:
        configuration:
          httpchk: /
          balance: CLIENT_IP_PROTO
          wait_after_adding_servers:30 # default is 0
          wait_after_removing_servers:10 # default is 0
```
---

### HAProxy

Use a manifest file to configure and define your HAProxy load balancer deployed by Cloud 66. These changes will be either be applied when you redeploy an application with more than one server, rebuild HAProxy or edit [HAProxy CustomConfig](/{{page.collection}}/how-to-guides/security/multi-cert_haproxy.html).

Available settings (refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt) for more information):

**Server definitions**

- **unique_name**: Name of the instance
- **size**: The size of the instance (mandatory)
- **region**: Digital Ocean's region (mandatory)
- **vendor**: digitalocean (mandatory)
- **key_name**: Default (mandatory)

**Configuration**

- **httpchk**: The health-check configuration.
- **balance**: The load balancing strategy. Options include `roundrobin`, `leastconn` and `source`
- **errorfile_\***: Location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer.
- **wait_after_adding_servers**: The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)
- **wait_after_removing_servers**: The time (in seconds) we will wait after removing a server from the load balancer before we begin deploying to it. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)

```
    production:
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
          errorfile_408: /etc/haproxy/errors/408.http
          errorfile_500: /etc/haproxy/errors/500.http
          errorfile_502: /etc/haproxy/errors/502.http
          errorfile_503: /etc/haproxy/errors/503.http
          errorfile_504: /etc/haproxy/errors/504.https
          wait_after_adding_servers:30 # default is 0
          wait_after_removing_servers:10 # default is 0
```
---

### Linode Nodebalancer

Use a manifest file to the Linode Nodebalancer deployed by Cloud 66.

Available settings (refer to the [Linode documentation](https://www.linode.com/docs/platform/nodebalancer/nodebalancer-reference-guide) for more information):

- **httpchk**: The health-check configuration (applies to newly created load balancers only).
- **balance**: The load balancing strategy. Valid values : `roundrobin`, `leastconn` or `source` (applies to newly created load balancers only).
- **wait_after_adding_servers**: The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)
- **wait_after_removing_servers**: The time (in seconds) we will wait after removing a server from the load balancer before we begin deploying to it. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)

```
    production:
      load_balancer:
        configuration:
          httpchk: /
          balance: leastconn
          wait_after_adding_servers:30 # default is 0
          wait_after_removing_servers:10 # default is 0
```
---

### Rackspace load balancer

Use a manifest file to customize the Rackspace load balancer deployed by Cloud 66. 

Available settings (refer to the [Rackspace documentation](http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Algorithms-d1e4367.html) for more information):

- **balance**: The load balancing strategy. Valid values : `ROUND_ROBIN`, `RANDOM` or `LEAST_CONNECTIONS`  (applies to newly created load balancers only).
- **wait_after_adding_servers**: The time (in seconds) we will wait after adding a server back to the load balancer before we begin routing traffic to that server. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)
- **wait_after_removing_servers**: The time (in seconds) we will wait after removing a server from the load balancer before we begin deploying to it. Read our [separate guide](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html#coping-with-load-balancer-configuration-lag) on configuration lag for more details. (Redeployment required to change setting)

```
    production:
      load_balancer:
        configuration:
          balance: LEAST_CONNECTIONS
          wait_after_adding_servers:30 # default is 0
          wait_after_removing_servers:10 # default is 0
```
---

## Which server?

Every component defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all your servers, you don't need to specify a server type. 

Servers can be deployed specifically to host a single component, be shared between multiple components (e.g. Rails and MySQL on the same server) or be an external server (e.g. using an external database).

Here is an example of a server definition:

```
production:
  rails:
    servers:
    - server:
      unique_name: app
```

These are the parameters that the _server_ section can take:

- **unique_name** (_Required if you are specifying a server type_): A unique name for this server.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **subnet_id** (_Optional, AWS EC2 only_): ID of the AWS subnet in which you would like to create your servers.
- **vendor** (_Optional_): Cloud vendor where the server will be built. Valid values: aws, azure (use azure_rm for new Azure accounts), digitalocean, googlecloud, linode, rackspace, and clouda
- **key_name** (_Optional_): Key name of cloud vendor where the server will be built. This is used when an account has multiple keys for a given cloud vendor. The default value is `Default`.
- **region** (_Optional_): [Data center region](http://developers.cloud66.com/#cloud-vendor-instance-regions)where the server will be built.
- **size** (_Optional_): [Size of the server instance](http://developers.cloud66.com/#cloud-vendor-instance-names) created.
- **availability_zone** (_Optional, AWS EC2 only_): Availability zone of the server instance in AWS EC2 region.

#### Important
<div class="notice notice-warning">
<p>Only a single cloud vendor and region is supported for servers used by an application.</p>
</div>

```
production:
  rails:
    servers:
      server:
        unique_name: app
        vendor: aws
        key_name: Default
        region: us-east-1
        size: m3.medium
        root_disk_size: 100
        root_disk_type: ssd
        subnet_id: subnet-40000000
        availability_zone: us-east-1c
```

### Deploy to your own server

- **address** (_Optional, Registered Server only_): Address of the server, only applicable to Registered Servers. For Registered Servers, _unique_name_ and _address_ should be defined.

```
production:
  rails:
    server:
      unique_name: frontend
      address: 123.123.123.123
```

### Shared Servers

You can share a server between two components. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the components will then share the physical server:

{% highlight yaml %}
production:
  rails:
    server:
      same_as: *another_existing_servers_unique_name*
{% endhighlight %}


### External Servers

If you would like to use an external server for a component (like using your own MySQL or AWS RDS instance, for example), you can define that server as external.

External server definitions specify that the component is hosted on a server external to Cloud 66. This is not a valid target for your main application (e.g. rails) but may be appropriate for another component (e.g. MongoDB):

```
production:
  mysql:
    server: external
```

#### Important
<div class="notice notice-warning">
You are <b>required</b> to specify a <a href="#which-server">server</a> for components, whereas configurations are <b>optional</b>.
</div>


## Specify environment variables

You can add your environment variables to your manifest files.

Here is an example:

```
production:
  environment_variables:
    SOME_VARIABLE: value
    ANOTHER_ONE: another_value
    THIRD_ONE: AUTO_GENERATE
    LONG_ONE: AUTO_GENERATE_15
```

If you need to auto generate a value, you can use the `AUTO_GENERATE` keyword. It generates a 10 character long random string unless you specify the length after it: `AUTO_GENERATE_15` which generates a 15 character random string.

Environment variables set in your manifest file will only apply during the initial build of your application. Please refer to our documentation on [environment variables](/{{page.collection}}/tutorials/env-vars.html) if you'd like to set them beyond this point.

Any environment variable that is generated by the result of the code analysis (like database addresses) will override any value specified in the manifest file. In other words, you cannot specify a value like `MYSQL_ADDRESS` in your manifest file as it will be ignored.


## Processes

[Background processes](/rails/how-to-guides/deployment/bluepill.html) can be deployed and managed by Cloud 66. Any process in a `Procfile` will be picked up, deployed and monitored by the system.

If you would like more flexibility over the signals used to control the processes, you can use the `procfile_metadata` section. Here is an example:

```
production:
  procfile_metadata:
    worker:
      stop_sequence: ttin, 120, term, 5, kill
    web:
      restart_signal: usr1
      stop_sequence: usr1, 30, kill
    nsq:
      restart_on_deploy: false
```

In this example, a process called `worker` is stopped using a `TTIN` signal first. After waiting for 120 seconds, if the process is still running, a `TERM` signal will be sent. If it is still running after 5 seconds, it will be killed.

As for `web` or `custom_web` processes, you can specify a `restart_signal` which will be sent to the process serving web. This is useful for web servers that can do "phased" or zero-downtime restarts.

All processes restart during each redeployment of the application. If you want to avoid this, you can set `restart_on_deploy` to `false`.

Default values for each process type are:

- Web/Custom Web Processes:
  - Stop Signal `stop_sequence`: `quit`
  - Restart Signal `restart_signal`: `usr2`
- Non-Web Processes: 
  - Stop Signal `stop_sequence`: `term,35,kill` (if sidekiq detected)  
  - Stop Signal `stop_sequence`: `quit,30,term,11,kill` (if sidekiq NOT detected)  
  - Restart `restart_on_deploy`: `true`


## Specify additional LiveLog files

Each component supports the additional partial configuration to add custom live log files for that component. For example:

```
production:
  rails:
    configuration:
      custom_log_files: ["/tmp/mylog/*/*.log"]
```
...or

```
production:
  docker:
    configuration:
      custom_log_files: ["/tmp/mylog/*/*.log"]
```

For more information about **LiveLogs** and additional examples, please see the [LiveLogs help page](/{{page.collection}}/how-to-guides/deployment/setting-up-custom-livelogs.html).