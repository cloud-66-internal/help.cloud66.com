Deploys a Formation in a Skycap application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx formations deploy --stack <application name> -f <formation name> [--snapshot-uid <UID>] [--use-latest <boolean>] [-w <workflow name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| -f &lt;formation name&gt;  | yes | — | The name of the formation to which the Stencils belong. |
| \--snapshot-uid &lt;UID&gt; | no | — | UID of the snapshot to be used (Use latest for the most recent snapshot) |
| \--use-latest | no | true | Use the snapshot's HEAD gitref (and not the ref stored in the formation) |
| -w &lt;workflow name&gt; | no | — | The name of the workflow to use for the formation deployment |
{% include references/toolbelt/boilerplate/example.html %}
$ formations deploy -s my-skycap-app -f main-formation  --use-latest true -w quick-workflow
{% include references/toolbelt/boilerplate/footer.html %}