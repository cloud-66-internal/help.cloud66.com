Commits the specified stencil(s) to the application's template repository with a commit message.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx formations commit --stack <application name> -f <formation name> --stencil <stencil name> | --dir <directory path> --message <your commit message> [--default-folders]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| -f &lt;formation name&gt; | yes | — | The name of the formation to which the stencils belong. |
| \--stencil &lt;stencil name&gt; | either/or | — | A single stencil file to commit. Cannot be used alongside --dir |
| \--dir &lt;directory path&gt; | either/or | — | Directory holding the formation stencils. Cannot be used alongside --stencil |
| \--message &lt;your commit message&gt; | yes | — | The commit message |
| \--default-folders | no | — | Use ~/cloud66/formations with a formation name suffix as the dir |
{% include references/toolbelt/boilerplate/example.html %}
$ cx formations commit -s my-skycap-app -f main-formation --stencil app-template-1 --message "updates to structure"
$ cx formations commit -s my-skycap-app --formation main-formation --dir stencils_for_editing --message "edited variables"
{% include references/toolbelt/boilerplate/footer.html %}