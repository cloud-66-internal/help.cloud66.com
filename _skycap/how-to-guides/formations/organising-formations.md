---
layout: post
template: one-col
title: Organising your Formations
categories: how-to-guides/formations
lead: ""
legacy: false
tags: ["getting-started"]
permalink: /:collection/:path
---

## Suggested Organization of Stencils

Most of the time, each Formation is a separate Kubernetes Namespace. As such the first Stencil to add to a Formation is usually the one that creates a new Namespace.

The public Base Template library has an example of the template which we used in the [Getting Started](/skycap/quickstarts/using_formations.html) guide. We usually place those Stencils in the **Config** section of the Stencils.

Once you have a Stencil to configure your Namespace and perhaps add basic credentials for your Docker repository, you can start adding the other Stencils needed to support your application's components such as databases, queues and middleware.

Lastly it's time for the most important part: your core application services. We recommend splitting each service into 2 Stencils: a **Deployment** and a **Service**. A Deployment creates a Kubernetes Deployment and a Service creates and configures a Kubernetes Service. 

Using naming conventions will help you identify your Stencils with ease later. We recommend using `SERVICENAME_deploy.yml` and `SERVICENAME_service.yml`. You can use `${service}` in the name for the Stencil to generate the right filename based on the service name.

In most cases your application will have other components that are not frequently configured or deployed like Ingress Controllers. We recommend placing those in your **Config** section.

If you want to use a Stencil inside other Stencil, you can create an **inline** Stencil. Inline Stencils are like normal Stencils and are identified with a `_` (underscore) at the beginning of their name. Inline Stencils are not rendered into the final configuration file as a separate file. We recommend placing each inline in the section it's used instead of having an **inline** section.
