Restarts a particular container on a given stack by container ID or name (supports partial IDs and names). 

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx containers restart --stack <application name> <container ID>|<container name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;container ID&gt; | either\or | — | The ID of the container to restart |
| &lt;container name&gt; | either\or | — | The name of the container to restart |
{% include references/toolbelt/boilerplate/example.html %}
$ cx containers restart -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers restart -s mystack 2844142c
$ cx containers restart -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers restart -s mystack web
{% include references/toolbelt/boilerplate/footer.html %}