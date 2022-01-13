Opens the default web browser and opens the web end-point of a given application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx open --stack <application name> <server name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| &lt;server name&gt; | no | — | The name of the web server to query |
{% include references/toolbelt/boilerplate/example.html %}
$ cx open lion
$ cx open -s mystack
$ cx open -s mystack lion
{% include references/toolbelt/boilerplate/footer.html %}