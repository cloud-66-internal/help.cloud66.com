<!-- usedin: [ _legacy_docker/Tutorials/1901-10-03-nginx-modules.md, _maestro/Tutorials/1901-10-03-nginx-modules.md, _node/tutorials/1901-10-03-nginx-modules.md, _rails/Tutorials/1901-10-03-nginx-modules.md] -->


## Introduction
Nginx is compiled with a specific set of modules during the initial deployment of a stack through Cloud 66. Should you wish to install other modules,
Nginx needs to be recompiled because it lacks support for run-time selection of modules. This guide will show you how to do this with Passenger (the default on Cloud 66) or any custom rack server.

We do not need to uninstall the previously installed Nginx because it will be overwritten in these steps. It is however
important to remember to recompile Nginx with the previous configuration parameters to avoid problems.

