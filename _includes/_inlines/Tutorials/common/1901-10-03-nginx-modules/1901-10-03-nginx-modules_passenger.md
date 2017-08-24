

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

