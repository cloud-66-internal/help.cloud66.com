Lists all the settings applicable to the given server. It also shows the key, value and the readonly flag for each setting. Settings can be a list of multiple <setting> arguments. To change each server setting, use the server-set command.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx servers settings list --stack <application name> --server <server name> <setting>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server &lt;server name&gt; | yes | — | The name of the server to query |
| &lt;setting&gt; | no | — | The specific setting(s) to fetch (supports multiples) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx servers settings list -s mystack --server lion
server.name lion readonly
disk.space.alert.threshold  80  read/write

$ cx servers settings list -s mystack --server db server.name
server.name tiger readonly
{% include references/toolbelt/boilerplate/footer.html %}