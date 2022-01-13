Stops a specific container on a given stack by container ID or name (supports partial IDs and names).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx containers stop --stack <application name> <container ID>|<container name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;container ID&gt; | either\or | — | The ID of the container to stop |
| &lt;container name&gt; | either\or | — | The name of the container to stop |
{% include references/toolbelt/boilerplate/example.html %}
$ cx containers stop -s mystack 2844142cbfc064123777b6be765b3914e43a9e083
$ cx containers stop -s mystack 2844142c
$ cx containers stop -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers stop -s mystack web
{% include references/toolbelt/boilerplate/footer.html %}