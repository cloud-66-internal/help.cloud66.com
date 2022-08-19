Lists all the containers running on an application or server (depending on your parameters).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx containers list --stack <application name> [--server <server name>][--environment <environment name>][--verbose]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| \--server &lt;server name&gt; | no | — | The server to query |
| \--environment &lt;environment name&gt; | no | — | The application environment |
| \--verbose | no | — | Show more detailed information about each container |
{% include references/toolbelt/boilerplate/example.html %}
$ cx containers list -s mystack
$ cx containers list -s mystack --server orca
$ cx containers list -s mystack --verbose --server orca
{% include references/toolbelt/boilerplate/footer.html %}