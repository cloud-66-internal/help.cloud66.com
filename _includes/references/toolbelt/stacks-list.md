Lists applications. Shows the application name, environment, and last deploy time. You can query (multiple) applications by name - but the command will display all applications by default.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks list [<application name>] [--output <output style>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| &lt;application name&gt; | no | — | List the details for specific application(s) |
| \--output, -o &lt;output style&gt; | yes | standard | Tailor the output view. Options are standard or wide |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks list
		mystack     production   Jan 2 12:34
		mystack     staging      Feb 2 12:34
		mystack-2   development  Jan 2 12:35

$ cx stacks list mystack-2
		mystack-2   development  Jan 2 12:34
{% include references/toolbelt/boilerplate/footer.html %}