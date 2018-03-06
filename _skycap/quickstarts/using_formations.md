---
layout: post
title: Getting started Skycap Formations
categories: quickstarts
legacy: false
tags: ["getting started", "formations"]
lead: Using Skycap to deploy your applications to any Kubernetes cluster
permalink: /:collection/:path
---

<p class="lead">
    Formations are used for create, manage and deploy Kubernetes configuration files to any Kubernetes cluster.
</p>

<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you start, please check you have the following:</p>

<ul>
	<li>
		<p><strong>A Stack setup with Skycap</strong> &mdash; You can find out about <a href="/skycap/quickstarts/getting_started.html">setting up a Skycap stack here</a>.</p>
		<div class="notice">
			<p>
				In this guide we are using a <a href="https://github.com/cloud66-samples/pilot-db/tree/dev">simple project you can find on Github</a>.
			</p>
		</div>
    </li>
    <li>
        <p>
        	<strong>A Working Kubernetes Cluster</strong> &mdash; You can use <a href="/maestro/quickstarts/getting_started.html">Cloud 66 Maestro</a> to create a cluster or use any of cloud provider services like <a href="https://cloud.google.com/kubernetes-engine/">Google GKE</a>, <a href="https://aws.amazon.com/fargate/">AWS Fargate</a> or <a href="https://azure.microsoft.com/en-us/services/container-service/">Microsoft Azure AKS</a>, or <a href="https://kubernetes.io/docs/getting-started-guides/scratch/">setup it up yourself</a>.
        </p>
        <p>
        	For this example we are going to use <a href="https://github.com/kubernetes/minikube">Minikube</a>
        </p>
    </li>
    <li>
    	<p><strong>A <code>kubectl</code> client</strong> &mdash; on your development machine or a server that is configured to communicate with your Kubernetes cluster.</p>
    </li>
    <li>
    	<p><strong>Basic familiarity</strong> &mdash; with Kuberentes configuration files.</p>
    </li>
</ul>

<h2>Basics</h2>

<p>Before getting started, let's get ourselves familiar with 3 main concepts of Skycap Formations: <strong>Formations</strong>, <strong>Stencils</strong> and <strong>Formations</strong>:</p>

<h3>Formation</h3>
<p>
	Formation is a "deployment destination" for your application. This could be a dedicated Kubernetes cluster or a shared one. A Formation acts as a way to put together a collection of Kubernetes configuration templates or <strong>Stencils</strong>.
</p>

<h3>Stencils</h3>
<p>
	A Stencil is a Kubernetes configuration template. It can contain one or many Kubernetes configuration items like <code>Services</code>, <code>Deployments</code>, <code>ConfigMaps</code> or others.
</p>
<p>
	Stencils are technically configuration templates. They can contain <strong>placeholders</strong> that are filled with the right values before they can be applied to the Kubernetes cluster. This is called <strong>Rendering</strong>.
</p>

<h3>Snapshots</h3>
<p>
	A Snapshot is the state of your application at a point in time. It includes all your applications imgaes and their unique tags, environment variables and configuration items that are defined in your Skycap stack. Snapshots act like a "time machine" for your code and configuration so you can deploy your application as it was back in a certain point in time or revert your Kubernetes configurations if you want.
</p>

<h2>Getting Started</h2>
<h3>Create your first Formation</h3>
<p>
	At the final step of setting up a Skycap stack, click on the Setup Deployment button and select Deploying using Formations.
</p>

<div class="notice">
	<h3>Private Beta Notice</h3>
	<p>If you can't see the selection form, you can contact Cloud 66 Support as Skycap Formation is currently a private beta feature. We will enable this feature for you.</p>
</div>

<img src="/assets/skycap/formation_step_1.gif"/>

<p>
	Now you can click on the New Formation button, enter a name for your Formation and select a few tags for it if you like. For now, <strong>leave the Base Template as Sample</strong>. We will get back to this later.
</p>

<img src="/assets/skycap/formation_step_2.gif"/>

<h3>Adding your first Stencil</h3>
<p>
	The first thing you notice when you create a new Formation is the different sections: If you have selected the <strong>Sample</strong> base template, these will be <strong>Services</strong>, <strong>Config</strong> and <strong>Custom</strong>. These are arbitrary groupings of your configuration files and we will how we can change them.
</p>
<p>
	A very good practice on configuring Kubernetes clusters is to put everything in configuration files (instead of applying them directly via the command line). For example to create a new <strong>namespace</strong>, you can use a configuration file like this:

<pre class="prettyprint">
apiVersion: v1
kind: Namespace
metadata:
  name: foo
</pre>
</p>

<p>
	A <code>namespace</code> is usually the first thing configured for a new Formation. To create yours, click on the <strong>+</strong> button to add a new item to the <strong>Config</strong> section of your Formation.
</p>

<img src="/assets/skycap/formation_step_3.gif"/>

<div class="notice">
	<p>This section assumes you are familiar with Kubernetes configuration files at a basic level.</p>
</div>

<p>
	This creates a Stencil for a namespace configuration file for you. Let's look at it in a bit more detail:
</p>

<pre class="prettyprint">
# this sets up the cluster with namepsace etc
# should be the first yaml to run
apiVersion: v1
kind: Namespace
metadata:
  name: ${formation}
  annotations:
    cloud66.com/snapshot-uid: ${snapshot("uid")}
    cloud66.com/snapshot-gitref: ${snapshot("gitref")}
---
apiVersion: v1
kind: Secret
metadata:
  namespace: ${formation}
  name: cloud66-registry-pull-secret
  annotations:
    cloud66.com/snapshot-uid: ${snapshot("uid")}
    cloud66.com/snapshot-gitref: ${snapshot("gitref")}
data:
  .dockerconfigjson: ${registry_credentials()}
type: kubernetes.io/dockerconfigjson
</pre>

<p>
	As you can see, the default <code>setup.yml</code> Stencil for the <strong>Sample</strong> base template has 2 sections: the first one setup the namespace, and the second one adds the credentials for a docker repository to the namespace.
</p>

<p>
	You notice the <code>${formation}</code> which is a simple way to replace some values into your configuration files at the time it "renders". For example, <code>${formation}</code> gets replaced with a Kubernetes friendly version of your Formation's name, so for example, if your Formation is called "My Sample Formation", the value of <code>${formation}</code> will be <code>my-sample-formation</code> when it renders (we will get to how to render the Stencils later).
</p>

<p>
	Looking at the <code>setup.yml</code> Stencil again, you can tell that the <code>${function(arguments)}</code> syntax is used in several places. For example you might be able to guess that <code>${snapshot("uid")}</code> will be replaced by the unique identifier of the Snapshot used to render this Stencil and <code>${registry_credentials()}</code> will be replaced with docker registry credentials.
</p>

<div class="notice">
	<p>You can see a full list of all Stencil functions <a href="/skycap/stencil-functions">here</a>.</p>
</div>

<p>
	Now that we are a bit more familiar with the Stencils, let's save our <code>setup.yml</code> without making any changes and add the next Stencil.
</p>

<img src="/assets/skycap/formation_step_4.gif"/>

<h3>Adding a configuration file for your service</h3>

<p>
	Let's assume your application has 1 service, called Pilot. Pilot is a web service which serves traffic on port 8080. Here we are going to generate the Kubernetes configuration files we need to deploy and run Pilot as a service on our cluster.
</p>

<div class="notice">
	<p>
		The source code for this example can be found on <a href="https://github.com/cloud66-samples/pilot-db/tree/dev">Github</a> for you to try.
		This example uses <a href="/legacy_docker/references/build-grid.html">Skycap BuildGrid</a> to build the container image from the source and store it on your applications docker registry provided by Cloud 66.
	</p>
</div>

<p>
	A service running on Kubernetes consists of 2 parts: a <code>deployment</code> and a <code>service</code>. Our <strong>Sample</strong> base template has a Stencil for each one: click on the <strong>+</strong> button on the <strong>Service</strong> section and choose <strong>deploy.yml</strong> first. In the generated Stencil, you can see the are some placeholders called <code>${require(...)}</code>. This means you need to fill in this with your application's spepcifics, so let's do that for our Pilot project.
</p>

<p>
	Set <code>containerPort</code> to <code>8080</code> (this is the port Pilot container serves traffic on) and set <code>command</code> to <code>["/app/pilot", "--redis", "redis:6379"]</code> (Pilot uses Redis and takes the address for Redis as parameter).
</p>

<img src="/assets/skycap/formation_step_5.gif"/>

<h3>Adding Redis</h3>
<p>
	So far we're added a <code>setup.yml</code> to create a namespace and add our docker registry credentials to it. We've also created a <code>deploy.yml</code> to add a Kubernetes deployment so our container gets pulled from the registry and started.
</p>

<p>
	Our <strong>Sample</strong> base template has a simple Redis configuration file for Kubernetes. To add it to your cluster, click on the <strong>+</strong> button on the <strong>Custom</strong> section of your Formation Stencils and save the Stencil with a commit comment and no changes.
</p>

<img src="/assets/skycap/formation_step_6.gif"/>

<div class="notice notice-warning">
	<p>This sample Redis configuration is not configured for high availability or backed up and is only for testing purposes. You need to use a replicated Redis configuration with persistant storage for your production workloads.</p>
</div>

<h3>Adding a Service</h3>
<p>
	By now you should have a <code>setup.yml</code>, a <code>pilot_deploy.yml</code> and a <code>redis.yml</code> in your Formation Stencils. The last file is a <code>service.yml</code> which tells Kubernetes to redirect web traffic from the cluster to the Pilot pod we created in our <code>pilot_deploy.yml</code>.
</p>

<p>
	To add a service, click on the <strong>+</strong> button of the <strong>Service</strong> section of the Formation Stencils. You will need to make a few changes to make it work for you application. For the Pilot example, this is limited to the port numbers.
</p>

<p>
	Make the following changes: change <code>port</code> to <code>8080</code> and <code>targetPort</code> to <code>8080</code>. This tells Kubernetes that our service container is serving on port 8080 (remember the <code>containerPort</code> setting of the <code>pilot_deploy.yml</code>) and that we are going to expose this to the outside on the same port.
</p>

<img src="/assets/skycap/formation_step_7.gif"/>

<h2>Deploying it all to your cluster</h2>
<p>
	We now have all the configuration files we need to deploy our sample application to our Kubernetes cluster. All that's left is to render the files and apply them to Kubernetes.
</p>

<h3>Rendering</h3>
<p>
	Rendering of Stencils happens automatically when you download them from Skycap. To see the rendered versions of each Stencil head to <strong>Build and Deploy</strong> section of your application (on the right hand side menu).
</p>

<p>
	Here you can select your Formation from the <strong>Formations</strong> dropdown on the latest Snapshot of your application. On the next screen select <strong>HEAD</strong> (this the gitref of your Stencils repository. We will explain this later in detail). Now you should be able to see all your Stencils rendered and fully usable for a Kubernetes cluster.
</p>

<img src="/assets/skycap/formation_step_8.gif"/>

<p>
	One way to apply your rendered Stencils to the cluster is by downloading them as a single file, untarring them and using <code>kubectl apply -f FILE</code> from your local machine. A simpler way is to use <a href="/skycap/quickstarts/using-cloud66-toolbelt.html">Cloud 66 Toolbelt (cx)</a>. Simply click on the cx command suggested on the top of the page and use it to pipe the Stencils directly to your cluster with a <code>| kubectl apply -f -</code> at the end.
</p>

<pre class="terminal">
$ cx snapshots render --stack 'ACME App' --snapshot 'sn-xopis-vakad-midin-gigal-zutat-ralod-lihys-nyduz-fexux' --formation 'fm-f1653a9f5e0d873dc21b190bc85f7401' | kubectl apply -f -
</pre>

<p>
	<code>cx snapshots render</code> command pulls the rendered versions of your Stencils from your Formation and concatenates them so they can be piped into your cluster using <code>kubectl</code>.
</p>

<img src="/assets/skycap/formation_step_9.gif"/>

<p>
	Congratulations! You just deployed your first Formation to a Kubernetes cluster.
</p>

<h2>What's next?</h2>
<p>
	Formations are an extremely powerful tool to manage the flow of configuration files into Kubernetes. Here are some of their features:
	<ul>
		<li>Git backed version controll for Stencils</li>
		<li>Fine grained access control and permissions for each Formation and every Stencil for your team members</li>
		<li>Ability to setup private base templates for your team</li>
		<li>Powerful and very simple Stencil placeholders syntax</li>
		<li>Bulk import of your environment variables and secrets into Stencils</li>
	</ul>
</p>
