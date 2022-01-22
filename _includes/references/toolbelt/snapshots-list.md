Lists details of the snapshots in a Skycap application, including triggers, snapshot UUID and date/time

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx snapshots list --stack <application name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
{% include references/toolbelt/boilerplate/example.html %}
$ cx snapshots list -s mystack
{% include references/toolbelt/boilerplate/footer.html %}