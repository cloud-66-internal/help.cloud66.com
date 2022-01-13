Attach to a container on the given stack by container ID.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx containers attach --stack <application name> <container ID>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;container ID&gt; | yes | — | The ID of the container to be attached |
{% include references/toolbelt/boilerplate/example.html %}
$ cx containers attach -s mp-app 2844142c
{% include references/toolbelt/boilerplate/footer.html %}
