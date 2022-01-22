Close a gateway (prevents traffic flowing via the gateway).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx gateways close --name <gateway name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--name &lt;gateway name&gt; | yes | — | The name of the gateway |
{% include references/toolbelt/boilerplate/example.html %}
$ cx gateways close --name aws_bastion
{% include references/toolbelt/boilerplate/footer.html %}