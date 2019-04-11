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

<pre class="prettyprint">
rule NoLatest ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:tag)
        .contains("latest") == false
}
</pre>

### Only allow minor version upgrades

<pre class="prettyprint">
rule MySQLVersionCheck ensure {
    fetch("$.spec.template.spec.containers[?(@.name == 'mysql')].image")
		.first
        .as(:image)
        .pick(:tag)
		.as(:semver)
		.satisfies("~> 5.6") == true
}
</pre>

### Enforce filename policies

<pre class="prettyprint">
rule DeploymentFilenamePolicy ensure {
	filename.ext == ".yml" and // extension is yml
	filename.name == fetch("$[?(@['kind'] == 'Deployment')].metadata.name").first and
	filename.path.split("/").last == "deployments"
}
</pre>

### Load Balancer IP is within the range

<pre class="prettyprint">
rule LoadBalancerIPInRange ensure {
	fetch("$.spec[?(@['type'] == 'LoadBalancer')].loadBalancerIP")
		.first
		.as(:ipaddress) in ipaddress("232.12.87.0/24")
}
</pre>

### Namespace is available and not default

<pre class="prettyprint">
rule NoDefaultNamespace ensure {
	fetch("$.metadata.namespace").first == "foobar"
}
</pre>

### No DockerHub images

<pre class="prettyprint">
rule NoDockerHub ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:registry)
		.contains("index.docker.io") == false
}
</pre>

### Only pull images from our private registry

<pre class="prettyprint">
rule PrivateRepoOnly ensure {
    fetch("$.spec.template.spec.containers..image")
        .as(:image)
        .pick(:name)
		.extract("(.*)\/.*", 1) // image name is in the namespace/name format
		.unique == ["acme"]
}
</pre>
