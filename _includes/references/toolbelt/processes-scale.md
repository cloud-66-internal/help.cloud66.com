Starts `<count>` processes from the given process definition. `<count>` can be an absolute value like `2` or a relative value like `[+2]` or `[-3]` If server is provided, will start `<count>` processes on that server. If server is not provided, will start `<count>` processes on every server. NOTE: the square brackets are required for relative count values.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx processes scale --stack <application name> [--server <server name>] [--name <process name>] [<count>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt; | no | — | The name of the server on which to scale the process |
| \--name &lt;process name&gt; | yes | — | The name of a process |
| &lt;count&gt; | yes | — | Specifies either an absolute count of processes (3), or a relative change ([+4] or ([-2]) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx processes scale -s mystack --server backend1 --name worker [+5]
$ cx processes scale -s mystack --server backend2 --name worker [-5]
$ cx processes scale -s mystack --server backend3 --name worker 15
$ cx processes scale -s mystack --name worker 2
{% include references/toolbelt/boilerplate/footer.html %}