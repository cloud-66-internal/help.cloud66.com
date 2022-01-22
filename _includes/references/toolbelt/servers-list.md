List details for all the servers used by an application including  name, IP address, server role and the date/time it was created. The `<name>` argument can be a list of server names entered as separate parameters.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx servers list --stack <application name> <server name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| &lt;server name&gt; | no | — | The name of the server(s) to query |
{% include references/toolbelt/boilerplate/example.html %}
$ cx servers list -s mystack
orca         162.243.201.164  [rails web app]  Healthy   Mar 26 11:23
snowleopard  107.170.98.160   [mysql db]       Building  Mar 26 11:23
$ cx servers list -s mystack orca
orca         162.243.201.164  [rails web app]  Healthy   Mar 26 11:23
{% include references/toolbelt/boilerplate/footer.html %}