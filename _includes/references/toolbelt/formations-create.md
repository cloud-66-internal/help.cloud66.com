Creates a new Formation in the specified Skycap application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ formations create --stack <application name>] --name <formation name> --template-repo <template repo URL> --template-branch <branch name> [--tags <tagA> <tagB>] 
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--name &lt;formation name&gt; | yes | — | The name of the new formation |
| \--template-repo &lt;template repo URL&gt; | yes | — | The URL of the template repository to be used by the new formation |
| \--template-branch &lt;branch name&gt; | yes | — | The branch of the template repository to be used |
| \--tags &lt;tagA&gt; &lt;tagB&gt; | no | — | Tags to attach to the new formation |
{% include references/toolbelt/boilerplate/example.html %}
$ formations create -s my-skycap-app --name new-formation --template-repo "https://my.repo.url/skycap-stencils" --template-branch "main" --tags ver2
{% include references/toolbelt/boilerplate/footer.html %}