Pauses all processes for the given service and/or server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx processes pause --stack <application name> [--server <server name>] [<process name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt; | no | — | The name of the server to query |
| &lt;process name&gt; | no | — | The name of a specific process to be paused |
{% include references/toolbelt/boilerplate/example.html %}
$ cx processes pause -s mystack a_backend_process
$ cx processes pause -s mystack --server my_server
$ cx processes pause -s mystack --server my_server a_backend_process
{% include references/toolbelt/boilerplate/footer.html %}