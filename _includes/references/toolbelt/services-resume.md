Resumes all the containers from the given service that were previously paused. The list of available  services can be obtained through the `list services` command. If <server name> is provided it will query only the specified server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx services resume --stack <application name> [--server <server name>] <service name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--server &lt;server name&gt; | no | — | The name of a server to query |
| &lt;service name&gt; | yes | — | The service to resume |
{% include references/toolbelt/boilerplate/example.html %}
$ cx services resume -s mystack my_web_service
$ cx services resume -s mystack a_backend_service
$ cx services resume -s mystack --server my_server my_web_service
{% include references/toolbelt/boilerplate/footer.html %}