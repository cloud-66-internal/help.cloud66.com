Lists all the settings for the given application, including the key, value and readonly flag for each setting. You can use `<setting>` multiples times to query multiple services.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx settings list --stack <application name> <setting>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| &lt;setting&gt; | no | — | The setting(s) to query (can be used multiple times) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx settings list -s mystack
stack.name mystack readonly
git.branch master read/write
git.repository git://git@github.com:cloud66-samples/rails.git  read/write

$ cx settings list -s mystack git.branch
git.branch master read/write
{% include references/toolbelt/boilerplate/footer.html %}