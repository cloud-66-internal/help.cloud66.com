Promotes the specified replica database server to a standalone master. The replica will be reconfigured as the new standalone DB. Providing the database type is optional and is only necessary for shared servers where we can’t automatically determine the target database type.

<div class="notice notice-warning"><p>⚠️ This action could result in application downtime, it is advisable to choose a low traffic time to perform this action, and to place your application in maintenance mode.</p></div>

The existing master and other replicas will need to be removed after this process as after this the new configuration will have only a single database. You will be able to configure replication again by scaling up new servers. 

In the case of any servers not being accessible during this time, those servers will remain unchanged. It is therefore important to stop/shut down those servers in this case (or to manually stop the DB service on those servers) as having multiple masters in a cluster could cause problems throughout the cluster.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx databases promote-replica --stack <stack name> [--dbtype <database type>] <replica server name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;stack name&gt; | yes | — | Name of your application |
| \--dbtype &lt;database type&gt; | no | — | The database type (`mysql`,`postgresql`,`redis`) |
| &lt;replica server name&gt; | yes | — | Name of replica server to promote to master |
{% include references/toolbelt/boilerplate/example.html %}
$ cx databases promote-replica -s My_Awesome_App my_redis_replication_replica
$ cx databases promote-replica --stack My_Awesome_App --dbtype=mysql my_replica_server_name
{% include references/toolbelt/boilerplate/footer.html %}
