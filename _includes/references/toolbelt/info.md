Shows information about your account, toolbelt and the specified stack or the current directory.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx info --stack <application name --unmanaged
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | no | — | Full or partial name of the application |
| \--unmanaged | no | — | Lists the servers under your cloud account that are NOT in any of your applications. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx info -s my-application --unmanaged
{% include references/toolbelt/boilerplate/footer.html %}