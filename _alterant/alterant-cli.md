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

Alterant 0.0.1
(c) 2018 Cloud66 Inc.
```


#### Modify

Runs a modifier over the input.

```bash
alterant modify --in input.yml --out output.yml --modifier foo.js
```

To display the output on terminal, omit the `out` flag.

To accept input from the pipe (stdin), use `-` for the `in` flag:

```bash
alterant modify --in - --modifier foo.js
```

To show the difference between the input and the modified output, you can use the `--diff` flag:

```bash
alterant modify --in input.yml --out output.txt --modifier foo.js --diff
```

This saves the diff file in `output.txt`

If you would like to display full stack traces and console output, you can use the `--debug` flag:

```bash
alterant modify --in input.json --modifier foo.js --debug
```

### Debugging

Modifier scripts support `console.log` (but not all normal Javascript `console` methods). You can use `console.log` just as you would in any Javascript file for debug purposes. You will need to run the CLI with the `--debug` flag to see the console output.
