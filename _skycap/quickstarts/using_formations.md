---
layout: post
title: Getting started with Skycap Formations
categories: quickstarts
legacy: false
tags: ["getting started", "formations"]
lead: Using Skycap to deploy your applications to any Kubernetes cluster
permalink: /:collection/:path
---

Formations are used for create, manage and deploy Kubernetes configuration files to any Kubernetes cluster.

<h2 id="What-youll-need">What you’ll need</h2>

Before you start, please check you have the following:

* **An application set up with Skycap** &mdash; You can find out about [setting up an application](/skycap/quickstarts/getting_started.html) with Skycap.

>
In this guide we are using a [simple project](https://github.com/cloud66-samples/pilot) we've supplied on Github. It's important to use this project in your Skycap set up so that the steps below correspond to the application.

* **A Working Kubernetes Cluster** &mdash; You can use [Cloud 66 Maestro](/maestro/quickstarts/getting_started.html) to create a cluster or use a cloud provider service like [Google GKE](https://cloud.google.com/kubernetes-engine), [AWS Fargate](https://aws.amazon.com/fargate) or [Microsoft Azure AKS](https://azure.microsoft.com/en-us/services/container-service), or [set it up yourself](https://kubernetes.io/docs/getting-started-guides/scratch).
For this example we are going to use [Minikube](https://github.com/kubernetes/minikube)
        
* **A `kubectl` client** on your development machine or a server that is configured to communicate with your Kubernetes cluster.

* **Basic familiarity** with Kuberentes configuration files.
    
<h2>The basics</h2>

Before getting started, let's get ourselves familiar with 3 main concepts of the Skycap CDP: **Formations**, **Stencils** and **Snapshots**:

<h3>Formation</h3>

Formation is a "deployment destination" for your application. This could be a dedicated Kubernetes cluster or a shared one. A Formation allows you to manage the collection of Kubernetes configuration templates or **Stencils** that define an application and its environment.


<h3>Stencils</h3>

A Stencil is a Kubernetes configuration template. It can contain one or many Kubernetes configuration items like `Services`, `Deployments`, `ConfigMaps` or others.

Stencils can contain dynamic **placeholders** that are populated with the right values before they are applied to a Kubernetes cluster. This is called **Rendering** and it allows you to more easily re-use common templates without having to manually change variables for different configurations or environments.

<h3>Snapshots</h3>

A Snapshot is the state of your application at a point in time. It includes all your application's images and their unique tags as well as its environment variables and configuration items as defined (by you) in Skycap. 

All of these components (including all configurations) are then stored in a private repository on your Cloud 66 account so that you can roll back to a particular application state easily at any time.

<h2>Getting Started</h2>

<h3>Create your first Formation</h3>

At the final step of [setting up an application](/skycap/quickstarts/getting_started.html) on Skycap, click the *Setup Deployment* button and select *Deploy with Formations*.

<img src="/assets/skycap/formation_step_1.gif"/>

Because your account doesn't have base template repository yet, you will need be prompted to add one now. We have supplied a set of [sample templates](https://github.com/cloud66/skycap-stencils/) on GitHub that you can use in this tutorial. 

<img alt="Template repo setup process" src="/assets/skycap/template_repo_ani.gif"/>


<h4>Private Beta Notice</h4>

>If you can't see the selection form, you can contact Cloud 66 Support as Skycap Formation is currently a private beta feature. We will enable this feature for you.

Once your the template repo has been added, click on the *New Formation* button. Enter a name for your Formation and add a few tags to it (these help to identify components later on). Your Formation will automatically use the repo you connected in the previous step. (We will get back to this later.)

<img src="/assets/skycap/formation_step_2.gif"/>

<h3>Adding your first Stencil</h3>

The first thing you notice when you create a new Formation is the different sections: If you have selected the **Sample** base template, these will be **Services**, **Config** and **Custom**. These are arbitrary groupings of your configuration files and we will how we can change them.

A very good practice when configuring Kubernetes clusters is to put everything in configuration files (instead of applying them directly via the command line). For example to create a new **namespace**, you can use a configuration file like this:

<pre class="prettyprint">
apiVersion: v1
kind: Namespace
metadata:
  name: foo
</pre>


A <code>namespace</code> is usually the first thing configured for a new Formation. To create yours, click on the **+** button to add a new item to the **Config** section of your Formation.


<img src="/assets/skycap/formation_step_3.gif"/>

> This section assumes you are familiar with Kubernetes configuration files at a basic level.

This creates a Stencil for a namespace configuration file for you. Let's look at it in a bit more detail:


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


As you can see, the default <code>setup.yml</code> Stencil for the **Sample** base template has 2 sections: the first one setup the namespace, and the second one adds the credentials for a docker repository to the namespace.


You notice the `${formation}` which is a simple way to replace some values into your configuration files at the time it "renders". For example, `${formation}` gets replaced with a Kubernetes friendly version of your Formation's name, so for example, if your Formation is called "My Sample Formation", the value of <code>${formation}</code> will be <code>my-sample-formation</code> when it renders (we will get to how to render the Stencils later).

Looking at the <code>setup.yml</code> Stencil again, you can tell that the <code>${function(arguments)}</code> syntax is used in several places. For example you might be able to guess that <code>${snapshot("uid")}</code> will be replaced by the unique identifier of the Snapshot used to render this Stencil and <code>${registry_credentials()}</code> will be replaced with docker registry credentials.

> You can see a full list of all Stencil functions [here](/skycap/references/stencil_placeholders.html).

Now that we are a bit more familiar with the Stencils, let's save our <code>setup.yml</code> without making any changes and add the next Stencil.

<img src="/assets/skycap/formation_step_4.gif"/>

<h3>Adding a configuration file for your service</h3>

Let's assume your application has 1 service, called Pilot. Pilot is a web service which serves traffic on port 8080. Here we are going to generate the Kubernetes configuration files we need to deploy and run Pilot as a service on our cluster.


<div class="notice">The source code for this example can be found on [Github](https://github.com/cloud66-samples/pilot-db/tree/dev) for you to try.

This example uses Skycap [BuildGrid](/legacy_docker/references/build-grid.html) to build the container image from the source and store it on your applications docker registry provided by Cloud 66.</div>


A service running on Kubernetes consists of 2 parts: a <code>deployment</code> and a <code>service</code>. Our **Sample** base template has a Stencil for each one: click on the **+** button on the **Service** section and choose **deploy.yml** first. In the generated Stencil, you can see the are some placeholders called <code>${require(...)}</code>. This means you need to fill in this with your application's spepcifics, so let's do that for our Pilot project.



	Set <code>containerPort</code> to <code>8080</code> (this is the port Pilot container serves traffic on) and set <code>command</code> to <code>["/app/pilot", "--redis", "redis:6379"]</code> (Pilot uses Redis and takes the address for Redis as parameter).


<img src="/assets/skycap/formation_step_5.gif"/>

<h3>Adding Redis</h3>

	So far we're added a <code>setup.yml</code> to create a namespace and add our docker registry credentials to it. We've also created a <code>deploy.yml</code> to add a Kubernetes deployment so our container gets pulled from the registry and started.



	Our **Sample** base template has a simple Redis configuration file for Kubernetes. To add it to your cluster, click on the **+** button on the **Custom** section of your Formation Stencils and save the Stencil with a commit comment and no changes.


<img src="/assets/skycap/formation_step_6.gif"/>

<div class="notice notice-warning">
	This sample Redis configuration is not configured for high availability or backed up and is only for testing purposes. You need to use a replicated Redis configuration with persistant storage for your production workloads.
</div>

<h3>Adding a Service</h3>

	By now you should have a <code>setup.yml</code>, a <code>pilot_deploy.yml</code> and a <code>redis.yml</code> in your Formation Stencils. The last file is a <code>service.yml</code> which tells Kubernetes to redirect web traffic from the cluster to the Pilot pod we created in our <code>pilot_deploy.yml</code>.



	To add a service, click on the **+** button of the **Service** section of the Formation Stencils. You will need to make a few changes to make it work for you application. For the Pilot example, this is limited to the port numbers.



	Make the following changes: change <code>port</code> to <code>8080</code> and <code>targetPort</code> to <code>8080</code>. This tells Kubernetes that our service container is serving on port 8080 (remember the <code>containerPort</code> setting of the <code>pilot_deploy.yml</code>) and that we are going to expose this to the outside on the same port.


<img src="/assets/skycap/formation_step_7.gif"/>

<h2>Deploying it all to your cluster</h2>

	We now have all the configuration files we need to deploy our sample application to our Kubernetes cluster. All that's left is to render the files and apply them to Kubernetes.


<h3>Rendering</h3>

	Rendering of Stencils happens automatically when you download them from Skycap. To see the rendered versions of each Stencil head to **Build and Deploy** section of your application (on the right hand side menu).



	Here you can select your Formation from the **Formations** dropdown on the latest Snapshot of your application. On the next screen select **HEAD** (this the gitref of your Stencils repository. We will explain this later in detail). Now you should be able to see all your Stencils rendered and fully usable for a Kubernetes cluster.


<img src="/assets/skycap/formation_step_8.gif"/>


	One way to apply your rendered Stencils to the cluster is by downloading them as a single file, untarring them and using <code>kubectl apply -f FILE</code> from your local machine. A simpler way is to use (/skycap/quickstarts/using-cloud66-toolbelt.html">Cloud 66 Toolbelt (cx). Simply click on the cx command suggested on the top of the page and use it to pipe the Stencils directly to your cluster with a <code>| kubectl apply -f -</code> at the end.


<pre class="terminal">
$ cx snapshots render --stack 'ACME App' --snapshot 'sn-xopis-vakad-midin-gigal-zutat-ralod-lihys-nyduz-fexux' --formation 'fm-f1653a9f5e0d873dc21b190bc85f7401' | kubectl apply -f -
</pre>


	<code>cx snapshots render</code> command pulls the rendered versions of your Stencils from your Formation and concatenates them so they can be piped into your cluster using <code>kubectl</code>.


<img src="/assets/skycap/formation_step_9.gif"/>


	Congratulations! You just deployed your first Formation to a Kubernetes cluster.


<h2>What's next?</h2>

	Formations are an extremely powerful tool to manage the flow of configuration files into Kubernetes. Here are some of their features:
	
		*(/skycap/concepts/what-are-formations.html">Formations as an infrastucture time machine
		*Fine grained access control and permissions for each Formation and every Stencil for your team members
		*Ability to setup private (/skycap/concepts/what-are-formations.html">Base Templates for your team
		*Powerful and very simple (/skycap/references/stencil_placeholders.html">Stencil placeholders syntax
		*Bulk import of your environment variables and secrets into Stencils
	

