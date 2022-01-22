Adds a new Failover Group to a Cloud 66 account. You can create an empty Failover Group with neither primary nor secondary app set.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx failover-group add [--primary <primary app>] [--secondary <secondary app>] [--current <current app>] [--no-primary] [--no-secondary]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
| --- | --- | --- | --- |
| --primary, -p \<primary app\> | no | — | The name of the application which should be set as "primary" in the Failover Group |
| --secondary, -s \<secondary app\> | no | — | The name of the application which should be set as "secondary" in the Failover Group |
| --current \<current app\> | no | -- | Sets the Failover Group to point at either the `primary` app - or the `secondary` app |
| --no-primary | no | — | Create a Failover Group with no primary application |
| --no-secondary | no | — | Create a Failover Group with no secondary application |
{: .table .table-bordered .table-striped}
{% include references/toolbelt/boilerplate/example.html %}
$ cx failover-group add -p my-main-app -s my-backup-app
{% include references/toolbelt/boilerplate/footer.html %}