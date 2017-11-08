---
menuheaders: [ "What is a manifest file?", "Which environment?", "Which application?", "Docker", "ElasticSearch", "Gateway", "GlusterFS", "Memcached", "MongoDB", "MySQL", "Nginx", "CORS configuration", "PostgreSQL", "PostGIS", "Rails", "Redis", "Rack", "Sinatra", "Load balancers", "AWS load balancer", "GCE load balancer", "HAProxy", "Linode Nodebalancer", "Rackspace load balancer", "CloudA load balancer", "Which server?", "Deploy to your own server", "Shared Servers", "External Servers", "Specify environment variables", "Processes", "Specify additional LiveLog files", "Test experimental features" ]
layout: post
template: one-col
title: Building your Manifest File
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---









## What is a manifest file?

A manifest file allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack. See [Getting started with manifest files](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) for an introduction.

{% if include.product == "rails" %}
For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
{% endif %}
{% if include.product == "maestro" or include.product == "legacy_docker" %}
For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the _Configure manifest_ item in the right menu of your stack page.
{% endif %}
Once you're ready, start by going through each section below to build your manifest file.






## Which environment?

The first level of your manifest file is the **environment** - this allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.






## Which application?

Next, select which application you would like to specify settings for. You can choose from the following:

{% if include.product == "maestro" or include.product == "legacy_docker" %}*   [Docker](#docker){% endif %}
*   [ElasticSearch](#elasticsearch)
*   [Gateway](#gateway)
*   [GlusterFS](#glusterfs)
*   [Load balancers](#load-balancers)
*   [Memcached](#memcached)
*   [MongoDB](#mongodb)
*   [MySQL](#mysql)
*   [Nginx](#nginx)
*   [PostGIS](#postgis)
*   [PostgreSQL](#postgresql)
*   [Redis](#redis)
*   [Sinatra](#sinatra)
{% if include.product == "rails" %}*   [Rails](#rails){% endif %}





{% if include.product == 'maestro' or include.product == 'legacy_docker' %}
### Docker

- **version**: Specify the version of Docker you want to install.
- **weave_version** (_Optional_): Specify the version of Weave you want to install.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.   


 <span style="background-color: #FFFF00"> Note that you must provide [**subnet_id**](#servers) for all servers in your stack.</span>
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **image_keep_count** (_Optional, defaults to 5_): Set the number of old images to save on your servers (besides the running image).
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your stack.  


  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>




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
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
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

- **name**: Specify the name of gateway you want to use for your stack.
- **username** (_Optional_) Specify the username which should be used to connect to bastion server.








## Note
The gateway should be defined and open before you can use it in manifest.
```
production:
	gateway:
	    name: aws_bastion
	    username: ec2-user
```






### GlusterFS

- **version**: Specify the version of GlusterFS you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is `ssd`.
- **replica_count** : Number of nodes in _GlusterFS cluster_ which a data will be replicated on it(i.e replica count 2 means your data exist on two nodes). Default value is 1.
- **mount_targets** : List of _Servers_ and _Server Groups_ you need GlusterFS mounted on them. You can specify the name of the _server_ or _server group_ (i.e rails,docker,mysql,...). You can also use `app` and `db` keywords, `app` is your main app server group (i.e docker, rails, ...)  and `db` is your db server groups (i.e mysql,redis,postgresql,... ). Default value is `app`.
- **volumes**: List of volumes you want in your GlusterFS Cluster.  By default we are creating a volume called `cloud66-vol`  and mounted to `/mnt/data-store`.

Available settings for a volume are:

- **name**: Specify the name of volume.
- **mount**: Specify the mount point of the volume on clients.
- **access_control** (_Optional, Docker stacks only_): Specify the list of docker services which should have a _read only_ or _read/write_ attached volume, mounted to this glusterfs volume. Options are `read` and `write` (which includes read as well)

After you change the volume list, you need to redeploy your stack for new configuration be applied to your stack.









## Note

You can not change replica_count after GlusterFS added to your stack.






## Note

You can not use glusterfs group or any of its servers in mount_targets.




## Note

Renaming a volume will delete volume and create a new one.





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

- **version**: Specify the version of MongoDB you want to install (can only be set during stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.





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

- **version**: Specify the version of MySQL you want to install. Valid values are 5.5 and 5.6 (can only be set during stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **engine**: Specify the MySQL engine you want to install. Valid values are 'mysql' and 'percona' (can only be set during stack build).





```
production:
    mysql:
        configuration:
            version: 5.5
            root_disk_size: 100
            root_disk_type: ssd
            engine: percona
```





* * *






### Nginx

- **cors**: Enable [Cross Origin Resource Sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) - this will be taken into account when your Nginx configuration is reloaded.
- **perfect_forward_secrecy** (_deprecated_): Enable [Perfect Forward Secrecy](http://en.wikipedia.org/wiki/Perfect_forward_secrecy) - this will be taken into account when your Nginx configuration is reloaded.





```
production:
    rails:
        configuration:
            nginx:
                cors: true
                perfect_forward_secrecy: true # deprecated
```










### CORS configuration

If required, you can also specify the allowed origin (as '\*' or a single origin) and methods. For stacks created since 21st September 2016, you can also specify a comma-seperated list of origins, headers, and whether to allow credentials for CORS.





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





* * *






### PostgreSQL

- **version**: Specify the version of PostgreSQL you want to install (can only be set during stack build).
- **postgis**: Specify whether to include PostGIS (can be added after initial stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.





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

- **ruby_version**: Specify the version of Ruby to use (overridden if present in Gemfile).
- **asset_pipeline_precompile**: Specify whether to use asset pipeline compilation - this will be taken into account during redeployment.
- **do_initial_db_schema_load**: Specify whether to perform "rake db:schema:load" on a new stack build.
- **reserved_server_memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger_process_memory**: A value in MB that Cloud 66 will use for each Passenger process when calculating the passenger_max_pool_size (Passenger-based stacks only) - this will be taken into account during redeployment.
- **locked_passenger_version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on passenger enterprise stacks.
- **activeprotect**: Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers. 
     -  <span style="background-color: #FFFF00">Note that you must provide  [**subnet_id**](#servers) for all servers in your stack.</span>
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your stack.  
     -  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>
- **include_submodules** (Optional, default is true): Set this to false to exclude any Git submodules from being pulled during a build. 

<div class="notice notice-important">
Important!
In order to use vpc_id, you must provide subnet_id for all servers in your stack.
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
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
            nameservers: ['8.8.8.8', '8.8.4.4']
```
{% endif %}





### Redis

- **version**: Specify the version of Redis you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.





```
production:
    redis:
        configuration:
            version: 2.6.10
            root_disk_size: 100
            root_disk_type: ssd
```





* * *





{% if include.product == 'rails' %}
### Rack

A rack application type in the manifest file gives you fine control over things like the Ruby version or which server the application is deployed on.

- **ruby_version**: Specify the version of Ruby to use (overridden if present in Gemfile).
- **do_initial_db_schema_load**: Specify whether to perform "rake db:schema:load" on new stack build.
- **reserved_server_memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger_process_memory**: A value in MB that Cloud 66 will use for each Passenger process when calculating the passenger_max_pool_size (Passenger-based stacks only) - this will be taken into account during redeployment.
- **locked_passenger_version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on passenger enterprise stacks.
- **activeprotect**: Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your stack.  
     -  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>
- **include_submodules** (Optional, default is true): Set this to false to exclude any Git  submodules  from being pulled during a build. 

<div class="notice notice-important">
Important!
In order to use a vpc_id, you must provide subnet_id for all servers in your stack.
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

{% endif %}





### Sinatra

For Sinatra use [Rack](#rack)

* * *






### Load balancers






### AWS load balancer

Use a manifest file to customize the AWS load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings:

- **httpchk**: The URL visited to check your server health.



```
production:
    load_balancer:
        configuration:
            httpchk: /
```


* * *





### GCE load balancer

Use a manifest file to customize the GCE load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [GCE documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) for more information):

- **httpchk**: The URL visited to check your server health.

- **balance**: The load balancing strategy. You can use these values: NONE, CLIENT_IP or CLIENT_IP_PROTO.





```
production:
    load_balancer:
        configuration:
            httpchk: /
            balance: CLIENT_IP_PROTO
```





* * *






### HAProxy

Use a manifest file to configure and define your HAProxy load balancer deployed by Cloud 66. These changes will be either be applied when you redeploy a stack with more than one server, rebuild HAProxy or edit [HAProxy CustomConfig](https://help.cloud66.works/{{ include.product }}/addins/haproxy.html).

Available settings (refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt) for more information):
Server definitions
unique_name: Name of the instance
size: The size of the instance (Mandatory)
region: Digital Ocean's region (Mandatory)
vendor: digitalocean (Mandatory)
key_name: Default (Mandatory)
Configuration:
- **httpchk**: The health-check configuration.
- **balance**: The load balancing strategy.
- **errorfile_\***: Location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer.



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
            httpchk: HEAD / HTTP/1.1\r\nHost:haproxy  #default value
            balance: roundrobin #default value
            errorfile_400: /etc/haproxy/errors/400.http
            errorfile_403: /etc/haproxy/errors/403.http
            errorfile_408: /etc/haproxy/errors/408.http
            errorfile_500: /etc/haproxy/errors/500.http
            errorfile_502: /etc/haproxy/errors/502.http
            errorfile_503: /etc/haproxy/errors/503.http
            errorfile_504: /etc/haproxy/errors/504.https
```


* * *






### Linode Nodebalancer

Use a manifest file to the Linode Nodebalancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Linode documentation](https://www.linode.com/docs/platform/nodebalancer/nodebalancer-reference-guide) for more information):

- **httpchk**: The health-check configuration
- **balance**: The load balancing strategy. You can use these values : roundrobin, leastconn or source.





```
production:
    load_balancer:
        configuration:
            httpchk: /
            balance: leastconn
```





* * *






### Rackspace load balancer

Use a manifest file to customize the Rackspace load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Rackspace documentation](http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Algorithms-d1e4367.html) for more information):

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, RANDOM or LEAST_CONNECTIONS.





```
production:
    load_balancer:
        configuration:
            balance: LEAST_CONNECTIONS
```





* * *






### CloudA load balancer

Use a manifest file to customize the CloudA load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, SOURCE_IP or LEAST_CONNECTIONS.



```
production:
    load_balancer:
        configuration:
            balance: ROUND_ROBIN
```


* * *






## Which server?

Every application defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all servers in an application type, you don't need to specify a server type. Servers can be deployed specifically to host that application, be shared between multiple applications (eg. Rails and MySQL on the same server) or be an external server (eg. using an external database).

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
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **subnet_id** (_Optional, AWS EC2 only_): ID of the AWS subnet in which you would like to create your servers.
- **vendor** (_Optional, BYOC only_): Cloud vendor to fire the server up on. Valid values: aws, azure, digitalocean, googlecloud, linode, rackspace, and clouda
- **key_name** (_Optional, BYOC only_): Key name of the cloud vendor to fire the server up on. This is used when the account has multiple keys for a given cloud vendor. The default value is `Default` when omitted.
- **region** (_Optional, BYOC only_): [Data center region](http://developers.cloud66.com/#cloud-vendor-instance-regions) to create the server in.
- **size** (_Optional, BYOC only_): [Size of the server instance](http://developers.cloud66.com/#cloud-vendor-instance-names) created.
- **availability_zone** (_Optional, AWS EC2 only_): Availability zone of the server instance in AWS EC2 region.








<div class="notice notice-important">
Important!

Only a single cloud vendor and region is supported for servers in a stack.
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

You can share a server between two applications. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the applications will then share the physical server:

{% highlight yaml %}
production:
    rails:
        server:
            same_as: *another_existing_servers_unique_name*
{% endhighlight %}






### External Servers

If you would like to use an external server for an application (like using your own MySQL or AWS RDS for example), you can define that server as external.

External server definitions specify that the application is hosted on a server external to Cloud 66. This is not a valid target for your main application (ie. Rails) but may be appropriate for another application type (ie. MongoDB):





```
production:
    mysql:
        server: external
```












<div class="notice notice-important">
Important!

You are <b>required</b> to specify a <a href="#which-server">server</a> for application types, whereas configurations are <b>optional</b>.
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

Environment variables set in your manifest file will only apply during the initial build of your stack. Please refer to our documentation on [environment variables](https://help.cloud66.works/{{ include.product }}/deployment/env-vars.html) if you'd like to set them beyond this point.

Any environment variable that is generated by the result of the code analysis (like database addresses) will override any value specified in the manifest file. In other words, you cannot specify a value like `MYSQL_ADDRESS` in your manifest file as it will be ignored.






## Processes

[Background processes](https://help.cloud66.works/rails/deployment/proc-files.html) can be deployed and managed by Cloud 66. Any process in a `Procfile` will be picked up, deployed and monitored by the system.

If you would like more flexibility over the signals used to control the processes, you can use the `procfile_metadata` section. Here is an example:





```
production:
  procfile_metadata:
    worker:
      stop_sequence: ttin, 120, term, 5, kill
    web:
      restart_signal: usr1
      web_server_stop_signals: usr1, 30, kill
    nsq:
      restart_on_deploy: false
```





In this example, a process called `worker` is stopped using a `TTIN` signal first. After waiting for 120 seconds, if the process is still running, a `TERM` signal will be sent. If it is still running after 5 seconds, it will be killed.

As for `web` or `custom_web` processes, you can specify a `restart_signal` which will be sent to the process serving web. This is useful for web servers that can do "phased" or zero-downtime restarts.

All processes restart during each redeployment of the stack. If you want to avoid this, you can set `restart_on_deploy` to `false`.

Default values for each process type are:

- Web/Custom Web Processes:
  - Stop Signal `web_server_stop_signals`: `QUIT`
  - Restart Signal `restart_signal`: `USR2`
- Non-Web Processes:
  - Stop Signal `stop_sequence`: `QUIT,30,TERM,11,KILL`
  - Restart `restart_on_deploy`: `true`






## Specify additional LiveLog files

Each application type supports the additional partial configuration to add custom live log files for that application type:





```
production:
    docker:
        configuration:
            custom_log_files: ["/tmp/mylog/*/*.log"]
```





For more information about **LiveLogs** and additional examples, please see the [LiveLogs help page](http://help.cloud66.com/{{ include.product }}/stack-management/live-logs.html).






## Test experimental features

You can use some features that are still in beta by adding them to _experiments_ section of your manifest file, for example:





```
production:
    experiments:
        docker_storage: overlay
```





These are the parameters that the _experiments_ section currently accepts:

- **docker_storage** (_Optional_): If set to _overlay_, we will configure Docker on new servers to use OverlayFS backend storage.

