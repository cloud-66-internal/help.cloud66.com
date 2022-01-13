Lists all the gateway servers attached to a Cloud 66 account or organization.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx --org <organization_name> gateways list [--verbose]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--org &lt;organization_name&gt; | no | — | The name of an organization in your Cloud 66 account |
| \--verbose | no | — | Display more detail about the gateways |
{% include references/toolbelt/boilerplate/example.html %}
$ cx --org my-compay gateways list --verbose
{% include references/toolbelt/boilerplate/footer.html %}