## Overview

By default Cloud 66 uses [**systemd**](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html) to monitor and manage processes on all new servers. It is automatically installed on all servers provisioned through Cloud 66. The only exception to this is for servers still running Ubuntu 14.04 (or older). These servers use [bluepill](https://github.com/bluepill-rb/bluepill). If you need help with bluepill please see our separate (legacy) guide. 

## Using systemd

You can use systemd to manually control processes on your servers using the command-line interface. If you are familiar with Ubuntu or other Linux variants you should recognise many of these commands.

When you add processes through the Cloud 66 web interface, they will will also use systemd but will be managed by Cloud 66.

We have documented some of the most common commands below, but please r[ead the full man page for systemd](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html) if you need more detail. You might also read [this excellent guide](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units) from DigitalOcean.

### Note

systemd does not require or support daemonized services. Unlike some other process managers (such as Bluepill), you should not add the `-d` flag to your systemd commands. 

### Process status

To get the status for all processes:

``` $ sudo systemctl ```

To get the status for a specific process:

``` $ sudo systemctl status <application>.service ```

An example of this in practice would be `systemctl status nginx.service`

### Stop a service

To stop a service:

``` $ sudo systemctl stop <application>.service ```

An example of this in practice would be `systemctl stop nginx.service`

### Start a service

To start a service:

``` $ sudo systemctl start <application>.service ```

An example of this in practice would be `systemctl start nginx.service`

### Restart a service

Stops and then starts a service. Useful for refreshing a service after a configuration update:

``` $ sudo systemctl restart <application>.service ```

An example of this in practice would be `systemctl reload nginx.service`

### Reload a service

When supported, this reloads a service's config file without interrupting pending operations:

``` $ sudo systemctl reload <application>.service ```

An example of this in practice would be `systemctl reload nginx.service`

### Check if a service is running

Check if a service is currently running (active):

``` $ sudo systemctl is-active <application>.service ```

An example of this in practice would be `systemctl is-active nginx.service`

### Set a service to start at bootup

To set a service to start whenever the server is booted:

``` $ sudo systemctl enable <application>.service ```

An example of this in practice would be `systemctl enable nginx.service`

### Set a service to NOT start at bootup

To set a service to start whenever the server is booted:

``` $ sudo systemctl disable <application>.service ```
``` $
An example of this in practice would be `systemctl disable nginx.service`