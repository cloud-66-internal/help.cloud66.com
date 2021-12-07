Creates a new Maestro application based on a service definition (`service.yml`) and an optional application Manifest (`manifest.yml`).

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks create --name <new application name> --service_yaml <service definition>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--name, -n &lt;new application name&gt; | yes | — | Name for the new application |
| \--service_yaml &lt;service definition&gt; | yes | — | The YAML formatted service definition file  |
| \--manifest_yaml, -m | no | — | Manifest definition for the new application (YAML formatted file) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks create --name my_maestro_stack --service_yaml service.yml --manifest_yaml manifest.yml
{% include references/toolbelt/boilerplate/footer.html %}