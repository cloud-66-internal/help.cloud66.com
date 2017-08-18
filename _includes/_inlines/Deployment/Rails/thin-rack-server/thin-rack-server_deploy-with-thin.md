<!-- post: -->


## Deploy with Thin

You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Thin Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:



{%include _inlines/Deployment/Rails/thin-rack-server/code_thin-rack-server_deploy-with-thin-stomweb.md %}




Please take note that Thin is running in Daemon mode with the `-d` parameter.




