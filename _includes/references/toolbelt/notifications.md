## notifications download

Download all the alert settings for a given application as a YAML formatted file.

**Usage**

```bash
$ cx notifications download --stack <application name> --file <filename>
```

**Arguments**

| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| -stack, -s <application name> | yes | — | The name of the application |
| --file, -f <filename> | yes | — | The name of the file in which the notification settings will be saved. |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx notifications download -s my-stack --file my-stack-alerts.yml
```

## notifications upload

Uploads notifications in a YAML formatted file. Settings in the file will replace any existing settings. If an application group is specified, all of the apps in the group will be updated.

**Usage**

```bash
$ cx notifications upload [--stack <application name> | --application-group <group name>] --file <filename>
```

**Arguments**

| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| -stack, -s <application name> | either/or | — | The name of the application to be updated  |
| --application-group, -a <group name> | either/or | — | The name of the application group to be updated |
| --file, -f <filename> | yes | — | The name of the file containing the notification settings that will be uploaded |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx notifications upload -a production-group -f my-notification-settings.yml
```