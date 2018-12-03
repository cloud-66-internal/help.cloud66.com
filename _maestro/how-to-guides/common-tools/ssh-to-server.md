---
layout: post
template: one-col
title:  "How to SSH to Servers"
categories: how-to-guides/common-tools
order: 3
legacy: false
lead: Connect directly to your servers via secure shell access 
tags: ['SSH', 'shell']
permalink: /:collection/:path
---

We provide two different ways for you to SSH to your servers - an automated way with Cloud 66 Toolbelt, or manual way.

## Cloud 66 toolbelt
You can use [Cloud 66 Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html) to easily SSH to your servers. Once you have installed Toolbelt the following command can be used from your terminal:

### Full command

```
cx ssh [--gateway-key <<The path to the key of gateway server>>] [-s "your application name"] "your server name"|<<server ip>>|<<server role>>
```
Many of these parameters are optional or mutually exclusive. For example you don't need to provide both the server name and the IP address.

### Examples

{% highlight bash %}
cx ssh -s "My Awesome App" web
cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion -e production
{% endhighlight %}

See [toolbelt shortcuts](/maestro/quickstarts/using-cloud66-toolbelt.html), for information on how you can make this even easier.

## Manual shell access

You can also access your servers manually via SSH from any Linux-based operating system (including Mac OS X). To do this:

1. [Add a firewall rule](/maestro/references/network-configuration.html) to your application to open port 22 (it is closed to outside traffic by default).
2. Find your username and SSH key in the information page for the target server via your [Dashboard](https://app.cloud66.com/dashboard). The SSH key download link is located in the right-hand panel.
3. Change the access rights to the downloaded key to 0600:
<pre class="terminal">
$ chmod 0600 /Users/xxx/Downloads/key.pem
</pre>
4. You can now connect to your server with the following command:
<pre class="terminal">
$ ssh user&#95;name@ip&#95;address -i /Users/xxx/Downloads/key.pem
</pre>


## Troubleshooting

### Update your toolbelt version

Toolbelt updates are normally applied automatically in the background, but in some cases these may not work. If so, you may need to [update the toolbelt manually](/maestro/quickstarts/using-cloud66-toolbelt.html#update-the-toolbelt).

### Toolbelt SSH asking for password

If your toolbelt SSH connection is asking for a password, there may be an issue with the local SSH key cache on your computer. To remove this cache, run the following commands:

{% highlight bash %}
mkdir ~/.ssh/old_cx
mv ~/.ssh/cx_* ~/.ssh/old_cx
{% endhighlight %}

This moves the cached SSH keys to a temporary folder, so that they are downloaded again.<br/><br/>

### Toolbelt exits command

If the toolbelt SSH connection exits while running, it helps to check the output log from the command. To see this, simply prepend `CXDEBUG=1` to your command. For example, you can run:

{% highlight bash %}
CXDEBUG=1 cx ssh -s "My Awesome App" web
{% endhighlight %}

This will show at which point the command fails, and if you run this manually, you should see more error details.

### Toolbelt exit status 255

You may see this output from the bottom of the previous command:

<pre class="prettyprint">
Running Command /usr/bin/ssh with ([&lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&tt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=QUIET -o IdentitiesOnly=yes -A -p 22])
2015/04/23 17:41:12 error: exit status 255
</pre>

In this case, there has likely been an issue running the SSH command, though no logs are output from it (given the `LogLevel=QUIET` directive). We'll want to run that command directly (and switch the `LogLevel` to `VERBOSE`):

{% highlight bash %}
ssh &lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&gt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=VERBOSE -o IdentitiesOnly=yes -A -p 22
{% endhighlight %}

The output from that command should help you understand what the root cause of the issue is.

### SSH timeout

SSH connection time-outs typically happen when the firewall connection isn't open. The toolbelt opens the firewall to your current IP address automatically, but your external IP address may change between this request and the actual connection. To verify this, try the manual connection method to see if you can connect.