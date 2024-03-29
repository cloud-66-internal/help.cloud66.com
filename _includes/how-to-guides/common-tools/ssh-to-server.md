We provide two different ways for you to SSH to your servers - an automated way with Cloud 66 Toolbelt, or manual way.

{% include general/do_not_configure_servers_manually.html product = page.collection %}

## Cloud 66 toolbelt
You can use [Cloud 66 Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) to easily SSH to your servers. Once you have installed Toolbelt the following command can be used from your terminal:

### Full command
{% if include.product == 'rails' %}
<pre class="language-shell line-numbers u-whiteSpaceNoWrap"><code>cx ssh [--gateway-key &lt;&lt;The path to the key of gateway server&gt;&gt;] [-s "your application name"] "your server name"|&lt;&lt;server ip&gt;&gt;|&lt;&lt;server role&gt;&gt;</code></pre>

Many of these parameters are optional or mutually exclusive. For example you don't need to provide both the server name and the IP address.

### Examples

```shell
cx ssh -s "My Awesome App" web
cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion -e production
```
{% endif %}
{% if include.product != 'rails' %}
<pre class="language-shell line-numbers u-whiteSpaceNoWrap"><code>cx ssh [-s "your application name"] "your server name"|&lt;&lt;server ip&gt;&gt;|&lt;&lt;server role&gt;&gt;</code></pre>

Many of these parameters are optional or mutually exclusive. For example you don't need to provide both the server name and the IP address.

### Examples

```shell
cx ssh -s "My Awesome App" web
cx ssh -s "My Awesome App" Lion -e production
```
{% endif %}
See [toolbelt shortcuts](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html), for information on how you can make this even easier.

## Manual shell access

You can also access your servers manually via SSH from any Linux-based operating system (including Mac OS X). To do this:

1. [Add a firewall rule](/{{page.collection}}/references/network-configuration.html) to your application to open port 22 (it is closed to outside traffic by default).
2. Find your username and SSH key in the information page for the target server via your [Dashboard](https://app.cloud66.com/dashboard). Click on the server group to see a list of servers and then on the name of the server you need to reach. The SSH key download link is located in the right-hand panel.
3. Change the access rights to the downloaded key to 0600:
```shell
$ chmod 0600 /Users/xxx/Downloads/key.pem
```
4. You can now connect to your server with the following command:
```shell
$ ssh user_name@ip_address -i /Users/xxx/Downloads/key.pem
```


## Troubleshooting

### Update your toolbelt version

Toolbelt updates are normally applied automatically in the background, but in some cases these may not work. If so, you may need to [update the toolbelt manually](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html#update-the-toolbelt).

### Toolbelt SSH asking for password

If your toolbelt SSH connection is asking for a password, there may be an issue with the local SSH key cache on your computer. To remove this cache, run the following commands:

```bash
mkdir ~/.ssh/old_cx
mv ~/.ssh/cx_* ~/.ssh/old_cx
```

This moves the cached SSH keys to a temporary folder, so that they are downloaded again.<br/><br/>

### Toolbelt exits command

If the toolbelt SSH connection exits while running, it helps to check the output log from the command. To see this, simply prepend `CXDEBUG=1` to your command. For example, you can run:

```bash
CXDEBUG=1 cx ssh -s "My Awesome App" web
```

This will show at which point the command fails, and if you run this manually, you should see more error details.

### Toolbelt exit status 255

You may see this output from the bottom of the previous command:

<pre class="language-shell line-numbers u-whiteSpaceNoWrap"><code>Running Command /usr/bin/ssh with ([&lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&gt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=QUIET -o IdentitiesOnly=yes -A -p 22])
2020/07/23 17:41:12 error: exit status 255</code></pre>

In this case, there has likely been an issue running the SSH command, though no logs are output from it (given the `LogLevel=QUIET` directive). We'll want to run that command directly (and switch the `LogLevel` to `VERBOSE`):

<pre class="language-shell line-numbers u-whiteSpaceNoWrap"><code>ssh &lt;username&gt;@&lt;ip_address&gt; -i /Users/&lt;username&gt;/.ssh/cx_&lt;id&gt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=VERBOSE -o IdentitiesOnly=yes -A -p 22</code></pre>

The output from that command should help you understand what the root cause of the issue is.

### SSH timeout

SSH connection time-outs typically happen when the firewall connection isn't open. The toolbelt opens the firewall to your current IP address automatically, but your external IP address may change between this request and the actual connection. To verify this, try the manual connection method to see if you can connect.

### Check the permissions of your /home and .ssh directories

The SSH utility requires a certain level of permissions to be set in the `/home` directory of your Linux user before it will work. Those permissions are:

- `/home/your_username` must be set to (at most) `755 (drwxr-xr-x)`
- `/home/your_username/.ssh` must be set to `0700 (drwx------)`

In addition, make sure your `.ssh/authorized_keys` file is set to `600 (-rw-------)`.

If these permissions are set too "open" (for example `0777`) SSH will refuse to work as it sees this as insecure. Normally these directories are set to the correct permissions by default, but they can be changed by external processes or (unintentionally) by shell commands by team members.

