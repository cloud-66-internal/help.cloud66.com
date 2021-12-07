Opens a gateway for use with Cloud 66 for a specified amount of time (TTL).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx gateways open --name <gateway name> --key <path/to/gateway/key/file>  --ttl <time to live>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--name &lt;gateway name&gt; | yes | — | The name of the gateway |
| \--key &lt;path/to/gateway/key/file&gt; | yes | — | The path to the gateway key file on your local machine |
| \--ttl &lt;time to live&gt; | yes | — | The length of time the gateway will remain open. For example  1h, 30m, 30s |
{% include references/toolbelt/boilerplate/example.html %}
$ cx gateways open aws_bastion --key /tmp/gateway.pem --ttl 45m
{% include references/toolbelt/boilerplate/footer.html %}