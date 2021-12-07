Adds (or updates) a single environment variables for your application. You can use the `--apply-strategy` option to specify when Cloud 66 will apply the change in environment variables to your servers. The default is `immediately`.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx env-vars set --stack <application name> [--apply-strategy] <key> <value> 
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;key&gt; | yes | — | The KEY for the env-var that will be added or updated |
| &lt;value&gt; | yes | — | The value assigned to the KEY |
| \--apply strategy  | no | immediately | When the changes will be applied. Options are immediately, deployment |
{% include references/toolbelt/boilerplate/example.html %}
$ cx env-vars set -s mystack FIRST_VAR=123
$ cx env-vars set -s mystack SECOND_VAR='this value has spaces in it'
$ cx env-vars set -s mystack --apply-strategy immediately THIRD_VAR='value-applied-now'
$ cx env-vars set -s mystack --apply-strategy deployment FOURTH_VAR='value-after-deployment'
{% include references/toolbelt/boilerplate/footer.html %}