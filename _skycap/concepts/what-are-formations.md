---
layout: post
template: one-col
title: What are Formations?
categories: concepts
lead: ""
legacy: false
tags: ["getting-started"]
permalink: /:collection/:path
---

<h2>Overview</h2>
<p>
	Kubernetes provide amazing flexibilty to developers and operators. By consolidating all communication through a single API it encourages developing code to build, configure and maintain infrastructure. This brings great benefits but also some challenges. As code and configuration live side by side, there is a need for managing the growing complexity of configuration files, controlling access to them and reusability of them. Skycap Formations are the best way to generate, maintain and reuse Kuberentes configuration files for your applications.
</p>

<h2>Basics</h2>
<h3>What is a Formation?</h3>
<p>
	Formation are like "deployment destinations" for your application. Each application can have multiple deployment destinations. These destinations can be different Kubernetes clusters or different namespaces on the same cluster. Each Formation is a collection of multiple Stencils. While you can put all of your Kuberentes configuration files into a single Stencil, using multiple Stencils per Formation helps with grouping and managing them as they grow in complexity.
</p>

<p>
	Stencils are version controlled configuration templates for Kubernetes. They are used in together with <a href="/skycap/quickstarts/using_formations.html">Formations</a> to provide a secure, easy to use and flexible way of generating Kubernetes configuration files based on your application requirements.
</p>

<img src="/assets/skycap/formation_schematic.png" width="600px">

<p>
	A micro-services based application is made up of one or more services. Each service is run and managed by Kubernetes as <code>Deployments</code> and / or <code>Services</code>. To deploy these to Kubernetes you need to generate Kubernetes configuration files for <code>Namespace</code>, <code>Deployment</code>, <code>Service</code>, <code>ConfigMap</code> or <code>Secrets</code> and possibly more.
</p>

<p>
	In most applications a repeating set of configuration sections are applied to many different services. For example, many services in your application need to share the same environment variables or secrets (like database access details) or have the same data files mounted at the same location.
</p>


<h3>What is a Stencil?</h3>
<p>
	As your application evolves, so does the configuration files that are required to run it on the infrastructure: new components like Redis or Memcahced might be added and old ones are removed, application configuration and secrets change and new services are added to the growing list of micro-services. This means you need to keep your configuration files not only flexible and managable, but also version controlled.
</p>

<p>
	Storing your configuration files in your source code, next to the rest of the code is one option. But what if your application is not store in a single git repository (mono-repo) and is developed and controlled by different teams? How do you ensure configuration changes that are required by developers of a certain service are in lock-step with the code? Also with secrets being stored in Kubernetes configuration files, how do you manage access to secrets to your team?
</p>

<h4>Template without control flow</h4>
<p>
	This is when Stencils come in. Stencils are templates for Kubernetes configuration files. They support a light-weight templating language that is very easy to use while they deliberately lack full scale control flows like programming languages or templating / scripting markup. Lack of control flows like <code>if then else</code> or <code>for loop</code> encourages more understandable and maintainable configuration files.
</p>

<h3>Access Control</h3>
<p>
	Formations and Stencils provide fine-grained access control lists (ACLs) based on users or teams in your organization. For example, it is possible to grant a developer the edit rights to a Stencil so they can add / edit their service details but deny them access to the full "rendered" version of the Stencil which might contain production database access credentials. In this case the developer can refer to the database using placeholders while the actual access credentials are not available to them.
</p>

<h3>What is a Snapshot?</h3>
<p>
	You can have 2 types of services in Skycap: services that are built from your own code and services you add to the application using pre-build Docker images (for example from your CI/CD tool). For services built from your own code, Skycap pulls your code and your Dockerfile from your git repository and builds them using <a href="/buildgrid">BuildGrid</a>. The result of this build process, is then stored in a private Docker image registry that's provided with each Skycap application. This happens everytime you click on "Snapshot" button on your Cloud 66 Skycap dashboard (or using the CLI/API tools).
</p>
<p>
	For services using a pre-built image, Snapshot pulls your image, retags it and pushes it to your private Docker image registry. This tag is the same across all services, built by BuildGrid or pre-built to ensure consistency across the entire application. This also prevents issues when using the <code>latest</code> tag on your Docker images. If a <code>latest</code> tag is used in your service definition, a retagging will "freeze" that version at the time the snapshot is taken.
</p>

<img src="/assets/skycap/retagging.png" width="600px">
