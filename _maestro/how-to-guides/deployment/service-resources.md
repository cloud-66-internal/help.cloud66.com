---
layout: post
template: one-col
title:  "Setting limits for services"
categories: how-to-guides/deployment
order: 30
lead: Managing resource usage for your Docker services
tags: ['operations', 'service']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

In general Maestro services will consume resources and spawn containers as needed, but you may want to explicitly limit a particularly resource-hungry service, or ensure that a service is only assigned (scheduled) to a node with sufficient resources to handle its needs. You can also set a minimum or maximum number of containers a service may use.

Maestro supports three kinds of resource allocations:

- Limits
- Requests
- Number of containers

## Understanding resource management options

When setting resource parameters, it's vital to understand the differences between your options. 

- **Limits** act like a ceiling on the resource usage for any service. They tell your cluster that the service may only use a *maximum* of the specified resource.
- **Requests** act like a floor on the resources for a service. They tell your cluster "this service needs X" in order to run. Maestro uses these requests to decide how services should be distributed ("scheduled") on your physical nodes. For example a service which has a request of 4GB of RAM will never be scheduled to a node with only 1GB of RAM.
- **Number of containers** sets a hard limit on the number of containers your cluster will spawn for a service. This can be a minimum (e.g. "always spawn at least one container") or a maximum ("no more than 10") or a combination.

For more detailed information on Limits and Requests, please read the [in-depth Kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) on the subject.

## Limiting CPU and RAM usage

By default, Docker services will use as much CPU and memory as they require. You may wish to set a hard limit on memory, or the relative CPU shares used by a service. 

This can be accomplished in Maestro by adding the `constraints/resources` directive to your service's `service.yml`.

### CPU limits

CPU usage is measured in millicpu. One full CPU is 1000m, so 100m is equivalent to 10% of a CPU's capacity. In the context of limits, this is how much CPU capacity a service can consume, but the service may not need this capacity and will not reserve it.

If multiple services attempt to use a CPU and the aggregate demand is greater than 100%, Maestro will share the CPU on a proportional basis (e.g. giving larger shares to the services with higher limits).

### RAM limits

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-First" class="Tabs-content js_tab_content">

<p>Memory limits apply to RAM usage and SWAP usage. A valid entry is a positive number, followed by one of, "K", "M", or "G", with the minimum being "4M". (You can also use the power-of-two equivalents like Gi, Mi, Ki if you prefer.)</p>
</section>

<section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<p>Memory limits apply to RAM usage and SWAP usage. A valid entry is a positive number, followed by one of, "k", "m", or "g", with the minimum being "4m".</p>

</section>
</div>

### Example of limits

{% highlight yaml %}
services:
 your_service_name:
  constraints:
   resources:
    requests:
     memory: "100m"
     cpu: 500m
{% endhighlight %}


## Requesting CPU and RAM

To request resources for a service, you should add the `constraints/resources` directive to your service's `service.yml`.  If the aggregate resource requests of all of the services in an application exceed the capacity of the destination cluster, some services will not be distributed. Please read the [in-depth Kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) to understand the implications of this.

### CPU requests

CPU usage is measured in *millicpu*. One full CPU is 1000m, so 100m is equivalent to 10% of a CPU's capacity. In the context of **requests**, this is the minimum CPU capacity a service requires, but a service can use more resources than it has requested, as long as it is not also **limited**.

### RAM requests

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-First" class="Tabs-content js_tab_content">

<p>Memory requests set the minimum RAM required by a service. A valid entry is a positive number, followed by one of, "K", "M", or "G", with the minimum being "4M". (You can also use the power-of-two equivalents like Gi, Mi, Ki if you prefer.)</p>
</section>

<section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<p>Memory requests set the minimum RAM required by a service. A valid entry is a positive number, followed by one of, "k", "m", or "g", with the minimum being "4m".</p>

</section>
</div>


### Example of requests

{% highlight yaml %}
services:
 your_service_name:
  constraints:
   resources:
    requests:
     memory: "100m"
     cpu: 500m
{% endhighlight %}



## Combining limits and requests

You can set both requests and limits for a service. By definition **request** values must always be lower than **limit** values. 

```yaml
services:
 your_service_name:
  constraints:
   resources:
    requests:
     memory: "100m"
     cpu: 500m
    limits:
     memory: "500m"
     cpu: 1000m
```

The example above will ensure this service always has access to at least 10% of a CPU and 100MB of RAM, and will allow this service to use up to a full CPU and 500MB of RAM.

## Limiting the number of containers

You can limit the number of containers that a service may use. You can set both minimum and maximum limits for each service. For example:

```yaml
services:
    your_service_name:
        constraints:
            min_count: 2
            max_count: 7
```
This would ensure that the service would always have at least 2 containers, but that it would never have more than 7. 

