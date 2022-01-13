Uploads notifications in a YAML formatted file. Settings in the file will replace any existing settings. If an application group is specified, all of the apps in the group will be updated.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx notifications upload [--stack <application name> | --application-group <group name>] --file <filename>
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| -stack, -s \<application name\> | either/or | — | The name of the application to be updated  |
| --application-group, -a \<group name\> | either/or | — | The name of the application group to be updated |
| --file, -f \<filename\> | yes | — | The name of the file containing the notification settings that will be uploaded |
{% include references/toolbelt/boilerplate/example.html %}
$ cx notifications upload -a production-group -f my-notification-settings.yml
{% include references/toolbelt/boilerplate/footer.html %}