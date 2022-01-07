Sends a restart signal to all application components. This means different things for different components. For a web server, it means a restart of nginx. For an application server, this might be a restart of the worker processes. 

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks restart --stack <application name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks restart -s my-app
{% include references/toolbelt/boilerplate/footer.html %}