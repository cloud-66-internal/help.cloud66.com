List all the services and running containers of a whole application or a specific server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx services list --stack <application name> [--server <server name>] [<service name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server &lt;server name&gt; | no | — | The name of a server to query |
| &lt;service name&gt; | no | — | The service to query |
{% include references/toolbelt/boilerplate/example.html %}
$ cx services list -s mystack
$ cx services list -s mystack --server orca
$ cx services list -s mystack --server orca --service web
$ cx services list -s mystack --service web
{% include references/toolbelt/boilerplate/footer.html %}