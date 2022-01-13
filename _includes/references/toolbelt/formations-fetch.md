Fetches all stencils from a Formation in a Skycap application and downloads them to a local directory.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx formations fetch --stack <application name> -f <formation name> [--outdir <directory path>] [--overwrite <bool>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| -f &lt;formation name&gt; | yes | — | The name of the formation to which the Stencils belong. |
| \--outdir &lt;directory path&gt; | no | ~/cloud66/formations (suffixed by the formation name) | Path of the output directory for the Formation. Will be created if missing. |
| \--overwrite &lt;bool&gt; | no | false | Overwrite existing files in outdir if present. |
{% include references/toolbelt/boilerplate/example.html %}
$ formations fetch -s my-skycap-app -f main-formation --outdir "~/my-formations" --overwrite true
{% include references/toolbelt/boilerplate/footer.html %}