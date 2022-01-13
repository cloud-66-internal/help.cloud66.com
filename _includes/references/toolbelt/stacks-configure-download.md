Download configuration files such as a *service.yml* or *manifest.yml*. (Maestro only)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configure download --file <filename> --stack <application name> --output <output path>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--file, -f &lt;filename&gt; | yes | — | Name of the config file to download. Accepted values are service.yml and manifest.yml |
| \--output, -o &lt;output path&gt; | no | — | Full path of the output file. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configure download -f service.yml -s myapp -o /c66/config-files/service.yml
{% include references/toolbelt/boilerplate/footer.html %}