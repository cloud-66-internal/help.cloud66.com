<!-- post: -->


### Rails

A Rails application type in the manifest file gives you fine control over things like the Ruby version or the server the rails application is deployed on.

- **ruby&#95;version**: Specify the version of Ruby to use (overridden if present in Gemfile).
- **asset&#95;pipeline&#95;precompile**: Specify whether to use asset pipeline compilation - this will be taken into account during redeployment.
- **do&#95;initial&#95;db&#95;schema&#95;load**: Specify whether to perform "rake db:schema:load" on a new stack build.
- **reserved&#95;server&#95;memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger&#95;process&#95;memory**: A value in MB that Cloud 66 will use for each Passenger process when calculating the passenger&#95;max&#95;pool&#95;size (Passenger-based stacks only) - this will be taken into account during redeployment.
- **locked&#95;passenger&#95;version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on passenger enterprise stacks.
- **activeprotect**: Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration.
- **vpc&#95;id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers. 


 Note that you must provide  [**subnet_id**](#servers) for all servers in your stack.

- **vn&#95;name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your stack.  


 Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers





