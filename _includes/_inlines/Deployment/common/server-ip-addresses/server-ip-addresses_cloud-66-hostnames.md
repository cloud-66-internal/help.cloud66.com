<!-- usedin: [ _legacy_docker/deployment/server-ip-addresses.md, _maestro/Deployment/server-ip-addresses.md, _node/deployment/server-ip-addresses.md, _rails/deployment/server-ip-addresses.md, _skycap/deployment/server-ip-addresses.md] -->


## Cloud 66 hostnames

Every server fired up with Cloud 66 has a unique animal-themed name. This should help you find and identify your server quickly in your stack. All servers are accessible by their Cloud 66 DNS name: `[server_name].[stack_name].[environment].c66.me`. For example, the DNS could look like `tiger.myapp.test.c66.me`.

Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like `[stack_name].[environment].c66.me`. For example, the DNS could look like: `myapp.test.c66.me`. Production stacks don't have the environment in their names, for example `myapp.c66.me`.

