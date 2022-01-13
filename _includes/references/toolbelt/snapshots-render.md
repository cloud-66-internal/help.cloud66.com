Renders the requested files for the given formation and snapshot

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ snapshots render --stack <application name> --formation <formation UID> --snapshot <snapshot UID> [--latest] [--files <file name>] [--outdir <directory path>] [--filter <filter name>] [--ignore warnings]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--snapshot &lt;snapshot UID&gt; | yes | — | UID of the snapshot to be used. Use latest to use the most recent snapshot |
| \--formation &lt;formation UID&gt; | yes | — | UID of the formation to be used |
| \--latest | no | — | Use the HEAD for stencils. True by default. If false, it would use the snapshot's gitref |
| \--files &lt;file name&gt; | no | — | The files to render. If not provided all files will be pulled |
| \--outdir &lt;directory path&gt; | no | . | The local directory in which to save the files. Will use the current directory by default |
| \--ignore-errors | no | — | Return anything that can be rendered and ignore the errors |
| \--ignore-warnings | no | — | Return anything that can be rendered and ignores the warnings |
| \--filter &lt;filter name&gt; | no | — | The name of the formation filter to be used during rendering |
{% include references/toolbelt/boilerplate/example.html %}
$ cx snapshots render -s mystack --formation fm-xxxx --snapshot sn-yyyy --latest --files foo.yaml --files bar.yml --ignore-warnings
{% include references/toolbelt/boilerplate/footer.html %}