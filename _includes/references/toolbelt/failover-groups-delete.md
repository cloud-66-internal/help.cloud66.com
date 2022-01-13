Deletes an existing Failover Group from a Cloud 66 account.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx failover-groups delete --uid <failover UID>
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| --uid \<failover UID\> | yes | — | The UID of the Failover Group to be deleted. |
{: .table .table-bordered .table-striped}
{% include references/toolbelt/boilerplate/example.html %}
$ cx failover-groups delete --uid "5999b763474b0eafa5fafb64bff0ba80"
{% include references/toolbelt/boilerplate/footer.html %}