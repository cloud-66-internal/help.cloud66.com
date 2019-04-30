---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/alterant
title: Alterant CLI
label: Alterant
legacy: false
permalink: /:collection/:path:output_ext
order: 5
---

## Using Alterant CLI

Using Alterant CLI is easy. You can pass in the input file as a JSON or YAML file or pipe it into Alterant. Output can be produced in JSON or YAML or displayed on the screen.

### Commands

#### Version

Shows the alterant version

```bash
$ alterant version
stable/2.0.0
```

The first part is the channel. The second part is the version. Alterant is released on `stable` and `edge` channels.

#### Modify

Runs a modifier over the input.

```bash
alterant modify --in input.yml --out output.yml --modifier foo.js
```

To display the output on terminal, omit the `out` flag.

To accept input from the pipe (stdin), use `-` for the `in` flag:

```bash
cat somefile | alterant modify --in - --modifier foo.js
```

