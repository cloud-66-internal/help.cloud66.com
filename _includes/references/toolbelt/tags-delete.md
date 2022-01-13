Remove tags from a given entity.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx tags delete --entity <entity type> --id <entity ID> --tags <tag>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--entity &lt;entity type&gt; | yes | — | The type of the entity |
| \--id &lt;entity ID&gt; | yes | — | The id of the entity |
| \--tags &lt;tag&gt; | yes | — | Tags to remove from the given entity (can be multiple) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx tags delete --entity stack --id 45 --tags buzz --tags fuzz
{% include references/toolbelt/boilerplate/footer.html %}