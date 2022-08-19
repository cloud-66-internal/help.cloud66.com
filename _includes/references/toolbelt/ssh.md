Allows direct SSH shell into your servers by opening the firewall temporarily for the source IP address, downloading the SSH key and starting a SSH session with one command.

Your server SSH key is downloaded to `~/.ssh` and re-used in subsequent SSH connections via the toolbelt. You need to have shell to server rights over the application to use this command.

{% if include.product == 'rails' %}
If your server deployed behind a gateway, you need to provide the private key in order to pass through the gateway.
{% endif %}{% if include.product != 'rails' %}
Note that Gateway settings and options are only available for native Rails applications.
{% endif %}
{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx ssh  [--gateway-key <path to gateway key>] --stack <application name> <server name>|<server ip>|<server role> --vv
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--gateway-key &lt;path to gateway key&gt; | no | — | Path to the private key for the gateway server (Rails only) |
| -v, --vv, --vvv | no | — | Set the verbosity level of the output |
| &lt;server name&gt; | either/or | — | The name of the server to access |
| &lt;server IP&gt; | either/or | — | The IP address of the server to access |
| &lt;server role&gt; | either/or | — | Role of the server to access (e.g. web) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx ssh -s mystack lion
$ cx ssh -s mystack 52.65.34.98
$ cx ssh -s mystack web
$ cx ssh --gateway-key ~/.ssh/bastion_key  -s mystack db
{% include references/toolbelt/boilerplate/footer.html %}