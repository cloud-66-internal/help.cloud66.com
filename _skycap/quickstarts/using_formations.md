---
layout: post
title: Getting started with Skycap Formations
order: 2
categories: quickstarts
legacy: false
tags: ["getting started", "formations"]
lead: Use Skycap to deploy your applications to any Kubernetes cluster
permalink: /:collection/:path:output_ext
---

Formations are used to create, manage and deploy Kubernetes configuration files to any Kubernetes cluster.

## What you’ll need

Before you start, please check you have the following:

* **An application set up with Skycap** &mdash; You can quickly set up an application with Skycap by following our [getting started guide](/skycap/quickstarts/getting_started.html).

<div class="notice"><p>
In this guide we are using a <a href="https://github.com/cloud66-samples/helloworld">simple project</a> that we've supplied on Github. It's a good idea to use this project in your initial Skycap set up so that the steps below correspond to your application.</p></div>

* **A Working Kubernetes Cluster** &mdash; You can use [Cloud 66 Maestro](/maestro/quickstarts/getting_started_with_clusters.html) to create a blank cluster or use a cloud provider service like [Google GKE](https://cloud.google.com/kubernetes-engine), [AWS Fargate](https://aws.amazon.com/fargate) or [Microsoft Azure AKS](https://azure.microsoft.com/en-us/services/container-service), or [set it up yourself](https://kubernetes.io/docs/getting-started-guides/scratch).
For this example we are going to use [Minikube](https://github.com/kubernetes/minikube)
        
* **A `kubectl` client** on your development machine or a server that is configured to communicate with your Kubernetes cluster.

* **Basic familiarity** with Kuberentes configuration files and commands.
    
## The basics

Before getting started, let's get ourselves familiar with 3 main concepts of the Skycap CDP: **Formations**, **Stencils** and **Snapshots**:

### Formation

A Formation is a "deployment destination" for your application. This could be a dedicated Kubernetes cluster or a shared one. A Formation allows you to manage the collection of Kubernetes configuration templates or **Stencils** that define an application and its environment.

<div class="notice"><p>You can find more detailed information about Formations <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-formation">here</a>.</p></div>

### Stencils

A good practice when configuring Kubernetes clusters is to put everything in configuration files rather than applying changes directly via the command line. 

Stencils are essentially dynamic Kubernetes configuration templates. They can contain one or many Kubernetes configuration items like `Services`, `Deployments`, `ConfigMaps` or others.

Stencils can contain dynamic **placeholders** that are populated with the right values before they are applied to a Kubernetes cluster. This is called **Rendering** and it allows you to more easily re-use common templates.

<div class="notice"><p>You can find more detailed information about Stencils <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil">here</a>.</p></div>

### Snapshots

A Snapshot is the state of your application at a point in time. It includes all your application's images and their unique tags as well as its environment variables and configuration items as defined (by you) in Skycap. 

All of these components (including all configurations) are then stored in a private repository on your Cloud 66 account so that you can roll back to a particular application state easily at any time.

<div class="notice"><p>You can find more detailed information about Snapshots <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-snapshot">here</a>.</p></div>

## Getting Started

### Create your first Formation

After the final step of [setting up your application](/skycap/quickstarts/getting_started.html) on Skycap, click the *New Formation* button and give your Formation a name. 

You can also add a few tags to it (these help to identify components later on). If you're using our sample project, calling your Formation "Hello World" is a good idea.

<img src="/assets/skycap/skycap-new-formations-1.gif"/>

### Add your first Stencil

<div class="notice notice-warning"><p>This section assumes you are familiar with Kubernetes configuration files at a basic level.</p></div>

Now that you have a Formation defined you can begin populating it with **Stencils**. 

To do this, click on the *Add Stencils* button in the **Getting Started with Formations** panel. 

A `namespace` is usually the first thing configured for a new Formation. To create yours, choose *setup.yml* from the menu that automatically opens on the next page.

<img src="/assets/skycap/skycap-formations-add-stencil.gif"/>

This creates a Stencil for a namespace configuration file for you. Let's look at it in a bit more detail:

<pre class="prettyprint">
apiVersion: v1
kind: Namespace
metadata:
  name: ${formation}
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
</pre>

As you can see, the default `setup.yml` Stencil (from our sample repository) sets up the minimum required scaffolding for deploying an application to Kubernetes - a namespace.

You've probably already noticed the dynamic stencil placeholder `${formation}`. Placeholder offer a simple way to replace some values in your configuration files at the time it "renders". 

For example,`${formation}` gets replaced with a Kubernetes friendly version of your Formation's name. So if your Formation is called "My Sample Formation", the value of `${formation}` will be `my-sample-formation` when it renders (we will get to how to render the Stencils later).

You can see a full list of all Stencil functions [here](/skycap/references/stencil_placeholders.html).

Now that we are a bit more familiar with the Stencils, let's save our `setup.yml` without making any changes. To do this, scroll down and add a "commit message". For now just use `initial`. Then click *Save changes*. (Commit messages are required every time you save any Stencil.)

### Adding configuration files for your service

In our example application we have a single service called Hello World. Hello World is a web service which serves traffic on port 8080. Here we are going to generate the Kubernetes configuration files we need to deploy and run Hello World as a service on our cluster.

(Reminder: The source code for this example can be found on [Github](https://github.com/cloud66-samples/helloworld).)

This example uses Skycap's integrated BuildGrid engine to build the container image from the source and store it on your app's own private Docker registry within Cloud 66.

A service running on Kubernetes consists of 2 parts: a `deployment` and a `service`. Our sample base template has a Stencil for each one. 

Click on the **+** button and choose **deployment.yml**. In the generated Stencil, you can see the are some placeholders called `${require(...)}`. You need to replace these with values that are specific to your application. Let's do that for our Hello World application now.

Set `containerPort` to `8080` (this is the port through which the Hello World container will serve traffic) and set `command` to `["/go/src/helloworld/helloworld"]` (Hellow World is written in Go and this command initialises that code).

<img src="/assets/skycap/formation_step_4_NEW.gif"/>

### Adding a Service

By now you should have a `setup.yml` and a `helloworld_deployment.yml` in your Formation Stencils. The last file is a `service.yml` which tells Kubernetes to redirect web traffic from the cluster to the Hello World pod we just defined in our `helloworld_deploy.yml`.

Click on the **+** button again but choose the `service.yml` template this time. You will need to make a few changes to the template to make it work for you application. In our Hello World example, this is limited to the port numbers.

Make the following changes: change `port` to `8080` and `targetPort` to `5000`. This tells Kubernetes that our service container is serving on port `8080` and that we are going to expose this to the outside using port `5000`

<img src="/assets/skycap/formation_step_5_NEW.gif"/>

## Deploying it all to your cluster

We now have all the configuration files we need to deploy our sample application to our Kubernetes cluster. All that's left is to render the files and apply them to Kubernetes.

### Rendering

Rendering of Stencils happens automatically when you download them from Skycap. 

The easiest way to start Rendering is to click on the *Render this Formation* button in the "Getting Started with Formations" panel. This will add a formation to the tool panel on the right-hand side of the screen.

<img src="/assets/skycap/formation_step_6_NEW.gif"/>

Now you should be able to see all your Stencils rendered and ready to be used on a Kubernetes cluster.

You can also find rendered formation files under *Snapshots*. Each time you build an application, the Formation files are Rendered as part of the process.

One way to apply your rendered Stencils to the cluster is by downloading them as a single file, untarring them and using `kubectl apply -f FILE` from your local machine. 

A simpler way is to use [Cloud 66 Toolbelt](/skycap/quickstarts/using-cloud66-toolbelt.html) (cx). Simply click on the "copy" icon next to the command at the top of the page and use it to pipe the Stencils directly to your cluster by appending `| kubectl apply -f -` to the end of the command.

The end result should look something like this:
<pre class="prettyprint">cx snapshots render --stack 'Hello World' --snapshot 'sn-xizeh-zamic-zycic-vakoh-sufes-gyrah-vipoz-kovuf-boxex' --formation 'fm-220346840f481e7c5576ebb80384daee' | kubectl apply -f -</pre> 
(Don't use this exact example command - the IDs of your own app will be completely different)

The `cx snapshots render` command pulls the rendered versions of your Stencils from your Formation and concatenates them so they can be piped into your cluster using `kubectl`. 

<div class="notice notice-warning"><p>If Minikube isn't running or has other issues, the cx command will fail. Make sure you have set it up properly using <a href="https://kubernetes.io/docs/setup/minikube/">this guide</a>.</p></div>

Next, run `kubectl get ns` to check that your new namespace is up and running. You can also use the `get` command to check that the pod and service are up and running.

Then, invoke the service using `minikube service` command, and a browser window should open confirming that the app is up and running.

<img src="/assets/skycap/formation_step_7_NEW.gif"/>

Congratulations! You just deployed your first Formation to a Kubernetes cluster.

## What's next?

Formations are an extremely powerful tool to manage the flow of configuration files into Kubernetes. Here are some of their features:
	
* [Formations](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-formation) as an infrastucture time machine
* Fine grained [access control and permissions](/skycap/tutorials/setting-up-access-control.html) for each Formation and every Stencil for your team members
* The ability to setup private [Base Templates](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-base-template) for your team
* The powerful [Stencil placeholders syntax](/skycap/references/stencil_placeholders.html)
* Bulk import of your [environment variables](/skycap/tutorials/setting-environment-variables.html) and secrets into Stencils
	

