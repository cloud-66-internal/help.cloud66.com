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

<h2>Suggested Organization of Stencils</h2>

Most of the time, each Formation is a separate Kubernetes Namespace. As such the first Stencil to add to a Formation is usually the one that creates a new Namespace.

The public Base Template library has an example of the template which we used in the <a href="/skycap/quickstarts/using_formations.html">Getting Started document</a>. We usually place those Stencils in the <strong>Config</strong> section of the Stencils.

<p>
Once you have a Stencil to configure your Namespace and perhaps add basic credentials for the Docker repository to your cluster or basic peristent storage classes, you can start adding the needed Stencils for your application support components such as databases, queue and middleware.
</p>

<p>
	Lastly it's time for the most important part: your application services. We recommend splitting each service into 2 Stencils: a Deployment and a Service (if needed). A Deployment would create a Kubernetes Deployment and a Service will create and configure a Kubernetes Service. Using naming conventions would help you identify your Stencils with ease later: We recommend using <code>SERVICENAME_deploy.yml</code> and <code>SERVICENAME_service.yml</code>. You can use <code>${service}</code> in the name for the Stencil to generate the right filename based on the service name.
</p>

<p>
	In most cases your application has other components that are not frequently configured or deployed like Ingress Controllers. We recommend placing those in your <strong>Config</strong> section.
</p>

<p>
	If you want to use a Stencil inside other Stencil, you can create an <strong>inline</strong> Stencil. Inline Stencils are like normal Stencils and are identified with a <code>_</code> (underscore) at the beginning of their name. Inline Stencils are not rendered into the final configuration file as a separate file. We recommend placing each inline in the section it's used instead of having an <strong>inline</strong> section.
</p>