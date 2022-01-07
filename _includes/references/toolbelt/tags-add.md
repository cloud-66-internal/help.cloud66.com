Add tags to a given entity.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx tags add --entity <entity type> --id <entity ID> --tags <tag>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--entity &lt;entity type&gt; | yes | — | The type of the entity |
| \--id &lt;entity ID&gt; | yes | — | The id of the entity |
| \--tags &lt;tag&gt; | yes | — | Tags to add to the given entity (can be multiple) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx tags add --entity stack --id 12 --tags foo --tags bar
{% include references/toolbelt/boilerplate/footer.html %}