---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/alterant
title: Getting Started with Alterant
label: Alterant
legacy: false
permalink: /:collection/:path:output_ext
order: 2
---

## Installing Alterant

Alterant is available as a single executable. You can install the latest Alterant from https://github.com/cloud66-oss/alterant/releases/latest

## Basics

Alterant is very simple to use. Configuration file (YAML) comes in, a Javascript "modifier" is applied to it to modify it and the output is generated in YAML format.

### Writing your first modifier script

Modifiers are written in Javascript. While the language is Javascript, only the base JS libraries are available (no file access, no IO control) to allow potentially unsafe scripts run on a CI server for example. There are a few helpers provided by Alterant to help with writing modifiers. The first one is `$`. `$` is the input document that's passed into Alterant. Let's see it in an example:

```yaml
foo:
  bar: ham
```

Let's save this as `input.yml`.

With the above YAML used as input, `$` will be the entire document. This means `$.foo.bar` will be `ham`. Now let's make a change to the document:

<pre class="prettyprint">
$$.forEach(function($) {
	$.foo.bar = "eggs"
});
</pre>

Save the above script as `my_mod.js`.

Now, you can apply the modifier to the input:

```bash
$ alterant modify --in input.yml --modifier my_mod.js
---
foo:
  bar: eggs
```

As you can see, the input configuration file is loaded into a Javascript object called `$` and given to your modifier script. By the end of the process, Alterant converts `$` into a YAML file and writes the output.

### A second example

Using the previous input, let's write a modifier to add a new node to the `foo` array:

<pre class="prettyprint">
$$.forEach(function($) {
	$.foo.push({ fuzz: "fish" })
});
</pre>

This will generate this output:

```yaml
foo:
  bar: ham
  fuzz: fish
```

There is a lot more you can do with Alterant, see [some examples](/alterant/examples.html), or jump right into learning about [Alterant CLI](/alterant/alterant-cli.html).
