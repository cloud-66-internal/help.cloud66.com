Prints environment variables (both keys and values) for your application to terminal. If environment variable keys are specified, the list will be limited to those keys. The `--history` option lists any recent changes to each variable.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx env-vars list --stack <application name> <environment variables> [--history]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;environment variables&gt; | yes | — | A space separated list of environment variable keys |
| \--history | no | — | Displays a list of recent changes to each variable |
{% include references/toolbelt/boilerplate/example.html %}
$ cx env-vars list -s mystack
$ cx env-vars list -s mystack RAILS_ENV
$ cx env-vars list -s mystack RAILS_ENV ANOTHER_VARIABLE --history
{% include references/toolbelt/boilerplate/footer.html %}