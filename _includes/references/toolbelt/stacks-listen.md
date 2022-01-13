Acts like a `tail` for all the deployment logs for an application (to tail a specific log file, see the function below).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks listen --stack <application name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks listen -s my-app
{% include references/toolbelt/boilerplate/footer.html %}