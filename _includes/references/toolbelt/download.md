Use this command to download a copy of file from the remote server to your local computer. If you don’t specify a target directory, the file will be downloaded to your current local directory.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx download --stack <application name> --server <server name> <path to source file> [<target directory>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| \--server &lt;server name&gt; | yes | — | Name of the server which contains the file |
| &lt;path to source file&gt; | yes | — | The path to the file on the server |
| &lt;target directory&gt; | no | — | The path to the local directory in which the file will be saved |
{% include references/toolbelt/boilerplate/example.html %}
$ cx download -s "My Awesome App" --server web /tmp/file.txt /tmp/file.txt
{% include references/toolbelt/boilerplate/footer.html %}