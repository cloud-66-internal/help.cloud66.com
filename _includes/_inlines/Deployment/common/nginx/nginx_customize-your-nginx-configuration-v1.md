<!-- usedin: [ _legacy_docker/deployment/nginx-v1.md, _maestro/Deployment/nginx-v1.md, _node/deployment/nginx-v1.md, _rails/deployment/nginx-v1.md, _skycap/deployment/nginx-v1.md] -->


## Customize your Nginx configuration

Cloud 66 makes it easy for you to customize your Nginx configuration. From your stack detail page, access your web server group page (eg. _Rails server_) and click _Customize Nginx_ in the right sidebar. Follow the [CustomConfig instructions](https://help.cloud66.works/{{ include.product }}/stack-management/custom-config.html) to customize the configuration.

Editing and committing your Nginx CustomConfig will perform the following steps on **every web server in your stack**, one by one, sequentially:

*   Check your template for Liquid syntax errors
*   Determine the correct Passenger path (Passenger stacks only)
*   Check the version of your Passenger, and determine if Nginx needs to use a Ruby shell wrapper
*   Count the number of cores on the server
*   Compile the Nginx configuration based on the information from the server
*   Upload the configuration to the server
*   Reload Nginx

Reloading Nginx does not interrupt the serving of traffic. This process will be stopped if an error is encountered. For example, if you have 3 web servers in your stack, if the first server fails to be updated, the process will be halted for the other 2 servers to avoid complete service diruption.

