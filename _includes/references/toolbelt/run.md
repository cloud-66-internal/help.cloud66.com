Execute a command directly on a remote server, in a service, or in a existing container. To do this it: 

1. Opens the firewall for SSH from your IP address temporarily (20 minutes)
2. Downloads your SSH key if you don’t have it 
3. Starts a SSH session 
4. Executes the command specified and returns its output.

You need to have the correct access permissions to use this command. You can use either the server name (e.g. `lion`) or the server IP (e.g. `123.123.123.123`) or the server role (e.g. `web`). If a role is specified the command will connect to the first server with that role. 

This command is only supported on Linux and OS X clients (for Windows you can run this in a virtual machine if necessary)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx run --stack <application name> [--server <server name> | <IP address>] [--service <service name>] [--container <container name>] [--interactive] '<commands>'
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server, --svr &lt;server name&gt; \| &lt;IP address&gt; | either/or | — | The name or IP address of the server on which to run the command |
| \--service, --svc &lt;service name&gt; | either/or | — | (Maestro only) Name of the service in which to run the command |
| \--container, --cnt &lt;container name&gt; | either/or | — | (Maestro only) Name of the pod/container in which to run the command  |
| \--interactive, -i | no | — | Set the session to interactive mode |
| &lt;commands&gt; | yes | — | The linux commands to run.  |
{% include references/toolbelt/boilerplate/example.html %}
$ cx run -s mystack --server lion 'ls -la'
$ cx run -s mystack --server lion -i
$ cx run -s mystack --svc webapp 'ls -la'
$ cx run -s mystack --service api --interactive 'bundle exec rails c'
$ cx run -s mystack --container web-123 -i 'bundle exec rails c'
{% include references/toolbelt/boilerplate/footer.html %}