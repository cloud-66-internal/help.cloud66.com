Applies the latest configuration to an application. You can find all the types of configuration available on your application using the `stacks configuration list` function.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configuration apply --stack <application name> --type <config type>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--type, -t &lt;config type&gt; | yes | — | Type of configuration to apply |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configuration apply -s my-application -t nginx
{% include references/toolbelt/boilerplate/footer.html %}