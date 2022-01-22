Get info for given the service. The list of available services can be obtained through the `services list` command. If the server is provided it will only query the specified server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx services info --stack <application name> [--server <server name>] <service name> 
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server &lt;server name&gt; | no | — | The name of a server to query |
| &lt;service name&gt; | yes | — | The service to query |
{% include references/toolbelt/boilerplate/example.html %}
$ cx services info -s mystack my_web_service
$ cx services info -s mystack a_backend_service
$ cx services info -s mystack --server my_server my_web_service
{% include references/toolbelt/boilerplate/footer.html %}