Updates the content of the specified configuration type on the stack and (optionally) applies it. You can find all the types of configuration available on your application using the `stacks configuration list` function.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configuration upload --stack <application name> --type <config type> --source <source file> --no-apply --commit-message <message>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--type, -t &lt;config type&gt; | yes | — | Type of configuration to upload |
| \--source &lt;source file&gt; | yes | — | The source file containing the configuration you wish to upload |
| \--no-apply | no | — | Do not automatically apply the configuration changes to your servers (default behaviour is to apply changes immediately) |
| \--commit-message &lt;message&gt; | no | — | A message to associate with the configuration update |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configuration upload -s my-app -t nginx --source nginx.conf --no-apply --commit-message "changes to error pages"
{% include references/toolbelt/boilerplate/footer.html %}