
## Introduction

Nginx is compiled with a specific set of modules during the initial deployment of an application through Cloud 66. Should you wish to install other modules, Nginx will need to be recompiled. This guide will show you how to do this with Passenger (the default Rack server for Cloud 66 apps) or any custom rack server.

We do not need to uninstall the current version of Nginx because it will be overwritten in these steps. It is however important to remember to recompile Nginx with the any previous configuration parameters to avoid problems.

## Passenger

We will be installing the [HTTP Echo Nginx](http://wiki.nginx.org/HttpEchoModule) module during this example. Please be sure to replace this with your own module(s). Visit the Nginx website for more information about [default](http://wiki.nginx.org/Modules) and [third party modules](http://wiki.nginx.org/3rdPartyModules).

1.  Get the latest version of Nginx source from their [website](http://nginx.org/en/download.html). At the moment of writing this is version 1.14.2:`wget http://nginx.org/download/nginx-1.14.2.tar.gz`
2.  Use tar to extract the files from their archive:`tar xvzf nginx-1.14.2.tar.gz`
3.  Get the latest version of your module(s):`wget https://github.com/openresty/echo-nginx-module/archive/v0.61.tar.gz`
4.  Use tar to extract the files from their archive:`tar xvzf v0.61.tar.gz`
5.  Install the Passenger gem: `gem install passenger`
6.  Install Passenger with Nginx: `sudo passenger-install-nginx-module`
7.  During the install process,
  *   Select option `2` for _advanced users_
  *   Specify the directory in which you extracted Nginx
  *   Specify the installation directory as `/opt/nginx` so as to overwrite the previous installation
  *   Specify your module(s), eg. `--add-module='/root/echo-nginx-module-0.61'`
8.  Type `nginx -V` to confirm whether your module(s) installed..


## Custom Rack Servers

In this example we will be installing the [HTTP Echo Nginx](http://wiki.nginx.org/HttpEchoModule) module. Please be sure to replace this with your own module(s). Visit the Nginx website for more information about [default](http://wiki.nginx.org/Modules) and [third party modules](http://wiki.nginx.org/3rdPartyModules).

1.  Get the latest version of Nginx source from their [website](http://nginx.org/en/download.html). At the moment of writing this is version 1.14.2:`wget http://nginx.org/download/nginx-1.14.2.tar.gz`
2.  Use tar to extract the files from their archive:`tar xvzf nginx-1.14.2.tar.gz`
3.  Get the latest version of your module(s):`wget https://github.com/openresty/echo-nginx-module/archive/v0.61.tar.gz`
4.  Use tar to extract the files from their archive:`tar xvzf v0.61.tar.gz`
5.  Change to the Nginx folder:`cd nginx-1.14.2`
6.  Execute the following command to configure the installation:`./configure --prefix='/etc/nginx' --add-module='/root/echo-nginx-module-0.61' --error-log-path='$STACK_PATH/log' --user=nginx`
7.  Execute `make` followed by `make install`, which will install Nginx with the new configuration.
8.  Type `nginx -V` to confirm whether your module(s) installed.

Visit the Nginx website for more information about [installation and compile-time options](http://wiki.nginx.org/InstallOptions)

