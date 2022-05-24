Re-syncs the specified replica database server with its master database server. From time-to-time your replica database may go out of sync with its master. This action attempts to re-sync your specified replica server. This can happen depending on many factors (such as DB size, frequency of change, networking between servers etc).

The server provided must have already been configured as a replication replica via the Cloud 66 UI. Providing the database type is optional and is only necessary for shared servers where we can’t automatically determine the target database type.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx databases resync-replica --stack <application name> --dbtype <database type> <replica server name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of your application |
| &lt;replica server name&gt; | yes | — | Name of replica server to be resynced with master |
| \--dbtype &lt;database type&gt; | no | — | The database type (`mysql`,`postgresql`) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx databases resync-replica -s My_Awesome_App my_replica_server_name
$ cx databases resync-replicas -s My_Awesome_App --dbtype=postgresql my_replica_server_name
{% include references/toolbelt/boilerplate/footer.html %}