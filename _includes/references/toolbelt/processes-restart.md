Restarts all processes on the given service and/or server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx processes restart --stack <application name> [--server <server name>] [<process name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt; | no | — | The name of the server to use |
| &lt;process name&gt; | no | — | The name of a process |
{% include references/toolbelt/boilerplate/example.html %}
$ cx processes restart -s mystack a_backend_process
$ cx processes restart -s mystack --server my_server
$ cx processes restart -s mystack --server my_server a_backend_process
{% include references/toolbelt/boilerplate/footer.html %}