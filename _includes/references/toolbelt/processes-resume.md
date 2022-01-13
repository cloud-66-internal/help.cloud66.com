Resumes all paused processes on the given service and/or server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx processes resume --stack <application name> [--server <server name>] <process name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt; | no | — | The name of the server to query |
| &lt;process name&gt; | no | — | The name of a process |
{% include references/toolbelt/boilerplate/example.html %}
$ cx processes resume -s mystack a_backend_process
$ cx processes resume -s mystack --server my_server
$ cx processes resume -s mystack --server my_server a_backend_process
{% include references/toolbelt/boilerplate/footer.html %}