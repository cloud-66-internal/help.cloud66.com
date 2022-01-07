Lists all automated (scheduled) jobs on an application or a server.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx jobs list --stack <application name> --server <server name>|<server ip>|<server role> --service <service name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; | no | — | The name, IP address or role of the server. |
| \--service &lt;service name&gt; | no | — | The name of the service  |
{% include references/toolbelt/boilerplate/example.html %}
$ cx jobs list -s my-app
$ cx jobs list -s my-app --server orca
$ cx jobs list -s my-app --server 168.123.448.56 --service web
$ cx jobs list -s my-app --service web
{% include references/toolbelt/boilerplate/footer.html %}