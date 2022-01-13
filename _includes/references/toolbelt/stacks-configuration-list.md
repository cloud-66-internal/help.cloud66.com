List all the available configurations on an application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configuration list --stack <application name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configuration list -s my-app
{% include references/toolbelt/boilerplate/footer.html %}