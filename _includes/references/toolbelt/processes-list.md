List the details of the processes running on an application or a server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx processes list --stack <application name> [--server <server name>] [--name <process name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt; | no | — | The name of the server to query |
| \--name &lt;process name&gt; | no | — | The name of a process |
{% include references/toolbelt/boilerplate/example.html %}
$ cx processes list -s mystack
$ cx processes list -s mystack --server orca
$ cx processes list -s mystack --name worker
$ cx processes list -s mystack --server orca --name worker
{% include references/toolbelt/boilerplate/footer.html %}