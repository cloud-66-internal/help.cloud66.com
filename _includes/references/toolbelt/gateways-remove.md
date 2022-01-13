Remove a gateway from a Cloud 66 account.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx gateways remove --name <gateway name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--name &lt;gateway name&gt; | yes | — | The name of the gateway |
{% include references/toolbelt/boilerplate/example.html %}
$ cx gateways remove --name aws_bastion
{% include references/toolbelt/boilerplate/footer.html %}