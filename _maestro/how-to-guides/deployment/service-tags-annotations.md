---
layout: post
template: one-col
title: Service Tags and Annotations
categories: how-to-guides/deployment
order: 10
lead: "How tags and annotations are propagated from Maestro to Kubernetes"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Service tags

Service Tags are arbitrary strings of text which you can add to your services. When a service is deployed, these tags are transformed into [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/){:target="_blank"}. 

Service Tags are added via the `tags` key in your service definition (`service.yml`). They are formatted as an array of strings that can have an optional key/value delimiter of `=` or `:`. Because they are propagated into Kubernetes, tags must follow the [Kubernetes requirements](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set){:target="_blank"} for label string formats. Cloud 66 will warn you if your tags do not conform to these requirements.

Example:

```yaml
service:
  service-name:
    ...
    tags:
    - "environment=production"
    - "customer:fred"
    - "highvisibility"
```

When you deploy the service defined above, the following labels will be added to your Kubernetes Workload Resources for this service (ie. Deployments, Daemonsets, Jobs and Pods):

```yaml
metadata:
  ...
  labels:
    ...
    environment: "production"
    customer: "fred"
    highvisibility: ""
```

Kubernetes expects a key/value pair for every label, so if one of your tags does not have a `=` or `:` delimiter we will create a label with an empty key value. You can see an example of this above with the `highvisibility` tag.

#### Note
<div class="notice"><p>Cloud 66 will add some additional labels automatically to ensure your selectors are configured correctly.</p></div>

## Service Annotations

Service Annotations are a collections of arbitrary key/value pairs. When a service is deployed, these collections are transformed into [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/){:target="_blank"}. 

Service Annotations are added via the `annotations` key in your service definition (`service.yml`). They are a hash of the key/value pairs. Because they are propagated into Kubernetes, annotations must follow the [Kubernetes requirements](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set){:target="_blank"} for annotation formats. Cloud 66 will warn you if your annotations do not conform.

Example:

```yaml
service:
  service-name:
    ...
    annotations:
      me.com/environment: "production"
      me.com/customer: "fred"
      visibility: "high"
```

When you deploy the service defined above, the following annotations will be added to your Kubernetes Workload Resources for this service (ie. Deployments, Daemonsets, Jobs and Pods):

```yaml
metadata:
  ...
  annotations:
    ...
    me.com/environment: "production"
    me.com/customer: "fred"
    visibility: "high"
```

#### Note
<div class="notice"><p>Cloud 66 will add some additional annotations automatically for internal use.</p></div>