List the versions of configuration files such as a *service.yml* or *manifest.yml*. (Maestro only)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configure list-versions --file <filename> --stack <application name> --version <file version type>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--file, -o &lt;filename&gt; | yes | — | Name of the config file. Accepted values: <br/>`service.yml`,<br/> `manifest.yml` |
| \--version, -v &lt;file version type&gt; | no | — | Full or partial file version |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configure list-versions -o service.yml -s myapp
{% include references/toolbelt/boilerplate/footer.html %}