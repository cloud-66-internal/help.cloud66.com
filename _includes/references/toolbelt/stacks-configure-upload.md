Upload configuration files such as a *service.yml* or *manifest.yml*. (Maestro only)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks configure upload --file <filename> --stack <application name> --comments <comment>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--file, -f &lt;filename&gt; | yes | — | Name of the config file. Accepted values are service.yml and manifest.yml |
| \--comments, -c &lt;comment&gt; | yes | — | A brief description of your changes |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks configure upload -f service.yml -s myapp -c "updates to ports"
{% include references/toolbelt/boilerplate/footer.html %}