Connect to a container (by container name) and print the `STDOUT` output stream of the container process. This is roughly equivalent to tailing the logs of a container. 

If you need to connect to a container in order to execute commands, you should use the [cx run](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#run) command and specify the name of the container.

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
