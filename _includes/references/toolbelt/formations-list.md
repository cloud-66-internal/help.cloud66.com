List all the formations of a stack in a Skycap application by name and UID.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx formations list --stack <application name> <formation names>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| &lt;formation names&gt; | no | — | Space separated list of the formations to display |
{% include references/toolbelt/boilerplate/example.html %}
$ cx formations list -s mystack foo bar # only show formations "foo" and "bar"
{% include references/toolbelt/boilerplate/footer.html %}