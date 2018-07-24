---
layout: post
template: one-col
title: Formations, stencils and snapshots
categories: the-basics
lead: "Understand the terminology specific to Skycap"
legacy: false
tags: ["the basics","concepts", "terminology","explanation"]
permalink: /:collection/:path
---

<h2 id="overview">Overview</h2>

Kubernetes provides amazing flexibilty to developers and operators. By consolidating all communication through a single API it encourages developing code to build, configure and maintain infrastructure. This brings great benefits but also some challenges. 

As your application evolves, so do the configuration files that are required to run it on the infrastructure: new components like Redis or Memcached are added and old ones removed, application configurations and secrets change and the number of micro-services keeps growing. This means you need to keep your configuration files not only flexible and managable, but also version controlled.

Storing your configuration files in your source code, next to the rest of the code is one option. But what if your application is not store in a single git repository (mono-repo) and is developed and controlled by different teams? How do you ensure configuration changes that are required by developers of a certain service are in lock-step with the code? 

Also with secrets being stored in Kubernetes configuration files, how do you manage access to secrets to your team?

As code and configuration live side by side, there is a need for managing the growing complexity of configuration files, controlling access to them and reusability of them. Skycap Formations, Stencils and Snapshots are the best way to generate, maintain and reuse Kuberentes configuration files for your applications.

<h2 id="what-is-a-formation">What is a Formation?</h2>

Formations are like "deployment destinations" for your application. Each application can have multiple deployment destinations. These destinations can be different Kubernetes clusters or different namespaces on the same cluster. 

Each Formation is a collection of multiple Stencils. While you can put all of your Kuberentes configuration files into a single Stencil, using multiple Stencils per Formation helps with grouping and managing them as they grow in complexity.

<img src="/assets/skycap/formation_schematic.png" width="600px">

A micro-services based application is made up of one or more services. These services are run and managed by Kubernetes as <code>Deployments</code> and / or <code>Services</code>. To deploy these to Kubernetes you need to generate Kubernetes configuration files for <code>Namespace</code>, <code>Deployment</code>, <code>Service</code>, <code>ConfigMap</code> or <code>Secrets</code> and possibly more.

In most applications a repeating set of configuration sections are applied to many different services. For example, many services in your application need to share the same environment variables or secrets (like database access details) or have the same data files mounted at the same location.

<h2 id="what-is-a-stencil">What is a Stencil?</h2>

Stencils are version controlled configuration templates for Kubernetes. They are used together with Formations to provide a secure, easy and flexible way to generating Kubernetes configuration files based on your application requirements.

Stencils support a light-weight templating language that is very easy to use while deliberately lacking full scale control flows like programming languages or templating / scripting markup.

Lack of control flows like <code>if then else</code> or <code>for loop</code> encourages more understandable and maintainable configuration files.

<h2 id="what-is-a-snapshot">What is a Snapshot?</h2>

A Snapshot is the state of your application at a point in time. It includes all your applications images and their unique tags, environment variables and configuration items that are defined in your Skycap stack. 

<img src="/assets/skycap/retagging.png" width="600px">

All of these components are then stored in a private repository on your Cloud 66 account so that you can roll back easily at any time.

Snapshots act like a "time machine" for your code and configuration so you can redeploy your entire application as it was at any point in time or quickly revert your Kubernetes configurations if you need to.

This also prevents issues when using the <code>latest</code> tag on your Docker images. If a <code>latest</code> tag is used in your service definition, a retagging will "freeze" that version at the time the snapshot is taken.

**An infrastructure time machine**

While Snapshots provide a way to "freeze" your code and other application components in time, they also make it possible to re-apply old code to new configuration. This is particularly useful in the following scenarios:

* Rolling out old code a "playground" cluster for diagnostics.
* Redeploying the same code with different versions of configuration for optimization purposes.
* Rolling back configuration changes without redeploying the code.
* Deploying the production version to a local cluster (like minikube) for debugging

These are possible when code, configuration and all other parameters like environment variables are stored with Snapshots. 

<h2 id="what-is-rendering">What is Rendering?</h2>

Rendering is the act of merging Stencils with a Snapshot and generating the resulting configuration files. Stencils of a Formation are rendered automatically when they are downloaded via the Cloud 66 UI or the Toolbelt CLI.

<img src="/assets/skycap/rendering.png" width="200px"/>


<h2 id="what-is-a-base-template">What is a Base Template?</h2>

Base Templates are a set of Stencils that can be used as the base for any new Formation. They contain the Stencils and their grouping. 

For example you might choose to create a Base Template for your team so they can deploy the most commonly used components of your infrastructure to your Kubernetes cluster provider (for example AWS Fargate or Google GKE). 

Base Templates can also group Stencils into arbitrary functional groups like Services and Configurations or Application, Databases, Storage, etc.

Your Base Templates are stored in a git repository and are editing by your team or Cloud 66.

We provide a [public library](https://github.com/cloud66/stencils/tree/production) of Base Template Stencils on Github for you to use and possibly contribute for others to benefit from. 

<h2 id="why-use-formations-and-stencils">Why use Formations and Stencils?</h2>

<h3 id="traceability">Traceability</h3>

Using Kubernetes gives us the flexibility of using different deployment strategies like Progressive releases, Canary releases and Blue/Green deployments. 

This increases the number of deployments in flight at any point in time and as a result the complexity of managing the fleet of services and deployments grows quite quickly. 

Automatic and deterministic annotation of all components (deployments, services, load balancers, storage etc.) with clear and convention-based labels helps with traceability of traffic and workflow across the entire cluster.

Stencils make annotation simple and consistent when used with Snapshots.

<h3 id="reusability">Reusability</h3>

One of the benefits of enforcing use of an API to build, deploy and manage infrastructure (with tools like Kubernetes) is the ability to quickly roll out multiple instances of an entire application stack, each for a different purpose.

This could be based on the application environment (QA, Staging, Production), geography (customer proximity), high availability (multi-vendor, hybrid) or other reasons. 

The other side of this ability is the challenges of managing configuration across all the different deployments (Formations in Skycap language).

Stencils support reuse of configuration sections (inlines). Moreover, Formations can be generated using Base Templates that are made available by operators to the users of the cluster based on best practices and compliance policies.


<h2 id="whats-next">What's next?</h2>

* Fine grained access control and permissions for each Formation and every Stencil for your team members
* Powerful and very simple [Stencil placeholders syntax](/skycap/references/stencil_placeholders.html)
* Bulk import of your environment variables and secrets into Stencils
