Starts `<count>` containers for the given service across the stack. If `<count>` is an absolute value like `2`, then that will be the total of `<count>` containers across the application. If `<count>` is a relative value like `[+2]` or `[-3]`, then the current total count of containers across the application will be changed by `<count>`. NOTE: the square brackets are required for relative count values.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx services scale --stack <application name> <service name> <count>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| &lt;service name&gt; | yes | — | The service to restart |
| &lt;count&gt; | yes | — | Specifies either an absolute count of containers (3), or a relative change ([+4] or ([-2]) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx services scale -s mystack my_web_service 1
$ cx services scale -s mystack a_backend_service [+5]
$ cx services scale -s mystack a_backend_service [-2]
{% include references/toolbelt/boilerplate/footer.html %}