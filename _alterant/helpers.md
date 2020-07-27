---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/alterant
title: Alterant Helpers
label: Alterant
legacy: false
permalink: /:collection/:path:output_ext
order: 4
---

## Helpers

Alterant comes with a set of helpers that make it easier to read, parse and modify configuration files, especially Kubernetes files. Here is a list of Alterant helpers. 

### YamlReader

YamlReader loads a YAML file into an JSON string which can be used in the modifier.

```js
var data = JSON.parse(YamlReader("foo.yaml"));
```

YamlReader only looks in the context folder (where the input file is located).

### JsonReader

JsonReader loads a JSON file into an JSON string which can be used in the modifier.

```js
var data = JSON.parse(JsonReader("foo.json"));
```

JsonReader only looks in the context folder (where the input file is located).

### DockerImage

DockerImage contains helpers for processing Docker images.

```js
var image = new DockerImage("ubuntu");
```

#### Attributes

- `fqin`: Fully Qualified Image Name (with schema, full URL, name and tag)
- `registry`: Registry name
- `registry_url`: Registry URL
- `name`: Image name
- `tag`: Image tag

`DockerImage` will fill in the missing data based on Docker image conventions (like `latest` when no tag is present, `index.docker.io` as the registry if none is present and more)

#### Methods

`address()`

Returns a string that has all the constituents of the image which can be used in a modifier.

### Containers

Containers loads a container from a Kubernetes container definition and provides helpers to extract information about those.

#### Attributes

- `containers`: List of all containers

#### Methods

`by_name(string)`

Finds a specific container by its name.
