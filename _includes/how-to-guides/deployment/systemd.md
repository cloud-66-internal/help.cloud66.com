## Overview

By default Cloud 66 uses [**systemd**](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html){:target="_blank"} to monitor and manage processes on all new servers. It is automatically installed on all servers provisioned through Cloud 66. 

The only exception to this is for some legacy servers deployed before June 2020. These servers may use [bluepill](https://github.com/bluepill-rb/bluepill){:target="_blank"}. You can check which process manager your application is using:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙*Settings & Information* in the right-hand panel
- Find the **Process Manager** line - it will show you which one your application is using

If you need help with bluepill please see our [separate (legacy) guide](/rails/how-to-guides/deployment/bluepill-legacy.html). 

## Using systemd

You can use systemd to manually control processes on your servers using the command-line interface. If you are familiar with Ubuntu or other Linux variants you should recognise many of these commands.

When you add processes through the Cloud 66 web interface, they will will also use systemd but will be managed by Cloud 66.

We have documented some of the most common commands below, but please r[ead the full man page for systemd](http://manpages.ubuntu.com/manpages/bionic/man1/systemd.1.html){:target="_blank"} if you need more detail. You might also read [this excellent guide](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units){:target="_blank"} from DigitalOcean.

#### Note
<div class="notice"><p>
systemd does not require or support daemonized services. Unlike some other process managers (such as Bluepill), you should <strong>not</strong> add the `-d` flag to your systemd commands. 
</p></div>

### Process status

To get the status for all processes:

{% highlight shell %}
$ sudo systemctl 
{% endhighlight %}

To get the status for a specific process:

{% highlight shell %} 
$ sudo systemctl status <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl status nginx.service`

### Stop a service

To stop a service:

{% highlight shell %} 
$ sudo systemctl stop <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl stop nginx.service`

### Start a service

To start a service:

{% highlight shell %} 
$ sudo systemctl start <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl start nginx.service`

### Restart a service

Stops and then starts a service. Useful for refreshing a service after a configuration update:

{% highlight shell %} 
$ sudo systemctl restart <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl reload nginx.service`

### Reload a service

When supported, this reloads a service's config file without interrupting pending operations:

{% highlight shell %} 
$ sudo systemctl reload <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl reload nginx.service`

### Check if a service is running

Check if a service is currently running (active):

{% highlight shell %} 
$ sudo systemctl is-active <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl is-active nginx.service`

### Set a service to start at bootup

To set a service to start whenever the server is booted:

{% highlight shell %} 
$ sudo systemctl enable <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl enable nginx.service`

### Set a service to NOT start at bootup

To set a service to start whenever the server is booted:

{% highlight shell %} 
$ sudo systemctl disable <application>.service 
{% endhighlight %}

An example of this in practice would be `systemctl disable nginx.service`