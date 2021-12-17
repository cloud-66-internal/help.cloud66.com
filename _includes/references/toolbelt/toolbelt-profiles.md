## Overviews

You can configure your Toolbelt to work with multiple Cloud 66 accounts and/or organizations using configuration profiles.

## Configuration profile commands

### config create

Creates a new configuration profile

```shell
$ cx config create <name> [--org <org name>]
```
### config use

Switches to using the named configuration profile.

```shell
$ cx config use <name>
```

### config rename

Renames an existing configuration profile.

```shell
$ cx config rename <old name> <new name>
```

### config delete

Delete a configuration profile.

```shell
$ cx config delete <name>
```

### config list

Lists all your configuration profiles.

```shell
$ cx config list
```

### config show

Show the details for a profile

```shell
$ cx config show <name>
```

### config update

Set a configuration profile to point to an organization.

```shell
cx config update NAME [--org <org name>]
```

## Setting up a profile:

1. Run `cx config create <name>` where `<name>` is your chosen profile name
2. Run `cx config use <name>` to switch to the new profile and initialize it by running  `cx stacks list` 
3. Authenticate using your browser (be sure to log into the correct account)

For more detailed help on installation please refer to our [Getting Started](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) guide.

<div class="notice"><p>
You always have a <code>default</code> profile which cannot be deleted or renamed. </p></div>

## Switching between profiles

To switch between profiles, use `cx config use <name>`

All commands from that point onwards will run against the `<name>` profile. This is persisted between different terminal sessions until it's changed.

#### Setting Profile per command

If you would like to run a command with a different profile other than the current profile, you can use the `--profile` argument with all commands:

```shell
cx --profile NAME stacks list
```

#### Using profiles with organizations

When you create a profile you can specify the organization to which this new profile should be linked. For example:

```shell
cx config create hobby --org my_private_sandbox
```

...will create a profile named "hobby" that is linked to a Cloud 66 organization named "my_private_sandbox".

If you're unsure about the name of an organization you can run the `cx info` command and looking at the `Name` field. You can also see this by logging into your Dashboard, visiting Account Settings and clicking on Organisations in the Account panel on the left. 
