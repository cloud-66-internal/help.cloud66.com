
We provide two different ways for you to SSH to your server - an automated way with the Cloud 66 toolbelt, or the manual way.

## Cloud 66 toolbelt
You can use the [Cloud 66 toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) to easily SSH to your servers. Once initialized, the following command can be used:

### Full

{% highlight bash %}
cx ssh [--gateway-key &lt;The path to the key of gateway server&gt;] [-s &lt;stack&gt;] &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;
{% endhighlight %}

### Example
{% highlight bash %}
cx ssh -s "My Awesome App" web
cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion -e production
{% endhighlight %}

See [toolbelt shortcuts](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html), for information on how you can make this even easier.

<h2 id="manual">Manual shell access</h2>
You can always have terminal access to your servers from your own server - just follow the steps below if you're on a Linux-based operating system.

<ol class="list">
<li>Port 22 (SSH) is closed to outside traffic by default - so you need to <a href="/{{page.collection}}/tutorials/service-network-configuration.html">add a firewall rule to your stack</a> to access it.</li>
<li>Once the port is open, you can find your username and SSH key by visiting the server page for the specific server you would like to login to. The SSH key download link is located in the right sidebar of your server page.</li>
<li>Change the access rights to the downloaded key to 0600:</li>
<pre class="terminal">
$ chmod 0600 /Users/xxx/Downloads/key.pem
</pre>

<li>You can now connect to your server with the following command:</li>
<pre class="terminal">
$ ssh user&#95;name@ip&#95;address -i /Users/xxx/Downloads/key.pem
</pre>
</ol>

<h2 id="trouble">Troubleshooting</h2>

<ol class="list">
<b><li>Update your toolbelt version</li></b>
Toolbelt updates are normally applied automatically in the background, but in some cases these may not work. If so, you may need to <a href="/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html#update-the-toolbelt">update the toolbelt manually</a>.<br/><br/>

<b><li>Toolbelt SSH asking for password</li></b>
If your toolbelt SSH connection is asking for a password, there may be an issue with the local SSH key cache on your computer. To remove this cache, run the following commands:
{% highlight bash %}
mkdir ~/.ssh/old_cx
mv ~/.ssh/cx_* ~/.ssh/old_cx
{% endhighlight %}

This moves the cached SSH keys to a temporary folder, so that they are downloaded again.<br/><br/>

<b><li>Toolbelt exits command</li></b>
If the toolbelt SSH connection exits while running, it helps to check the output log from the command. To see this, simply prepend <code>CXDEBUG=1</code> to your command. For example, you can run:

{% highlight bash %}
CXDEBUG=1 cx ssh -s "My Awesome App" web
{% endhighlight %}

This will show at which point the command fails, and if you run this manually, you should see more error details.<br/><br/>

<b><li>Toolbelt exit status 255</li></b>
You may see this output from the bottom of the previous command:

<pre class="prettyprint">
Running Command /usr/bin/ssh with ([&lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&tt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=QUIET -o IdentitiesOnly=yes -A -p 22])
2015/04/23 17:41:12 error: exit status 255
</pre>

In this case, there has likely been an issue running the SSH command, though no logs are output from it (given the <i>LogLevel=QUIET</i> directive). We'll want to run that command directly (and switch the <i>LogLevel</i> to <i>VERBOSE</i>):

<pre class="prettyprint">
ssh &lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&gt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=VERBOSE -o IdentitiesOnly=yes -A -p 22
</pre>

The output from that command should help you understand what the root cause of the issue is.<br/><br/>

<b><li>SSH timeout</li></b>
SSH connection time-outs typically happen when the firewall connection isn't open. The toolbelt opens the firewall to your current IP address automatically, but your external IP address may change between this request and the actual connection. To verify this, try the manual connection method and see if you can connect.
</ol>