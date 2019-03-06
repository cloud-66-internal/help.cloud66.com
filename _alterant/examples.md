---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/alterant
title: Alterant Examples
label: Alterant
legacy: false
permalink: /:collection/:path
order: 3
---

## Using Alterant to change Kubernetes configuration files

We built Alterant to make changes to Kubernetes configuration files in a consistent and transparent way. Here are some examples of how you can use Alterant to do the same.

### Add a sidecar to a pod

This scripts and add sidecar to a pod in the Deployment.

<pre class="prettyprint">
if ($.kind == 'Deployment') {
    var containers = $.spec.template.spec.containers
    if (containers.length == 1) {
        sidecar = { "image": "sidecar_image:latest", "name": "my-sidecar" }
        containers.push(sidecar)
    }
}
</pre>

### Change the port of a pod

Sometimes you might want to "highjack" the traffic coming into a pod. For example you might want to do this to inject a reverse proxy into the flow.

<pre class="prettyprint">
var web_container = new Containers($.spec.template.spec.containers).by_name("web");
var ports = [{ containerPort: 81 }]
web_container.ports = ports
</pre>

As you can see, this example uses the `Containers` helper class which can find a container in a Deployment by its name.

### Change the image tag

Sometimes you might want to modify the image tag of an image. For example, you might want to make sure all of your services in the application are deployed from the same image tag that comes out of your CI build process.

<pre class="prettyprint">
var containers = new Containers($.spec.template.spec.containers)
var web_container = containers.by_name("web")
var containerImage = new DockerImage(web_container.image)
containerImage.tag = "1.2"
web_container.image = containerImage.address()
</pre>

Here we are using the `DockerImage` helper to read and parse container Docker image names.

### Add a deployment to a new namespace

In this example, we are going to add a new resource to the output that was not part of the input. Here is an example of the input:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: foos
```

<pre class="prettyprint">
var namespace = $.metadata.name
deployment = {
    apiVersion: "extensions/v1beta1",
    kind: "Deployment",
    metadata: [
        { namespace: namespace },
        { name: "web" }
    ],
    spec:
        { template:
            { spec:
                { containers: [{ "image": "app_image:latest", "name": "my-pod" }] }
            }
        }
    }

$$.push(deployment)
</pre>

This modifier reads the name of the namespace and adds a new deployment to the output that was not there before. In other words, instead of modifying the object that's being processed, it adds a sibling node to the parent of that object. To access the parent for `$` we can use `$$`.

These are just some simple examples of what you can do with Alterant. You can read about the [helper functions](/alterant/helpers.html), [extending Alterant](/alterant/extending-alterant.html) and the [Alterant CLI](/alterant/alterant-cli.html).
