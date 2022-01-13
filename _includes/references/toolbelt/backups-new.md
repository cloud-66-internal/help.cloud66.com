Creates a new database backup task for an application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
cx backups new --stack <application name> --dbtypes postgresql --frequency <schedule> --gzip <bool> --exclude-tables <table name> --run-on-replica <bool> --backup-type <type>
{% include references/toolbelt/boilerplate/args.html %}
| Parameter | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | Yes | — | Name of your application |
| \--dbtypes &lt;type&gt; | No | `all` | Comma separated list of Database types which need backup tasks. (`all`, `mysql`, `postgresql`, `mongodb`, `redis`) |
| \--frequency &lt;schedule&gt; | No | `0 */1 * * *` | Frequency of backup task in cron schedule format |
| \--keep &lt;number&gt; | No | `100` | Number of previous backups to keep |
| \--gzip &lt;bool&gt; | No | `true` | Compress your backups with gzip |
| \--exclude-tables &lt;table name&gt; | No | — | Tables that must be excluded from the backup |
| \--run-on-replica &lt;bool&gt; | No | `true` | Run backup task on replica server if available |
| \--backup-type &lt;type&gt; | No | `text` | Specify the type of backup to perform. Acceptable values are `binary` and `text`. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx backups new -s mystack	--dbtypes postgresql --frequency="0 */1 * * *" --gzip true --exclude-tables my_log_table --run-on-replica false --backup-type text
{% include references/toolbelt/boilerplate/footer.html %}

#### Note 
<div class="notice">
<p>This command only applies to managed backups and not the unmanaged ones.</p>
</div>
