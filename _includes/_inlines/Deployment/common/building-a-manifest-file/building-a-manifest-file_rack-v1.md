<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


### rack

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
## Important

In order to use a vpc_id, you must provide subnet_id for all servers in your stack.
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

