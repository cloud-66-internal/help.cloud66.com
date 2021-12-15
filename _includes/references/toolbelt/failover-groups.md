## failover-groups list

Lists the Failover Groups for a Cloud 66 account. Info includes the Failover Group ID, address, attached applications and current active application.

**Usage**

```bash
$ cx failover-groups list [--output <view>]
```

**Arguments**

| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| --output, -o \<view\> | no | standard | Tailor the output view (standard or wide) |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx failover-groups list -o wide
```

## failover-groups add

Adds a new Failover Group to a Cloud 66 account. You can create an empty Failover Group with neither primary nor secondary app set.

**Usage**

```bash
$ cx failover-group add [--primary <primary app>] [--secondary <secondary app>] [--current <current app>] [--no-primary] [--no-secondary]

```

**Arguments**

| Argument | Required? | Default | Description |
| --- | --- | --- | --- |
| --primary, -p \<primary app\> | no | — | The name of the application which should be set as "primary" in the Failover Group |
| --secondary, -s \<secondary app\> | no | — | The name of the application which should be set as "secondary" in the Failover Group |
| --current \<current app\> | no | -- | Sets the Failover Group to point at either the `primary` app - or the `secondary` app |
| --no-primary | no | — | Create a Failover Group with no primary application |
| --no-secondary | no | — | Create a Failover Group with no secondary application |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx failover-group add -p my-main-app -s my-backup-app
```

## failover-groups update

Updates an existing Failover Group on a Cloud 66 account. 

**Usage**

```bash
$ cx failover-group update --uid <failover UID> [--primary <primary app>] [--secondary <secondary app>] [--current <app pointer>] [--no-primary] [--no-secondary]

```

**Arguments**

| Argument | Required? | Default | Description |
| --- | --- | --- | --- |
| --uid <failover UID> | yes | — | The UID of the Failover Group to be updated. |
| --primary, -p \<primary app\> | either/or | — | The name of the application which should be set as "primary" in the Failover Group. (The current value will not be updated if this is not specified) |
| --secondary, -s \<secondary app\> | either/or | — | The name of the application which should be set as "secondary" in the Failover Group. (The current value will not be updated if this is not specified) |
| --current \<current app\> | no | — | Sets the Failover Group to point at either the `primary` app - or the `secondary` app |
| --no-primary | no | — | Remove the current primary application from the Failover Group |
| --no-secondary | no | — | Remove the current secondary application from the Failover Group |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx failover-group update --uid "5999b763474b0eafa5fafb64bff0ba80" -p my-main-app -s my-backup-app --current 2
```

## failover-groups delete

Deletes an existing Failover Group from a Cloud 66 account.

**Usage**

```bash
$ cx failover-groups delete --uid <failover UID>
```

**Arguments**

| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| --uid \<failover UID\> | yes | — | The UID of the Failover Group to be deleted. |
{: .table .table-bordered .table-striped}

**Example**

```bash
$ cx failover-groups delete --uid "5999b763474b0eafa5fafb64bff0ba80"
```