---
layout: post
template: one-col
title: Cloud 66 Toolbelt V2
categories: references
lead: "V2 of Reference guide for Cloud 66 Toolbelt commands"
legacy: false
order: 1
tags: ["shell"]
permalink: /:collection/:path
---

# What is toolbelt?

The Cloud 66 toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line, and is available for Linux, Mac and Windows.

[Install and get started with Toolbelt](/maestro/quickstarts/using-cloud66-toolbelt.html).

<br/>

# Stacks

## List stacks

Lists all the stacks available to your account.

*Usage:* `$ cx stacks list [-e <environment>]`

Detailed help: [Examples](/maestro/references/toolbeltV2/stacks-list.html#stacks-list-examples)

## Reboot stacks

Reboots the servers used by your stack(s).

*Usage:* `$ cx stacks reboot [-e <environment>]`

Detailed help: [Parameters](/maestro/references/toolbeltV2/stacks-reboot.html#stacks-reboot-parameters) / [Examples](/maestro/references/toolbeltV2/stacks-reboot.html#stacks-reboot-examples)


## Clear code caches

Clears all volatile code caches for your stack.

*Usage:* `$ cx stacks clear-caches [-s <stack>]`

Detailed help: [Explanation](/maestro/references/toolbeltV2/stacks-clear-caches.html) / [Parameters](/maestro/references/toolbeltV2/stacks-clear-caches.html#stacks-clear-caches-parameters)

## Manage your configuration files

List, download and upload of configuration files such as a _service.yml_ or _manifest.yml_.

*Usage:* `$ cx stacks configure list [-s <stack>]`

Detailed help: [Parameters](/maestro/references/toolbeltV2/stacks-configure.html#stacks-clear-caches-parameters)

<br/>

# Redeploy

Triggers the deployment of a stack from the command line. Alias of `stacks redeploy` command. 

*Usage:* `$ cx redeploy [-s <stack>] [-y] [--git-ref <git_ref>] [--service <service>] [--service <service>] [--service <service>]`

Detailed help: [Parameters](/maestro/references/toolbeltV2/redeploy.html#redeploy-parameters) / [Examples](/maestro/references/toolbeltV2/redeploy.html#redeploy-examples)

