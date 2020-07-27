---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/copper
label: Copper
title: Copper Examples
lead: Common use cases and examples for Copper
legacy: false
permalink: /:collection/:path:output_ext
order : 3
---

These are some examples for common use cases of Copper and are provided to help with understanding how to use Copper DSL with Kubernetes configuration files.

### Ban use of `latest` as image tag

```js
rule NoLatest ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:tag)
        .contains("latest") == false
}
```

### Only allow minor version upgrades

```js
rule MySQLVersionCheck ensure {
    fetch("$.spec.template.spec.containers[?(@.name == 'mysql')].image")
		.first
        .as(:image)
        .pick(:tag)
		.as(:semver)
		.satisfies("~> 5.6") == true
}
```

### Enforce filename policies

```js
rule DeploymentFilenamePolicy ensure {
	filename.ext == ".yml" and // extension is yml
	filename.name == fetch("$[?(@['kind'] == 'Deployment')].metadata.name").first and
	filename.path.split("/").last == "deployments"
}
```

### Load Balancer IP is within the range

```js
rule LoadBalancerIPInRange ensure {
	fetch("$.spec[?(@['type'] == 'LoadBalancer')].loadBalancerIP")
		.first
		.as(:ipaddress) in ipaddress("232.12.87.0/24")
}
```

### Namespace is available and not default

```js
rule NoDefaultNamespace ensure {
	fetch("$.metadata.namespace").first == "foobar"
}
```

### No DockerHub images

```js
rule NoDockerHub ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:registry)
		.contains("index.docker.io") == false
}
```

### Only pull images from our private registry

```js
rule PrivateRepoOnly ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:name)
		.extract("(.*)\/.*", 1) // image name is in the namespace/name format
		.unique == ["acme"]
}
```
