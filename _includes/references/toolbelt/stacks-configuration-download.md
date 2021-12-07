Gets the content of the specified configuration file from the given application and either prints it to screen or saves it as a file. You can find all the types of configuration available on your application using the `stacks configuration list` function.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configuration download --stack <application name> --type <config type> --output <filename>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--type, -t &lt;config type&gt; | yes | — | Type of configuration to download |
| \--output, -o &lt;filename&gt; | no | stdout | Save configuration output to a local file |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configuration download -s my-application -t nginx -o nginx.conf
{% include references/toolbelt/boilerplate/footer.html %}