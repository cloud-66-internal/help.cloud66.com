---
layout: post
template: one-col
title: cx stacks list
categories: references/toolbeltV2
lead: "Stacks List command for Cloud66 Toolbelt"
legacy: false
order: 1
tags: ["shell"]
permalink: /:collection/:path
---

[<- Back to index of cx commands](/maestro/references/toolbeltV2.html#list-stacks)

## stacks list

Lists all the stacks available to your account.

### stacks list: usage

```
$ cx stacks list [-e <environment>]
```

### stacks list: examples

```
$ cx stacks list
mystack     production   Jan 2 12:34
mystack     staging      Feb 2 12:34
mystack-2   development  Jan 2 12:35

$ cx stacks list mystack-2
mystack-2   development  Jan 2 12:34

$ cx stacks list mystack -e staging -o wide

```