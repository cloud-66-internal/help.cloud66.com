Opens an SSH tunnel between your local machine and the remote server on a specific port. This is useful when connecting to remote databases or other services using local tools.

`tunnel` does the following:

1. Opens a lease in port 22 for your local IP address
2. Fetches your SSH key from your Cloud 66 account
3. Starts an SSH tunnel between your machine and the server on the given ports
4. Closes the tunnel when you exit the Toolbelt (Ctrl-C)

{% if include.product == 'rails' %}
Applications using gateways (Bastion servers) are not supported.
{% endif %}

If a role is specified the command will connect to the first server with that role.

To specify the ports for the tunnel, use `--local` and `--remote` arguments. For example, if you need to connect to a MySQL server, you can use `3307` locally and `3306` (MySQL port on the server) as the remote port. Once the tunnel is established, you can use your favourite MySQL client to connect to the server on 127.0.0.1 and the local port (`3307` in this case).

If a local port is not specified, cx will use "remote + 1" as a convention for the local port. For example, if you only specify `--remote 5432` without explicitly specifying local, cx will use `5433` as the local port.

This command is only supported on Linux and OS X (for Windows you can run this in a virtual machine if necessary)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx tunnel --stack <application name> --server <server name> | <server IP> | <server role> --local <local port> --remote <remote port>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
| \--server &lt;server name&gt; \| &lt;server ip&gt; \| &lt;server role&gt; | either/or | — | Name or IP or role of the server to access |
| -local, -l &lt;local port&gt; | no | — | Local port for the tunnel |
| -remote, -r &lt;remote port&gt; | yes | — | Remote port for the tunnel |
{% include references/toolbelt/boilerplate/example.html %}
$ cx tunnel -s mystack --server lion --local 3307 --remote 3306
$ cx tunnel -s mystack --server 52.65.34.98 --local 3307 --remote 3306
$ cx tunnel -s mystack --server web -l 3307 -r 3306
{% include references/toolbelt/boilerplate/footer.html %}