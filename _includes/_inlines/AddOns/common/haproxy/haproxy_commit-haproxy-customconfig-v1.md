<!-- usedin: [ _legacy_docker/AddOns/haproxy-v1.md, _maestro/AddOns/haproxy-v1.md, _node/addons/haproxy-v1.md, _rails/AddOns/haproxy-v1.md] -->


## Commit HAProxy CustomConfig

Editing and committing HAProxy CustomConfig will do the following steps for your HAProxy web server:

* Check the template for basic Liquid syntax errors
* Compile the HAProxy configuration based on the information from your load balanced web servers
* Upload the configuration to your HAProxy server
* Reload HAProxy

This process will be stopped if an error is encountered.




