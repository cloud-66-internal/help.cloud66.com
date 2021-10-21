### Profile commands

```shell
cx config create NAME [arguments]
cx config use NAME
cx config rename OLD_NAME NEW_NAME
cx config delete NAME
cx config list
cx config show NAME
cx config update NAME [arguments]
```

**Arguments**

`--org ORGANIZATION_NAME` 

The following arguments are used for Cloud 66 Enterprise

```shell
--client-id
--client-secret
--api-url
--base-url
--faye-endpoint
```

### Usage

#### To set up a profile:

1. Run `cx config create NAME` where "name" is your chosen (arbitrary) profile name
2. Run `cx config use NAME` to switch to the new profile and initialize it by running  `cx stacks list` 
3. Authenticate using your browser (be sure to log into the correct account)

For more detailed help on installation please refer to our [Getting Started](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) guide.

#### Note
<div class="notice"><p>
You always have a <code>default</code> profile which cannot be deleted or renamed. </p></div>

#### Switching between profiles

To switch between profiles, use `cx config use NAME`

All commands from that point onwards will run against the `NAME` profile. This is persisted between different terminal sessions until it's changed.

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
