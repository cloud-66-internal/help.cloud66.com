Download a managed database backup via the command line. If the backup spans multiple files, the command will automatically concatenate them into a single file.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx backups download --stack <application name> [--download <download directory>] <backup id>
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The name of the application |
| \--directory, -d &lt;download directory&gt; | no | — | The local directory in which to save the downloaded file |
| &lt;backup ID&gt; | yes | — | The backup ID (you can get this using the backup list command) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx backups download -s mystack -d /tmp/backups 23212
{% include references/toolbelt/boilerplate/footer.html %}

#### Note
<div class="notice">
<p>This command only applies to managed backups and not the unmanaged ones.</p>
</div>
