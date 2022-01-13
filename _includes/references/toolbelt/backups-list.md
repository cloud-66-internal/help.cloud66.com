Lists all the managed backups of an application grouped by their database type and/or backup schedule.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx backups list --stack <application name> --latest 
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The name of the application |
| \--dbtypes &lt;type&gt; | no | — | Database type to be listed. (all, mysql, postgresql, mongodb, redis) |
| \--latest, -l | yes | — | List the latest backup |
{% include references/toolbelt/boilerplate/example.html %}
$ cx backups list -s "My Awesome App" --dbtypes mysql --latest
{% include references/toolbelt/boilerplate/footer.html %}