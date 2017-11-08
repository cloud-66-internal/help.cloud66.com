---
menuheaders: [ "Introduction", "Passenger", "Custom Rack Servers" ]
layout: post
template: one-col
title: Add modules to Nginx
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


## Introduction
Nginx is compiled with a specific set of modules during the initial deployment of a stack through Cloud 66. Should you wish to install other modules,
Nginx needs to be recompiled because it lacks support for run-time selection of modules. This guide will show you how to do this with Passenger (the default on Cloud 66) or any custom rack server.

We do not need to uninstall the previously installed Nginx because it will be overwritten in these steps. It is however
important to remember to recompile Nginx with the previous configuration parameters to avoid problems.


## Passenger

We will be installing the [HTTP Echo Nginx](http://wiki.nginx.org/HttpEchoModule) module during this example. Please be sure to replace this with your own module(s).

1.  Get the latest version of Nginx source from their [website](http://nginx.org/en/download.html). At the moment of writing this is version 1.5.3: `wget http://nginx.org/download/nginx-1.5.3.tar.gz`
2.  Use tar to extract the files from their archive: `tar xvzf nginx-1.5.3.tar.gz`
3.  Get the latest version of your module(s): `wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz`. Visit the Nginx website for more information about [default](http://wiki.nginx.org/Modules) and [third party modules](http://wiki.nginx.org/3rdPartyModules).
4.  Use tar to extract the files from their archive: `tar xvzf v0.46.tar.gz`
5.  Install the Passenger gem: `gem install passenger`
6.  Install Passenger with Nginx: `sudo passenger-install-nginx-module`
7.  During the install process,

*   Select option `2` for _advanced users_
*   Specify the directory in which you extracted Nginx
*   Specify the installation directory as `/opt/nginx` so as to overwrite the previous installation
*   Specify your module(s), eg. `--add-module='/root/echo-nginx-module-0.46'`

8.  Type `nginx -V` to confirm whether your module(s) installed.


## Custom Rack Servers

We will be installing the [HTTP Echo Nginx](http://wiki.nginx.org/HttpEchoModule) module during this example. Please be sure to replace this with your own module(s).

1.  Get the latest version of Nginx source from their [website](http://nginx.org/en/download.html). At the moment of writing this is version 1.5.3:`wget http://nginx.org/download/nginx-1.5.3.tar.gz`
2.  Use tar to extract the files from their archive:`tar xvzf nginx-1.5.3.tar.gz`
3.  Get the latest version of your module(s):`wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz`Visit the Nginx website for more information about [default](http://wiki.nginx.org/Modules) and [third party modules](http://wiki.nginx.org/3rdPartyModules).
4.  Use tar to extract the files from their archive:`tar xvzf v0.46.tar.gz`
5.  Enter the Nginx folder:`cd nginx-1.5.3`
6.  Execute the following command to configure the installation:`./configure --prefix='/etc/nginx' --add-module='/root/echo-nginx-module-0.46' --error-log-path='$STACK_PATH/log' --user=nginx`Visit the Nginx website for more information about [installation and compile-time options](http://wiki.nginx.org/InstallOptions).
7.  Execute `make` followed by `make install`, which will install Nginx with the new configuration.
8.  Type `nginx -V` to confirm whether your module(s) installed.

