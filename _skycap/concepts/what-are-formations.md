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
	You can have 2 types of services in Skycap: services that are built from your own code and services you add to the application using pre-build Docker images (for example from your CI/CD tool). For services built from your own code, Skycap pulls your code and your Dockerfile from your git repository and builds them using <a href="/legacy_docker/references/build-grid.html">BuildGrid</a>. The result of this build process, is then stored in a private Docker image registry that's provided with each Skycap application. This happens everytime you click on "Snapshot" button on your Cloud 66 Skycap dashboard (or using the CLI/API tools).
</p>
<p>
	For services using a pre-built image, Snapshot pulls your image, retags it and pushes it to your private Docker image registry. This tag is the same across all services, built by BuildGrid or pre-built to ensure consistency across the entire application. This also prevents issues when using the <code>latest</code> tag on your Docker images. If a <code>latest</code> tag is used in your service definition, a retagging will "freeze" that version at the time the snapshot is taken.
</p>

<img src="/assets/skycap/retagging.png" width="600px">

<h4>An infrastructure time machine</h4>
<p>
	While Snapshots provide a way to "freeze" your code and other application components in time, they also make it possible to re-apply old code to new configuration. This is particularly useful in the following scenarios:
	<ul>
		<li>Rolling out old code a "playground" cluster for diagnostics.</li>
		<li>Redeploying the same code with different versions of configuration for optimization purposes.</li>
		<li>Rolling back configuration changes without redeploying the code.</li>
		<li>Deploying the production version to a local cluster (like minikube) for debugging</li>
	</ul>
</p>
<p>
	These are possible when code, configuration and all other parameters like environment variables are stored with Snapshots. Although it is possible to store configration values like secrets and environment variables inside of Kubernetes configuration files, managing the complexity and security of running different environments and deployment becomes a major challenge very quickly.
</p>

<h3>Base Templates</h3>
<p>
	Base Templates are a set of Stencils that can be used as the base for any new Formation. They contain the Stencils and their grouping. For example you might choose to create a Base Template for your team so they can deploy the most commonly used components of your infrastructure to your used flavour of Kubernetes cluster (like AWS Fargate or Google GKE for example). We also provide a <a href="https://github.com/cloud66/stencils/tree/production">public Base Template library of Stencils on Github</a> for you to use and possibly contribute for others to benefit from. Base Template can group Stencils into arbitary of functional groups like Services and Configurations or Application, Databases, Storage, etc.
</p>
<p>
	Base Templates are stored in a git repository and are editing by your team or Cloud 66.
</p>

<p>
	Following reusability of Stencils, operators or developers can generate base Stencil templates (Base Templates) and make them available to the rest of the team.
	<br/>These Stencils are usable by anyone with the appropriate permissions and can be enforced by the operators of the cluster to ensure good governance of the infrastructure.
</p>
<div class="notice">
	<p>
		At this moment, only public Base Template repositories are supported. Support for using your own private Base Template repositories will be added soon.
	</p>
</div>

<h3>Traceability</h3>
<p>
	Using Kubernetes gives us the flexibility of using different deployment strategies like Progressive releases, Canary releases and Blue/Green deployments. This increases the number of deployments in flight at any point in time and as a result the complexity of managing the fleet of services and deployments becomes much more. Automatic and deterministic annotation of all components (deployments, services, load balancers, storage,...) with clear and convention-based labels helps with traceability of traffic and workflow across the entire cluster.
</p>

<p>
	Stencils make annotation simple and consistent when used with Snapshots.
</p>

<h3>Reusability</h3>
<p>
	One of the benefits of enforcing use of an API to build, deploy and manage infrastructure (with tools like Kubernetes) is the ability of bring entire application stacks up many times and fore different purposes. This could be based on the application environment (QA, Staging, Production), geography (customer proximity), high availability (multi-vendor, hybrid) or other reaosns. The other side of this ability is the challenges of managing configuration across all the different deployments (Formations in Skycap language).
</p>

<p>
	Stencils support reuse of configuration sections (inlines). Moreover, Formations can be generated using Base Templates that are made available by operators to the users of the cluster based on best practices and compliance policies.
</p>


<h2>Application services and Formations Stencils</h2>
<p>
	If you have <a href="/skycap/quickstarts/getting_started.html">used Skycap before</a>, you know how to add your application's services via <code>service.yml</code> or the UI from your git repository or pre-built images.
</p>

<p>
	Here we are using the example used in the <a href="/skycap/quickstarts/using_formations.html">Getting Started</a> document to show some best practices around Stencils.
</p>
<p>
	Once you choose to deploy your application with Skycap Formations (instead of <a href="/maestro/">Cloud 66 Maestro</a>), you need to decide how to organize your Stencils in relation to your application's services. Ideally, your Base Template for Stencils have the right sections to help you with organizing your Stencils. The suggested <strong>Sample</strong> Base Template library used in the Getting Started document has 3 sections: <strong>Service</strong>, <strong>Config</strong> and <strong>Custom</strong>.
</p>

<h3>Suggested Organization of Stencils</h3>
<p>
	Most of the time, each Formation is a separate Kubernetes Namespace. As such the first Stencil to add to a Formation could be one that creates a new Namespace. The public Base Template library have an example of that which we used in the <a href="/skycap/quickstarts/using_formations.html">Getting Started document</a>. We usually place those Stencils in the <strong>Config</strong> section of the Stencils.
</p>

<p>
	Once you have a Stencil to configure your Namespace and perhaps add basic credentials for the Docker repository to your cluster or basic peristent storage classes, you can start adding the needed Stencils for your application support components: databases, queue middleware and the like. We usually place these in <strong>Custom</strong> section unless you have many of those in which case having a dedicated section for them makes more sense.
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

<h2>Rendering</h2>
<p>
	Rendering is the act of merging Stencils with a Snapshot and generating the resulting configuration files. Stencils of a Formation are rendered automatically when they are downloaded via the app UI or the Toolbelt CLI (cx). To download rendered configuration files of a Formation, select the name of the Formation from the Snapshot you would like to render it for. On the next page choose which gitref of the Stencils git repository you would like to use: if you want to use the latest version of the Stencils then choose <strong>HEAD</strong>, otherwise choose the appropriate gitref on the right.
</p>

<p>
	You can download one or more of the rendered Stencils. If more than one file is downloaded they will be tarballed before download or as a single yaml file.
	<br/>If you choose to download the rendered Stencils as a single file, they will be ordered so your <code>setup.yml</code> is always the first part of the file and gets applied before any other configuration.
</p>

<img src="/assets/skycap/rendering.png" width="200px"/>

<h2>What's next?</h2>
<p>
	<ul>
		<li>Fine grained access control and permissions for each Formation and every Stencil for your team members</li>
		<li>Powerful and very simple <a href="/skycap/references/stencil_placeholders">Stencil placeholders syntax</a></li>
		<li>Bulk import of your environment variables and secrets into Stencils</li>
	</ul>
</p>
