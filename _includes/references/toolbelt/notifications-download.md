Download all the alert settings for a given application as a YAML formatted file.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx notifications download --stack <application name> --file <filename>
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| -stack, -s \<application name\> | yes | — | The name of the application |
| --file, -f \<filename\> | yes | — | The name of the file in which the notification settings will be saved. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx notifications download -s my-stack --file my-stack-alerts.yml
{% include references/toolbelt/boilerplate/footer.html %}