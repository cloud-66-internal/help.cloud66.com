Reboot a specific server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx servers reboot --stack <application name> --server <server name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server &lt;server name&gt; | yes | — | The name of the server to reboot |
{% include references/toolbelt/boilerplate/example.html %}
$ cx server reboot --stack my-app --server lion
{% include references/toolbelt/boilerplate/footer.html %}