---
layout: post
template: one-col
title: cx stacks clear-caches
categories: references/toolbeltV2
lead: "Stacks Clear Caches command for Cloud66 Toolbelt"
legacy: false
order: 1
tags: ["shell"]
permalink: /:collection/:path
---

[<- Back to index of cx commands](/maestro/references/toolbeltV2.html)

## stacks clear-caches

For improved performance, volatile code caches exist for your stack. It is possible for a those volatile caches to become invalid if you switch branches, change git repository URL, or rebase or force a commit. Since switching branch or changing git repository URL is done via the Cloud 66 interface, your volatile caches will automatically be purged. However, rebasing or forcing a commit doesn't have any association with Cloud 66, so this command can be used to purge the exising volatile caches.

### stacks clear-caches: usage

```
$ cx stacks reboot [-e <environment>]
```

### stacks clear-caches: parameters

|		Parameter 		   	|     Description    |
|| :|
|stack 					   	| Name of your stack |
{:.table}


### stacks clear-caches: examples

```
$ cx stacks listen -s "My Awesome App" -e production
```

You can leave the command by pressing `Ctrl-C` at any time.
